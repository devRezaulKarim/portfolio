import { cn } from "../../lib/utls";
import { TieIcon } from "./tie-icon";
interface JourneyCardProps {
  color: string;
}

export const JourneyCard = ({ color }: JourneyCardProps) => {
  return (
    <div className="relative">
      <div
        style={{ color }}
        className={cn(
          "absolute top-1/2 flex h-20 w-20 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xl font-bold",
        )}
      >
        2024
      </div>
      <article>
        <div>
          <h2>Title</h2>
          <p>@ Designation</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quidem
          voluptatem minima. Eaque fugiat magni in beatae ad et eius?
        </p>
      </article>
      <TieIcon />
    </div>
  );
};
