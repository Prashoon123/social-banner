import { useRouter } from "next/dist/client/router";
import styles from "../styles/SocialCard.module.css";

function SocialCard({
  img,
  platform,
  desc,
  noBorderRadius,
  navigation,
  colorTheme,
}) {
  const router = useRouter();

  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: colorTheme === "light" ? "#201f1f" : "#eaeaea",
        color: colorTheme === "light" ? "white" : "black",
      }}
      onClick={() => router.push(navigation)}
    >
      <img
        src={img}
        alt="platform-img"
        style={{ borderRadius: noBorderRadius ? 0 : 999 }}
      />

      <div className={styles.container2}>
        <h2>{platform}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default SocialCard;
