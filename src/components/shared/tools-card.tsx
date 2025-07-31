import type { ToolsType } from "../../lib/custom-types";
import { cn } from "../../lib/utls";
import { ThreeDCubesPattern } from "./3d-cubes-pattern";
import { CircuitBoardPattern } from "./circuit-board-pattern";
import { DotPattern } from "./dot-pattern";
import { FishScalesPattern } from "./fish-scales-pattern";
import { HoneycombPattern } from "./honeycomb-pattern";
import { LinePattern } from "./line-pattern";
import { TriangleMeshPattern } from "./triangle-mesh-pattern";

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

  const Pattern = [
    ThreeDCubesPattern,
    CircuitBoardPattern,
    DotPattern,
    FishScalesPattern,
    HoneycombPattern,
    LinePattern,
    TriangleMeshPattern,
  ][Math.floor(Math.random() * 7)];

  return (
    <div
      className="group relative grid !aspect-square w-full cursor-default place-items-center rounded-lg p-3 shadow-[0_0_10px_0_#aaa,_inset_0_0_10px_2px_#aaa] duration-1000 hover:shadow-[0_0_10px_0_#00f0ff,_inset_0_0_10px_2px_#00f0ff]"
      // style={{ boxShadow: "0 0 10px 0 #ccc, inset 0 0 10px 2px #aaa" }}
    >
      <Pattern className="left-0 w-full text-gray-400" />
      <div className={`z-[1] flex flex-col items-center gap-2`}>
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
