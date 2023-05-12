"use client";
import AnimatedText from "./components/AnimatedText";

export default function Home() {
  return (
    <main className="flex px-normal lg:px-longer3 flex-col justify-center themedBg items-center min-h-screen">
      <div className="flex flex-col gap-4">
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
    </main>
  );
}
