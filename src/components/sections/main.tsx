import bg from "@/assets/bg.png";
import GradientText from "@/components/gradient-text";
import Img from "@/components/img";
import type { DictionaryStatic, LanguageFn } from "@/types";

type Props = { t: DictionaryStatic; fn: LanguageFn };

export default function Main({ t }: Props) {
  return (
    <article className="relative flex flex-col justify-center main-padding min-h-screen">
      {/* bullets */}
      <div className="max-xl:hidden absolute left-44 top-44 w-72 aspect-square rounded-full bg-bluedarker/30 blur-3xl -z-10" />
      <div className="max-xl:hidden absolute right-56 top-36 w-44 aspect-square rounded-full  bg-turquoise/30 blur-3xl -z-10" />
      <div className="max-xl:hidden absolute left-96 bottom-36 w-56 aspect-square rounded-full  bg-blue/30 blur-3xl -z-10" />
      <section className="flex justify-between items-center flex-wrap lg:flex-nowrap gap-x-6 gap-y-16">
        <section className="w-full lg:w-[50%] flex flex-col gap-6">
          <section className="flex flex-col gap-2">
            <GradientText text1={t.PERSONAL_DATA.softwareEngineer.split(" ")[0] ?? ""} text2={t.PERSONAL_DATA.softwareEngineer.split(" ")[1] ?? ""} />
            <h1 className="-translate-x-1 lg:-translate-x-2.5 w-full uppercase">
              <span>{t.PERSONAL_DATA.fullName.split(" ")[0]}</span>
              <span className="max-xl:hidden absolute translate-x-6 pratama">{t.PERSONAL_DATA.fullName.split(" ")[1]}!</span>
            </h1>
            <p>{t.PERSONAL_DATA.summary}</p>
          </section>
          <nav className="flex gap-6 items-center">
            <a
              href="#contact"
              className="text-lg relative group font-semibold h-10 w-44 flex items-center justify-center from-bluedarker to-turquoise bg-gradient-to-r rounded-3xl"
            >
              <div className="absolute w-full h-full opacity-0 group-hover:opacity-100 bg-white animate rounded-3xl" />
              <span className="animate drop-shadow z-[1] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br from-turquoise to-bluedarker">
                {t.PERSONAL_DATA.contactMe}
              </span>
            </a>
            <a href="#about" className="text-gray hover:text-white animate text-lg">
              {t.PERSONAL_DATA.learnMore}
            </a>
          </nav>
        </section>
        <figure className="w-full lg:w-[50%] relative">
          <Img src={bg} alt={t.PERSONAL_DATA.fullName} priority={true} />
        </figure>
      </section>
    </article>
  );
}
