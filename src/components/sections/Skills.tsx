import skillBG from "@/assets/Skills.png";
import { environments, techs } from "@/lib/constants";
import { EnvironmentCard } from "../ui/EnvironmentCard";
import { TechCard } from "../ui/TechCard";
import { SectionName } from "../ui/SectionName";
import { motion } from "motion/react";

const skillsContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export const Skills = () => {
  return (
    <section
      style={{
        backgroundImage: `
        url(${skillBG})
        `,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      id="skills"
      className="after:bg-bg-1/90 relative isolate overflow-x-clip py-20 after:absolute after:inset-0 after:-z-10"
    >
      <div className="container px-6 sm:px-16">
        <div className="flex flex-col items-center space-y-8 text-center sm:space-y-6">
          <SectionName name="Skills" />
          <p className="para-text-ibm text-neutral-300">
            I am striving to never stop learning and improving
          </p>
        </div>
        <div className="my-16 flex flex-wrap items-center justify-center gap-10 sm:gap-20">
          {environments.map((env, idx) => (
            <EnvironmentCard
              key={env.name}
              icon={env.icon}
              name={env.name}
              stacks={env.stacks}
              idx={idx}
            />
          ))}
        </div>
        <motion.div
          variants={skillsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-100px",
          }}
          className="flex flex-wrap items-center justify-center gap-x-20 gap-y-10"
        >
          {techs.map((tech, idx) => (
            <TechCard
              key={tech.name}
              icon={tech.icon}
              name={tech.name}
              color={tech.color}
              idx={idx + 1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
