import { AnimatePresence, motion } from "framer-motion";

export default function TransitionEffect() {
  return (
    <AnimatePresence>
      <motion.div
        key={1}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-black"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        key={2}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-gray"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        key={3}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-graydarker"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
      />
    </AnimatePresence>
  );
}
