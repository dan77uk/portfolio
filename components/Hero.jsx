import styles from "./hero.module.css";
import { useInView } from "react-intersection-observer";

export default function Hero({ theme }) {
  const { ref: myRef, inView: elementVisible } = useInView();

  return (
    <section className={styles.hero_section}>
      <section className={styles.wrapper}>
        <h2>hello</h2>
        <h3>
          I’m a full stack software developer bringing flights of fancy to life.
        </h3>
        <div className={styles.link_wrapper}>
          <a href="#about">About Me</a>
          <a href="#contact">Get In Touch</a>
        </div>
      </section>
    </section>
  );
}
