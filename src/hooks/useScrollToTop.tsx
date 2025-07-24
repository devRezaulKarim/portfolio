import { useCallback, type RefObject } from "react";

export const useScrollToTop = (
  containerRef: RefObject<HTMLDivElement | null>,
) => {
  const resetSectionScroll = useCallback(
    (index: number) => {
      // return;
      const container = containerRef.current;
      if (!container) return;
      const sections = container.children as HTMLCollectionOf<HTMLElement>;
      if (sections[index]) {
        sections[index].scrollTop = 0;
      }
    },
    [containerRef],
  );
  return resetSectionScroll;
};
