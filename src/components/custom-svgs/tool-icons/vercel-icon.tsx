import { cn } from "../../../lib/utls";

export const VercelIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn("w-14", className)}
      viewBox="0 0 50 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M25 0L50 43.75H0L25 0Z" fill="currentColor" />
    </svg>
  );
};
