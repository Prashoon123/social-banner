import SocialCard from "../components/SocialCard";
import styles from "../styles/Home.module.css";
import useDarkMode from "../hooks/useDarkMode";
import { LightBulbIcon, MoonIcon } from "@heroicons/react/outline";
import { Follow } from "react-twitter-widgets";
import Head from "next/head";

export default function Home() {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div className={styles.container}>
      <Head>
        <title>Social Banner</title>
        <link rel="icon" href="/internet.png" />
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
            href="https://www.producthunt.com/posts/social-banner?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-social-banner"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=316742&theme=light"
              alt="Password Generator - Generate random passwords with just a few clicks | Product Hunt"
              style={{ width: 250, height: 54 }}
              width="250"
              height="54"
            />
          </a>
        ) : (
          <a
            href="https://www.producthunt.com/posts/social-banner?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-social-banner"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=316742&theme=dark"
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
