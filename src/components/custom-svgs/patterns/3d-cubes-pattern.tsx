import { cn } from "../../../lib/utls";

export const ThreeDCubesPattern = ({ className }: { className?: string }) => {
  const id = `3d-cubes-${Date.now()}`;
  return (
    <svg
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("absolute top-0 left-0 h-full w-full", className)}
    >
      <defs>
        <pattern id={id} width="50" height="86.6" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M25 0 l25 14.43 v28.86 l-25 14.43 l-25 -14.43 v-28.86 Z" />
            <path d="M25 0 l0 28.86" />
            <path d="M0 43.3 l25 14.43" />
            <path d="M50 43.3 l-25 14.43" />
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
