"use client";

import { useState, useEffect, useCallback, useRef } from "react";

export function useSlideNavigation(totalSlides: number) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const wheelTimeout = useRef<NodeJS.Timeout | null>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const next = useCallback(() => {
    setCurrent((prev) => {
      if (prev >= totalSlides - 1) return prev;
      setDirection(1);
      return prev + 1;
    });
  }, [totalSlides]);

  const prev = useCallback(() => {
    setCurrent((prev) => {
      if (prev <= 0) return prev;
      setDirection(-1);
      return prev - 1;
    });
  }, []);

  const goTo = useCallback(
    (index: number) => {
      setCurrent((prev) => {
        setDirection(index > prev ? 1 : -1);
        return Math.max(0, Math.min(totalSlides - 1, index));
      });
    },
    [totalSlides]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLIFrameElement ||
        (e.target instanceof HTMLElement && e.target.closest("iframe"))
      )
        return;

      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
        case " ":
          e.preventDefault();
          next();
          break;
        case "ArrowLeft":
        case "ArrowUp":
          e.preventDefault();
          prev();
          break;
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (wheelTimeout.current) return;
      wheelTimeout.current = setTimeout(() => {
        wheelTimeout.current = null;
      }, 800);

      if (e.deltaY > 0) next();
      else if (e.deltaY < 0) prev();
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStart.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStart.current) return;
      const dx = e.changedTouches[0].clientX - touchStart.current.x;
      const dy = e.changedTouches[0].clientY - touchStart.current.y;
      const absDx = Math.abs(dx);
      const absDy = Math.abs(dy);

      if (Math.max(absDx, absDy) < 50) return;

      if (absDx > absDy) {
        if (dx < 0) next();
        else prev();
      } else {
        if (dy < 0) next();
        else prev();
      }
      touchStart.current = null;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [next, prev]);

  return { currentSlide: current, direction, next, prev, goTo };
}
