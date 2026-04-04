import styles from "@/DotaIcon.module.css";

function DotaIcon() {
  return (
    <img
      src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/global/dota2_logo_symbol.png"
      className={styles.dotaIcon}
    />
  );
}

export default DotaIcon;
