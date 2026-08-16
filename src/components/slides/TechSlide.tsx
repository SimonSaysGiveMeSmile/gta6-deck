"use client";

import { Slide } from "../Slide";
import { motion } from "framer-motion";

const stack = [
  { label: "OpenStreetMap", desc: "Real geographic data" },
  { label: "Vibe Coding", desc: "AI-assisted development" },
  { label: "Open Source", desc: "Community-driven" },
  { label: "Web-native", desc: "Runs in your browser" },
];

export function TechSlide({ direction }: { direction: number }) {
  return (
    <Slide
      direction={direction}
      className="bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#0a1628]"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 text-center"
      >
        Built with real data
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg md:text-xl text-white/40 mb-10 text-center"
      >
        + pure vibe coding energy
      </motion.p>

      <div className="grid grid-cols-2 gap-4 max-w-lg w-full">
        {stack.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + i * 0.15, type: "spring" }}
            className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
          >
            <div className="text-white font-semibold text-sm md:text-base">
              {item.label}
            </div>
            <div className="text-white/40 text-xs mt-1">{item.desc}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-10 font-mono text-xs md:text-sm text-green-400/60 bg-black/30 rounded-lg px-4 py-3 border border-green-400/10"
      >
        <span className="text-green-400/40">$</span> npx vibe-code --model claude --prompt &quot;build me an open world game&quot;
      </motion.div>
    </Slide>
  );
}
