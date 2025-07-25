import { cn } from "../../../lib/utls";

export const WPIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn("w-14", className)}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.80952 16.6429L21.1905 46.1905L28 21.1905M16.6429 16.6429H5.2619M32.5476 16.6429H21.1905M39.3571 9.80952L40.2619 10.7143C41.4179 11.8715 42.3347 13.2451 42.9597 14.7566C43.5848 16.2682 43.9059 17.8881 43.9048 19.5238C43.9046 20.6251 43.7605 21.7217 43.4762 22.7857L37.0952 46.1905L25.7381 16.6429M53 28C53 41.8071 41.8071 53 28 53C14.1929 53 3 41.8071 3 28C3 14.1929 14.1929 3 28 3C41.8071 3 53 14.1929 53 28Z"
        fill="currentColor"
        stroke-width="4.54762"
        stroke-miterlimit="10"
      />
    </svg>
  );
};
