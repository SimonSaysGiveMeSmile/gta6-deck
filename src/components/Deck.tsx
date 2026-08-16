"use client";

import { AnimatePresence } from "framer-motion";
import { useSlideNavigation } from "@/hooks/useSlideNavigation";
import { NavigationDots } from "./NavigationDots";
import { TitleSlide } from "./slides/TitleSlide";
import { MemeSlide } from "./slides/MemeSlide";
import { PlotTwistSlide } from "./slides/PlotTwistSlide";
import { IntroSlide } from "./slides/IntroSlide";
import { GameplaySlide } from "./slides/GameplaySlide";
import { TechSlide } from "./slides/TechSlide";
import { DemoSlide } from "./slides/DemoSlide";
import { OpenSourceSlide } from "./slides/OpenSourceSlide";
import { CTASlide } from "./slides/CTASlide";
import { ComponentType } from "react";

const slides: ComponentType<{ direction: number }>[] = [
  TitleSlide,
  MemeSlide,
  PlotTwistSlide,
  IntroSlide,
  GameplaySlide,
  TechSlide,
  DemoSlide,
  OpenSourceSlide,
  CTASlide,
];

export function Deck() {
  const { currentSlide, direction, goTo } = useSlideNavigation(slides.length);
  const CurrentSlide = slides[currentSlide];

  return (
    <div className="h-dvh w-full overflow-hidden relative bg-black">
      <AnimatePresence mode="wait" custom={direction}>
        <CurrentSlide key={currentSlide} direction={direction} />
      </AnimatePresence>
      <NavigationDots
        total={slides.length}
        current={currentSlide}
        onNavigate={goTo}
      />
    </div>
  );
}
