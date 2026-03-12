import { ProjectItem } from "@/lib/projects";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const ProjectCard = ({
  index,
  project,
}: {
  index: number;
  project: ProjectItem;
}) => {
  return (
    <div className={cn(index !== 0 && "border-t")}>
      <div className="flex items-start">
        <div className="shrink-0 px-4 py-2">
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
        <div className="border-l border-dashed py-2 pl-4">
          <div className="cursor-default">
            <p className="text-lg font-medium text-balance">{project.title}</p>
            <span className="text-sm">{project.subtitle}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
