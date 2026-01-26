import VerticalLine from "@/custom-icons/VerticalLine";
import { MouseIcon } from "lucide-react";

export const SectionTop = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <MouseIcon className="text-primary size-10" />
      <VerticalLine className="text-white" />
    </div>
  );
};
