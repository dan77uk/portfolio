import styles from "./nav.module.css";
import { useState } from "react";
import { ScreenSize } from "./custom_hooks/ScreenSize";

export default function Nav({ changeTheme, currentTheme }) {
  const [toggleTheme, setToggleTheme] = useState("darkStyle");
  const { width } = ScreenSize();

  console.log(width);

  function handleToggle() {
    if (currentTheme === "dark") {
      changeTheme("light");
      setToggleTheme("lightStyle");
    } else {
      changeTheme("dark");
      setToggleTheme("darkStyle");
    }
  }

  const themeStyle = {
    darkBack: "#000",
  };

  return (
    <header
      className={styles.header}
      style={{ background: themeStyle.background }}
    >
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
