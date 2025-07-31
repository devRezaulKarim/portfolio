import { cn } from "../../lib/utls";

export const TriangleMeshPattern = ({ className }: { className?: string }) => {
  return (
    <svg
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("absolute top-0 h-full w-1/2", className)}
    >
      <defs>
        <pattern
          id="triangle-mesh"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <g fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M0 0 l20 40 l-20 0 Z" />
            <path d="M20 40 l20 -40 l0 40 Z" />
            <path d="M0 0 l40 0 l-20 40 Z" />
          </g>
        </pattern>
      </defs>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="url(#triangle-mesh)"
        opacity="0.3"
      ></rect>
    </svg>
  );
};
