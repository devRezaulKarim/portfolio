import type { HTMLAttributes } from "react";
import { cn } from "../../lib/utls"; // optional if you're using `cn` utility

interface SectionTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  title: string;
}

export const SectionTitle = ({
  className,
  title,
  ...props
}: SectionTitleProps) => {
  return (
    <h1
      className={cn(
        "text-[calc(4vw+1rem)] leading-[1.2] font-bold capitalize",
        className,
      )}
      {...props}
    >
      {title}
    </h1>
  );
};
