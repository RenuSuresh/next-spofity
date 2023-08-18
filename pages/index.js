import Head from "next/head";
import { Partytown } from "@builder.io/partytown/react";
import Sidebar from "../components/Sidebar";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Spotify</title>
        <Partytown debug={true} forward={["dataLayer.push"]} />
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
