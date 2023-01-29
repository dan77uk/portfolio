import { ThemeContext } from "./../context/Theme";
import { useContext } from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <main className={theme}>
      <Nav changeTheme={setTheme} currentTheme={theme} />
      <Hero />
      {/* <About /> */}
      <Contact theme={theme} />
    </main>
  );
}
