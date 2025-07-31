import { cn } from "../../lib/utls";

export const LinePattern = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("absolute top-0 h-full w-1/3", className)}
    >
      <defs>
        <pattern
          id="pattern-lines"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <line x1="0" y1="10" x2="20" y2="10" stroke="#555" strokeWidth="1" />
        </pattern>
      </defs>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="url(#pattern-lines)"
        opacity="0.3"
      ></rect>
    </svg>
  );
};
