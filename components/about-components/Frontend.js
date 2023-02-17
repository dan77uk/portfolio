import styles from "./frontend.module.css";
import { useInView } from "react-intersection-observer";
import { useContext } from "react";
import { ThemeContext } from "../../context/Theme";
import { SiJavascript, SiTypescript, SiTailwindcss } from "react-icons/si";

export default function Frontend({ scrollTop }) {
  const { ref: titleRef, inView: elementIsVisible } = useInView();
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={`${styles.frontend_wrapper} ${styles[theme]}`}
      id="about"
    >
      <article>
        <h2
          ref={titleRef}
          className={elementIsVisible ? styles.animateTitle : null}
        >
          FrontEnd & User Experience
        </h2>
        <div className={styles.copy_container}>
          <h3 className={elementIsVisible ? styles.showPara : null}>
            I’m passionate about building intuitive and immersive user
            experiences (UI's) which enhance business cases.
          </h3>
          <p
            className={elementIsVisible ? styles.showPara : null}
            style={{ animationDelay: "2800ms" }}
          >
            As well as being fluent in frontend languages, I also develop using
            the latest framework technologies, including React.js, Next.js, as
            well as React Native (Expo).
          </p>
        </div>
        <div className={styles.skills}>
          <ul>
            <li>
              <SiJavascript />
              JavaScript
            </li>
            <li>
              <SiTypescript />
              TypeScript
            </li>
            <li>Responsive CSS</li>
            <li>
              <SiTailwindcss />
              Tailwind
            </li>
            <li>BootStrap</li>
            <li>Semantic HTML</li>
          </ul>
        </div>
      </article>
    </section>
  );
}
