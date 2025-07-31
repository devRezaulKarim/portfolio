import type { CSSProperties } from "react";
import { cn } from "../../../lib/utls";

export const HTMLIcon = ({ className }: { className?: string }) => {
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
      viewBox="0 0 50 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ "--neon": neonColor } as CSSProperties}
    >
      <path
        d="M0.25 0.5L4.5895 49.516L25 55.5L45.5342 49.5187L49.75 0.5L0.25 0.5ZM38.8848 17.132H16.9562L17.4292 22.676H38.596L36.8745 40.7297L25.198 44.5275L13.4253 40.5262L12.6332 32.4632H18.1993L18.6393 36.3435L25.2393 38.5847L31.6907 36.4865L32.5075 28.2227L12.394 28.2227L10.8485 11.5852L39.4815 11.5852L38.8848 17.132Z"
        fill="currentColor"
        className="duration-1000 group-hover:drop-shadow-[0_0_8px_var(--neon)]"
      />
    </svg>
  );
};
