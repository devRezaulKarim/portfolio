import { useCallback, type RefObject } from "react";

export const useSectionScroll = (
  containerRef: RefObject<HTMLDivElement | null>,
) => {
  const handleSectionScroll = useCallback(
    (index: number, direction: "up" | "down") => {
      if (direction === "up") return; // Persist scroll on upward scroll

      const container = containerRef.current;
      if (!container) return;
      const sections = container.children as HTMLCollectionOf<HTMLElement>;
      if (sections[index]) {
        sections[index].scrollTop = 0; // Reset scroll on downward scroll
      }
    },
    [containerRef],
  );
  return handleSectionScroll;
};