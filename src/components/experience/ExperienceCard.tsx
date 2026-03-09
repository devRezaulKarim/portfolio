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

type ExperienceCardProps = {
  experience: ExperienceItem;
  defaultOpen?: boolean;
};

export const ExperienceCard = ({
  experience,
  defaultOpen = false,
}: ExperienceCardProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="flex size-6 items-center justify-center">
          <Image
            width={20}
            height={20}
            alt={`${experience.company} logo`}
            src={`/experience/${experience.key}.png`}
          />
        </div>
        <a
          href={experience.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg leading-snug font-semibold underline-offset-4 hover:underline"
        >
          {experience.company}
        </a>
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
              className="hover:before:bg-foreground/10 relative before:absolute before:-top-0.5 before:right-1 before:-bottom-0.5 before:-left-2 before:duration-300"
            >
              <div className="flex items-start justify-between pr-1">
                <div>
                  <p className="flex-1 font-medium text-balance">
                    {experience.role}
                  </p>
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
              <div
                className="prose prose-sm dark:prose-invert max-w-none [&_li::marker]:text-xl [&_ul]:mt-4"
                dangerouslySetInnerHTML={{
                  __html: experience.responsibilities.trim(),
                }}
              />
            </CollapsibleContent>
          </CollapsibleWithContext>
          <ul className="flex flex-wrap gap-1.5 pt-3">
            {experience.skills.map((skill) => (
              <li className="flex" key={`${experience.key}-${skill}`}>
                <span
                  data-slot="tag"
                  className="text-muted-foreground inline-flex items-center border bg-zinc-50 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-900 [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5"
                >
                  {skill}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
