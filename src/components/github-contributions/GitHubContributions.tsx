import { Suspense } from "react";

import { GitHubContributionFallback, GitHubContributionGraph } from "./Graph";
import Section from "../wrappers/Section";
import { getGitHubContributions } from "@/lib/github-contributions";

export function GitHubContributions() {
  const contributions = getGitHubContributions();

  return (
    <Section>
      <h2 className="sr-only">GitHub Contributions</h2>

      <Suspense fallback={<GitHubContributionFallback />}>
        <GitHubContributionGraph contributions={contributions} />
      </Suspense>
    </Section>
  );
}
