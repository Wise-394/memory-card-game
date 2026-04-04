import styles from "@/header.module.css";
import DotaIcon from "./DotaIcon";
function Header() {
  return (
    <header className={styles.header}>
      <DotaIcon />
      <p>MEMORY CARD GAME </p>
    </header>
  );
}

export default Header;
