document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".sections-container");
    const sections = document.querySelectorAll(".section");
    const numSections = sections.length;
    let currentIndex = 1; // Start at the first "real" section
    let isTransitioning = false;
    let transitionTimeout;

    // Set initial position without animation
    container.style.transition = "none";
    container.style.transform = `translateX(-${currentIndex * 100}vw)`;

    // Re-enable animation after a moment
    setTimeout(() => {
      container.style.transition = `transform var(--transition-duration) var(--transition-timing)`;
    });

    function forceEndTransition() {
      isTransitioning = false;
      clearTimeout(transitionTimeout);
    }

    function goToSection(index) {
      if (isTransitioning) return;
      isTransitioning = true;
      currentIndex = index;

      // Ensure the new section starts at the top
      if (sections[currentIndex]) {
        sections[currentIndex].scrollTop = 0;
      }

      container.style.transform = `translateX(-${currentIndex * 100}vw)`;

      // Failsafe for transitionend event
      clearTimeout(transitionTimeout);
      transitionTimeout = setTimeout(forceEndTransition, 600); // Slightly longer than transition
    }

    container.addEventListener("transitionend", () => {
      forceEndTransition();

      // If we've moved to a clone, jump back to the real section
      if (currentIndex === 0) {
        container.style.transition = "none";
        currentIndex = numSections - 2;
        sections[currentIndex].scrollTop = 0;
        container.style.transform = `translateX(-${currentIndex * 100}vw)`;
        setTimeout(() => {
          container.style.transition = `transform var(--transition-duration) var(--transition-timing)`;
        });
      }

      if (currentIndex === numSections - 1) {
        container.style.transition = "none";
        currentIndex = 1;
        sections[currentIndex].scrollTop = 0;
        container.style.transform = `translateX(-${currentIndex * 100}vw)`;
        setTimeout(() => {
          container.style.transition = `transform var(--transition-duration) var(--transition-timing)`;
        });
      }
    });

    // --- Wheel Event ---
    document.body.addEventListener(
      "wheel",
      (e) => {
        if (isTransitioning) {
          e.preventDefault();
          return;
        }

        const activeSection = sections[currentIndex];
        const { scrollTop, scrollHeight, clientHeight } = activeSection;
        const tolerance = 1;
        const isAtTop = scrollTop <= tolerance;
        const isAtBottom =
          scrollTop + clientHeight >= scrollHeight - tolerance;

        const scrollDirection = e.deltaY > 0 ? "down" : "up";

        if (scrollDirection === "down" && isAtBottom) {
          e.preventDefault();
          goToSection(currentIndex + 1);
        } else if (scrollDirection === "up" && isAtTop) {
          e.preventDefault();
          goToSection(currentIndex - 1);
        }
      },
      { passive: false }
    );

    // --- Touch Events for Mobile ---
    let touchStartY = 0;

    document.body.addEventListener(
      "touchstart",
      (e) => {
        touchStartY = e.touches[0].clientY;
      },
      { passive: true }
    );

    document.body.addEventListener(
      "touchmove",
      (e) => {
        if (isTransitioning) {
          e.preventDefault();
          return;
        }

        const activeSection = sections[currentIndex];
        const { scrollTop, scrollHeight, clientHeight } = activeSection;
        const tolerance = 1;
        const isAtTop = scrollTop <= tolerance;
        const isAtBottom =
          scrollTop + clientHeight >= scrollHeight - tolerance;

        const currentY = e.touches[0].clientY;
        const deltaY = touchStartY - currentY; // Positive for swipe up

        if (deltaY > 0 && isAtBottom) {
          // Swiping up at bottom
          e.preventDefault();
        } else if (deltaY < 0 && isAtTop) {
          // Swiping down at top
          e.preventDefault();
        }
      },
      { passive: false }
    );

    document.body.addEventListener(
      "touchend",
      (e) => {
        if (isTransitioning) return;

        const touchEndY = e.changedTouches[0].clientY;
        const deltaY = touchStartY - touchEndY; // Positive for swipe up
        const swipeThreshold = 50;

        const activeSection = sections[currentIndex];
        const { scrollTop, scrollHeight, clientHeight } = activeSection;
        const tolerance = 1;
        const isAtTop = scrollTop <= tolerance;
        const isAtBottom =
          scrollTop + clientHeight >= scrollHeight - tolerance;

        if (Math.abs(deltaY) > swipeThreshold) {
          if (deltaY > 0 && isAtBottom) {
            goToSection(currentIndex + 1);
          } else if (deltaY < 0 && isAtTop) {
            goToSection(currentIndex - 1);
          }
        }
      },
      { passive: true }
    );

    // --- Keyboard Navigation ---
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        goToSection(currentIndex + 1);
      } else if (e.key === "ArrowLeft") {
        goToSection(currentIndex - 1);
      }
    });
  });