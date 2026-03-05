import React from "react";
import Container from "../wrappers/Container";
import { cn } from "@/lib/utils";

export const SpacerPattern = ({
  position = "left",
}: {
  position?: "left" | "right";
}) => {
  return (
    <div className="pointer-events-none fixed top-0 left-0 z-2 w-full overflow-hidden">
      <Container>
        <div
          className={cn(
            "relative h-screen",
            "before:border-border before:absolute before:-z-1 before:h-full before:w-4 before:border-x lg:before:w-8",
            "before:bg-size-[8px_8px] before:[--pattern-foreground:var(--color-edge)] lg:before:bg-size-[10px_10px]",
            position === "left"
              ? "before:-left-4 before:bg-[repeating-linear-gradient(-315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] lg:before:-left-8"
              : "before:-right-4 before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] lg:before:-right-8",
          )}
        ></div>
      </Container>
    </div>
  );
};
