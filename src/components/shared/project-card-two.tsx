import { useState } from "react";
import { cn } from "../../lib/utls";
import { BulbIcon } from "../custom-svgs/bulb-icon";
import { DotPattern } from "./dot-pattern";

interface ProjectCardTwoProps {
  className?: string;
  title: string;
  subtitle: string;
  image: string;
  index: number;
  backgroundColor: string;
}

export const ProjectCardTwo = ({
  image,
  title,
  subtitle,
  index,
  backgroundColor,
}: ProjectCardTwoProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const isRight = index % 2 === 0;

  return (
    <div
      className={cn(
        "w- relative flex",
        isRight ? "justify-end" : "justify-start",
      )}
    >
      <DotPattern className={isRight ? "left-0" : "right-0"} />
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          "flex h-80 items-center gap-6 transition-all duration-500",
          isHovered ? "group w-full" : "w-3/5",
          isRight ? "flex-row-reverse" : "flex-row",
        )}
      >
        <div
          style={{ "--shadow-color": backgroundColor } as React.CSSProperties}
          className={cn(
            `relative h-full overflow-hidden rounded-lg bg-gray-800 transition-all duration-500`,
            isHovered ? "basis-2/5" : "basis-0",
            isHovered &&
              "shadow-[0_0_10px_4px_var(--shadow-color),_0_0_20px_10px_#fff]",
          )}
        >
          <img
            src={image}
            alt={title}
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
              isHovered ? "opacity-100" : "opacity-0",
            )}
          />
        </div>

        <div
          className={cn("grid place-items-center", isRight ? "-ml-4" : "-mr-4")}
        >
          <BulbIcon
            className={cn("mx-auto", isRight ? "rotate-90" : "-rotate-90")}
            size={64}
            neonColor={isRight ? "#fffb00" : "#a6fd29"}
          />
        </div>
        <div
          style={{ backgroundColor }}
          className={cn(
            "z-10 flex h-full flex-col justify-center rounded-lg border p-4 transition-all duration-500",
            isHovered ? "basis-3/5" : "basis-full",
          )}
        >
          <h2 className="text-2xl font-bold">{title}</h2>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};
