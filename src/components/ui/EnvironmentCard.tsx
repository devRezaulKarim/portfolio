import type { EnvironmentType } from "@/types/types";
import { Fragment } from "react/jsx-runtime";
import { motion, type MotionValue, useMotionTemplate } from "motion/react";

type EnvironmentCardProps = EnvironmentType & {
  translateEnvCard: MotionValue<number>;
  scale: MotionValue<number>;
  cardBlur: MotionValue<number>;
};

export const EnvironmentCard = ({
  icon: Icon,
  name,
  stacks,
  idx,
  translateEnvCard,
  scale,
  cardBlur,
}: EnvironmentCardProps) => {
  const isOdd = idx ?? 1 % 2 !== 0;
  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: "blur(20px)",
        y: 100,
        x: isOdd ? 200 : -200,
      }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        x: 0,
      }}
      viewport={{
        once: true,
        margin: "-100px",
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      style={{
        scale,
        y: translateEnvCard,
        filter: useMotionTemplate`blur(${cardBlur}px)`,
        background: "linear-gradient(to right, #ff5200 2.5%, #ff9664 2.5%)",
      }}
      className="flex w-fit flex-col items-center gap-2 rounded-lg px-8 py-6"
    >
      <Icon className="text-bg-1 size-8" />
      <p className="menu-text-ibm text-bg-1">{name}</p>
      <ul className="para-text-ibm flex text-gray-600">
        {stacks.map((stack, i) => (
          <Fragment key={stack}>
            {i !== 0 && <span>-</span>}
            <li>{stack}</li>
          </Fragment>
        ))}
      </ul>
    </motion.div>
  );
};
