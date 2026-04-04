import styles from "@/card/Card.module.css";

function Card() {
  return (
    <div className={styles.card}>
      <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lion.png" />
      <p className={styles.heroName}>LION</p>
    </div>
  );
}

export default Card;
