import type { CSSProperties } from "react";
import { cn } from "../../../lib/utls";

export const TailwindIcon = ({ className }: { className?: string }) => {
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
      viewBox="0 0 50 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ "--neon": neonColor } as CSSProperties}
    >
      <path
        d="M12.5 10.5C14.1667 3.83333 18.3333 0.5 25 0.5C35 0.5 36.25 8 41.25 9.25C44.5833 10.0833 47.5 8.83333 50 5.5C48.3333 12.1667 44.1667 15.5 37.5 15.5C27.5 15.5 26.25 8 21.25 6.75C17.9167 5.91667 15 7.16667 12.5 10.5ZM0 25.5C1.66667 18.8333 5.83333 15.5 12.5 15.5C22.5 15.5 23.75 23 28.75 24.25C32.0833 25.0833 35 23.8333 37.5 20.5C35.8333 27.1667 31.6667 30.5 25 30.5C15 30.5 13.75 23 8.75 21.75C5.41667 20.9167 2.5 22.1667 0 25.5Z"
        fill="currentColor"
        className="duration-[1s] group-hover:drop-shadow-[0_0_8px_var(--neon)]"
      />
    </svg>
  );
};
