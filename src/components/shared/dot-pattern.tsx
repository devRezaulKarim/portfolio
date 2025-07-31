import { cn } from "../../lib/utls";

export const DotPattern = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("absolute top-0 h-full w-1/2", className)}
    >
      <defs>
        <pattern
          id="pattern-circles"
          x="0"
          y="0"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
        >
          <circle
            id="pattern-circle"
            cx="20"
            cy="20"
            r="2"
            fill="#444"
          ></circle>
        </pattern>
      </defs>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="url(#pattern-circles)"
      ></rect>
    </svg>
  );
};
