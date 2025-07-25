import { SECTION_CONST } from "../../lib/constants";

export const SectionFour = () => {
  const { sectionId, bgColor, textColor } = SECTION_CONST.SECTION4;
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
      <div className="section-content flex min-h-[calc(100vh-48px)] flex-col items-center justify-center p-4 text-center md:min-h-[calc(100vh-80px)]">
        <h1>Welcome from section 4</h1>
        <p>
          This is a demonstration of horizontal scrolling navigation. Scroll
          down to begin.
        </p>
      </div>
    </div>
  );
};
