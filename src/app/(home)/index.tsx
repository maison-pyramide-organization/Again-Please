import { getSectors } from "@/services/api/force";
import Animation from "./_animation";
import About from "./components/About";
import Hero from "./components/Hero";
import Model from "./components/Model";
import Quote from "./components/Quote";
import Sectors from "./components/Sectors";
import Why from "./components/Why";

export default async function Home() {
  const sectors = await getSectors();
  return (
    <>
      <h1 className="visually-hidden">
        Again Please is not a product. It is a habit made visible. You use it.
        You return it. It gets cleaned. It comes back.
      </h1>

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
