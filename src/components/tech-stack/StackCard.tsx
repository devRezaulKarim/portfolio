"use client";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import Image from "next/image";
import { motion } from "motion/react";
import { TechStack } from "@/lib/tech-stack";

const TECH_ICON_SIZE = 48;

export const StackCard = ({ tech }: { tech: TechStack }) => {
  return (
    <motion.li
      className="flex"
      variants={{
        hidden: { opacity: 0, x: (TECH_ICON_SIZE / 2) * -1 },
        show: {
          opacity: 1,
          x: 0,
          transition: {
            type: "spring",
            stiffness: 120,
            damping: 20,
            mass: 0.5,
          },
        },
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
