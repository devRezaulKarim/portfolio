"use client";
import Section from "../wrappers/Section";
import Container from "../wrappers/Container";
import { SectionHeader } from "../common/SectionHeader";
import { TECH_STACK } from "@/lib/tech-stack";
import { motion } from "motion/react";
import { StackCard } from "./StackCard";

export const Stack = () => {
  return (
    <Section>
      <Container>
        <SectionHeader>Stack</SectionHeader>
        <motion.ul
          className="my-4 flex flex-wrap gap-5 border-y p-4 select-none"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          {TECH_STACK.map((tech) => (
            <StackCard key={tech.key} tech={tech} />
          ))}
        </motion.ul>
      </Container>
    </Section>
  );
};
