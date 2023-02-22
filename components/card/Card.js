import styles from "./card.module.css";
import { useContext } from "react";
import { useInView } from "react-intersection-observer";
import { ThemeContext } from "../../context/Theme";
import Divider from "../ui/divider/divider";

export default function Card({ props }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${styles.card} ${styles[theme]}`}>
      {props.icon}
      <h3>{props.title}</h3>
      <span className={styles.blue} />

      <h4>{props.intro}</h4>
      <p>{props.copy}</p>
    </div>
  );
}
