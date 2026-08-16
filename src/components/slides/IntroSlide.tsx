"use client";

import { Slide } from "../Slide";
import { motion } from "framer-motion";

export function IntroSlide({ direction }: { direction: number }) {
  return (
    <Slide
      direction={direction}
      className="bg-gradient-to-b from-[#0c1220] via-[#1a1040] to-[#0c1220] relative"
    >
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-orange-500/10 to-transparent" />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="relative z-10 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-orange-400 text-sm md:text-base font-mono tracking-widest uppercase mb-4"
        >
          introducing
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 leading-tight">
          GTA:SF
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-3xl text-white/80 mt-4 font-light"
        >
          Bay Area Founder Simulator
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-sm md:text-base text-white/40 mt-6 max-w-lg mx-auto"
        >
          An open-world game built entirely with vibe coding.
          <br />
          Real map data. Real Bay Area energy.
        </motion.p>
      </motion.div>
    </Slide>
  );
}
