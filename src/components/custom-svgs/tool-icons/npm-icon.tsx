import type { CSSProperties } from "react";
import { cn } from "../../../lib/utls";

export const NPMIcon = ({ className }: { className?: string }) => {
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
      viewBox="0 0 50 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ "--neon": neonColor } as CSSProperties}
    >
      <path
        d="M24.9525 9.98267H22.2953V5.64233H24.9525V9.98267Z"
        fill="currentColor"
        className="duration-[1s] group-hover:drop-shadow-[0_0_8px_var(--neon)]"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50 0V15.625H25V18.75H14.0625V15.625H0V0H50ZM16.791 15.625H22.2953V12.5H27.7047V3.125H16.791V15.625ZM3.125 12.5H8.53442V5.64233H11.2866V12.5H14.0388V3.125H3.125V12.5ZM30.4568 12.5H35.8664V5.64233H38.6184V12.5H41.3706V5.64233H44.1228V12.5H46.875V3.125H30.4568V12.5Z"
        fill="currentColor"
        className="duration-[1s] group-hover:drop-shadow-[0_0_8px_var(--neon)]"
      />
    </svg>
  );
};
