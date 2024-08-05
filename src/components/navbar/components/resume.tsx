import Iconify from "@/components/iconify";

type Props = { title: string };

export default function Resume({ title }: Props) {
  return (
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noreferrer"
      type="button"
      className="outline-none flex gap-3 h-full items-center group select-none"
    >
      <Iconify
        icon="pepicons-pencil:cv-circle"
        className="text-3xl md:text-4xl rotate-[16deg] group-hover:rotate-0 group-hover:scale-110 animate"
      />
      <section className="relative h-full flex items-center">
        <span className="cursor-pointer z-[2] text-lg label">{title}</span>
        <div className="-skew-x-[16deg] absolute top-0 w-full h-full flex justify-center items-center z-[1]">
          <div className="w-6 h-full bg-turquoise group-hover:bg-bluedarker animate" />
          <div className="w-2 h-full bg-bluedarker group-hover:bg-white animate" />
        </div>
      </section>
    </a>
  );
}
