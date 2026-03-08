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
  const [sectionLeft, setSectionLeft] = useState(0);
  const [sectionTop, setSectionTop] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: [`start ${sectionTop}px`, "start end"],
  });

  useEffect(() => {
    setTimeout(() => {
      const sectionRect = sectionRef.current?.getBoundingClientRect();
      const sectionLeft = sectionRect?.left ? sectionRect?.left - 100 : 0;
      const sectionTop = sectionRect?.top ? sectionRect?.top : 1200;
      setSectionLeft(sectionLeft);
      setSectionTop(sectionTop);
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
          {TECH_STACK.map((tech, idx) => (
            <StackCard
              key={tech.key}
              idx={idx}
              tech={tech}
              scrollYProgress={scrollYProgress}
              sectionLeft={sectionLeft}
            />
          ))}
        </ul>
      </Container>
    </Section>
  );
};
