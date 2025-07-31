import { cn } from "../../lib/utls";

export const FishScalesPattern = ({ className }: { className?: string }) => {
  return (
    <svg
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("absolute top-0 h-full w-1/2", className)}
    >
      <defs>
        <pattern
          id="fish-scales"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <g fill="none" stroke="#555" strokeWidth="1">
            <path d="M0 10 C 5 0, 15 0, 20 10 S 15 20, 10 20 S 5 20, 0 10" />
          </g>
        </pattern>
      </defs>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="url(#fish-scales)"
        opacity="0.3"
      ></rect>
    </svg>
  );
};
