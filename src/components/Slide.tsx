"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

export function Slide({
  children,
  className = "",
  direction = 1,
}: {
  children: ReactNode;
  className?: string;
  direction?: number;
}) {
  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`h-dvh w-full flex flex-col items-center justify-center px-6 md:px-12 overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}
