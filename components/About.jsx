import styles from "./about.module.css";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref: myRef, inView: elementVisible } = useInView();

  return (
    <section className={styles.container} id="about">
      <div className={styles.contentWrapper}>
        <section className={styles.col1}>
          <h2>Hello</h2>
          <h3 ref={myRef}>
            <span className={`${elementVisible ? styles.heading : ""}`}>
              I’m a software developer into immersive UI’s and spaghetti API's.
            </span>
          </h3>
          <p>
            I have a strong foundation in software development principles and
            I'm comfortable working with multiple tools and frameworks, and am
            also able to quickly adapt to new languages and libraries.
          </p>
          <p>
            I graduated from the Northcoders Software Development bootcamp in
            January 2023 and I'm now looking for a developer position.
          </p>
          <p>
            I'm based in Northumberland but would be interested in any
            opportunity if a remote or hybrid option is available.
          </p>
        </section>
        <section className={styles.col2}>
          <article>
            <h4>Front End</h4>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </article>
          <article>
            <h4>Back End</h4>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </article>
          <article>
            <h4>Workflow</h4>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </article>
        </section>
      </div>
    </section>
  );
}
