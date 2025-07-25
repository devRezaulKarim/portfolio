import { useCallback, type RefObject } from "react";

export const useSectionScroll = (
  containerRef: RefObject<HTMLDivElement | null>,
) => {
  const handleSectionScroll = useCallback(
    (index: number, direction: "up" | "down") => {
      const container = containerRef.current;
      if (!container) return;

      const sections = container.children as HTMLCollectionOf<HTMLElement>;
      const section = sections[index];
      if (!section) return;

      if (direction === "up") {
        section.scrollTop = section.scrollHeight; // Scroll to bottom
      } else {
        section.scrollTop = 0; // Scroll to top
      }
    },
    [containerRef],
  );

  return handleSectionScroll;
};
