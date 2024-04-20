import { motion } from "framer-motion";
import { Fragment } from "react";

export default function TransitionEffect() {
  return (
    <Fragment>
      <motion.section
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-black"
      />
      <motion.section
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.2, duration: 1, ease: "easeIn" }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-blue"
      />
      <motion.section
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.4, duration: 1, ease: "easeIn" }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-turquoise"
      />
    </Fragment>
  );
}
