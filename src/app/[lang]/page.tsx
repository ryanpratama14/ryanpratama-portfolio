import About from "@/components/sections/About";
import Contacts from "@/components/sections/Contacts";
import Main from "@/components/sections/Main";
import ProjectDiscuss from "@/components/sections/ProjectDiscuss";
import Projects from "@/components/sections/Projects";
import { Fragment } from "react";

export default function Home() {
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
