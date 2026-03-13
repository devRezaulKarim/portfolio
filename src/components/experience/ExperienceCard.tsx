import { cn } from "@/lib/utils";
import type { ExperienceItem } from "@/lib/experiences";
import { IconCode, IconSeparator } from "@tabler/icons-react";
import Image from "next/image";
import {
  CollapsibleChevronsIcon,
  CollapsibleContent,
  CollapsibleTrigger,
  CollapsibleWithContext,
} from "@/components/ui/collapsible";
import { ProseMono } from "../ui/typography";
import { Markdown } from "../common/markdown";
import { Tag } from "../ui/Tag";

type ExperienceCardProps = {
  experience: ExperienceItem;
  defaultOpen?: boolean;
  index: number;
};

export const ExperienceCard = ({
  experience,
  defaultOpen = false,
  index,
}: ExperienceCardProps) => {
  return (
    <div className={cn("space-y-4 pl-4", index !== 0 && "mb-4 border-y py-2")}>
      <div className="flex items-center gap-3">
        <div className="flex size-6 items-center justify-center">
          <Image
            width={20}
            height={20}
            alt={`${experience.company} logo`}
            src={`/experience/${experience.key}.png`}
          />
        </div>
        <h3>
          <a
            href={experience.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg leading-snug font-semibold underline-offset-4 hover:underline"
          >
            {experience.company}
          </a>
        </h3>
        {experience.isCurrent ? (
          <span className="relative flex items-center justify-center">
            <span className="absolute inline-flex size-3 animate-ping rounded-full bg-[#ff5200] opacity-50" />
            <span className="relative inline-flex size-2 rounded-full bg-[#ff5200]" />
            <span className="sr-only">Current Employer</span>
          </span>
        ) : null}
      </div>
      <div className="flex items-start gap-3">
        <div
          className={cn(
            "border-muted-foreground/15 dark:ring-edge ring-border ring-offset-background flex size-6 shrink-0 items-center justify-center border bg-[#ff5200]/20 ring-1 ring-offset-1 dark:bg-[#ff5200]/10",
            "[&_svg]:text-muted-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
          )}
        >
          <IconCode />
        </div>
        <div className="grow">
          <CollapsibleWithContext defaultOpen={defaultOpen} disabled={false}>
            <CollapsibleTrigger
              asChild
              className="hover:before:bg-foreground/10 relative before:absolute before:-top-0.5 before:right-0 before:-bottom-0.5 before:-left-2 before:duration-300"
            >
              <div className="flex items-start justify-between pr-1">
                <div>
                  <h4 className="flex-1 font-medium text-balance">
                    {experience.role}
                  </h4>
                  <div className="text-muted-foreground flex items-center text-sm">
                    <dl>
                      <dt className="sr-only">Employment Type</dt>
                      <dd>{experience.type}</dd>
                    </dl>
                    <IconSeparator className="rotate-90" size={20} />
                    <dl>
                      <dt className="sr-only">Employment Period</dt>
                      <dd className="flex items-center gap-1">
                        <span>{experience.startDate}</span>
                        <span className="font-mono">—</span>
                        <span>{experience.endDate}</span>
                      </dd>
                    </dl>
                  </div>
                </div>
                <div
                  className="text-muted-foreground shrink-0 group-disabled:hidden [&_svg]:size-4"
                  aria-hidden
                >
                  <CollapsibleChevronsIcon />
                </div>
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <ProseMono className="pt-2 pr-2">
                <Markdown>{experience.responsibilities}</Markdown>
              </ProseMono>
            </CollapsibleContent>
          </CollapsibleWithContext>
          <ul className="flex flex-wrap gap-1.5 pt-3">
            {experience.skills.map((skill) => (
              <li key={`${experience.key}-${skill}`}>
                <Tag>{skill}</Tag>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
