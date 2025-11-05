import Animation from "./_animation";
import s from "./_s.module.css";
import Force from "./components/Force";
import Story from "./components/Story";
import Vmv from "./components/Vmv";
import Why from "./components/Why";

export default function () {
  return (
    <div className={s.p}>
      <Story />
      <Vmv />
      <Why />
      <Force />
      <Animation />
    </div>
  );
}
