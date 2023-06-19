"use client";
import React from "react";

// sections
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Main from "../components/sections/Main";

export default function Home(): React.JSX.Element {
  return (
    <main>
      <Main />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
