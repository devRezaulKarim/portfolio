import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function Section({
  className,
  children,
  id,
}: {
  className?: string;
  children: ReactNode;
  id: string;
}) {
  return (
    <section className={cn("overflow-x-clip border-y", className)} id={id}>
      {children}
    </section>
  );
}
