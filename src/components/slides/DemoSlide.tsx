"use client";

import { Slide } from "../Slide";
import { motion } from "framer-motion";
import { useState } from "react";

export function DemoSlide({ direction }: { direction: number }) {
  const [iframeActive, setIframeActive] = useState(false);
  const [loadError, setLoadError] = useState(false);

  return (
    <Slide
      direction={direction}
      className="bg-[#0a0a0a] !px-2 md:!px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xl md:text-2xl font-bold text-white mb-4 text-center"
      >
        try it yourself
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl"
      >
        {!loadError ? (
          <>
            <iframe
              src="https://gtasf.lol"
              className="w-full h-full"
              allow="fullscreen; autoplay; gamepad"
              title="GTA: San Francisco"
              onError={() => setLoadError(true)}
            />
            {!iframeActive && (
              <div
                onClick={() => setIframeActive(true)}
                className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer hover:bg-black/20 transition-colors"
              >
                <div className="text-center">
                  <div className="text-4xl mb-2">🎮</div>
                  <p className="text-white font-medium">Click to play</p>
                  <p className="text-white/40 text-xs mt-1">
                    Press Escape to resume navigation
                  </p>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-white/5">
            <div className="text-center">
              <p className="text-white/60 mb-4">
                Game couldn&apos;t load in embed
              </p>
              <a
                href="https://gtasf.lol"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Play GTA:SF →
              </a>
            </div>
          </div>
        )}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-white/20 text-xs mt-4"
      >
        arrow keys to continue →
      </motion.p>
    </Slide>
  );
}
