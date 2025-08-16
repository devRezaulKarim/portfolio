import { cn } from "../../lib/utls";

export const TieIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn("w-32", className)}
      viewBox="0 0 183 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M71.0469 62.7295L47.3916 0.514236L0.595781 27.5318L43.0093 78.9171L71.0469 62.7295ZM48.9606 89.6847L92.2248 236.111L168.283 259.76L182.227 184.149L77.7575 73.0589L48.9606 89.6847ZM101.736 82.9988L168.046 147.944L181.004 140.463L170.977 123.096L101.736 82.9988Z"
        fill="white"
        fillOpacity="0.15"
      />
    </svg>
  );
};
