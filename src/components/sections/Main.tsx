import bg from "@/assets/bg.png";
import GradientText from "@/components/GradientText";
import Img from "@/components/Img";

export default function Main(): React.JSX.Element {
  return (
    <article className="relative flex flex-col justify-center main-padding min-h-screen">
      {/* bullets */}
      <div className="max-xl:hidden absolute left-44 top-44 w-72 aspect-square rounded-full bg-bluedarker/30 blur-3xl -z-10" />
      <div className="max-xl:hidden absolute right-56 top-36 w-44 aspect-square rounded-full  bg-turquoise/30 blur-3xl -z-10" />
      <div className="max-xl:hidden absolute left-96 bottom-36 w-56 aspect-square rounded-full  bg-blue/30 blur-3xl -z-10" />
      <section className="flex justify-between items-center flex-wrap lg:flex-nowrap gap-x-6 gap-y-16">
        <section className="w-full lg:w-[50%] flex flex-col gap-6">
          <header className="flex flex-col gap-2">
            <GradientText text1="Frontend" text2="Engineer" />
            <h1 className="-translate-x-0.5 lg:-translate-x-1.5 w-full">
              <span>RYAN</span>
              <span className="max-xl:hidden absolute translate-x-6 pratama">
                PRATAMA!
              </span>
            </h1>
            <p>
              I specialized in creating scalable, intuitive, and responsive web
              applications with engaging user interfaces that are efficient,
              maintainable, and accessible using the React library.
            </p>
          </header>
          <nav className="flex gap-6 items-center">
            <a
              href="#contact"
              className="text-lg relative group font-semibold h-10 w-44 flex items-center justify-center from-bluedarker to-turquoise bg-gradient-to-r rounded-3xl"
            >
              <div className="absolute w-full h-full opacity-0 group-hover:opacity-100 bg-white animate rounded-3xl" />
              <span className="animate drop-shadow z-[1] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br from-turquoise to-bluedarker">
                Contact Me
              </span>
            </a>
            <a
              href="#about"
              className="text-gray hover:text-white animate text-lg"
            >
              Learn More
            </a>
          </nav>
        </section>
        <figure className="w-full lg:w-[50%] relative">
          {/* <div className="animate translate-y-6 absolute top-0 w-full h-[15rem] md:h-[30rem] lg:h-[25rem] from-bluedarker to-turquoise bg-gradient-to-b polygon drop-shadow-xl" />
          <div className="animate -translate-y-6 translate-x-4 first-line:absolute top-0 w-full h-[15rem] md:h-[30rem] lg:h-[25rem] from-bluedarker to-turquoise bg-gradient-to-b polygon drop-shadow-xl" />
          <div className="animate translate-y-6 absolute top-0 w-full h-[15rem] md:h-[30rem] lg:h-[25rem] bg-transparent polygon drop-shadow-xl">
            <Img
              src={ryan}
              priority={true}
              alt="Ryan Pratama"
              className="absolute top-0 w-full h-full object-contain"
            />
          </div> */}
          <Img src={bg} alt="Ryan Pratama" priority={true} />
        </figure>
      </section>
    </article>
  );
}
