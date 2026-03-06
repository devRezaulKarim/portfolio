import { Suspense } from "react";

import { GitHubContributionFallback, GitHubContributionGraph } from "./Graph";
import { getGitHubContributions } from "@/lib/github-contributions";

export function GitHubContributions() {
  const contributions = getGitHubContributions();

  return (
    <div className="border-y mb-4">
      <h2 className="sr-only">GitHub Contributions</h2>

      <Suspense fallback={<GitHubContributionFallback />}>
        <GitHubContributionGraph contributions={contributions} />
      </Suspense>
    </div>
  );
}
