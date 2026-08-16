"use client";

import { Slide } from "../Slide";
import { motion } from "framer-motion";

const words = ["...but", "what if", "you", "actually", "tried it?"];

export function PlotTwistSlide({ direction }: { direction: number }) {
  return (
    <Slide direction={direction} className="bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />

      <div className="relative z-10 flex flex-wrap justify-center gap-x-4 gap-y-2 max-w-3xl">
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.4, duration: 0.5 }}
            className="text-3xl md:text-5xl lg:text-7xl font-black text-white"
          >
            {word}
          </motion.span>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15)_0%,transparent_60%)]"
      />
    </Slide>
  );
}
