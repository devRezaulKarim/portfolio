import React from "react";
import Container from "../wrappers/Container";
import { cn } from "@/lib/utils";

export const SectionGap = ({ className }: { className?: string }) => {
  return (
    <Container>
      <div
        className={cn("mt-2 ml-1.5 hidden h-20 lg:h-30 dark:block", className)}
        style={{
          backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(255, 255, 255, 0.2) 0.5px, transparent 0)`,
          backgroundSize: "16px 16px",
        }}
      />
      <div
        className={cn("mt-2 ml-1.5 block h-20 lg:h-30 dark:hidden", className)}
        style={{
          backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(0, 0, 0, 0.3) 0.5px, transparent 0)`,
          backgroundSize: "16px 16px",
        }}
      />
    </Container>
  );
};
