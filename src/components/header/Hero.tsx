import { motion, type MotionValue } from "motion/react";

import Container from "../wrappers/Container";
import { RefObject } from "react";
import { IconCode, IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";
import {
  ProfileItem,
  ProfileItemContent,
  ProfileItemIcon,
  ProfileItemLink,
} from "../common/ProfileItem";
import Section from "../wrappers/Section";

export const Hero = ({
  heroRef,
  startRef,
  startX,
  startY,
  smoothX,
  smoothY,
  smoothSize,
  smoothRotate,
  smoothBorderRadius,
}: {
  heroRef: RefObject<HTMLDivElement | null>;
  startRef: RefObject<HTMLDivElement | null>;
  startX: number;
  startY: number;
  smoothX: MotionValue<number>;
  smoothY: MotionValue<number>;
  smoothSize: MotionValue<number>;
  smoothRotate: MotionValue<number>;
  smoothBorderRadius: MotionValue<string>;
}) => {
  return (
    <Section id="">
      <Container>
        <div ref={heroRef} className="flex flex-col sm:flex-row">
          <div className="flex grow flex-col justify-end border-r py-4">
            <div className="border-y px-4">
              <h1 className="group w-fit overflow-clip text-3xl font-semibold select-none">
                {"REZAUL KARIM".split("").map((char, idx) => (
                  <span
                    key={idx}
                    className="inline-block drop-shadow-[0px_2.3ex_0px_#ff5200] duration-200 group-hover:-translate-y-full"
                    style={{ transitionDelay: `${idx * 30}ms` }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </h1>
            </div>
            <h2 className="border-b px-4 text-lg">Frontend Developer</h2>
            <div className="h-4 border-b" />
            <div className="space-y-3.25 border-b px-4 py-4">
              <ProfileItem>
                <ProfileItemIcon>
                  <IconCode />
                </ProfileItemIcon>
                <ProfileItemContent>
                  <span>Frontend Developer</span>{" "}
                  <ProfileItemLink
                    href="https://debuggersstudio.com/"
                    aria-label="Debuggers Studio"
                  >
                    @DebuggersStudio
                  </ProfileItemLink>
                </ProfileItemContent>
              </ProfileItem>{" "}
              <ProfileItem>
                <ProfileItemIcon>
                  <IconMapPin />
                </ProfileItemIcon>
                <ProfileItemContent>
                  <ProfileItemLink
                    href="https://maps.app.goo.gl/MAL6pasSuRThWimn7"
                    aria-label="Dhaka, Bangladesh"
                  >
                    Dhaka, Bangladesh
                  </ProfileItemLink>
                </ProfileItemContent>
              </ProfileItem>
              <ProfileItem>
                <ProfileItemIcon>
                  <IconPhone />
                </ProfileItemIcon>
                <ProfileItemContent>
                  <ProfileItemLink
                    href="tel:+880 1540 652375"
                    aria-label="+880 1540 652375"
                  >
                    +880 1540 652375
                  </ProfileItemLink>
                </ProfileItemContent>
              </ProfileItem>
              <ProfileItem>
                <ProfileItemIcon>
                  <IconMail />
                </ProfileItemIcon>
                <ProfileItemContent>
                  <ProfileItemLink
                    href="mailto:dev.rezaulkarim@gmail.com"
                    aria-label="dev.rezaulkarim@gmail.com"
                  >
                    dev.rezaulkarim@gmail.com
                  </ProfileItemLink>
                </ProfileItemContent>
              </ProfileItem>
            </div>
          </div>
          <div className="flex shrink-0 items-center justify-center p-4">
            <div ref={startRef} className="size-85 sm:size-62.5" />
            <motion.img
              src="/rezaul.avif"
              fetchPriority="high"
              alt="Profile Pic"
              className="fixed z-1 size-85 sm:size-62.5"
              style={{
                left: `${startX}px`,
                top: `${startY}px`,
                x: smoothX,
                y: smoothY,
                width: smoothSize,
                height: smoothSize,
                rotate: smoothRotate,
                borderRadius: smoothBorderRadius,
              }}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};
