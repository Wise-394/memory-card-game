import ScoreContainer from "./ScoreContainer";
function Title({ score, bestScore }) {
  return (
    <div>
      <h1>DO NOT CLICK THE SAME HERO TWICE</h1>
      <ScoreContainer score={score} bestScore={bestScore} />
    </div>
  );
}

export default Title;
