import { useRouter } from "next/dist/client/router";
import styles from "../styles/Banner.module.css";
import * as htmlToImage from "html-to-image";
import FileSaver from "file-saver";
import { useState } from "react";
import { FadingCircle } from "better-react-spinkit";
import useDarkMode from "../hooks/useDarkMode";
import { NextSeo } from "next-seo";

export default function Facebook({ image }) {
  const router = useRouter();
  const [colorTheme, setTheme] = useDarkMode();
  const [loading, setLoading] = useState(false);

  const imgUrl =
    image?.urls?.raw ||
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format";

  const regenerate = () => {
    window.location.reload();
  };

  const downloadBanner = () => {
    setLoading(true);

    const node = document.getElementById("banner");

    htmlToImage.toBlob(node).then((blob) => {
      FileSaver.saveAs(blob, "facebook-banner.png");

      setLoading(false)
    });
  };

  return (
    <div>
      <NextSeo
        title="Social Banner"
        description="Generate headers/cover/background for your social media accounts
        using this website!"
        canonical="https://www.social-banner.live/"
        openGraph={{
          type: "website",
          url: "https://www.social-banner.live/",
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

      <header className={styles.header}>
        <svg
          onClick={() => router.push("/")}
          xmlns="http://www.w3.org/2000/svg"
          style={{
            height: 40,
            width: 40,
            cursor: "pointer",
          }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>

        <div>
          <h1>How is this banner?</h1>

          <div className={styles.buttonContainer}>
            <button className={styles.downloadButton} onClick={downloadBanner}>
              {loading === true ? (
                <center>
                  <FadingCircle size={35} color="black" />
                </center>
              ) : (
                "Download banner"
              )}
            </button>

            <button className={styles.regenerateButton} onClick={regenerate}>
              Regenerate banner
            </button>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <img
          id="banner"
          src={imgUrl}
          height={924}
          width={1640}
          loading="eager"
          style={{ objectFit: "cover" }}
        />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const image = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_ACCESS_KEY}&collections=s8lmTtbkQm4`
  ).then((res) => res.json());

  return {
    props: {
      image: image,
    },
  };
}
