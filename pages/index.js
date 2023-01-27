import { ThemeContext } from "./../context/Theme";
import { useContext } from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";

export default function Home() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <main className={theme}>
      <section className="main-wrapper">
        <Nav changeTheme={setTheme} currentTheme={theme} />
        <Hero />
        {/* <About /> */}
      </section>
    </main>
  );
}
