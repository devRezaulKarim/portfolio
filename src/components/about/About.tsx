import { IconTrophy } from "@tabler/icons-react";
import Container from "../wrappers/Container";
import Section from "../wrappers/Section";
import { GitHubContributions } from "./github-contributions/GitHubContributions";
import { SectionHeader } from "../common/SectionHeader";

export const About = () => {
  return (
    <Section>
      <Container>
        <SectionHeader>About</SectionHeader>
        <ul className="my-4 list-disc space-y-2 border-y pr-4 pb-1 pl-8 font-mono text-sm leading-6 marker:pt-1 marker:text-lg marker:text-neutral-500">
          <li>
            Frontend Engineer focused on building{" "}
            <strong>
              fast, reliable, and thoughtfully designed web applications
            </strong>
            . Working primarily with{" "}
            <strong>React, Next.js, and TypeScript</strong>, I care deeply about
            performance, developer experience, and writing code that remains
            easy to maintain as products grow.
          </li>
          <li>
            Currently building production applications at{" "}
            <a
              href="https://debuggersstudio.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <strong>@DebuggersStudio</strong>
            </a>
            , where I work on modern frontend systems, integrating APIs,
            designing scalable UI architecture, and shipping features used by
            real clients.
          </li>

          <li>
            <strong className="flex items-center gap-x-2">
              <IconTrophy size={18} color="#ff5200" /> Performer of the Year
              2025 —{" "}
              <a
                href="https://debuggersstudio.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                @DebuggersStudio
              </a>
            </strong>{" "}
            Recognized for consistently delivering high-quality frontend
            solutions and strong ownership across multiple projects.
          </li>

          <li>
            Beyond my day-to-day work, I enjoy exploring new technologies and
            building side projects that push my understanding of modern web
            development.
          </li>
          <li>
            Always focused on writing maintainable code, improving developer
            experience, and shipping products that feel fast, intuitive, and
            reliable.
          </li>
          {/* <li>
            Frontend Engineer with 3+ years of hands-on experience, focused on
            building modern, high-performance web applications with strong
            attention to detail and clean architecture.
            <ul className="my-2">
              <li className="flex items-center gap-x-2">
                <IconTrophy size={18} />
                Performer of the Year 2025 — DebuggersStudio
              </li>
            </ul>
          </li>

          <li>
            Skilled in{" "}
            <strong>
              Next.js, React, TypeScript, and modern front-end tooling,
            </strong>{" "}
            creating scalable interfaces that balance usability, performance,
            and maintainability. Experienced with real-world production
            workflows including authentication, API integration, caching
            strategies, and deployment.
          </li>
          <li>
            Passionate about deeply understanding how things work, exploring new
            technologies, and building polished side projects that solve real
            problems.
          </li>
          <li>
            Always focused on writing maintainable code, improving developer
            experience, and shipping products that feel fast, intuitive, and
            reliable.
          </li> */}
        </ul>
        <GitHubContributions />
      </Container>
    </Section>
  );
};
