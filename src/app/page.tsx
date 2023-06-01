"use client";
import React from "react";

// sections
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Main from "./components/sections/Main";
import Experience from "./components/sections/Experience";

export default function Home(): React.JSX.Element {
  return (
    <React.Fragment>
      <Main />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </React.Fragment>
  );
}
