import { useEffect, useState } from "react";

export const useScrollSpy = (
  sectionIds: string[],
  options?: IntersectionObserverInit,
) => {
  const [activeId, setActiveId] = useState("#");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px", // section must be near center
        threshold: 0.1,
        ...options,
      },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, options]);

  return activeId;
};
