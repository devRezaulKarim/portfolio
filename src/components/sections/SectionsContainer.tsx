import { useEffect, useRef, useState } from "react";
import { SectionOne } from "./Section-1";
import { SectionTwo } from "./Section-2";
import { SectionThree } from "./Section-3";
import { SectionFour } from "./Section-4";
import { SectionFive } from "./Section-5";
import type { SectionData } from "../../lib/custom-types";
import { originalSections } from "../../lib/constants";

// Clone for looping
const sectionsData: SectionData[] = [
  originalSections[originalSections.length - 1], // Clone last at beginning
  ...originalSections,
  originalSections[0], // Clone first at end
];

const SectionsContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isJumpingRef = useRef(false);

  // Use refs to hold the latest state for event listeners
  const stateRef = useRef({ currentIndex, isTransitioning });
  stateRef.current = { currentIndex, isTransitioning };

  const changeConeColor = (index: number) => {
    const { textColor } = sectionsData[index];
    const icons = document.querySelectorAll(".cone-icon");
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
  };

  // Effect for handling the "jump" after a transition to a clone
  useEffect(() => {
    if (isJumpingRef.current) {
      const container = containerRef.current;
      if (!container) return;

      // Jump without animation
      container.style.transition = "none";
      container.style.transform = `translateX(-${currentIndex * 100}vw)`;

      // Reset the scroll position of the new section
      const sections = container.children as HTMLCollectionOf<HTMLElement>;
      if (sections[currentIndex]) {
        sections[currentIndex].scrollTop = 0;
      }

      // Use a timeout to re-enable transitions after the browser has painted the jump
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.transition = `transform var(--transition-duration) var(--transition-timing)`;
          setIsTransitioning(false);
          isJumpingRef.current = false;
          changeConeColor(currentIndex); // Update color after jump
        }
      }, 50);
    }
  }, [currentIndex]);

  // Effect for setting up event listeners once
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const goToSection = (index: number) => {
      // Access latest state from ref
      if (stateRef.current.isTransitioning) return;

      setIsTransitioning(true);
      setCurrentIndex(index);

      const sections = container.children as HTMLCollectionOf<HTMLElement>;
      if (sections[index]) {
        sections[index].scrollTop = 0;
      }

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
        changeConeColor(currentIndex); // Update color on normal transition end
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
      const scrollDirection = e.deltaY > 0 ? "down" : "up";

      if (scrollDirection === "down" && isAtBottom) {
        e.preventDefault();
        goToSection(stateRef.current.currentIndex + 1);
      } else if (scrollDirection === "up" && isAtTop) {
        e.preventDefault();
        goToSection(stateRef.current.currentIndex - 1);
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
          goToSection(stateRef.current.currentIndex + 1);
        } else if (deltaY < 0 && isAtTop) {
          goToSection(stateRef.current.currentIndex - 1);
        }
      }
    };

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        goToSection(stateRef.current.currentIndex + 1);
      } else if (e.key === "ArrowLeft") {
        goToSection(stateRef.current.currentIndex - 1);
      }
    };

    // Set initial position and color
    container.style.transition = "none";
    container.style.transform = `translateX(-${
      stateRef.current.currentIndex * 100
    }vw)`;
    changeConeColor(stateRef.current.currentIndex); // Set initial color
    setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.style.transition = `transform var(--transition-duration) var(--transition-timing)`;
      }
    }, 50);

    // Add Listeners
    container.addEventListener("transitionend", handleTransitionEnd);
    document.body.addEventListener("wheel", handleWheel, { passive: false });
    document.body.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    document.body.addEventListener("touchend", handleTouchEnd, {
      passive: true,
    });
    document.addEventListener("keydown", handleKey);

    // Cleanup
    return () => {
      container.removeEventListener("transitionend", handleTransitionEnd);
      document.body.removeEventListener("wheel", handleWheel);
      document.body.removeEventListener("touchstart", handleTouchStart);
      document.body.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("keydown", handleKey);
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="flex h-screen" ref={containerRef}>
      {sectionsData.map((section, index) => {
        if (section.id === "section-1") return <SectionOne key={index} />;
        if (section.id === "section-2") return <SectionTwo key={index} />;
        if (section.id === "section-3") return <SectionThree key={index} />;
        if (section.id === "section-4") return <SectionFour key={index} />;
        if (section.id === "section-5") return <SectionFive key={index} />;
        return null;
      })}
    </div>
  );
};

export default SectionsContainer;
