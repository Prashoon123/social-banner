import "../styles/globals.css";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  // if (typeof window === "undefined") return "";

  return (
    <>
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
