import GradientText from "@/components/GradientText";
import {
  experienceData,
  identityData,
  skillsData,
} from "@/constants/constants";
import Img from "@/components/Img";
import Iconify from "@/components/Iconify";
import Link from "next/link";

export default function About(): React.JSX.Element {
  return (
    <article
      className="min-h-screen main-padding flex justify-center flex-col gap-6"
      id="about"
    >
      <GradientText text1="About" text2="Me" bigger />
      <section className="flex flex-col gap-4">
        <header className="flex relative w-fit divide-x justify-between gap-2">
          {identityData.map((e, i: number) => {
            return (
              <p
                key={i}
                className={`font-montserrat label ${i !== 0 && "pl-2"}`}
              >
                {e}
              </p>
            );
          })}
          {/* <div className="max-xl:hidden absolute -z-10 bottom-0 from-bluedarker via-blue to-turquoise bg-gradient-to-r h-full w-full blur-3xl" /> */}
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
      <section
        className={`font-montserrat md:w-[80%] lg:w-[70%] flex flex-wrap gap-3`}
      >
        {skillsData.map((e, i: number) => {
          return (
            <p
              key={i}
              className="flex gap-3 text-sm xl:text-base items-center font-medium text-graydarker"
            >
              <span className="text-turquoise">
                <Iconify icon={e.icon} width={25} />
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
            <Link
              key={i}
              href={e.link}
              target="_blank"
              className="flex group items-center hover:shadow-[-6px_6px_0px_0px_#323232] hover:translate-x-0.5 hover:-translate-y-0.5"
            >
              <figure className="flex items-center justify-center aspect-square p-3 bg-white md:h-[6.75rem] h-24">
                <Img src={e.src} alt={e.label} className="object-contain" />
              </figure>
              <section className="relative md:h-[6.75rem] h-24 flex items-center w-full">
                <div className="-z-10 absolute w-0 group-hover:w-full animate-longer h-full bg-gradient-to-br from-turquoise" />
                <header className="w-full flex flex-col px-4">
                  <h5 className="flex items-center drop-shadow gap-2">
                    {e.label}
                    <span className="group-hover:opacity-100 opacity-0 group-hover:-translate-x-0 -translate-x-full p">
                      <Iconify icon="mingcute:external-link-fill" />
                    </span>
                  </h5>
                  <small
                    className={`font-montserrat italic text-gray group-hover:text-white font-medium`}
                  >
                    {e.since} - {e.till ? e.till : "present"}
                  </small>
                  <small className={`font-montserrat font-medium`}>
                    {e.location}
                  </small>
                </header>
              </section>
            </Link>
          );
        })}
      </nav>
    </article>
  );
}
