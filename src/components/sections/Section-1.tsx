import { DownloadIcon, MailPlusIcon } from "lucide-react";
import { SECTION_CONST, heroSubtitles } from "../../lib/constants";
import { Button } from "../shared/button";
import { useEffect, useState } from "react";

export const SectionOne = () => {
  const { sectionId, bgColor, textColor } = SECTION_CONST.SECTION1;
  const [subtitle, setSubtitle] = useState<string>(heroSubtitles[0]);
  useEffect(() => {
    const index = Math.floor(Math.random() * 5);
    setSubtitle(heroSubtitles[index]);
  }, []);

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
      <div className="section-content min-h-[calc(100vh-80px)] md:flex md:items-center md:justify-center md:px-8">
        <div className="flex flex-col-reverse items-center md:flex-row">
          <div className="flex flex-col gap-4">
            <h1>Md. Rezaul Karim</h1>
            <p>{subtitle}</p>
            <div className="mt-4 flex items-center gap-3">
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
