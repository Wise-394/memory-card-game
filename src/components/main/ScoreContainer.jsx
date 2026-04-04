import styles from "@/main/ScoreContainer.module.css";
function ScoreContainer() {
  return (
    <div className={styles.scoreContainer}>
      <p>Current Score: 0</p>
      <p>Best Score: 0</p>
    </div>
  );
}

export default ScoreContainer;
