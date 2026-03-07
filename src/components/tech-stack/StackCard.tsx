import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import Image from "next/image";
import {
  motion,
  type MotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { TechStack } from "@/lib/tech-stack";
import { useEffect, useRef, useState } from "react";

const TECH_ICON_SIZE = 48;

export const StackCard = ({
  idx,
  tech,
  scrollYProgress,
  sectionLeft,
}: {
  idx: number;
  tech: TechStack;
  scrollYProgress: MotionValue<number>;
  sectionLeft: number;
}) => {
  const targetRef = useRef(null);
  const [randomPosition, setRandomPosition] = useState({ y: 0, x: 0 });
  const [targetPosition, setTargetPosition] = useState({ y: 0, x: 0 });
  const initX =
    idx % 2 === 0
      ? randomPosition.x - targetPosition.x
      : randomPosition.x + targetPosition.x;
  const x = useTransform(scrollYProgress, [0, 1], [initX, 0]);
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [randomPosition.y - targetPosition.y, 0],
  );
  const smoothX = useSpring(x, { stiffness: 100, damping: 25 });
  const smoothY = useSpring(y, { stiffness: 100, damping: 25 });

  useEffect(() => {
    setTimeout(() => {
      const y = Math.floor(Math.random() * window.innerHeight);
      const x = Math.floor(Math.random() * sectionLeft);
      setRandomPosition({ y, x });

      if (targetRef.current) {
        const { top, left } = (
          targetRef.current as HTMLElement
        ).getBoundingClientRect();
        setTargetPosition({ y: top, x: left });
      }
    }, 0);
  }, [sectionLeft]);
  return (
    <>
      <li ref={targetRef}>
        <motion.div
          className="flex"
          style={{
            y: smoothY,
            x: smoothX,
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
        </motion.div>
      </li>
      <div
        className="fixed size-12"
        style={{
          top: randomPosition.y,
          ...(idx % 2 === 0
            ? { left: randomPosition.x }
            : { right: randomPosition.x }),
        }}
      />
    </>
  );
};
