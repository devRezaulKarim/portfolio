import { SectionHeader } from "../common/SectionHeader";
import Container from "../wrappers/Container";
import Section from "../wrappers/Section";
import { ExperienceCard } from "./ExperienceCard";

export const Experience = () => {
  return (
    <Section>
      <Container>
        <SectionHeader>Experience</SectionHeader>
        <div className="border-t py-2 pl-4">
          <ExperienceCard />
        </div>
      </Container>
    </Section>
  );
};
