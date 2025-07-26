import { useRef } from "react";
import { SECTION_CONST, projects } from "../../lib/constants";
import { useStickyState } from "../../hooks/useStickyState";
import { cn } from "../../lib/utls";
import { SectionTitle } from "../shared/section-title";
import { SectionSubtitle } from "../shared/section-subtitle";
import { ProjectCard } from "../shared/project-card";

export const SectionFour = () => {
  const { sectionId, bgColor, textColor } = SECTION_CONST.SECTION4;
  const scrollRef = useRef<HTMLDivElement>(null);
  const isSticky = useStickyState(scrollRef);

  return (
    <div
      ref={scrollRef}
      className="section h-screen w-screen shrink-0 overflow-y-auto border-[24px] md:border-[40px]"
      id={sectionId}
      style={{
        background: bgColor,
        borderColor: bgColor,
        color: textColor,
      }}
    >
      <div className="section-content flex min-h-[calc(100vh-48px)] flex-col items-center justify-center gap-10 p-4 text-center md:min-h-[calc(100vh-80px)]">
        <div
          style={{ backgroundColor: bgColor }}
          className={cn(
            "sticky top-0 z-10 flex w-full flex-col items-center gap-4 text-center transition-all duration-300",
            isSticky && "gap-2 pb-4",
          )}
        >
          <SectionTitle
            title="Work Showcase"
            className={cn(
              "transition-all duration-300",
              isSticky && "text-[calc(1.5vw+1rem)]",
            )}
          />
          <SectionSubtitle
            subtitle="A selection of projects that reflect my skills, creativity, and growth as a developer."
            className={cn(
              "transition-all duration-300",
              isSticky && "text-[calc(0.5vw+0.75rem)]",
            )}
          />
        </div>
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 px-4 pb-20 sm:grid-cols-2 md:grid-cols-4">
          {projects.map((column, colIndex) => (
            <div key={colIndex} className="grid gap-4">
              {column.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  subtitle={project.subtitle}
                  image={project.image}
                  className={
                    project.aspect === "square"
                      ? "aspect-square"
                      : "aspect-[1/1.5]"
                  }
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
