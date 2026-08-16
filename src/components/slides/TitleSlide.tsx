"use client";

import { Slide } from "../Slide";
import { motion } from "framer-motion";

export function TitleSlide({ direction }: { direction: number }) {
  return (
    <Slide
      direction={direction}
      className="bg-[#0d1117] relative"
    >
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(0,255,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />

      <div className="relative z-10 max-w-4xl w-full">
        <div className="bg-[#1a1f2e] rounded-xl border border-[#30363d] p-6 md:p-10 shadow-2xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-sm text-white/30 font-mono">claude</span>
          </div>

          <div className="font-mono">
            <span className="text-green-400 text-sm md:text-base">{">"}</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xl md:text-3xl lg:text-4xl text-white ml-2"
            >
              hey Claude, build me GTA 6
            </motion.span>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-4 font-mono text-sm md:text-base text-white/40"
          >
            don&apos;t mess it up.
          </motion.div>

          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2.5 h-5 bg-green-400 ml-1 mt-2"
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="text-center text-white/30 text-sm mt-8"
        >
          press arrow keys or swipe to navigate →
        </motion.p>
      </div>
    </Slide>
  );
}
