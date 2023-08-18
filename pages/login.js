import { getProviders, signIn } from "next-auth/react";
function Login({ providers }) {
  return (
    <div>
      <img
        className="w-52 mb-5"
        src="https://1000logos.net/wp-content/uploads/2021/04/Spotify-logo.png"
        alt=""
      />
      {Object.values(providers).map((provider) => (
        <div>
          <button>Login with</button>
        </div>
      ))}
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
