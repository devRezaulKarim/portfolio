"use client";
import Section from "../wrappers/Section";
import Container from "../wrappers/Container";
import { SectionHeader } from "../common/SectionHeader";
import { TECH_STACK } from "@/lib/tech-stack";
import { useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { StackCard } from "./StackCard";

export const Stack = () => {
  const sectionRef = useRef<HTMLUListElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 400px"],
  });
  const [sectionLeft, setSectionLeft] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const sectionRect = sectionRef.current?.getBoundingClientRect();
      const sectionLeft = sectionRect?.left ? sectionRect?.left - 100 : 0;
      setSectionLeft(sectionLeft);
    }, 0);
  }, []);

  return (
    <Section>
      <Container>
        <SectionHeader>Stack</SectionHeader>
        <ul
          ref={sectionRef}
          className="my-4 flex flex-wrap gap-5 border-y p-4 select-none"
        >
          {TECH_STACK.map((tech, idx) => {
            return (
              <StackCard
                key={tech.key}
                idx={idx}
                tech={tech}
                scrollYProgress={scrollYProgress}
                sectionLeft={sectionLeft}
              />
            );
          })}
        </ul>
      </Container>
    </Section>
  );
};
