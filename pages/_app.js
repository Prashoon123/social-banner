import "../styles/globals.css";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  if (typeof window === "undefined") return "";

  return (
    <>
      <NextSeo
        title="Social Banner"
        description="Generate headers/cover/background for your social media accounts
        using this website!"
        canonical="https://social-banner.live/"
        openGraph={{
          type: "website",
          url: "https://social-banner.live/",
          title: "Social Banner",
          description:
            "Generate headers/cover/background for your social media accounts using this website!",
          images: [
            {
              url: "/social-media.png",
              width: 512,
              height: 512,
              alt: "Social Banner",
            },
          ],
          site_name: "Social Banner",
        }}
        twitter={{
          handle: "@prashoonb",
          site: "@prashoonb",
          cardType: "summary_large_image",
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/internet.png",
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
