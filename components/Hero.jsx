import styles from "./hero.module.css";
import { useInView } from "react-intersection-observer";
import { useContext } from "react";
import { ThemeContext } from "./../context/Theme";

export default function Hero() {
  const { theme } = useContext(ThemeContext);
  const { ref: myRef, inView: elementVisible } = useInView();

  let themeStyle = {};
  if (theme === "dark") {
    themeStyle = {
      h2: "#1cc8ff", // blue
      h1: "#f1f1f1", // blue
      link: "#ff1c60", // red
      planeImg: "./PlaneDark.png",
    };
  } else {
    themeStyle = {
      h2: "#ff1c60", //red
      h1: "#565656", // white
      link: "#1cc8ff", // blue
      planeImg: "./Plane.png",
    };
  }

  return (
    <section className={styles.hero_section}>
      <section className={styles.wrapper}>
        <h2 style={{ color: themeStyle.h2 }}>Hello.</h2>
        <h1 style={{ color: themeStyle.h1 }}>
          I’m a full stack software developer bringing flights of fancy to life.
        </h1>
        <div className={styles.link_wrapper}>
          <a href="#about" style={{ background: themeStyle.link }}>
            About Me
          </a>
          <a href="#contact" style={{ background: themeStyle.link }}>
            Get In Touch
          </a>
        </div>
        <div className={styles.plane}>
          <img
            src={themeStyle.planeImg}
            alt="A paper airplane flying vertically up the middle of the page"
          />
        </div>
      </section>
    </section>
  );
}
