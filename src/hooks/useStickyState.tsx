import { useState, useEffect, type RefObject } from "react";

export const useStickyState = (
  ref: RefObject<HTMLElement | null>,
  threshold = 5,
) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const targetElement = ref.current;
    if (!targetElement) {
      return;
    }

    const handleScroll = () => {
      if (targetElement.scrollTop > threshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    targetElement.addEventListener("scroll", handleScroll, { passive: true });

    // Initial check in case the component loads in a scrolled state
    handleScroll();

    return () => {
      targetElement.removeEventListener("scroll", handleScroll);
    };
  }, [ref, threshold]);

  return isSticky;
};
