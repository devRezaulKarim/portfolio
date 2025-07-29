import { cn } from "../../lib/utls";

interface ProjectCardTwoProps {
  className?: string;
  title: string;
  subtitle: string;
  image: string;
  index: number;
}
export const ProjectCardTwo = ({
  image,
  title,
  subtitle,
  index,
}: ProjectCardTwoProps) => {
  const isRight = index % 2 === 0;
  return (
    <div
      className={cn(
        "flex max-h-80 w-full gap-20",
        isRight && "flex-row-reverse",
      )}
    >
      <div className="max-h-full w-2/5 overflow-hidden rounded-lg border">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="w-3/5 rounded-lg border">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};
