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
      <NextSeo
        title="ChatCube"
        description="This is a 1:1 chatting app."
        canonical="https://www.chatcube.me/"
        openGraph={{
          url: "https://www.chatcube.me/",
          title: "ChatCube",
          description: "This is a 1:1 chatting app.",
          images: [
            {
              url: "/Logo.png",
              width: 500,
              height: 500,
              alt: "ChatCube",
            },
          ],
          site_name: "ChatCube",
        }}
        twitter={{
          handle: "@avneesh0612",
          site: "@avneesh0612",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
