import styles from "./nav.module.css";
import ToggleSwitch from "./ui/toggle-switch";
import { ThemeContext } from "../context/Theme";
import { useContext } from "react";

export default function Nav() {
  const { theme } = useContext(ThemeContext);

  return (
    <header className={`${styles.header} ${styles[theme]}`}>
      <article>
        <h1>DAN PHILLIPS</h1>
        <nav>
          <a href="#">ABOUT ME</a>
          <a href="#">PROJECTS</a>
          <a href="#">CONTACT</a>
        </nav>
        <ToggleSwitch />
      </article>
    </header>
  );
}
