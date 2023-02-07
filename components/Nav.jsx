import styles from "./nav.module.css";
import ToggleSwitch from "./ui/toggle-switch";
import { ThemeContext } from "../context/Theme";
import { useContext, useState } from "react";

export default function Nav() {
  const { theme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  function handleBurgerState() {
    setIsOpen(!isOpen);
  }

  return (
    <header className={`${styles.header} ${styles[theme]}`}>
      <article>
        <button onClick={handleBurgerState} id={styles.burgerMenuButton}>
          {isOpen ? (
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="16.7049"
                y1="2.12091"
                x2="2.12082"
                y2="17.2884"
                stroke="black"
                stroke-width="4"
                stroke-linecap="round"
              />
              <line
                x1="2.12132"
                y1="1.60277"
                x2="17"
                y2="16.4814"
                stroke="black"
                stroke-width="4"
                stroke-linecap="round"
              />
            </svg>
          ) : (
            <svg
              width="30"
              height="21"
              viewBox="0 0 30 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1.5"
                y1="1.5"
                x2="28.5"
                y2="1.5"
                stroke="black"
                stroke-width="4"
                stroke-linecap="round"
              />
              <line
                x1="1.5"
                y1="10.5"
                x2="18.5"
                y2="10.5"
                stroke="black"
                stroke-width="4"
                stroke-linecap="round"
              />
              <line
                x1="1.5"
                y1="19.5"
                x2="13.5"
                y2="19.5"
                stroke="black"
                stroke-width="4"
                stroke-linecap="round"
              />
            </svg>
          )}
        </button>
        {isOpen && (
          <nav id={styles.burgerMenu}>
            <a href="#" onClick={handleBurgerState}>
              ABOUT ME
            </a>
            <a href="#" onClick={handleBurgerState}>
              PROJECTS
            </a>
            <a href="#contact" onClick={handleBurgerState}>
              CONTACT
            </a>
          </nav>
        )}
        <h1>LOGO</h1>

        <nav id={styles.fullSiteNav}>
          <a href="#">ABOUT ME</a>
          <a href="#">PROJECTS</a>
          <a href="#">CONTACT</a>
        </nav>
        <ToggleSwitch />
      </article>
    </header>
  );
}
