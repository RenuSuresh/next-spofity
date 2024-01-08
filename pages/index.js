import Head from "next/head";
import { Partytown } from "@builder.io/partytown/react";
import { GTM_TAG_ASSISTANT_ACCESSOR, GTM_TAG_ASSISTANT_FORWARDER, partytownResolveUrl } from "@superside-oss/partytown-gtm";
import Sidebar from "../components/Sidebar";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Spotify</title>
        {/* 
        <Partytown
          debug
          forward={['dataLayer.push', GTM_TAG_ASSISTANT_FORWARDER]}
          mainWindowAccessors={[GTM_TAG_ASSISTANT_ACCESSOR]}
          resolveUrl={partytownResolveUrl}
        />
        <script
          id="gtm-script"
          type='text/partytown'
          dangerouslySetInnerHTML={{
            __html: `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-TX77S2F');
    `,
          }}
        /> */}

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
