import styles from "./nav.module.css";

export default function Nav({ highlight }) {
  return (
    <header className={`${styles.header} ${highlight ? styles.highlight : ""}`}>
      <article>
        <h1>
          DAN<span>PHILLIPS</span>
        </h1>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>

            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </article>
    </header>
  );
}
