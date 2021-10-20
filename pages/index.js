import SocialCard from "../components/SocialCard";
import styles from "../styles/Home.module.css";
import useDarkMode from "../hooks/useDarkMode";
import { LightBulbIcon, MoonIcon } from "@heroicons/react/outline";
import { Follow } from "react-twitter-widgets";
import { NextSeo } from "next-seo";

export default function Home() {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div className={styles.container}>
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
        <div className={styles.toggler}>
          {colorTheme === "light" ? (
            <LightBulbIcon
              onClick={() => setTheme("light")}
              style={{
                height: 60,
                width: 60,
                objectFit: "contain",
                cursor: "pointer",
              }}
            />
          ) : (
            <MoonIcon
              onClick={() => setTheme("dark")}
              style={{
                height: 60,
                width: 60,
                objectFit: "contain",
                cursor: "pointer",
              }}
            />
          )}
        </div>

        <div className={styles.title}>
          <h1>Social Banner</h1>

          <p>
            Generate headers/covers/backgrounds for your social media accounts
            using this website!
          </p>
        </div>

        <a
          href="https://github.com/Prashoon123/social-banner"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://img.shields.io/github/stars/Prashoon123/social-banner?style=social"
            alt="githubStars"
          />
        </a>
      </header>

      <main className={styles.main}>
        <SocialCard
          colorTheme={colorTheme}
          platform="Twitter"
          img="/twitter-logo.png"
          desc="Generate a header for your Twitter account."
          navigation="twitter-banner"
        />

        <SocialCard
          colorTheme={colorTheme}
          platform="Facebook"
          img="/facebook-logo.webp"
          desc="Generate a cover for your Facebook account."
          navigation="facebook-banner"
        />

        <SocialCard
          colorTheme={colorTheme}
          platform="LinkedIn"
          img="/linkedin-logo.png"
          desc="Generate a background for your LinkedIn account."
          noBorderRadius
          navigation="linkedin-banner"
        />
      </main>

      <footer className={styles.footer}>
        <div>
          <Follow username="prashoonb" options={{ size: "large" }} />
        </div>

        <p>
          Made with 💖 by{" "}
          <a href="https://prashoonb.tech/" target="_blank" rel="noreferrer">
            Prashoon Bhattacharjee
          </a>
        </p>

        {colorTheme === "dark" ? (
          <a
            href="https://www.producthunt.com/posts/password-generator-2b28f945-00e7-4c7e-98f7-2bd2c23c5447?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-password-generator-2b28f945-00e7-4c7e-98f7-2bd2c23c5447"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=316100&theme=light"
              alt="Password Generator - Generate random passwords with just a few clicks | Product Hunt"
              style={{ width: 250, height: 54 }}
              width="250"
              height="54"
            />
          </a>
        ) : (
          <a
            href="https://www.producthunt.com/posts/password-generator-2b28f945-00e7-4c7e-98f7-2bd2c23c5447?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-password-generator-2b28f945-00e7-4c7e-98f7-2bd2c23c5447"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=316100&theme=dark"
              alt="Password Generator - Generate random passwords with just a few clicks | Product Hunt"
              style={{ width: 250, height: 54 }}
              width="250"
              height="54"
            />
          </a>
        )}
      </footer>
    </div>
  );
}
