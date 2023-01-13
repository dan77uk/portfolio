import { Fragment } from "react";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Header />
      <Contact />
    </Fragment>
  );
}
