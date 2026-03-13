import { SectionHeader } from "../common/SectionHeader";
import Container from "../wrappers/Container";
import Section from "../wrappers/Section";
import { projects } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <Section id="projects">
      <Container>
        <SectionHeader>Projects</SectionHeader>
        <div className="border-t">
          {projects.map((project, index) => (
            <ProjectCard key={project.key} index={index} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
