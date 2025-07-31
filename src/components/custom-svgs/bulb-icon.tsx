import type { CSSProperties, SVGAttributes } from "react";
import { cn } from "../../lib/utls";

interface BulbIconProps extends SVGAttributes<SVGSVGElement> {
  className?: string;
  size?: number | string;
  neonColor?: string;
}

export const BulbIcon = ({
  className,
  size = 48,
  neonColor = "#00ffff",
  ...props
}: BulbIconProps) => {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={cn("group", className)}
      style={{ "--neon": neonColor } as CSSProperties}
      {...props}
    >
      {/* Bulb Body */}
      <g className="transition-all duration-500">
        <path
          d="M16,7a8.36,8.36,0,0,0-8,8,8.4,8.4,0,0,0,2.29,5.7A4.56,4.56,0,0,1,12,24a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1,4.46,4.46,0,0,1,1.69-3.28A7.87,7.87,0,0,0,24,15a8.17,8.17,0,0,0-2.44-5.83A7.67,7.67,0,0,0,16,7Zm4.34,12.28A6.87,6.87,0,0,0,18.09,23H13.91a7,7,0,0,0-2.2-3.71A6.41,6.41,0,0,1,10,15a6.29,6.29,0,0,1,6-6,5.63,5.63,0,0,1,4.13,1.6A6.16,6.16,0,0,1,22,15,5.93,5.93,0,0,1,20.31,19.28Z"
          className="transition-all duration-500 group-hover:fill-[var(--neon)] group-hover:drop-shadow-[0_0_4px_var(--neon)]"
        />
        <path d="M19,26H13a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z" />
        <path d="M18,29H14a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Z" />
      </g>

      {/* Rays (initially currentColor, scale 0) */}
      <g
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="transition-all duration-500 group-hover:stroke-[var(--neon)]"
      >
        {[
          { x1: 5, y1: 14, x2: 3, y2: 14 },
          { x1: 29, y1: 14, x2: 31, y2: 14 },
          { x1: 25.2, y1: 5.2, x2: 26.5, y2: 3.9 },
          { x1: 6.8, y1: 5.2, x2: 5.5, y2: 3.9 },
          { x1: 16, y1: 2, x2: 16, y2: 0 },
        ].map((line, i) => (
          <line
            key={i}
            {...line}
            className="origin-center scale-0 transition-transform duration-200 group-hover:scale-100 group-hover:drop-shadow-[0_0_2px_var(--neon)]"
          />
        ))}
      </g>
    </svg>
  );
};
