import styles from "@/card/CardContainer.module.css";
import Card from "./Card";
function CardContainer({ availableHeroes, setClickedHeroes }) {
  return (
    <div className={styles.cardContainer}>
      {availableHeroes.map((hero) => (
        <Card hero={hero} key={hero.id} setClickedHeroes={setClickedHeroes} />
      ))}
    </div>
  );
}

export default CardContainer;
