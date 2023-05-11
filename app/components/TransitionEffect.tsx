import { motion } from "framer-motion";

export default function TransitionEffect(): JSX.Element {
  return (
    <>
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-primaryDark dark:bg-primary"
      />
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeIn" }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-secondary"
      />
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeIn" }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-secondaryDark"
      />
    </>
  );
}
