"use client";
import { useState } from "react";
import { ProjectItem } from "@/lib/projects";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  CollapsibleChevronsIcon,
  CollapsibleContent,
  CollapsibleTrigger,
  CollapsibleWithContext,
} from "../ui/collapsible";
import { ProseMono } from "../ui/typography";
import { Markdown } from "../common/markdown";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Tag } from "../ui/Tag";

export const ProjectCard = ({
  index,
  project,
}: {
  index: number;
  project: ProjectItem;
}) => {
  const [isHover, setIsHover] = useState(false);
  const onMouseEnter = () => setIsHover(true);
  const onMouseLeave = () => setIsHover(false);
  return (
    <div className={cn(index !== 0 && "border-t")}>
      <div className="flex items-start">
        <div
          className="shrink-0 px-4 py-2"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {project.theme ? (
            <>
              <Image
                src={`/projects/${project.iconLight}`}
                width={28}
                height={28}
                alt={project.title}
                className="hidden dark:block"
              />
              <Image
                src={`/projects/${project.iconDark}`}
                width={28}
                height={28}
                alt={project.title}
                className="block dark:hidden"
              />
            </>
          ) : (
            <Image
              src={`/projects/${project.icon}`}
              width={28}
              height={28}
              alt={project.title}
            />
          )}
        </div>
        <div className={cn("grow border-l border-dashed")}>
          <CollapsibleWithContext defaultOpen={false} disabled={false}>
            <CollapsibleTrigger asChild>
              <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className={cn(
                  "relative flex cursor-default justify-between py-2 pr-1 pl-4 before:pointer-events-none before:absolute before:inset-0 before:-left-15.25 before:duration-300",
                  isHover && "before:bg-foreground/10",
                )}
              >
                <div>
                  <h3 className="font-medium text-balance">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {project.subtitle}
                  </p>
                </div>
                <div
                  className="text-muted-foreground flex shrink-0 gap-5 group-disabled:hidden [&_svg:not([class*='size-'])]:size-4"
                  aria-hidden
                >
                  <div className="flex gap-0">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2 duration-300 hover:text-[#ff5200]"
                        >
                          <IconBrandGithub />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent className="font-sans">
                        <p>Open Project Repository</p>
                      </TooltipContent>
                    </Tooltip>{" "}
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2 duration-300 hover:text-[#ff5200]"
                        >
                          <IconExternalLink />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent className="font-sans">
                        <p>Open Project Link</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>

                  <CollapsibleChevronsIcon className="size-4" />
                </div>
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <ProseMono className="pr-2 pl-4">
                <Markdown>{project.highlights}</Markdown>
              </ProseMono>
              <ul className="flex flex-wrap gap-1.5 pt-3 pb-2 pl-4">
                {project.stack.map((stack) => (
                  <li key={`${project.key}-${stack}`}>
                    <Tag>{stack}</Tag>
                  </li>
                ))}
              </ul>
            </CollapsibleContent>
          </CollapsibleWithContext>
        </div>
      </div>
    </div>
  );
};
