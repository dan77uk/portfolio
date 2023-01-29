import styles from "./nav.module.css";
import { useContext } from "react";
import { ThemeContext } from "./../context/Theme";

export default function Nav({ changeTheme, currentTheme }) {
  const { theme } = useContext(ThemeContext);

  function handleToggle() {
    if (currentTheme === "dark") {
      changeTheme("light");
    } else {
      changeTheme("dark");
    }
  }

  let themeStyle = {};
  if (theme === "dark") {
    themeStyle = {
      link: "#f1f1f1", // white
      label: "#1cc8ff", // blue
      button: "#232d38", // dark background
    };
  } else {
    themeStyle = {
      link: "#232d38", // dark background
      label: "#ff1c60", // red
      button: "#f1f1f1", // white
    };
  }

  return (
    <header className={styles.header}>
      <article>
        <nav>
          <ul>
            <li>
              <a href="#home" style={{ color: themeStyle.link }}>
                HOME
              </a>
            </li>
            <li>
              <a href="#about" style={{ color: themeStyle.link }}>
                ABOUT
              </a>
            </li>

            <li>
              <a href="#contact" style={{ color: themeStyle.link }}>
                CONTACT
              </a>
            </li>
          </ul>
        </nav>

        <div style={{ display: "flex" }}>
          <input
            className={styles.themeToggle}
            id="themeToggle"
            type="checkbox"
            onChange={handleToggle}
          />
          <label
            className={styles.themeToggleLabel}
            htmlFor="themeToggle"
            style={{ backgroundColor: themeStyle.label }}
          >
            <span
              className={styles.themeToggleButton}
              style={{ backgroundColor: themeStyle.button }}
            />
          </label>
        </div>
      </article>
    </header>
  );
}
