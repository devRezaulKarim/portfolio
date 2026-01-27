import type { CustomIconType } from "@/types/types";

export default function VerticalLine({
  className,
  width = 9,
  height = 100,
  ...rest
}: CustomIconType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 9 100"
      fill="none"
      className={className}
      {...rest}
    >
      <line
        x1="4.48382"
        y1="19.3949"
        x2="4.48382"
        y2="29.0522"
        stroke="currentColor"
        strokeWidth="2.12132"
        strokeLinecap="round"
      />
      <line
        x1="4.48382"
        y1="74.3976"
        x2="4.48382"
        y2="84.055"
        stroke="currentColor"
        strokeWidth="2.12132"
        strokeLinecap="round"
      />
      <line
        x1="4.48382"
        y1="1.06066"
        x2="4.48382"
        y2="10.718"
        stroke="currentColor"
        strokeWidth="2.12132"
        strokeLinecap="round"
      />
      <line
        x1="4.48382"
        y1="37.7292"
        x2="4.48382"
        y2="47.3865"
        stroke="currentColor"
        strokeWidth="2.12132"
        strokeLinecap="round"
      />
      <line
        x1="4.48382"
        y1="56.0634"
        x2="4.48382"
        y2="65.7207"
        stroke="currentColor"
        strokeWidth="2.12132"
        strokeLinecap="round"
      />
      <rect
        y="95.8356"
        width="5.88932"
        height="5.88932"
        transform="rotate(-45 0 95.8356)"
        fill="currentColor"
      />
    </svg>
  );
}
