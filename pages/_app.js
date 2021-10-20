import "../styles/globals.css";
import { NextSeo } from "next-seo";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  // if (typeof window === "undefined") return "";

  return (
    <>
      <Head>
        <title>Social Banner</title>
        <meta
          name="description"
          content="Generate headers/cover/background for your social media accounts using this website!"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@prashoonb" />
        <meta name="twitter:creator" content="@prashoonb" />
        <meta property="og:title" content="Social Banner" />
        <meta
          property="og:description"
          content="Generate headers/cover/background for your social media accounts using this website!"
        />
        <meta property="og:url" content="https://www.social-banner.live/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/social-media.png" />
        <meta property="og:image:alt" content="Social Banner" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:site_name" content="Social Banner" />
        <link rel="canonical" href="https://www.social-banner.live/" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
