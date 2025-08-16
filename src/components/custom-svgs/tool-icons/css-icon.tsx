import type { CSSProperties } from "react";
import { cn } from "../../../lib/utls";

export const CSSIcon = ({ className }: { className?: string }) => {
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
        d="M0.25 0.5L4.5895 49.5435L25 55.5L45.537 49.5462L49.75 0.5L0.25 0.5ZM36.825 40.9855L25.0192 44.2965H25L13.1833 40.9855L12.3665 32.2763H18.1635L18.576 36.4728L24.9972 38.23L31.4322 36.47L32.106 28.0825L12.1135 28.0825L11.5992 22.566L32.6092 22.566L33.0877 17.0495L11.041 17.0495L10.557 11.533L39.4485 11.533L36.825 40.9855Z"
        fill="currentColor"
        className="duration-[1s] group-hover:drop-shadow-[0_0_8px_var(--neon)]"
      />
    </svg>
  );
};
