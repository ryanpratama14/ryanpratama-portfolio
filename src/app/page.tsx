import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Main from "@/components/sections/Main";
import { Fragment } from "react";

export default function Home(): React.JSX.Element {
  return (
    <Fragment>
      <Main />
      <About />
      <Projects />
      <Contact />
    </Fragment>
  );
}
