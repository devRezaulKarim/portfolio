import type { ElementType } from "react";
import { cn } from "../../lib/utls";
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
  return (
    <div
      className={cn(
        "relative max-w-3xl rounded-2xl p-6 pt-15 lg:pt-6",
        isRight ? "ml-auto lg:pl-15" : "mr-auto lg:pr-15",
      )}
      style={{ boxShadow: "inset 0 0 10px 2px #ccc" }}
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
  );
};
