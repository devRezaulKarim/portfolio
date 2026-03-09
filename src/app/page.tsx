import { SpacerPattern } from "@/components/common/SpacerPattern";
import Header from "@/components/header/Header";
import { About } from "@/components/about/About";
import { Stack } from "@/components/tech-stack/Stack";
import { SectionGap } from "@/components/common/SectionGap";

export default function Home() {
  return (
    <>
      <SpacerPattern />
      <SpacerPattern position="right" />
      <Header />
      <SectionGap />
      <About />
      <SectionGap />
      <Stack />
    </>
  );
}
