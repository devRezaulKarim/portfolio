import { SECTION_CONST } from "../lib/constants";

export const SectionFive = () => {
  const { sectionId, bgColor, textColor } = SECTION_CONST.SECTION5;
  return (
    <div
      className="section h-screen w-screen shrink-0 overflow-y-auto border-[40px]"
      id={sectionId}
      style={{
        background: bgColor,
        borderColor: bgColor,
        color: textColor,
      }}
    >
      <div className="section-content flex min-h-[150vh] flex-col items-center justify-center p-4 text-center">
        <h1>Welcome from section 5</h1>
        <p>
          This is a demonstration of horizontal scrolling navigation. Scroll
          down to begin.
        </p>
      </div>
    </div>
  );
};
