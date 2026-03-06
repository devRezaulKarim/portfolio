import { SpacerPattern } from "@/components/common/SpacerPattern";
import Header from "@/components/header/Header";
import { About } from "@/components/about/About";

export default function Home() {
  return (
    <>
      <SpacerPattern />
      <SpacerPattern position="right" />
      <Header />
      <About />
    </>
  );
}
