import { cn } from "../../../lib/utls";

export const HoneycombPattern = ({ className }: { className?: string }) => {
  const id = `honeycomb-${Date.now()}`;
  return (
    <svg
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("absolute top-0 h-full w-full", className)}
    >
      <defs>
        <pattern
          id={id}
          width="40"
          height="23"
          patternUnits="userSpaceOnUse"
          patternTransform="scale(1)"
        >
          <g>
            <path
              d="M10 0 l10 0 l10 17.3 l-10 17.3 l-10 0 l-10 -17.3 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path
              d="M30 0 l10 0 l10 17.3 l-10 17.3 l-10 0 l-10 -17.3 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path
              d="M-10 0 l10 0 l10 17.3 l-10 17.3 l-10 0 l-10 -17.3 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </g>
        </pattern>
      </defs>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill={`url(#${id})`}
        opacity="0.3"
      ></rect>
    </svg>
  );
};
