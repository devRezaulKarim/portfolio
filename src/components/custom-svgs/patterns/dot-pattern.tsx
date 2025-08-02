import { cn } from "../../../lib/utls";

export const DotPattern = ({ className }: { className?: string }) => {
  const id = `dot-pattern-${Date.now()}`;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("absolute top-0 h-full w-full", className)}
    >
      <defs>
        <pattern
          id={id}
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
            fill="currentColor"
          ></circle>
        </pattern>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill={`url(#${id})`}></rect>
    </svg>
  );
};
