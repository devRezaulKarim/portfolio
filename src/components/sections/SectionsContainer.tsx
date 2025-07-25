import { useEffect, useRef, useState } from "react";
import { SectionOne } from "./Section-1";
import { SectionTwo } from "./Section-2";
import { SectionThree } from "./Section-3";
import { SectionFour } from "./Section-4";
import { SectionFive } from "./Section-5";
import type { SectionDataType } from "../../lib/custom-types";
import { heroSubtitles, originalSections } from "../../lib/constants";
import { useSectionNavigation } from "../../hooks/useSectionNavigation";

// Clone for looping
const sectionsData: SectionDataType[] = [
  originalSections[originalSections.length - 1], // Clone last at beginning
  ...originalSections,
  originalSections[0], // Clone first at end
];

const SectionsContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sectionOneSubtitle, setSectionOneSubtitle] = useState("");
  useSectionNavigation(sectionsData, containerRef);

  useEffect(() => {
    const index = Math.floor(Math.random() * heroSubtitles.length);
    setSectionOneSubtitle(heroSubtitles[index]);
  }, []);

  return (
    <div className="flex h-screen" ref={containerRef}>
      {sectionsData.map((section, index) => {
        if (section.id === "section-1")
          return <SectionOne key={index} subtitle={sectionOneSubtitle} />;
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
