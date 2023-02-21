import styles from "./card.module.css";
import { useContext } from "react";
import { useInView } from "react-intersection-observer";
import { ThemeContext } from "../../context/Theme";

export default function Card() {
  const { theme } = useContext(ThemeContext);

  return <article className={`${styles.card} ${styles[theme]}`}>Card</article>;
}
