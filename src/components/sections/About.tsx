import GradientText from "@/components/GradientText";
import { experienceData, skillsData } from "@/constants/constants";
import { Icon } from "@iconify/react";
import Img from "@/components/Img";

const identityData: string[] = ["Ryan Pratama", "23 yo", "Jakarta, Indonesia"];

export default function About(): React.JSX.Element {
  return (
    <article
      className="min-h-screen main-padding flex justify-center flex-col gap-6"
      id="about"
    >
      <GradientText text1="About" text2="Me" bigger />
      <section className="flex flex-col gap-4">
        <header className="font-montserrat flex relative w-fit divide-x justify-between gap-3">
          {identityData.map((e, i: number) => {
            return (
              <label key={i} className={`${i !== 0 && "pl-3"}`}>
                {e}
              </label>
            );
          })}
          <div className="max-xl:hidden absolute -z-10 bottom-0 from-bluedarker via-blue to-turquoise bg-gradient-to-r h-full w-full blur-3xl" />
        </header>
        <p className="xl:w-[80%]">
          In September 2022, I joined a free programming course taught by my
          Indonesian friend in his apartment in Kazan, Russia. Along with other
          students, we learned the basics of JavaScript and eventually formed a
          software house startup called faoTech in January 2023. As I developed
          my skills, I discovered a passion for frontend development and decided
          to specialize in this field.
        </p>
      </section>
      <section className="font-montserrat md:w-[80%] lg:w-[60%] flex flex-wrap gap-3">
        {skillsData.map((e, i: number) => {
          return (
            <p
              key={i}
              className="flex gap-3 text-sm xl:text-base items-center font-medium text-graydarker"
            >
              <span className="text-turquoise">
                <Icon icon={e.icon} width={25} />
              </span>
              {e.label}
            </p>
          );
        })}
      </section>

      <h4>Experience</h4>
      <nav className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-6">
        {experienceData.map((e, i: number) => {
          return (
            <a
              key={i}
              href={e.link}
              target="_blank"
              className="flex group items-center h-full hover:shadow-[-6px_6px_0px_0px_#323232] hover:translate-x-0.5 hover:-translate-y-0.5"
            >
              <figure className="flex items-center justify-center aspect-square p-3 bg-white md:h-24 h-20">
                <Img src={e.src} alt={e.label} className="object-contain" />
              </figure>
              <section className="relative md:h-24 h-20 flex items-center w-full">
                <div className="-z-10 absolute w-0 group-hover:w-full animate-longer h-full bg-gradient-to-r from-turquoise" />
                <header className="w-full flex flex-col px-4">
                  <h5 className="flex items-center drop-shadow gap-2">
                    {e.label}
                    <span className="group-hover:opacity-100 opacity-0 group-hover:-translate-x-0 -translate-x-full p">
                      <Icon icon="mingcute:external-link-fill" />
                    </span>
                  </h5>
                  <small className="italic font-montserrat text-gray group-hover:text-white animate-longer font-medium">
                    {e.since}
                  </small>
                </header>
              </section>
            </a>
          );
        })}
      </nav>
    </article>
  );
}
