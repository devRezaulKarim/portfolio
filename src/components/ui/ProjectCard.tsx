import { ExternalLink, Github } from "lucide-react";
import type { ProjectType } from "@/types/types";
import { motion } from "motion/react";

const buildVariants = (direction: "left" | "right" | "bottom") => {
  const axis =
    direction === "bottom"
      ? { x: 0, y: 300 }
      : direction === "right"
        ? { x: 300, y: 300 }
        : { x: -300, y: 300 };

  return {
    hidden: { opacity: 0, scale: 0.5, ...axis },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
};

export const ProjectCard = ({
  project,
  idx,
}: {
  project: ProjectType;
  idx: number;
}) => {
  const directions = ["left", "bottom", "right"] as const;
  const direction = directions[(idx - 1) % directions.length];
  const itemVariants = buildVariants(direction);

  return (
    <motion.article
      key={project.id}
      className="group relative flex h-full w-full origin-center flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 duration-500 hover:shadow-[0_4px_20px_rgba(255,82,0,0.7),inset_0_0_10px_rgba(255,255,255,0.5)]"
      variants={itemVariants}
    >
      <div
        style={{
          backgroundImage: `url(${project.image})`,
          backgroundOrigin: "top left",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="relative aspect-square w-full overflow-hidden duration-500 group-hover:blur-lg"
      >
        <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between gap-2">
          <div className="bg-bg-2/80 rounded-full border border-white/10 px-3 py-1 text-sm tracking-[0.2em] text-neutral-200">
            {project.title}
          </div>
          <div className="flex gap-2 lg:hidden">
            <a
              className="button-text-u bg-primary flex size-7 items-center justify-center rounded-full text-neutral-100 shadow-[inset_0_2px_7px_#ffffff90]"
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink className="size-4" />
            </a>
            <a
              className="button-text-u text-primary bg-bg-1 flex size-7 items-center justify-center rounded-full border border-white/15"
              href={project.sourceLink}
              target="_blank"
              rel="noreferrer"
            >
              <Github className="size-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-bg-1/50 absolute inset-0 hidden flex-1 flex-col gap-6 rounded-[10px] p-6 opacity-0 duration-500 group-hover:opacity-100 lg:flex">
        <div>
          <p className="code-text-ibm text-neutral-200">Tech stack</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.techs.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="code-text-ibm rounded-full border border-white/10 bg-white/5 px-3 py-1 text-neutral-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto flex flex-wrap gap-3">
          <a
            className="button-text-u bg-primary flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-neutral-100 shadow-[inset_0_2px_7px_#ffffff90] duration-300 hover:translate-y-0.5"
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
          >
            Live
            <ExternalLink className="size-4" />
          </a>
          <a
            className="button-text-u flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-neutral-200 duration-300 hover:border-white/30"
            href={project.sourceLink}
            target="_blank"
            rel="noreferrer"
          >
            Code
            <Github className="size-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
};
