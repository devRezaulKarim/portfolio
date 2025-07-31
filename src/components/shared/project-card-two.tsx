import { cn } from "../../lib/utls";
import { BulbIcon } from "../custom-svgs/bulb-icon";

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
  const isRight = index % 2 === 0;

  return (
    <div
      className={cn(
        "group flex h-80 w-3/5 justify-start gap-6 transition-all duration-500 hover:w-full",
        isRight ? "mr-auto flex-row-reverse" : "ml-auto",
      )}
    >
      <div
        style={{ "--shadow-color": backgroundColor } as React.CSSProperties}
        className={cn(
          `project-card-two invisible mr-auto max-h-full w-0 scale-0 overflow-hidden rounded-lg transition-all duration-500 group-hover:visible group-hover:w-2/5 group-hover:scale-100`,
          "group-hover:shadow-[0_0_10px_4px_var(--shadow-color),_0_0_20px_10px_#fff]",
        )}
      >
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
      <div
        className={cn("grid place-items-center", isRight ? "-ml-4" : "-mr-4")}
      >
        <BulbIcon
          className={cn("mx-auto", isRight ? "rotate-90" : "-rotate-90")}
          size={64}
          neonColor="#fffb00"
        />
      </div>
      <div
        style={{ backgroundColor }}
        className={cn(
          "z-10 w-full rounded-lg border duration-500 group-hover:w-3/5",
          isRight ? "mr-auto" : "ml-auto",
        )}
      >
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};
