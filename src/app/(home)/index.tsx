import Animation from "./_animation";
import About from "./components/About";
import Hero from "./components/Hero";
import Model from "./components/Model";
import Quote from "./components/Quote";
import Sectors from "./components/Sectors";
import Why from "./components/Why";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Sectors />
      <Model />
      <Why />
      <Quote />
      <Animation />
    </>
  );
}
