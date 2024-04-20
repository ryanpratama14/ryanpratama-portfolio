import GradientText from "@/components/GradientText";
import Iconify from "@/components/Iconify";
import { linkSocial } from "@/lib/constants";
import Link from "next/link";

type Props = { isMain?: boolean };

export default function Contacts({ isMain = true }: Props): React.JSX.Element {
  return (
    <article
      id="contacts"
      className={`relative main-padding flex flex-col gap-6 justify-center ${isMain ? "min-h-[40vh]" : "min-h-[50vh]"}`}
    >
      <div className="top-12 max-xl:hidden absolute left-44 w-72 aspect-square rounded-full bg-blue/30 blur-3xl -z-10" />
      <GradientText text1="More" text2="Contacts" bigger />
      <p className="md:w-[80%] lg:w-[70%] xl:w-[65%]">
        I am actively seeking new opportunities at the moment and would be open to hearing about any potential opportunities that may
        be available. Please feel free to reach out to me if you have any leads or if you would like to discuss potential
        collaborations.
      </p>
      <nav className="flex gap-2 self-end">
        {linkSocial.map((e) => {
          return (
            <Link key={e.href} href={e.href} target="_blank" className="flex flex-col items-center hover:shadow-glowed">
              <span className="rotate-[10deg] hover:rotate-0 hover:-translate-y-1 hover:scale-110 animate-longer">
                <Iconify icon={e.icon} width={35} />
              </span>
            </Link>
          );
        })}
      </nav>
    </article>
  );
}
