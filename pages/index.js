import Head from "next/head";
import { Partytown } from "@builder.io/partytown/react";
import Sidebar from "../components/Sidebar";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Spotify</title>
        import { Html, Head, Main, NextScript } from 'next/document'
import { Partytown } from '@builder.io/partytown/react';

export default function Document() {
  return (
    <Html lang="en">
      <Head >

        <Partytown
          debug={true}
          forward={['dataLayer.push']}
        />

        <script
          defer
          type='text/partytown'
          dangerouslySetInnerHTML={{
            __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5CMB6RLC');
      `,
          }}
        />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

      </Head>
      <div className="bg-black h-screen overflow-hidden">
        <main>
          <Sidebar />
          {/* center */}
        </main>
        <div>{/* player */}</div>
      </div>
    </Fragment>
  );
}
