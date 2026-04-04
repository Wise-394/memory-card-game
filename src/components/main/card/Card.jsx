import styles from "@/card/Card.module.css";

function Card() {
  return (
    <img
      src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lion.png"
      className={styles.card}
    />
  );
}

export default Card;
