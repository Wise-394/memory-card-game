import styles from "@/card/Card.module.css";

function Card({
  hero,
  clickedHeroes,
  setClickedHeroes,
  setScore,
  shuffle,
  handleLose,
}) {
  const handleClick = (id, name) => {
    if (!clickedHeroes.some((hero) => hero.id === id)) {
      setClickedHeroes((prev) => [...prev, { id: id, name: name }]);
      setScore((prev) => prev + 1);
      shuffle();
    } else {
      handleLose();
    }
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
