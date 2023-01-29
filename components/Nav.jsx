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
    <header className={styles.header}>
      {/* <article style={{ background: themeStyle.darkBack }}> */}
      <article>
        <nav>
          <ul>
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>

            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </nav>

        <div id={toggleTheme}>
          <input
            className={styles.themeToggle}
            id="themeToggle"
            type="checkbox"
            onChange={handleToggle}
          />
          <label className={styles.themeToggleLabel} htmlFor="themeToggle">
            <span className={styles.themeToggleButton} />
          </label>
        </div>
      </article>
    </header>
  );
}
