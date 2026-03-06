import { SpacerPattern } from "@/components/common/SpacerPattern";
import { GitHubContributions } from "@/components/github-contributions/GitHubContributions";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <>
      <SpacerPattern />
      <SpacerPattern position="right" />
      <Header />
      <GitHubContributions />
    </>
  );
}
