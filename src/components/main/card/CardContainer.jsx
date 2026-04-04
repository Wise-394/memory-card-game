import styles from "@/card/CardContainer.module.css";
import Card from "./Card";
import { useState, useEffect } from "react";

function CardContainer({ setScore, handleLose }) {
  const cardLength = 16;
  const [availableHeroes, setAvailableHeroes] = useState([]);
  const [clickedHeroes, setClickedHeroes] = useState([]);

  const link =
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/";

  useEffect(() => {
    const getAllHeroes = async () => {
      const response = await fetch("https://api.opendota.com/api/heroes");
      const heroes = await response.json();
      return heroes;
    };

    const getHeroesImg = (heroes) => {
      const heroWithImg = heroes.map((hero) => {
        const heroName = hero.name.replace("npc_dota_hero_", "");
        return {
          id: hero.id,
          name: hero.localized_name,
          img: `${link}${heroName}.png`,
        };
      });
      return heroWithImg;
    };

    const selectRandomHeroes = (heroes) => {
      const shuffled = [...heroes].sort(() => 0.5 - Math.random());
      const randomSelection = shuffled.slice(0, cardLength);
      return randomSelection;
    };

    const init = async () => {
      const heroes = await getAllHeroes();
      const random = selectRandomHeroes(heroes);
      const withImg = getHeroesImg(random);
      setAvailableHeroes(withImg);
    };

    init();
  }, []);
  const shuffle = () => {
    const shuffled = [...availableHeroes].sort(() => 0.5 - Math.random());
    setAvailableHeroes(shuffled);
  };
  return (
    <div className={styles.cardContainer}>
      {availableHeroes.map((hero) => (
        <Card
          hero={hero}
          key={hero.id}
          clickedHeroes={clickedHeroes}
          setClickedHeroes={setClickedHeroes}
          setScore={setScore}
          shuffle={shuffle}
          handleLose={handleLose}
        />
      ))}
    </div>
  );
}

export default CardContainer;
