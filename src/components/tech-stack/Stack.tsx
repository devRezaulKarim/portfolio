"use client";
import Section from "../wrappers/Section";
import Container from "../wrappers/Container";
import { SectionHeader } from "../common/SectionHeader";
import { TECH_STACK } from "@/lib/tech-stack";
import { useScroll } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { StackCard } from "./StackCard";

const hashToUnit = (value: string) => {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i++) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0) / 4294967295;
};

export const Stack = () => {
  const sectionRef = useRef<HTMLUListElement | null>(null);
  const [sectionBounds, setSectionBounds] = useState({ left: 0, right: 0 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 400px"],
  });

  useEffect(() => {
    const updateSectionBounds = () => {
      if (!sectionRef.current) return;
      const { left, right } = sectionRef.current.getBoundingClientRect();
      setSectionBounds({ left, right });
    };

    updateSectionBounds();
    window.addEventListener("resize", updateSectionBounds);
    return () => {
      window.removeEventListener("resize", updateSectionBounds);
    };
  }, []);

  const initialPositions = useMemo(() => {
    const randomBetween = (min: number, max: number, seed: number) =>
      min + seed * (max - min);

    return TECH_STACK.reduce<Record<string, { x: number; y: number }>>(
      (positions, tech) => {
        const sideSeed = hashToUnit(`${tech.key}-side`);
        const xSeed = hashToUnit(`${tech.key}-x`);
        const ySeed = hashToUnit(`${tech.key}-y`);
        const startFromLeft = sideSeed < 0.5;
        const x = startFromLeft
          ? randomBetween(-600, sectionBounds.left - 1, xSeed)
          : randomBetween(sectionBounds.right + 1, sectionBounds.right + 600, xSeed);
        const y = randomBetween(-350, 350, ySeed);
        positions[tech.key] = { x, y };
        return positions;
      },
      {}
    );
  }, [sectionBounds.left, sectionBounds.right]);

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
              <StackCard
                key={tech.key}
                tech={tech}
                scrollYProgress={scrollYProgress}
                initialPosition={initialPositions[tech.key] ?? { x: 0, y: -300 }}
              />
            );
          })}
        </ul>
      </Container>
    </Section>
  );
};
