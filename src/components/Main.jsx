import styles from "@/main.module.css";
import Title from "./main/title";
import CardContainer from "./main/card/CardContainer";
import LostModal from "./LostModal";
import { useRef } from "react";
import { useState } from "react";

function Main() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const dialogRef = useRef(null);
  const handleLose = () => {
    if (score > bestScore) {
      setBestScore(score);
    }
    dialogRef.current.showModal();
  };

  return (
    <main className={styles.main}>
      <Title score={score} bestScore={bestScore} />
      <CardContainer setScore={setScore} handleLose={handleLose} />
      <LostModal dialogRef={dialogRef} score={score} setScore={setScore} />
    </main>
  );
}

export default Main;
