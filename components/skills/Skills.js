import styles from "./skills.module.css";
import { useContext } from "react";
import { useInView } from "react-intersection-observer";
import { ThemeContext } from "../../context/Theme";
import Card from "../card/Card";
import { cardData } from "../../data";
import SkillsList from "../skillslist/SkillsList";

export default function Skills() {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`${styles.skills} ${styles[theme]}`}>
      <article>
        {cardData.map((info) => (
          <Card key={info.title} props={info} />
        ))}
      </article>
      <SkillsList />
    </section>
  );
}
