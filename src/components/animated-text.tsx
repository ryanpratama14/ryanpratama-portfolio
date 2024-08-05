import { motion } from "framer-motion";

type Props = {
  text?: string;
  className?: string;
};

export default function AnimatedText({ text, className }: Props) {
  const quote = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const singleWord = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.25,
      },
    },
  };
  return (
    <motion.h3 variants={quote} initial="initial" animate="animate" className={`${className} inline-block`}>
      {text?.split(" ").map((e: string) => {
        return (
          <motion.span key={e} variants={singleWord} className="inline-block">
            {e}&nbsp;
          </motion.span>
        );
      })}
    </motion.h3>
  );
}
