import styles from "@/card/Card.module.css";

function Card({ hero, setClickedHeroes }) {
  const handleClick = (id, name) => {
    setClickedHeroes((heroes) => [...heroes, { id: id, name: name }]);
  };
  return (
    <div
      className={styles.card}
      onClick={() => handleClick(hero.id, hero.name)}
    >
      <img src={hero.img} />
      <p className={styles.heroName}>{hero.name}</p>
    </div>
  );
}

export default Card;
