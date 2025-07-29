import { useRef } from "react";
import { SECTION_CONST, devTools } from "../../lib/constants";
import { SectionSubtitle } from "../shared/section-subtitle";
import { SectionTitle } from "../shared/section-title";
import { ToolsCard } from "../shared/tools-card";
import { useStickyState } from "../../hooks/useStickyState";
import { cn } from "../../lib/utls";

export const SectionThree = () => {
  const { sectionId, bgColor, textColor } = SECTION_CONST.SECTION3;
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
      <div className="section-content flex min-h-[calc(100vh-48px)] flex-col items-center justify-center gap-10 text-center md:min-h-[calc(100vh-80px)]">
        <div
          style={{ backgroundColor: bgColor }}
          className={cn(
            "sticky top-0 z-10 flex w-full flex-col items-center gap-4 text-center transition-all duration-300",
            isSticky && "gap-2 pb-4",
          )}
        >
          <SectionTitle
            title="DEV TOOLKIT"
            className={cn(
              "transition-all duration-300",
              isSticky && "text-[calc(1vw+1rem)]",
            )}
          />
          <SectionSubtitle
            subtitle="What powers my code, designs, and everything in between."
            className={cn(
              "transition-all duration-300",
              isSticky && "text-[calc(0.5vw+0.5rem)]",
            )}
          />
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 pb-20 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8">
          {devTools.map((tool) => (
            <ToolsCard key={tool.id} {...tool} />
          ))}
        </div>
      </div>
    </div>
  );
};
