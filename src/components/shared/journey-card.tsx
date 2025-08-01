import type { ElementType } from "react";
import { cn } from "../../lib/utls";
import { TriangleMeshPattern } from "../custom-svgs/patterns/triangle-mesh-pattern";
import { SnowflakePattern } from "../custom-svgs/patterns/snowflake-pattern";
import { SnowflakeTwoPattern } from "../custom-svgs/patterns/snowflake-two-pattern";
import { GameOfLifePattern } from "../custom-svgs/patterns/game-of-life-pattern";
import { CurlingVinesPattern } from "../custom-svgs/patterns/curling-vines-pattern";
import { ThreeDCubesPattern } from "../custom-svgs/patterns/3d-cubes-pattern";
import { CircuitBoardPattern } from "../custom-svgs/patterns/circuit-board-pattern";
import { DotPattern } from "../custom-svgs/patterns/dot-pattern";
import { FishScalesPattern } from "../custom-svgs/patterns/fish-scales-pattern";
import { HoneycombPattern } from "../custom-svgs/patterns/honeycomb-pattern";
import { LinePattern } from "../custom-svgs/patterns/line-pattern";
interface JourneyCardProps {
  color: string;
  date: number;
  title: string;
  designation?: string;
  description: string;
  cardIcon: ElementType;
  index: number;
}

export const JourneyCard = ({
  index,
  color,
  date,
  title,
  designation,
  description,
  cardIcon: CardIcon,
}: JourneyCardProps) => {
  const isRight = index % 2 === 0;
  const patterns = [
    ThreeDCubesPattern,
    CircuitBoardPattern,
    DotPattern,
    FishScalesPattern,
    HoneycombPattern,
    LinePattern,
    TriangleMeshPattern,
    SnowflakePattern,
    CurlingVinesPattern,
    GameOfLifePattern,
    SnowflakeTwoPattern,
  ];
  const Pattern = patterns[Math.floor(Math.random() * patterns.length)];

  return (
    <div className="relative w-full">
      <Pattern
        className={cn("text-gray-700", isRight ? "left-0" : "right-0")}
      />
      <div
        className={cn(
          "relative max-w-3xl rounded-2xl p-6 pt-15 lg:pt-6",
          isRight ? "ml-auto lg:pl-15" : "mr-auto lg:pr-15",
        )}
        style={{ boxShadow: "inset 0 0 10px 2px #ccc", backgroundColor: color }}
      >
        <div
          style={{
            color,
            boxShadow: `inset 0 0 0 4px ${color}, 0 0 10px 2px #ccc, inset 0 0 10px 6px ${color}`,
          }}
          className={cn(
            "absolute top-0 flex h-20 w-20 -translate-y-1/2 items-center justify-center rounded-full bg-gray-300 text-base font-black lg:top-1/2 lg:text-lg",
            isRight
              ? "left-1/2 -translate-x-1/2 lg:left-0"
              : "right-1/2 translate-x-1/2 lg:right-0",
          )}
        >
          {date}
        </div>
        <article
          className={cn("flex flex-col gap-4", isRight ? "" : "text-right")}
        >
          <div>
            <h2 className="text-2xl font-bold lg:text-3xl">{title}</h2>
            {designation && (
              <p className="text-xl font-semibold text-[#aaa] lg:text-2xl">
                {designation}
              </p>
            )}
          </div>
          <p className="text-left text-lg lg:text-justify lg:text-xl">
            {description}
          </p>
        </article>

        <CardIcon
          className={cn(
            "absolute bottom-6 lg:top-1/2 lg:bottom-auto lg:-translate-y-1/2",
            isRight ? "right-6" : "left-6",
          )}
        />
      </div>
    </div>
  );
};
