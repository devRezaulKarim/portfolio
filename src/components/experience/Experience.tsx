import { experiences } from "@/lib/experiences";
import { SectionHeader } from "../common/SectionHeader";
import Container from "../wrappers/Container";
import Section from "../wrappers/Section";
import { ExperienceCard } from "./ExperienceCard";

export const Experience = () => {
  return (
    <Section>
      <Container>
        <SectionHeader>Experience</SectionHeader>
        <div className="space-y-6 border-t py-2 pl-4">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.key}
              experience={experience}
              defaultOpen={index === 0}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};
