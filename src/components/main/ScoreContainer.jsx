import styles from "@/main/ScoreContainer.module.css";
function ScoreContainer({ score, bestScore }) {
  return (
    <div className={styles.scoreContainer}>
      <p>Current Score: {score}</p>
      <p>Best Score: {bestScore || 0}</p>
    </div>
  );
}

export default ScoreContainer;
