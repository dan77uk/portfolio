import styles from "./about.module.css";
import { useInView } from "react-intersection-observer";

export default function About({ theme }) {
  const { ref: myRef, inView: elementVisible } = useInView();

  return (
    <section className={styles.about_section} id="about">
      {/* <div className={styles.depthDiv}></div> */}
      <section className={styles.wrapper}>
        <h2>About Me.</h2>
        <h3>
          I'm a software developer interested in all things code. I graduated
          from Northcoders Software Development course in January 2023, & I'm
          now looking for a permanent opportunity, or an internship.
        </h3>
        <section className={styles.column_container}>
          <article ref={myRef}>
            <p>
              I have a strong foundation in software development principles and
              I'm comfortable working with multiple tools and frameworks, and am
              also able to quickly adapt to new languages and libraries. Test
              Driven Development, agile practices
            </p>
          </article>
          <article>
            <p>
              I'm based in Northumberland but would be interested in any
              opportunity if a remote or hybrid option is available.
            </p>
          </article>
        </section>
        <section className={styles.card_container}>
          <article>
            <h4>FrontEnd</h4>
            <p>I enjoy building immersive & responsive user experiences.</p>
            <p>
              I am comfortable in vanilla JavaScript, HTML & CSS, but I love the
              speed & flexability of JavaScript frameworks.
            </p>
          </article>
          <article>
            <h4>BackEnd</h4>
            <p>
              I can create RESTful API's in Node.js using the Model View
              Controller (MVC) pattern for both relational & document databases.
            </p>
            <p></p>
          </article>
          <article>
            <h4>WorkFlow</h4>
            <p>
              I am comfortable working in Git/GitHub & have developed software
              in an Agile-environemnt
            </p>
            <p>
              Throughout my time at Northcoders, with extensive pair
              programming, code reviews & pull requests, Kanban boards, daily
              stand-ups, spiking & RATS.
            </p>
          </article>
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
