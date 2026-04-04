import styles from "@/LostModal.module.css";

function LostModal({ dialogRef, score, setScore }) {
  const handleClose = () => {
    dialogRef.current.close();
    setScore(0);
  };
  return (
    <dialog className={styles.lostModal} ref={dialogRef}>
      <p>Game Over!</p>
      <p>Your score is: {score}</p>
      <button onClick={() => handleClose()}>Close</button>
    </dialog>
  );
}

export default LostModal;
