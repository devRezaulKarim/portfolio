import type { Activity } from "@/components/kibo-ui/contribution-graph";

type GitHubContributionsResponse = {
  contributions: Activity[];
};

const CONTRIBUTIONS_API_URL =
  "https://github-contributions-api.jogruber.de/v4/devRezaulKarim?y=last";

export const getGitHubContributions = async () => {
  const res = await fetch(CONTRIBUTIONS_API_URL);
  const data = (await res.json()) as GitHubContributionsResponse;
  return data.contributions;
};
