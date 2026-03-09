"use client";
import Section from "../wrappers/Section";
import Container from "../wrappers/Container";
import { SectionHeader } from "../common/SectionHeader";
import { TECH_STACK } from "@/lib/tech-stack";
import { useScroll } from "motion/react";
import { useRef } from "react";
import { StackCard } from "./StackCard";

export const Stack = () => {
  const sectionRef = useRef<HTMLUListElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: [`start end`, "end start"],
  });

  return (
    <Section>
      <Container>
        <SectionHeader>Stack</SectionHeader>
        <ul
          ref={sectionRef}
          className="my-4 flex flex-wrap gap-5 border-y p-4 select-none"
        >
          {TECH_STACK.map((tech) => (
            <StackCard
              key={tech.key}
              tech={tech}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </ul>
      </Container>
    </Section>
  );
};
