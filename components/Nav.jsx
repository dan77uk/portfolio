import styles from "./nav.module.css";
import { useState } from "react";
import { ScreenSize } from "./custom_hooks/ScreenSize";
import BurgerMenu from "./BurgerMenu";

export default function Nav({ changeTheme, currentTheme }) {
  const [toggleTheme, setToggleTheme] = useState("darkStyle");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { width } = ScreenSize();

  const burgerButtonTheme = `${currentTheme}BurgerButton`;
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
            <>
              <button
                onClick={() => setIsMenuOpen(true)}
                id={styles.burgerMenuButton}
                className={burgerButtonTheme}
              >
                <svg
                  width="45"
                  height="33"
                  viewBox="0 0 45 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="2.5"
                    y1="2.5"
                    x2="42.5"
                    y2="2.5"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="2.5"
                    y1="16.5"
                    x2="37.5"
                    y2="16.5"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="2.5"
                    y1="30.5"
                    x2="32.5"
                    y2="30.5"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              {isMenuOpen ? (
                <BurgerMenu
                  setIsMenuOpen={setIsMenuOpen}
                  currentTheme={currentTheme}
                  classID="open"
                />
              ) : (
                <BurgerMenu
                  setIsMenuOpen={setIsMenuOpen}
                  currentTheme={currentTheme}
                  classID="close"
                />
              )}
            </>
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
