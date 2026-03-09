"use client";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import Image from "next/image";
import {
  motion,
  type MotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { TechStack } from "@/lib/tech-stack";

const TECH_ICON_SIZE = 48;

export const StackCard = ({
  tech,
  scrollYProgress,
}: {
  tech: TechStack;
  scrollYProgress: MotionValue<number>;
}) => {
  const scale = useTransform(scrollYProgress, [0.5, 1], [0.5, 1]);
  const smoothScale = useSpring(scale, { stiffness: 120, damping: 25 });

  return (
    <motion.li
      className="flex"
      style={{
        scale: smoothScale,
      }}
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={tech.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={tech.title}
            className="inline-flex"
          >
            {tech.theme ? (
              <>
                <Image
                  src={`/stacks/${tech.key}-light.svg`}
                  alt={`${tech.title} light icon`}
                  width={TECH_ICON_SIZE}
                  height={TECH_ICON_SIZE}
                  className="dark:hidden"
                  unoptimized
                />
                <Image
                  src={`/stacks/${tech.key}-dark.svg`}
                  alt={`${tech.title} dark icon`}
                  width={TECH_ICON_SIZE}
                  height={TECH_ICON_SIZE}
                  className="hidden dark:block"
                  unoptimized
                />
              </>
            ) : (
              <Image
                src={`/stacks/${tech.key}.svg`}
                alt={`${tech.title} icon`}
                width={TECH_ICON_SIZE}
                height={TECH_ICON_SIZE}
                unoptimized
                className=""
              />
            )}
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tech.title}</p>
        </TooltipContent>
      </Tooltip>
    </motion.li>
  );
};
