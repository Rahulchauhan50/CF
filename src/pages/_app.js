import React from "react";
import Head from "next/head";
import appData from "@data/app.json";
import '../styles/scss/style.scss';
import "../styles/globals.css";

import { register } from "swiper/element/bundle";
import Script from "next/script";
// register Swiper custom elements
register();

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <Head>
          {/* seo begin */}
          <title>{appData.settings.siteName}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="HandheldFriendly" content="true" />
          <meta name="author" content="bslthemes" />
          {/* seo end */}     
          <title>Top Video Content Creation & Production Services in Delhi NCR - Content Foundry</title>
             
      </Head>
      
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-PNP5TPNK');`}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
