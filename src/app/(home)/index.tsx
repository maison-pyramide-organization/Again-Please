import { getSectors } from "@/services/api/force";
import Animation from "./_animation";
import About from "./components/About";
import Hero from "./components/Hero";
import Model from "./components/Model";
import Quote from "./components/Quote";
import Sectors from "./components/Sectors";
import Why from "./components/Why";

export default async function Home() {
  const sectors = await getSectors()
  return (
    <>
      <Hero />
      <About />
      <Sectors sectors={sectors} />
      <Model />
      <Why />
      <Quote />
      <Animation />
    </>
  );
}
