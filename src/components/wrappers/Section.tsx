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
    <section className={cn("mt-20 border-y md:mt-20 lg:mt-30", className)}>
      {children}
    </section>
  );
}
