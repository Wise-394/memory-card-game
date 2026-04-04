import styles from "@/main.module.css";
import Title from "./main/title";
import CardContainer from "./main/card/CardContainer";
import { useEffect, useState } from "react";

function Main() {
  const cardLength = 16;
  const [availableHeroes, setAvailableHeroes] = useState([]);
  const [clickedheroes, setClickedHeroes] = useState([]);
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

  useEffect(() => {
    console.log(clickedheroes);
  }, [clickedheroes]);

  return (
    <main className={styles.main}>
      <Title />
      <CardContainer
        availableHeroes={availableHeroes}
        setClickedHeroes={setClickedHeroes}
      />
    </main>
  );
}

export default Main;
