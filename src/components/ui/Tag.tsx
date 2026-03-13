import { cn } from "@/lib/utils";
import { HtmlHTMLAttributes } from "react";

type NavLinksProps = HtmlHTMLAttributes<HTMLDivElement>;
export const Tag = ({ className, children }: NavLinksProps) => {
  return (
    <div
      className={cn(
        "text-muted-foreground border bg-zinc-50 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-900",
        className,
      )}
    >
      {children}
    </div>
  );
};
