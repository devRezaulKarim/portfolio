import type { HTMLAttributes } from "react";
import { cn } from "../../lib/utls"; // if you use `cn` utility, otherwise remove it

interface SectionSubtitleProps extends HTMLAttributes<HTMLParagraphElement> {
  className?: string;
  subtitle: string;
}

export const SectionSubtitle = ({
  subtitle,
  className,
  ...props
}: SectionSubtitleProps) => {
  return (
    <p
      className={cn(
        "max-w-[600px] text-[calc(1vw+0.75rem)] leading-[1.2]",
        className,
      )}
      {...props}
    >
      {subtitle}
    </p>
  );
};
