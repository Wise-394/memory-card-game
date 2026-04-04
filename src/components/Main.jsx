import styles from "@/main.module.css";
import Title from "./main/title";
import CardContainer from "./main/card/CardContainer";
import { useEffect, useState } from "react";

function Main() {
  const cardLength = 16;
  const [availableHeroes, setAvailableHeroes] = useState([]);

  useEffect(() => {
    const getHeroes = async () => {
      const response = await fetch("https://api.opendota.com/api/heroes");
      const heroes = await response.json();
      selectRandomHeroes(heroes);
    };
    const selectRandomHeroes = (heroes) => {
      const shuffled = [...heroes].sort(() => 0.5 - Math.random());
      const randomSelection = shuffled.slice(0, cardLength);
      setAvailableHeroes(randomSelection);
    };

    getHeroes();
  }, []);

  return (
    <main className={styles.main}>
      <Title />
      <CardContainer availableHeroes={availableHeroes} />
    </main>
  );
}

export default Main;
