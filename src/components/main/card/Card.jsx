import styles from "@/card/Card.module.css";

function Card({ hero }) {
  const link =
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/";
  const name = hero.name.replace("npc_dota_hero_", "");
  return (
    <div className={styles.card}>
      <img src={`${link}${name}.png`} />
      <p className={styles.heroName}>{hero.localized_name}</p>
    </div>
  );
}

export default Card;
