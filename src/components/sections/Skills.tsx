import skillBG from "@/assets/Skills.png";
import { environments, techs } from "@/lib/constants";
import { EnvironmentCard } from "../ui/EnvironmentCard";
import { TechCard } from "../ui/TechCard";
import { SectionName } from "../ui/SectionName";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

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
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateEnvCard = useTransform(
    scrollYProgress,
    [0, 1],
    isDesktop ? [0, -100] : [20, -100],
  );
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const cardBlur = useTransform(
    scrollYProgress,
    [0, 0.15, 0.35, 0.5, 0.65, 0.75, 1],
    isDesktop ? [0, 0, 0, 0, 0, 5, 10] : [0, 0, 0, 0, 0, 10, 10],
  );

  const translateTechCard = useTransform(
    scrollYProgress,
    [0, 0.8],
    isDesktop ? [-150, 50] : [20, -100],
  );

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
      <div ref={ref} className="container px-6 lg:px-16">
        <div className="flex flex-col items-center space-y-8 text-center sm:space-y-6">
          <SectionName name="Skills" />
          <p className="para-text-ibm text-neutral-300">
            I am striving to never stop learning and improving
          </p>
        </div>
        <div className="my-16 flex flex-wrap items-center justify-center gap-10 lg:gap-20">
          {environments.map((env, idx) => (
            <EnvironmentCard
              key={env.name}
              icon={env.icon}
              name={env.name}
              stacks={env.stacks}
              idx={idx}
              translateEnvCard={translateEnvCard}
              scale={scale}
              cardBlur={cardBlur}
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
              translateTechCard={translateTechCard}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
