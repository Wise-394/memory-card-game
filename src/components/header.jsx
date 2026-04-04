import styles from "@/header.module.css";
import DotaIcon from "./DotaIcon";
function Header() {
  return (
    <header className={styles.header}>
      <DotaIcon /> MEMORY CARD GAME
    </header>
  );
}

export default Header;
