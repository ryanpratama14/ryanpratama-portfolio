import GradientText from "@/components/GradientText";
import { projectsData } from "@/constants/constants";
import Img from "@/components/Img";

export default function Projects(): React.JSX.Element {
  return (
    <article
      className="relative flex-col gap-12 flex justify-center items-center main-padding"
      id="projects"
    >
      {/* bullets */}
      <div className="max-xl:hidden absolute left-56 top-24 w-56 aspect-square rounded-full  bg-turquoise/30 blur-3xl -z-10" />
      <div className="max-xl:hidden absolute right-56 top-[45rem] w-56 aspect-square rounded-full  bg-bluedarker/30 blur-3xl -z-10" />
      <GradientText
        text1="Featured"
        text2="Projects"
        bigger
        className="text-center"
      />
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-x-36 lg:gap-y-24 md:px-normal 2xl:px-longer">
        {projectsData?.map((e, i: number) => {
          return (
            <figure className="relative shadow" key={i}>
              <Img
                src={e?.src}
                alt={e?.title}
                className="object-cover w-full h-full"
              />
              <figure className="absolute flex items-center justify-center z-10 -bottom-14 left-0 md:-bottom-8 md:-left-20 polygonproject w-44 aspect-[5/3] from-bluedarker to-turquoise bg-gradient-to-b">
                <Img
                  src={e?.icon}
                  alt={e?.title}
                  className="w-[50%] -translate-x-1"
                />
              </figure>
              <section className="flex px-6 md:px-longer2 lg:px-8 flex-col items-center justify-center gap-5 absolute animate-longer w-full h-full opacity-0 hover:opacity-100 bg-[#343434]/80 top-0 backdrop-blur">
                <h2 className="drop-shadow text-center lg:h3">{e?.title}</h2>
                <header className="flex flex-col gap-2">
                  <p className="custom-text-size">{e?.desc}</p>
                  <ul className="custom-text-size list-disc pl-4">
                    {e?.lists?.map((list, listIndex: number) => {
                      return <li key={listIndex}>{list}</li>;
                    })}
                  </ul>
                </header>
                <a
                  href={e?.href}
                  target="_blank"
                  className="group relative w-32 h-9 group"
                >
                  <span className="animate group-hover:translate-x-1 group-hover:-translate-y-1 border-[2px] border-white w-full h-full absolute top-0 flex justify-center items-center">
                    Visit Web
                  </span>
                  <div className="animate opacity-0 group-hover:opacity-100 absolute top-0 -z-10 w-full h-full gradient-web bg-animate" />
                </a>
              </section>
            </figure>
          );
        })}
      </section>
    </article>
  );
}
