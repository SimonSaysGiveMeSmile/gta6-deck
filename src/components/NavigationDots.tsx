"use client";

export function NavigationDots({
  total,
  current,
  onNavigate,
}: {
  total: number;
  current: number;
  onNavigate: (index: number) => void;
}) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-50">
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          onClick={() => onNavigate(i)}
          aria-label={`Go to slide ${i + 1}`}
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
            i === current
              ? "bg-white scale-125 shadow-[0_0_8px_rgba(255,255,255,0.6)]"
              : "bg-white/30 hover:bg-white/60"
          }`}
        />
      ))}
    </div>
  );
}
