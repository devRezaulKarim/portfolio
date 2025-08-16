import {
  LoaderCircleIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  SendIcon,
} from "lucide-react";
import { SECTION_CONST } from "../../lib/constants";
import { Button } from "../shared/button";
import { Input } from "../shared/input";
import { SectionSubtitle } from "../shared/section-subtitle";
import { SectionTitle } from "../shared/section-title";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ValidationError, useForm } from "@formspree/react";
import { FacebookIcon } from "../custom-svgs/facebook-icon";
import { LinkedinIcon } from "../custom-svgs/linkedin-icon";
import { GithubIcon } from "../custom-svgs/github-icon";

export const SectionFive = () => {
  const { sectionId, bgColor, textColor } = SECTION_CONST.SECTION5;
  const [state, handleSubmit] = useForm("mvgqnpjg");
  const formRef = useRef<HTMLFormElement>(null);
  const [successMsg, setSuccessMsg] = useState(false);

  useEffect(() => {
    if (state.succeeded && formRef.current) {
      formRef.current.reset();
      setSuccessMsg(true);

      // Hide success msg after 3s
      const timer = setTimeout(() => {
        setSuccessMsg(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <div
      className="section h-screen w-screen shrink-0 overflow-y-auto border-[24px] md:border-[40px]"
      id={sectionId}
      style={
        {
          "--shadow-color": textColor,
          background: bgColor,
          borderColor: bgColor,
          color: textColor,
        } as CSSProperties
      }
    >
      <div className="section-content flex min-h-[calc(100vh-48px)] flex-col items-center justify-center gap-6 text-center sm:gap-10 md:min-h-[calc(100vh-80px)] md:px-8">
        <div>
          <SectionTitle title="get in touch" />
          <SectionSubtitle subtitle="Need a developer? let’s talk" />
        </div>
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-y-6 md:grid-cols-5 md:gap-x-6 md:gap-y-0 lg:grid-cols-3">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            action=""
            className="flex w-full flex-col gap-y-3 rounded-xl sm:gap-y-4 md:col-span-3 lg:col-span-2"
          >
            <Input placeholder="Your Name" id="name" name="name" type="text" />
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
              className="text-left text-red-500"
            />
            <Input
              placeholder="Your Email"
              id="email"
              type="email"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-left text-red-500"
            />
            <Input
              id="message"
              name="message"
              placeholder="Message"
              as="textarea"
              rows={5}
              className="resize-none"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="text-left text-red-500"
            />
            {successMsg && (
              <p className="animate-fade-in text-sm font-medium text-green-500 sm:text-base">
                ✅ Thanks! Your message has been sent.
              </p>
            )}
            <Button
              disabled={state.submitting}
              text="Send"
              icon={state.submitting ? LoaderCircleIcon : SendIcon}
              style={{ backgroundColor: textColor, color: bgColor }}
              className="hover:shadow-[0_0_4px_2px_#fff,_0_0_8px_6px_var(--shadow-color)] sm:w-full"
              iconClass={state.submitting ? "animate-spin" : ""}
            />
          </form>
          <div className="flex flex-col items-center justify-end gap-y-4 sm:gap-y-6 md:col-span-2 lg:col-span-1">
            <div className="text-left text-lg lg:text-justify lg:text-xl">
              <address className="flex flex-col gap-y-2">
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
            <div className="flex sm:hidden items-center gap-x-2">
              <a
                href="https://www.facebook.com/muha.rezaulkarim"
                target="_blank"
              >
                <FacebookIcon className="w-6 duration-200 hover:scale-90 sm:w-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/dev-rezaul-karim/"
                target="_blank"
              >
                <LinkedinIcon className="w-6 duration-200 hover:scale-90 sm:w-8" />
              </a>
              <a href="https://github.com/devRezaulKarim" target="_blank">
                <GithubIcon className="w-6 duration-200 hover:scale-90 sm:w-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
