import skillBG from "@/assets/Skills.png";
import { environments, techs } from "@/lib/constants";
import { EnvironmentCard } from "../ui/EnvironmentCard";
import { TechCard } from "../ui/TechCard";

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
      <div className="container px-16">
        <div className="flex flex-col items-center">
          <span className="text-primary h1-text-u underline decoration-3 underline-offset-12">
            &lt;Skills/&gt;
          </span>
          <p className="para-text-ibm mt-4 text-white">
            I am striving to never stop learning and improving
          </p>
        </div>
        <div className="my-16 flex items-center justify-center gap-20">
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
