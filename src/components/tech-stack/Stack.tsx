"use client";
import Section from "../wrappers/Section";
import Container from "../wrappers/Container";
import { SectionHeader } from "../common/SectionHeader";
import { TECH_STACK } from "@/lib/tech-stack";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import Image from "next/image";
import { useScroll, useSpring, useTransform, motion } from "motion/react";
import { useRef } from "react";

const TECH_ICON_SIZE = 48;

export const Stack = () => {
  const sectionRef = useRef<HTMLUListElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 400px"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [200, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [-300, 0]);
  const smoothX = useSpring(x, { stiffness: 100, damping: 25 });
  const smoothY = useSpring(y, { stiffness: 100, damping: 25 });

  return (
    <Section>
      <Container>
        <SectionHeader>Stack</SectionHeader>
        <ul
          ref={sectionRef}
          className="my-4 flex flex-wrap gap-5 border-y p-4 select-none"
        >
          {TECH_STACK.map((tech) => {
            return (
              <motion.li
                key={tech.key}
                className="flex"
                style={{ x: smoothX, y: smoothY }}
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
          })}
        </ul>
      </Container>
    </Section>
  );
};
