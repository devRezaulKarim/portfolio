import { cn } from "../../lib/utls";

interface ProjectCardProps {
  className?: string;
  title: string;
  subtitle: string;
  image: string;
}
export const ProjectCard = ({
  title,
  subtitle,
  image,
  className,
}: ProjectCardProps) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className={cn("w-full", className)}
    >
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
};
