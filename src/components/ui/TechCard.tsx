import type { TechType } from "@/types/types";

export const TechCard = ({ color, icon: Icon, name }: TechType) => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div
        style={{ backgroundColor: color }}
        className="flex size-35 items-center justify-center rounded-full"
      >
        <Icon className="size-16 text-white" />
      </div>
      <span style={{ color }} className="h2-text-ibm uppercase">
        {name}
      </span>
    </div>
  );
};
