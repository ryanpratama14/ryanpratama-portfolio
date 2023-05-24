import React from "react";
import AnimatedText from "../AnimatedText";

export default function Main(): React.JSX.Element {
  return (
    <section className="flex flex-col justify-center items-center px-normal lg:px-longer3 min-h-screen">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col">
          <label className="text-lg md:text-xl">Hi! My name is</label>
          <h1>Ryan</h1>
        </div>
        <AnimatedText text="I create digital products for the internet" />
        <p className="w-full lg:w-[75%] xl:w-[50%]">
          A front-end developer specializing in building intuitive web
          applications with engaging user interfaces. I utilize the React.js
          framework to develop efficient, scalable and maintainable frontend
          applications.
        </p>
      </div>
    </section>
  );
}
