import { SECTION_CONST, devTools } from "../../lib/constants";
import { SectionSubtitle } from "../shared/section-subtitle";
import { SectionTitle } from "../shared/section-title";
import { ToolsCard } from "../shared/tools-card";

export const SectionThree = () => {
  const { sectionId, bgColor, textColor } = SECTION_CONST.SECTION3;
  return (
    <div
      className="section h-screen w-screen shrink-0 overflow-y-auto border-[24px] md:border-[40px]"
      id={sectionId}
      style={{
        background: bgColor,
        borderColor: bgColor,
        color: textColor,
      }}
    >
      <div className="section-content flex min-h-[calc(100vh-48px)] flex-col items-center justify-center gap-10 p-4 text-center md:min-h-[calc(100vh-80px)]">
        <div>
          <SectionTitle title="DEV TOOLKIT" />
          <SectionSubtitle subtitle="What powers my code, designs, and everything in between." />
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 pb-20 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8">
          {devTools.map((tool) => (
            <ToolsCard key={tool.id} {...tool} />
          ))}
        </div>
      </div>
    </div>
  );
};
