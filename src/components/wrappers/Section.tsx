import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function Section({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <section className={cn("overflow-x-clip border-y", className)}>
      {children}
    </section>
  );
}
