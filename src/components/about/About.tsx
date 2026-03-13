import Container from "../wrappers/Container";
import Section from "../wrappers/Section";
import { GitHubContributions } from "./github-contributions/GitHubContributions";
import { SectionHeader } from "../common/SectionHeader";
import { AboutContent } from "./AboutContent";

export const About = () => {
  return (
    <Section id="about">
      <Container>
        <SectionHeader>About</SectionHeader>
        <AboutContent />
        <GitHubContributions />
      </Container>
    </Section>
  );
};
