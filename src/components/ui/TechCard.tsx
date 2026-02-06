import type { TechType } from "@/types/types";
import { motion } from "motion/react";

const itemVariants = {
  hidden: { opacity: 0, filter: "blur(20px)", x: -200, scale: 0 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const TechCard = ({ color, icon: Icon, name, idx }: TechType) => {
  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-col items-center gap-6"
      style={{ zIndex: idx ?? 1 * -1 }}
    >
      <div
        style={{ backgroundColor: color }}
        className="flex size-24 items-center justify-center rounded-full sm:size-30"
      >
        <Icon className="size-16 text-neutral-300" />
      </div>
      <span style={{ color }} className="h2-text-ibm uppercase">
        {name}
      </span>
    </motion.div>
  );
};
