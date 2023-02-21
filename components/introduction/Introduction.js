import styles from "./introduction.module.css";
import { useContext } from "react";
import { useInView } from "react-intersection-observer";
import { ThemeContext } from "../../context/Theme";
import Divider from "../ui/divider/divider";

export default function Introduction() {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`${styles.introduction} ${styles[theme]}`}>
      <article>
        <Divider />
        <div className={styles.container}>
          <section>
            <h2>
              I’m a passionate software developer driven to deliver immersive
              user experiences...
            </h2>
          </section>
          <section>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et commodo consequat.
            </p>
            <a href="#">Request CV</a>
          </section>
        </div>
        <Divider />
      </article>
    </section>
  );
}
