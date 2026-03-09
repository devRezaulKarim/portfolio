import React from "react";
import Container from "../wrappers/Container";

export const SectionGap = () => {
  return (
    <Container>
      <div
        className="mt-2 ml-1.5 hidden h-20 lg:h-30 dark:block"
        style={{
          backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(255, 255, 255, 0.2) 0.5px, transparent 0)`,
          backgroundSize: "16px 16px",
        }}
      />
      <div
        className="mt-2 ml-1.5 block h-20 lg:h-30 dark:hidden"
        style={{
          backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(0, 0, 0, 0.3) 0.5px, transparent 0)`,
          backgroundSize: "16px 16px",
        }}
      />
    </Container>
  );
};
