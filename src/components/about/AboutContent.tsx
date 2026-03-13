"use client";

import { IconTrophy } from "@tabler/icons-react";
import { motion } from "motion/react";

const aboutItems = [
  <>
    Frontend Engineer focused on building{" "}
    <strong>fast, reliable, and thoughtfully designed web applications</strong>.
    Working primarily with <strong>React, Next.js, and TypeScript</strong>, I
    care deeply about performance, developer experience, and writing code that
    remains easy to maintain as products grow.
  </>,
  <>
    Currently building production applications at{" "}
    <a
      href="https://debuggersstudio.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      <strong>@DebuggersStudio</strong>
    </a>
    , where I work on modern frontend systems, integrating APIs, designing
    scalable UI architecture, and shipping features used by real clients.
  </>,
  <>
    <strong className="flex items-center gap-x-2">
      <IconTrophy size={18} color="#ff5200" /> Performer of the Year 2025 —{" "}
      <a
        href="https://debuggersstudio.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        @DebuggersStudio
      </a>
    </strong>{" "}
    Recognized for consistently delivering high-quality frontend solutions and
    strong ownership across multiple projects.
  </>,
  <>
    Beyond my day-to-day work, I enjoy exploring new technologies and building
    side projects that push my understanding of modern web development.
  </>,
  <>
    Always focused on writing maintainable code, improving developer experience,
    and shipping products that feel fast, intuitive, and reliable.
  </>,
];

const aboutListVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const aboutItemVariants = {
  hidden: { y: 10, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export const AboutContent = () => {
  return (
    <motion.ul
      className="my-4 list-disc space-y-2 border-y pr-4 pb-1 pl-8 font-mono text-sm leading-6 marker:pt-1 marker:text-lg marker:text-neutral-500"
      variants={aboutListVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      {aboutItems.map((content, idx) => (
        <motion.li key={idx} variants={aboutItemVariants}>
          {content}
        </motion.li>
      ))}
    </motion.ul>
  );
};
