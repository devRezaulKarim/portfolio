import type { ToolsType } from "../../lib/custom-types";
import { cn } from "../../lib/utls";

interface ToolsCardProps extends ToolsType {
  className?: string;
}

export const ToolsCard = ({ toolName, toolIcon: ToolIcon }: ToolsCardProps) => {
  const getRotateClass = () => {
    const classes = [
      "group-hover:rotate-x-360",
      "group-hover:rotate-y-360",
      "group-hover:rotate-z-360",
    ];
    return classes[Math.floor(Math.random() * 3)];
  };

  const rotateClass = getRotateClass();

  return (
    <div
      className="group grid !aspect-square w-full cursor-default place-items-center rounded-lg p-3"
      style={{ boxShadow: "0 0 10px 0 #ccc" }}
    >
      <div className={`flex flex-col items-center gap-2`}>
        <ToolIcon
          className={cn(
            "inline-block w-8 duration-[1.5s] sm:w-10 md:w-14",
            rotateClass,
          )}
        />
        <p className="text-base md:text-lg">{toolName}</p>
      </div>
    </div>
  );
};
