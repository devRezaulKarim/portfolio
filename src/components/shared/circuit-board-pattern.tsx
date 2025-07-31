import { cn } from "../../lib/utls";

export const CircuitBoardPattern = ({ className }: { className?: string }) => {
  return (
    <svg
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("absolute top-0 h-full w-1/2", className)}
    >
      <defs>
        <pattern
          id="circuit-board"
          width="80"
          height="80"
          patternUnits="userSpaceOnUse"
        >
          <g fill="none" stroke="#555" strokeWidth="1">
            <path d="M0 10 h20 v20 h-20 Z" />
            <path d="M20 30 h20 v20 h-20 Z" />
            <path d="M40 50 h20 v20 h-20 Z" />
            <path d="M60 70 h20 v10" />
            <path d="M10 0 v10" />
            <path d="M30 20 v10" />
            <path d="M50 40 v10" />
            <path d="M70 60 v10" />
            <circle cx="10" cy="10" r="2" fill="#555" />
            <circle cx="30" cy="30" r="2" fill="#555" />
            <circle cx="50" cy="50" r="2" fill="#555" />
            <circle cx="70" cy="70" r="2" fill="#555" />
          </g>
        </pattern>
      </defs>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="url(#circuit-board)"
        opacity="0.3"
      ></rect>
    </svg>
  );
};
