import Hero from "../components/hero/Hero";
import Nav from "../components/header/Nav";
import Introduction from "../components/introduction/Introduction";
import Skills from "../components/skills/Skills";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Introduction />
      <Skills />
    </main>
  );
}
