import { useState, type CSSProperties } from "react";
import { cn } from "../../lib/utls";
import { BulbIcon } from "../custom-svgs/bulb-icon";
import { DotPattern } from "../custom-svgs/patterns/dot-pattern";
import type { Project2Type } from "../../lib/custom-types";
import { ExternalLinkIcon } from "lucide-react";

interface ProjectCardTwoProps extends Project2Type {
  className?: string;
  index: number;
  backgroundColor: string;
}

export const ProjectCardTwo = ({
  image,
  title,
  desc,
  features,
  liveLink,
  sourceLink,
  techs,
  index,
  backgroundColor,
}: ProjectCardTwoProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const isRight = index % 2 === 0;

  return (
    <div
      style={{ "--shadow-color": backgroundColor } as CSSProperties}
      className={cn(
        "relative flex pb-16 lg:pb-0",
        isRight ? "justify-end" : "justify-start",
      )}
    >
      <DotPattern
        className={cn("text-gray-400 lg:w-1/2", isRight ? "left-0" : "right-0")}
      />
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          "flex flex-col items-center gap-6 transition-all duration-500",
          isHovered ? "group w-full" : "lg:w-3/5",
          isRight ? "lg:flex-row-reverse" : "lg:flex-row",
        )}
      >
        <div
          className={cn(
            `relative overflow-hidden rounded-lg bg-gray-800 transition-all duration-500`,
            isHovered ? "basis-full lg:basis-2/5" : "basis-full lg:basis-0",
            isHovered &&
              "shadow-[0_0_10px_4px_var(--shadow-color),_0_0_20px_10px_#fff]",
          )}
        >
          <img
            src={image}
            alt={title}
            className={cn(
              "relative inset-0 w-full object-cover transition-opacity duration-500",
              isHovered ? "opacity-100" : "lg:opacity-0",
            )}
          />
        </div>

        <div
          className={cn(
            "grid place-items-center duration-500 group-hover:scale-100 lg:scale-0",
            isRight ? "-ml-4" : "-mr-4",
          )}
        >
          <BulbIcon
            className={cn(
              "z-10 mx-auto",
              isRight ? "lg:rotate-90" : "lg:-rotate-90",
            )}
            size={64}
            neonColor={isRight ? "#fffb00" : "#a6fd29"}
          />
        </div>
        <div
          style={{ backgroundColor }}
          className={cn(
            "z-10 flex h-full flex-col justify-center rounded-lg border p-4 text-left transition-all duration-500 md:text-justify",
            isHovered ? "lg:basis-3/5" : "lg:basis-full",
          )}
        >
          <h2 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
            {title}
          </h2>

          <p className="mt-3 text-white md:text-lg">{desc}</p>

          {/* links (Live / Source) */}
          <div className="mt-4 flex items-center gap-3">
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-base text-white transition hover:text-white hover:shadow-[0_0_4px_3px_var(--shadow-color),_0_0_8px_4px_#fff] md:py-1"
                aria-label="Open live project"
                title="Open live project"
              >
                <ExternalLinkIcon size={16} />
                <span className="hidden md:inline">Live</span>
              </a>
            )}

            {sourceLink && (
              <a
                href={sourceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-base text-white transition hover:text-white hover:shadow-[0_0_4px_3px_var(--shadow-color),_0_0_8px_4px_#fff] md:py-1"
                aria-label="View source code"
                title="View source code"
              >
                {/* github svg */}
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.42-3.88-1.42-.52-1.31-1.27-1.66-1.27-1.66-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.03 11.03 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.5 3.16-1.18 3.16-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.71 5.4-5.29 5.68.41.36.77 1.08.77 2.17 0 1.57-.01 2.84-.01 3.23 0 .3.2.66.79.55A10.5 10.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"
                    fill="currentColor"
                  />
                </svg>
                <span className="hidden md:inline">Source</span>
              </a>
            )}
          </div>
          <div className="mt-4 flex flex-col gap-3">
            {features?.length > 0 && (
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-left text-base text-white"
                  >
                    {/* small check */}
                    <svg
                      className="mt-[0.15rem] h-4 w-4 flex-none"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="leading-tight">{f}</span>
                  </li>
                ))}
              </ul>
            )}

            {techs?.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {techs.map((t, i) => (
                  <span
                    key={i}
                    style={{ color: backgroundColor }}
                    className="rounded-full bg-white px-4 py-1 text-sm font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
