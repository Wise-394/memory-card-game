import styles from "@/footer.module.css";
function Footer() {
  return (
    <div className={styles.footer}>
      <p>
        This is an unofficial fan-made project for learning purposes only. Not
        affiliated with or endorsed by Valve Corporation.
      </p>
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        width="24px"
      />
      <a href="https://www.github.com/wise-394" target="_blank">
        github.com/wise-394
      </a>
    </div>
  );
}

export default Footer;
