"use client";

import { Slide } from "../Slide";
import { motion } from "framer-motion";

const tweets = [
  { handle: "@techbro_42", text: "lmao good luck with that 😂", delay: 0.6 },
  { handle: "@indie_dev", text: "AI can't even center a div", delay: 1.0 },
  { handle: "@vc_partner", text: "sure buddy, let me know when it ships", delay: 1.4 },
  { handle: "@cs_student", text: "bro thinks he's Rockstar Games 💀", delay: 1.8 },
];

export function MemeSlide({ direction }: { direction: number }) {
  return (
    <Slide
      direction={direction}
      className="bg-gradient-to-br from-purple-900 via-fuchsia-900 to-pink-900"
    >
      <motion.h2
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="text-4xl md:text-6xl lg:text-8xl font-black text-white mb-10 text-center"
      >
        the internet laughed
      </motion.h2>

      <div className="flex flex-col gap-3 max-w-md w-full">
        {tweets.map((tweet) => (
          <motion.div
            key={tweet.handle}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: tweet.delay, duration: 0.4 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10"
          >
            <span className="text-white/40 text-xs">{tweet.handle}</span>
            <p className="text-white/80 text-sm mt-1">{tweet.text}</p>
          </motion.div>
        ))}
      </div>
    </Slide>
  );
}
