import { cn } from "@/lib/functions";

type Props = {
  text1: string;
  text2: string;
  bigger?: boolean;
  className?: string;
};

export default function GradientText({ text1, text2, bigger, className }: Props) {
  return (
    <h2 className={cn(`${className} text-3xl md:text-[2.5rem]`, { "text-4xl md:text-5xl": bigger })}>
      {text1} <span className="text-transparent bg-clip-text bg-gradient-to-br from-turquoise to-bluedarker">{text2}</span>
    </h2>
  );
}
