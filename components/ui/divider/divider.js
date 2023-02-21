import styles from "./divider.module.css";
export default function Divider() {
  return (
    <div className={styles.divider}>
      <span className={styles.red} />
      <span className={styles.blue} />
    </div>
  );
}
