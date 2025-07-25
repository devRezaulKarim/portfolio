import { DownloadIcon, MailPlusIcon } from "lucide-react";
import { SECTION_CONST } from "../../lib/constants";
import { Button } from "../shared/button";
import { SectionTitle } from "../shared/section-title";
import { SectionSubtitle } from "../shared/section-subtitle";

export const SectionOne = ({ subtitle }: { subtitle: string }) => {
  const { sectionId, bgColor, textColor } = SECTION_CONST.SECTION1;

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
      <div className="section-content min-h-[calc(100vh-48px)] md:flex md:min-h-[calc(100vh-80px)] md:items-center md:justify-center md:px-8">
        <div className="flex flex-col-reverse items-center md:flex-row">
          <div className="flex flex-col gap-4 sm:gap-6">
            <div>
              <SectionTitle title="Md. Rezaul Karim" />
              <h2 className="text-[calc(1.5vw+1rem)] leading-[1.2] font-bold">
                Web Developer
              </h2>
            </div>
            <SectionSubtitle subtitle={subtitle} />
            <div className="flex items-center gap-3 sm:mt-4">
              <Button
                text="Contact"
                icon={MailPlusIcon}
                style={{
                  borderColor: textColor,
                  borderWidth: "1px",
                  color: textColor,
                }}
              />
              <Button
                text="Resume"
                icon={DownloadIcon}
                style={{ backgroundColor: textColor, color: bgColor }}
              />
            </div>
          </div>
          <div className="ml-auto md:max-w-2/5">
            <img src="/hero-image.png" alt="hero image" />
          </div>
        </div>
      </div>
    </div>
  );
};
