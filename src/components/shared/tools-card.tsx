import type { CSSProperties } from "react";
import type { ToolsType } from "../../lib/custom-types";
import { cn } from "../../lib/utls";
import { ThreeDCubesPattern } from "../custom-svgs/patterns/3d-cubes-pattern";
import { CircuitBoardPattern } from "../custom-svgs/patterns/circuit-board-pattern";
import { DotPattern } from "../custom-svgs/patterns/dot-pattern";
import { FishScalesPattern } from "../custom-svgs/patterns/fish-scales-pattern";
import { HoneycombPattern } from "../custom-svgs/patterns/honeycomb-pattern";
import { LinePattern } from "../custom-svgs/patterns/line-pattern";
import { TriangleMeshPattern } from "../custom-svgs/patterns/triangle-mesh-pattern";

interface ToolsCardProps extends ToolsType {
  className?: string;
  neonColor?: string;
  index: number;
}

export const ToolsCard = ({
  toolName,
  toolIcon: ToolIcon,
  neonColor = "#00f0ff",
  index,
}: ToolsCardProps) => {
  const getRotateClass = () => {
    const classes = [
      "group-hover:rotate-x-360",
      "group-hover:rotate-y-360",
      "group-hover:rotate-z-360",
    ];
    return classes[Math.floor(Math.random() * classes.length)];
  };

  const rotateClass = getRotateClass();

  const patterns = [
    ThreeDCubesPattern,
    CircuitBoardPattern,
    DotPattern,
    FishScalesPattern,
    HoneycombPattern,
    LinePattern,
    TriangleMeshPattern,
  ];

  const Pattern = patterns[index % patterns.length];

  return (
    <div
      style={{ "--shadowColor": neonColor } as CSSProperties}
      className={cn(
        "group relative grid !aspect-square w-full cursor-default place-items-center rounded-lg p-3 shadow-[0_0_10px_0_#aaa,_inset_0_0_10px_2px_#aaa] duration-1000",
        "hover:shadow-[0_0_10px_0_var(--shadowColor),_inset_0_0_10px_2px_var(--shadowColor)]",
      )}
    >
      <Pattern className="left-0 w-full text-gray-400" />
      <div className="z-[1] flex flex-col items-center gap-2">
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
