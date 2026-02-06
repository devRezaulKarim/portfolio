import skillBG from "@/assets/Skills.png";
import { environments, techs } from "@/lib/constants";
import { EnvironmentCard } from "../ui/EnvironmentCard";
import { TechCard } from "../ui/TechCard";
import { SectionName } from "../ui/SectionName";

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
      className="after:bg-bg-1/90 relative isolate py-20 after:absolute after:inset-0 after:-z-10"
    >
      <div className="container px-6 sm:px-16">
        <div className="flex flex-col items-center space-y-8 text-center sm:space-y-6">
          <SectionName name="Skills" />
          <p className="para-text-ibm text-neutral-300">
            I am striving to never stop learning and improving
          </p>
        </div>
        <div className="my-16 flex flex-wrap items-center justify-center gap-10 sm:gap-20">
          {environments.map((env) => (
            <EnvironmentCard
              key={env.name}
              icon={env.icon}
              name={env.name}
              stacks={env.stacks}
            />
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-20 gap-y-10">
          {techs.map((tech) => (
            <TechCard
              key={tech.name}
              icon={tech.icon}
              name={tech.name}
              color={tech.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
