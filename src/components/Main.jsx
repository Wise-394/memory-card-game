import styles from "@/main.module.css";
import Title from "./main/title";
import CardContainer from "./main/card/CardContainer";

function Main() {
  return (
    <main className={styles.main}>
      <Title />
      <CardContainer />
    </main>
  );
}

export default Main;
