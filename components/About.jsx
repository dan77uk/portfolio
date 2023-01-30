import styles from "./about.module.css";
import { useInView } from "react-intersection-observer";

export default function About({ theme }) {
  const { ref: myRef, inView: elementVisible } = useInView();

  return (
    <section className={styles.about_section} id="about">
      <div className={styles.depthDiv}></div>

      <section className={styles.wrapper}>
        <h3>
          I have a passion for all things code. I graduated from the Northcoders
          Software Development programme in January 2023, & I'm now looking for
          a permanent opportunity, or an internship to gain experience.
        </h3>
        <section className={styles.column_container}>
          <article>
            <p>
              I have a strong foundation in software development principles,
              including Object Orientated Programming (OOP) & Test Driven
              Development (TDD).
            </p>
            <p>
              This solid foundation allows me to grasp new development
              frameworks & tools, as well as quickly adapting to new languages &
              libraries.
            </p>
          </article>
          <article>
            <p>
              I enjoy the different challenges both front & backend development
              provides, & I would relish any opportunity to expand my technical
              skillset.
            </p>
            <p>
              Based in Northumberland, UK, I would be interested in remote or
              hybrid opportunities across the code base/tech stack.
            </p>
          </article>
        </section>
        <section className={styles.card_container}>
          <article>
            <h4>FrontEnd</h4>
            <p>
              I enjoy building immersive & responsive user experiences in
              vanilla JavaScript, HTML5 & CSS, but moreso in React, Next or
              React Native (Expo).
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
              in an Agile-environemnt, working in paired programming, solo
              sprints, code reviews, pull requests & Kanban.
            </p>
          </article>
          <article>
            <h4>Soft Skills</h4>
            <p>
              Outside of software, I have a wealth of transferable skills, with
              extensive experience in directing teams of creative professionals
              as a Client Service Director, in liasing with external clients and
              stakeholders, & in managing budgets and project delivery.
            </p>
          </article>
        </section>
      </section>
    </section>
  );
}
