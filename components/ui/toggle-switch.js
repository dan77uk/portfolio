import styles from "./toggle-switch.module.css";
import { ThemeContext } from "../../context/Theme";
import { useContext } from "react";

export default function ToggleSwitch() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div id={styles.toggleContainer} className={styles[theme]}>
      <input
        onChange={toggleTheme}
        className={styles.checkbox}
        id="react-switch-new"
        type="checkbox"
      />
      <label className={styles.switchLabel} htmlFor="react-switch-new">
        <span className={styles.switchButton} />
      </label>
    </div>
  );
}
