"use client";

import { Slide } from "../Slide";
import { motion } from "framer-motion";

const missions = [
  { emoji: "🤝", label: "Networking events" },
  { emoji: "📊", label: "Pitch decks & demo days" },
  { emoji: "☕", label: "Coffee chats" },
  { emoji: "🧗", label: "Rock climbing" },
  { emoji: "🏓", label: "Pickleball" },
  { emoji: "🕺", label: "Clubbing" },
];

const vehicles = [
  { emoji: "🚗", label: "Teslas" },
  { emoji: "🛹", label: "Electric skateboards" },
  { emoji: "🚌", label: "Muni & BART" },
  { emoji: "🛴", label: "Scooters" },
];

export function GameplaySlide({ direction }: { direction: number }) {
  return (
    <Slide
      direction={direction}
      className="bg-gradient-to-br from-[#0a0a1a] via-[#1a0a2e] to-[#0a1a2e]"
    >
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-8 md:gap-12">
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl md:text-3xl font-bold text-white mb-6"
          >
            Missions
          </motion.h3>
          <div className="flex flex-col gap-3">
            {missions.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-2.5 border border-white/5"
              >
                <span className="text-xl">{m.emoji}</span>
                <span className="text-white/80 text-sm md:text-base">{m.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl font-bold text-white mb-6"
          >
            Vehicles
          </motion.h3>
          <div className="flex flex-col gap-3">
            {vehicles.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-2.5 border border-white/5"
              >
                <span className="text-xl">{v.emoji}</span>
                <span className="text-white/80 text-sm md:text-base">{v.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
}
