import { useCallback, useEffect, useRef, useState } from "react";
import type { RefObject } from "react";
import { useSectionScroll } from "./useScrollToTop";
import type { SectionDataType } from "../lib/custom-types";

export const useSectionNavigation = (
  sectionsData: SectionDataType[],
  containerRef: RefObject<HTMLDivElement | null>,
) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isJumpingRef = useRef(false);
  const handleSectionScroll = useSectionScroll(containerRef);

  const stateRef = useRef({
    currentIndex,
    isTransitioning,
    scrollDirection: "down" as "up" | "down",
  });
  stateRef.current.currentIndex = currentIndex;
  stateRef.current.isTransitioning = isTransitioning;

  const changeConeColor = useCallback(
    (index: number) => {
      const { textColor, bgColor } = sectionsData[index];
      const icons = document.querySelectorAll(".cone-icon");
      const social = document.querySelector(".social-icons") as HTMLDivElement;
      icons.forEach((icon) => {
        const mask = icon.querySelector("mask");
        if (mask) {
          mask.style.fill = textColor;
        }
        const stops = icon.querySelectorAll("stop");
        stops.forEach((stop) => {
          stop.style.stopColor = textColor;
        });
      });
      if (social) {
        social.style.color = textColor;
        social.style.setProperty("--shadow-color", bgColor);
        social.style.setProperty("--shadow-color-2", textColor);
      }
    },
    [sectionsData],
  );

  useEffect(() => {
    if (isJumpingRef.current) {
      const container = containerRef.current;
      if (!container) return;

      container.style.transition = "none";
      container.style.transform = `translateX(-${currentIndex * 100}vw)`;

      handleSectionScroll(currentIndex, stateRef.current.scrollDirection);

      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.transition = `transform var(--transition-duration) var(--transition-timing)`;
          setIsTransitioning(false);
          isJumpingRef.current = false;
          changeConeColor(currentIndex);
        }
      }, 50);
    }
  }, [currentIndex, handleSectionScroll, containerRef, changeConeColor]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const goToSection = (index: number, direction: "up" | "down") => {
      if (stateRef.current.isTransitioning) return;

      setIsTransitioning(true);
      setCurrentIndex(index);
      stateRef.current.scrollDirection = direction;

      handleSectionScroll(index, direction);
      container.style.transform = `translateX(-${index * 100}vw)`;
    };

    const handleTransitionEnd = () => {
      const { currentIndex } = stateRef.current;

      if (currentIndex === 0 || currentIndex === sectionsData.length - 1) {
        isJumpingRef.current = true;
        const newIndex = currentIndex === 0 ? sectionsData.length - 2 : 1;
        setCurrentIndex(newIndex);
      } else {
        setIsTransitioning(false);
        changeConeColor(currentIndex);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (stateRef.current.isTransitioning) {
        e.preventDefault();
        return;
      }

      const activeSection = container.children[
        stateRef.current.currentIndex
      ] as HTMLElement;
      if (!activeSection) return;

      const { scrollTop, scrollHeight, clientHeight } = activeSection;
      const tolerance = 1;
      const isAtTop = scrollTop <= tolerance;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - tolerance;
      const direction = e.deltaY > 0 ? "down" : "up";

      if (direction === "down" && isAtBottom) {
        e.preventDefault();
        goToSection(stateRef.current.currentIndex + 1, "down");
      } else if (direction === "up" && isAtTop) {
        e.preventDefault();
        goToSection(stateRef.current.currentIndex - 1, "up");
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        touchStartY = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (stateRef.current.isTransitioning || e.changedTouches.length === 0)
        return;

      const activeSection = container.children[
        stateRef.current.currentIndex
      ] as HTMLElement;
      if (!activeSection) return;

      const { scrollTop, scrollHeight, clientHeight } = activeSection;
      const tolerance = 1;
      const isAtTop = scrollTop <= tolerance;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - tolerance;

      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;
      const swipeThreshold = 50;

      if (Math.abs(deltaY) > swipeThreshold) {
        if (deltaY > 0 && isAtBottom) {
          goToSection(stateRef.current.currentIndex + 1, "down");
        } else if (deltaY < 0 && isAtTop) {
          goToSection(stateRef.current.currentIndex - 1, "up");
        }
      }
    };

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        goToSection(stateRef.current.currentIndex + 1, "down");
      } else if (e.key === "ArrowLeft") {
        goToSection(stateRef.current.currentIndex - 1, "up");
      }
    };

    container.style.transition = "none";
    container.style.transform = `translateX(-${stateRef.current.currentIndex * 100}vw)`;
    changeConeColor(stateRef.current.currentIndex);
    setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.style.transition = `transform var(--transition-duration) var(--transition-timing)`;
      }
    }, 50);

    container.addEventListener("transitionend", handleTransitionEnd);
    document.body.addEventListener("wheel", handleWheel, { passive: false });
    document.body.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    document.body.addEventListener("touchend", handleTouchEnd, {
      passive: true,
    });
    document.addEventListener("keydown", handleKey);

    return () => {
      container.removeEventListener("transitionend", handleTransitionEnd);
      document.body.removeEventListener("wheel", handleWheel);
      document.body.removeEventListener("touchstart", handleTouchStart);
      document.body.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("keydown", handleKey);
    };
  }, [containerRef, handleSectionScroll, sectionsData.length, changeConeColor]);

  return { currentIndex };
};
