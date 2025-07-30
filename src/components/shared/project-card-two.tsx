import { cn } from "../../lib/utls";

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
        "group flex h-80 w-full justify-start gap-20",
        isRight && "flex-row-reverse",
      )}
    >
      <div
        style={{ "--shadow-color": backgroundColor } as React.CSSProperties}
        className={cn(
          `project-card-two mr-auto max-h-full w-2/5 scale-80 overflow-hidden rounded-lg border transition-all duration-500 group-hover:translate-x-0 group-hover:scale-100`,
          isRight ? "-translate-x-[150%]" : "translate-x-[150%]",
          "group-hover:shadow-[0_0_10px_4px_var(--shadow-color),_0_0_20px_10px_#fff]",
        )}
      >
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
      <div
        style={{ backgroundColor }}
        className={cn(
          "z-10 w-3/5 rounded-lg border",
          isRight ? "mr-auto" : "ml-auto",
        )}
      >
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};
