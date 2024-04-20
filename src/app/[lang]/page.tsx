import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contacts from "@/components/sections/Contacts";
import Main from "@/components/sections/Main";
import { Fragment } from "react";
import ProjectDiscuss from "@/components/sections/ProjectDiscuss";

export default function Home(): React.JSX.Element {
  return (
    <Fragment>
      <Main />
      <About />
      <Projects />
      <ProjectDiscuss />
      <Contacts />
    </Fragment>
  );
}
