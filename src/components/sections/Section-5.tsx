import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { SECTION_CONST } from "../../lib/constants";
import { FacebookIcon } from "../custom-svgs/facebook-icon";
import { LinkedinIcon } from "../custom-svgs/linkedin-icon";
import { TwitterIcon } from "../custom-svgs/twitter-icon";
import { Button } from "../shared/button";
import { Input } from "../shared/input";
import { SectionSubtitle } from "../shared/section-subtitle";
import { SectionTitle } from "../shared/section-title";

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
      <div className="section-content flex min-h-[calc(100vh-80px)] flex-col items-center justify-center gap-6 text-center sm:gap-10 md:px-8">
        <div>
          <SectionTitle title="get in touch" />
          <SectionSubtitle subtitle="Need a developer? let’s talk" />
        </div>
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-y-6 md:grid-cols-5 md:gap-x-6 md:gap-y-0 lg:grid-cols-3">
          <form
            action=""
            className="flex w-full flex-col gap-y-3 rounded-xl sm:gap-y-4 md:col-span-3 lg:col-span-2"
          >
            <Input placeholder="Your Name" />
            <Input placeholder="Your Email" />
            <Input
              placeholder="Message"
              as="textarea"
              rows={5}
              className="resize-none"
            />
            <Button
              text="Send"
              style={{ backgroundColor: textColor, color: bgColor }}
              className="inline-block sm:w-full"
            />
          </form>
          <div className="flex flex-col items-center justify-end gap-y-4 sm:gap-y-6 md:col-span-2 lg:col-span-1">
            <div className="text-left text-lg lg:text-justify lg:text-xl">
              <address>
                <a
                  href="tel:+8801540652375"
                  className="flex items-center gap-x-1"
                >
                  <PhoneIcon className="w-5 sm:w-6" />{" "}
                  <span>+880 1540 652375</span>
                </a>
                <a
                  href="mailto:dev.rezaulkarim@gmail.com"
                  className="flex items-center gap-x-1"
                >
                  <MailIcon className="w-5 sm:w-6" />{" "}
                  <span>dev.rezaulkarim@gmail.com</span>
                </a>

                <p className="flex items-center gap-x-1">
                  <MapPinIcon className="w-5 sm:w-6" />
                  <span>Dhaka, bangladesh</span>
                </p>
              </address>
            </div>
            <div className="flex items-center gap-x-2">
              <a href="#">
                <FacebookIcon className="w-6 duration-200 hover:scale-90 sm:w-8" />
              </a>
              <a href="#">
                <LinkedinIcon className="w-6 duration-200 hover:scale-90 sm:w-8" />
              </a>
              <a href="#">
                <TwitterIcon className="w-6 duration-200 hover:scale-90 sm:w-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
