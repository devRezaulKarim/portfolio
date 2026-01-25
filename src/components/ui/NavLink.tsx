import type { Dispatch, SetStateAction } from "react";
import { cn } from "@/lib/utils";
import type { NavLinkType } from "@/types/types";

interface NavLinkProps extends NavLinkType {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<string>>;
}

export const NavLink = ({
  icon: Icon,
  to,
  isActive,
  setIsActive,
}: NavLinkProps) => {
  return (
    <a
      href={to}
      onClick={() => setIsActive(to)}
      className={cn(
        "relative z-10 rounded-full p-3 transition-colors duration-300",
        isActive ? "active text-white" : "text-primary",
      )}
    >
      <Icon className="size-5" />
    </a>
  );
};
