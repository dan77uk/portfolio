import styles from "./workflow.module.css";
import { useInView } from "react-intersection-observer";
import { useContext } from "react";
import { ThemeContext } from "../../context/Theme";

export default function Workflow() {
  const { ref: titleRef, inView: elementIsVisible } = useInView();
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`${styles.workflow_wrapper} ${styles[theme]}`}>
      <article>
        <h2
          ref={titleRef}
          className={elementIsVisible ? styles.animateTitle : null}
        >
          Workflow
        </h2>
        <div className={styles.skills}>
          <ul>
            <li>Git</li>
            <li>GitHib</li>
            <li>GitFlow</li>
            <li>Agile</li>
            <li>Paired Programming</li>
            <li>Stand Ups</li>
          </ul>
        </div>
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
            the latest framework technologies, including React.js, Next.js &
            Angular.
          </p>
        </div>
      </article>
    </section>
  );
}
