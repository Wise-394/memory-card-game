import styles from "@/card/CardContainer.module.css";
import Card from "./Card";
function CardContainer({ availableHeroes }) {
  return (
    <div className={styles.cardContainer}>
      {availableHeroes.map((hero) => (
        <Card hero={hero} key={hero.id} />
      ))}
    </div>
  );
}

export default CardContainer;
