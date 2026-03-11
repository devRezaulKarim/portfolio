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
        <div className="space-y-2 border-t pt-2">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.key}
              experience={experience}
              defaultOpen={index === 0}
              index={index}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};
