import { getSectors } from "@/services/api";
import Animation from "./_animation";
// import About from "./components/About";
// import Hero from "./components/Hero";
// import Model from "./components/Model";
// import Quote from "./components/Quote";
// import Sectors from "./components/Sectors";
// import Why from "./components/Why";

import dynamic from "next/dynamic";
import Hero from "./components/Hero";

const About = dynamic(() => import("./components/About"));
const Why = dynamic(() => import("./components/Why"));
const Quote = dynamic(() => import("./components/Quote"));
const Sectors = dynamic(() => import("./components/Sectors"));
const Model = dynamic(() => import("./components/Model"));

export default async function Home() {
  const sectors = await getSectors();
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
