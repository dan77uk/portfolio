import styles from "./content.module.css";
import Nav from "./Nav";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { useInView } from "react-intersection-observer";

export default function Content() {
  const { ref: myRef, inView: elementVisible } = useInView();
  return (
    <section className={styles.wrapper}>
      {elementVisible ? <Nav highlight="highlight" /> : <Nav />}

      <div className={`${styles.parallax_group}`} id="home">
        <div className={`${styles.parallax_layer} ${styles.hero_text}`}>
          <h1>
            DAN<span>PHILLIPS</span>
          </h1>
          <h2>
            <span className={styles.title_full}>Full</span>{" "}
            <span className={styles.title_stack}>Stack</span>{" "}
            <span className={styles.title_developer}>Developer</span>
          </h2>
        </div>

        <div className={`${styles.parallax_layer} ${styles.layer_one}`}></div>
        <div className={`${styles.parallax_layer} ${styles.layer_five}`}></div>
        <div className={`${styles.parallax_layer} ${styles.layer_two}`}></div>
        <div className={`${styles.parallax_layer} ${styles.layer_three}`}></div>
        <div className={`${styles.parallax_layer} ${styles.layer_four}`}></div>
        <div className={`${styles.parallax_layer} ${styles.layer_six}`}></div>
        <div className={`${styles.parallax_layer} ${styles.layer_seven}`}></div>
      </div>

      <About ref={myRef} />
      <Projects ref={myRef} />
      <Contact />
    </section>
  );
}
