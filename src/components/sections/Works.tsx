import worksBG from "@/assets/works-bg.png";
import { projects } from "@/lib/constants";
import { SectionName } from "../ui/SectionName";
import { ProjectCard } from "../ui/ProjectCard";

export const Works = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${worksBG})`,
      }}
      id="works"
      className="after:bg-bg-2/95 relative isolate overflow-hidden py-20 after:absolute after:inset-0 after:-z-10"
    >
      <div className="container px-6 lg:px-16">
        <div className="flex flex-col items-center space-y-8 text-center sm:space-y-6">
          <SectionName name="Works" />
          <p className="para-text-ibm text-neutral-300">
            A selection of recent projects focused on clean UI, strong UX, and
            real-world results.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
