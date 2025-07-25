import type { ToolsType } from "../../lib/custom-types";

interface ToolsCardProps extends ToolsType {
  className?: string;
}

export const ToolsCard = ({ toolName, toolIcon: ToolIcon }: ToolsCardProps) => {
  return (
    <div
      className="grid !aspect-square w-full place-items-center rounded-lg p-3"
      style={{ boxShadow: "0 0 10px 0 #ccc" }}
    >
      <div className="flex flex-col items-center gap-2">
        <ToolIcon className="w-8 sm:w-10 md:w-14" />
        <p className="text-base sm:text-lg lg:text-xl">{toolName}</p>
      </div>
    </div>
  );
};
