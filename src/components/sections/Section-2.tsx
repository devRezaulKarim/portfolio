import { JourneyCards, SECTION_CONST } from "../../lib/constants";
import { JourneyCard } from "../shared/journey-card";
import { SectionTitle } from "../shared/section-title";

export const SectionTwo = () => {
  const { sectionId, bgColor, textColor } = SECTION_CONST.SECTION2;
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
      <div className="section-content flex min-h-[calc(100vh-48px)] flex-col gap-20 md:min-h-[calc(100vh-80px)] md:px-8 lg:gap-10">
        <div
          style={{ backgroundColor: bgColor }}
          className="top-0 z-10 flex flex-col items-center gap-4 text-center"
        >
          <SectionTitle title="How I Got Here" />
          <p
            style={{ fontFamily: "Niconne" }}
            className="max-w-[600px] text-lg leading-[1.2] md:text-xl lg:text-2xl xl:text-3xl"
          >
            “My journey isn’t traditional, but it’s real. Every step—from
            dropping out to deploying code—has shaped the developer I am today.”
          </p>
        </div>
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-20 pb-20 lg:gap-10">
          {[...JourneyCards].reverse().map((card, index) => (
            <JourneyCard
              key={card.id}
              color={bgColor}
              {...card}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
