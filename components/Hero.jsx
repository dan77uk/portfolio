import styles from "./hero.module.css";
import { useInView } from "react-intersection-observer";
import { useContext } from "react";
import { ThemeContext } from "./../context/Theme";

export default function Hero() {
  const { theme } = useContext(ThemeContext);
  const { ref: myRef, inView: elementVisible } = useInView();
  const themeStyle = `${theme}_colorway`;

  return (
    <section className={`${styles.hero_section} ${themeStyle}`}>
      {/* {elementVisible ? <Nav highlight="highlight" /> : <Nav />} */}
      <div className={styles.circle_container}>
        <div className={styles.red}>
          <svg
            width="137"
            height="136"
            viewBox="0 0 137 136"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="68.6985"
              cy="67.8744"
              rx="67.7019"
              ry="67.6666"
              fill="#F31F52"
            />
          </svg>
        </div>
        <div className={styles.green}>
          <svg
            width="137"
            height="136"
            viewBox="0 0 137 136"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M136.126 67.6666C136.126 105.038 105.815 135.333 68.4241 135.333C31.0334 135.333 0.72226 105.038 0.72226 67.6666C0.72226 30.2954 31.0334 0 68.4241 0C105.815 0 136.126 30.2954 136.126 67.6666Z"
              fill="#03D1D1"
            />
          </svg>
        </div>
        <div className={styles.yellow}>
          <svg
            width="137"
            height="136"
            viewBox="0 0 137 136"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="68.3269"
              cy="67.8744"
              rx="67.7019"
              ry="67.6666"
              fill="#FBFF46"
            />
          </svg>
        </div>
      </div>

      <h2>
        DAN<span>PHILLIPS</span>
      </h2>
      <h1>
        <span className={styles.title_full}>Full </span>
        <span className={styles.title_stack}>Stack </span>
        <span className={styles.title_developer}>Developer</span>
      </h1>
    </section>
  );
}
