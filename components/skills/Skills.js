import styles from "./skills.module.css";
import { useContext } from "react";
import { useInView } from "react-intersection-observer";
import { ThemeContext } from "../../context/Theme";
import Card from "../card/Card";

export default function Skills() {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`${styles.skills} ${styles[theme]}`}>
      <article>
        <Card />
        <Card />
        <Card />
      </article>
    </section>
  );
}
