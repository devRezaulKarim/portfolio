import Section from "../wrappers/Section";
import Container from "../wrappers/Container";
import { SectionHeader } from "../common/SectionHeader";
import { TECH_STACK } from "@/lib/tech-stack";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import Image from "next/image";

export const Stack = () => {
  return (
    <Section>
      <Container>
        <SectionHeader>Stack</SectionHeader>
        <ul className="my-4 flex flex-wrap gap-5 border-y p-4 select-none">
          {TECH_STACK.map((tech) => {
            return (
              <li key={tech.key} className="flex">
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
                            width={48}
                            height={48}
                            className="dark:hidden"
                            unoptimized
                          />
                          <Image
                            src={`/stacks/${tech.key}-dark.svg`}
                            alt={`${tech.title} dark icon`}
                            width={48}
                            height={48}
                            className="hidden dark:block"
                            unoptimized
                          />
                        </>
                      ) : (
                        <Image
                          src={`/stacks/${tech.key}.svg`}
                          alt={`${tech.title} icon`}
                          width={48}
                          height={48}
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
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
};
