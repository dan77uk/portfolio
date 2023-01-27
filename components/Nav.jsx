import styles from "./nav.module.css";
import { useState } from "react";
import { ScreenSize } from "./custom_hooks/ScreenSize";
import BurgerMenu from "./BurgerMenu";

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

  return (
    <header className={styles.header}>
      <article>
        <h1>DP</h1>
        <div className={styles.nav_wrapper}>
          {width > 700 ? (
            <nav>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About Me</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          ) : (
            <BurgerMenu currentTheme={currentTheme} />
          )}

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
        </div>
      </article>
    </header>
  );
}
