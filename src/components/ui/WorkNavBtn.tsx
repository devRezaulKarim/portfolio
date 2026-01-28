import { cn } from "@/lib/utils";
import type { ReactNode, ButtonHTMLAttributes } from "react";

interface WorkNavBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

export const WorkNavBtn = ({
  children,
  className,
  ...props
}: WorkNavBtnProps) => {
  return (
    <button
      {...props}
      className={cn(
        "work-nav-btn absolute top-1/2 grid size-16 -translate-y-1/2 place-items-center rounded-full text-primary duration-300 active:scale-90",
        className,
      )}
    >
      {children}
    </button>
  );
};
