import type { CSSProperties } from "react";
import { cn } from "../../../lib/utls";

export const VercelIcon = ({ className }: { className?: string }) => {
  const neonColor = [
    "#a6fd29",
    "#74ee15",
    "#ffe700",
    "#00f0ff",
    "#ff00ff",
    "#39ff14",
    "#ff6ec7",
    "#f9ff33",
    "#ff3131",
    "#00ff9f",
  ][Math.floor(Math.random() * 10)];

  return (
    <svg
      className={cn("w-14 overflow-visible", className)}
      viewBox="0 0 50 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ "--neon": neonColor } as CSSProperties}
    >
      <path
        d="M25 0L50 43.75H0L25 0Z"
        fill="currentColor"
        className="duration-[1s] group-hover:drop-shadow-[0_0_8px_var(--neon)]"
      />
    </svg>
  );
};
