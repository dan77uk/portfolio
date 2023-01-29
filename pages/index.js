import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  const [theme, setTheme] = useState();

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    console.log(stored);
    setTheme(stored ? JSON.parse(stored) : "light");
  }, [theme]);

  return (
    <main className={theme}>
      <Nav changeTheme={setTheme} currentTheme={theme} />
      <Hero theme={theme} />
      <About theme={theme} />
      <Contact theme={theme} />
    </main>
  );
}
