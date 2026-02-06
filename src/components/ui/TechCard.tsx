import type { TechType } from "@/types/types";

export const TechCard = ({ color, icon: Icon, name }: TechType) => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div
        style={{ backgroundColor: color }}
        className="flex size-24 items-center justify-center rounded-full sm:size-35"
      >
        <Icon className="size-16 text-neutral-300" />
      </div>
      <span style={{ color }} className="h2-text-ibm uppercase">
        {name}
      </span>
    </div>
  );
};
