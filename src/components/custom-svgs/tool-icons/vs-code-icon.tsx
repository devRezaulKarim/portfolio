import type { CSSProperties } from "react";
import { cn } from "../../../lib/utls";

export const VSCodeIcon = ({ className }: { className?: string }) => {
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
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ "--neon": neonColor } as CSSProperties}
    >
      <path
        d="M37.5031 1.99428C37.5031 0.4247 35.7458 0.424682 34.9647 0.62088C36.0581 -0.242394 37.3404 -0.0330896 37.796 0.228502L48.3557 5.40624C49.3618 5.8996 50 6.92612 50 8.05108V42.113C50 43.253 49.3448 44.2905 48.3182 44.7759L38.3819 49.4743C37.6983 49.7684 36.2144 50.4945 34.9647 49.4741C36.5269 49.7686 37.3729 48.6568 37.5031 47.9046V1.99428Z"
        fill="currentColor"
        className="duration-[1s] group-hover:drop-shadow-[0_0_8px_var(--neon)]"
      />
      <path
        d="M35.0917 0.592683C35.9206 0.428878 37.5035 0.504843 37.5035 1.99439V13.7189L5.48859 37.9383C4.929 38.3617 4.14146 38.2913 3.66483 37.7756L0.365238 34.2052C-0.151672 33.646 -0.115505 32.7704 0.44576 32.2561L34.9649 0.620987L35.0917 0.592683Z"
        fill="currentColor"
        className="duration-[1s] group-hover:drop-shadow-[0_0_8px_var(--neon)]"
      />
      <path
        d="M37.5035 36.3767L5.48859 12.1572C4.929 11.7339 4.14146 11.8042 3.66483 12.3199L0.365238 15.8903C-0.151672 16.4496 -0.115505 17.3251 0.44576 17.8396L34.9649 49.4746C36.527 49.7689 37.3733 48.6571 37.5035 47.905V36.3767Z"
        fill="currentColor"
        className="duration-[1s] group-hover:drop-shadow-[0_0_8px_var(--neon)]"
      />
    </svg>
  );
};
