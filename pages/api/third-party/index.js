const PASS_THROUGH_HEADERS = [
	// ... (rest of your PASS_THROUGH_HEADERS)
];

async function parseUrl(url) {
	try {
		return new URL(url);
	} catch (err) { }

	return null;
}

async function getResponse(maybeUrl) {
	if (!maybeUrl) {
		throw new Error("URL is not set");
	}

	const url = await parseUrl(decodeURIComponent(maybeUrl));

	const response = await fetch(url);

	if (response.status >= 400) {
		throw new Error("Invalid response status code");
	}

	const data = await response.text();
	const headers = {};

	PASS_THROUGH_HEADERS.forEach((headerName) => {
		const headerValue = response.headers.get(headerName);

		if (headerValue) {
			headers[headerName] = headerValue;
		}
	});

	return {
		data,
		status: response.status,
		headers,
	};
}

export default async function handler(req, res) {
	const originalUrl = new URL(req.url, "http://localhost");
	const forwardUrl = originalUrl.searchParams.get("forward");

	try {
		const response = await getResponse(forwardUrl);

		// Pass through headers and status code
		for (const [headerName, headerValue] of Object.entries(response.headers)) {
			res.setHeader(headerName, headerValue);
		}
		res.status(response.status).send(response.data);
	} catch (err) {
		res.status(404).send("Not found");
	}
}
