"use client";

import { Slide } from "../Slide";
import { motion } from "framer-motion";

export function CTASlide({ direction }: { direction: number }) {
  return (
    <Slide
      direction={direction}
      className="bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-8 max-w-2xl"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white">
          Ready to play?
        </h2>

        <p className="text-xl md:text-2xl text-white/80">
          The game is live. The code is open. The city is waiting.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
        >
          <a
            href="https://gtasf.lol"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black font-bold px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-colors"
          >
            Play Now →
          </a>
          <a
            href="https://github.com/yourusername/gta-sf"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-white/10 transition-colors"
          >
            View Source
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-white/40 text-sm pt-8"
        >
          Built with Three.js • Open source • Free forever
        </motion.p>
      </motion.div>
    </Slide>
  );
}
