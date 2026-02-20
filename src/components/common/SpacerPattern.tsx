import React from "react";
import Container from "../wrappers/Container";
import { cn } from "@/lib/utils";

export const SpacerPattern = ({
  direction = "left",
}: {
  direction?: "left" | "right";
}) => {
  return (
    <div className="overflow-hidden">
      <Container>
        <div
          className={cn(
            "relative h-8 border-x",
            "before:absolute before:-left-[100vw] before:-z-1 before:h-full before:w-[200vw]",
            "before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]",
            direction === "left"
              ? "before:bg-[repeating-linear-gradient(-312deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)]"
              : "before:bg-[repeating-linear-gradient(312deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)]",
          )}
        ></div>
      </Container>
    </div>
  );
};
