import { motion } from "motion/react";

import type { Dispatch, SetStateAction } from "react";
import { cn } from "@/lib/utils";
import type { NavLinkType } from "@/types/types";

interface NavLinkProps extends NavLinkType {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<string>>;
}
const itemVariants = {
  hidden: { opacity: 0, filter: "blur(20px)", y: -10 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};
export const NavLink = ({
  icon: Icon,
  to,
  isActive,
  setIsActive,
}: NavLinkProps) => {
  return (
    <motion.a
      variants={itemVariants}
      href={to}
      onClick={() => setIsActive(to)}
      className={cn(
        "relative z-10 rounded-full p-3 transition-colors duration-300",
        isActive ? "active text-neutral-300" : "text-primary",
      )}
    >
      <Icon className="size-5" />
    </motion.a>
  );
};
