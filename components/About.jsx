import styles from "./about.module.css";
import { useInView } from "react-intersection-observer";
import { useContext } from "react";
import { ThemeContext } from "./../context/Theme";

export default function About() {
  const { ref: myRef, inView: elementVisible } = useInView();
  const { theme } = useContext(ThemeContext);
  const themeStyle = `${theme}_about_colorway`;

  return (
    <section className={`${styles.about_section} ${themeStyle}`} id="about">
      <h2>Hello</h2>
      <section className={styles.column_container}>
        <section className={styles.left_column}>
          <h3>
            I’m a software developer looking for something playful in an
            immersive UI or maybe something more serious with a spaghetti API.
          </h3>
          <p>
            I have a strong foundation in software development principles and
            I'm comfortable working with multiple tools and frameworks, and am
            also able to quickly adapt to new languages and libraries.
          </p>
          <p>
            I graduated from the Northcoders Software Development bootcamp in
            January 2023 and I'm now looking for a permanent developer position
            or an internship.
          </p>
          <p>
            I'm based in Northumberland but would be interested in any
            opportunity if a remote or hybrid option is available.
          </p>
        </section>
        {/* <section className={styles.right_column}>
          <article>
            <h4>FrontEnd</h4>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </article>
          <article>
            <h4>BackEnd</h4>
            <p>
              I have back-end development experience with both relational and
              document-based databases, creating RESTful API’s in a Model View
              Controller pattern in Node.js.
            </p>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Next.js</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
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
        </section> */}
      </section>
    </section>
  );
}
