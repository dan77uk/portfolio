import styles from "./hero.module.css";
import { useContext } from "react";
import { useInView } from "react-intersection-observer";
import { BsArrow90DegRight } from "react-icons/bs";

import { ThemeContext } from "../../context/Theme";

export default function Hero() {
  const { theme } = useContext(ThemeContext);
  const { ref: heroRef, inView: elementIsVisible } = useInView();

  return (
    <section className={`${styles.hero} ${styles[theme]}`}>
      <article ref={heroRef}>
        <h2 className={elementIsVisible ? styles.animateName : null}>
          Dan<span>Phillips</span>
        </h2>
        <h3 className={elementIsVisible ? styles.animateTitle : null}>
          Full Stack Developer
        </h3>

        <h4>
          Hello.{" "}
          <span className={elementIsVisible ? styles.animateIntro : null}>
            I’m a software developer specialising in full stack applications
            across mobile and desktop devices.
          </span>
        </h4>

        <a
          href="#about"
          className={elementIsVisible ? styles.animateButton : null}
        >
          ABOUT ME
          <BsArrow90DegRight />
        </a>
      </article>
    </section>
  );
}
