import { cn } from "../../../lib/utls";

export const SnowflakePattern = ({ className }: { className?: string }) => {
  const id = `snowflake-${Date.now()}`;
  return (
    <svg className={cn("absolute top-0 h-full w-1/2", className)}>
      <defs>
        <pattern
          id={id}
          x="0"
          y="0"
          width="50"
          height="50"
          patternUnits="userSpaceOnUse"
        >
          <g transform="scale(0.4)">
            <path
              d="M50 10 L50 90 M10 50 L90 50 M20 20 L80 80 M20 80 L80 20"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M50 10 L40 20 M50 10 L60 20"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M50 90 L40 80 M50 90 L60 80"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M10 50 L20 40 M10 50 L20 60"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M90 50 L80 40 M90 50 L80 60"
              stroke="currentColor"
              strokeWidth="2"
            />
          </g>
        </pattern>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
};
