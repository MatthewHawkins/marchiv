import { Wordmark } from "./ui/Wordmark";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      {/* Placeholder address per the handoff. */}
      <p>Mostecká · Praha 1</p>
      <Wordmark size={20} className={styles.wordmark} />
      <p className={styles.copyright}>© MMXXVI</p>
    </footer>
  );
}
