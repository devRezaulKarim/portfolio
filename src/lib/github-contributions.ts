import { Activity } from "@/components/about/kibo-ui/contribution-graph";
import { unstable_cache } from "next/cache";

type GitHubContributionsResponse = {
  contributions: Activity[];
};

const CONTRIBUTIONS_API_URL =
  "https://github-contributions-api.jogruber.de/v4/devRezaulKarim?y=last";
const CACHE_TTL_SECONDS = 86400;

export const getGitHubContributions = unstable_cache(
  async () => {
    try {
      const res = await fetch(CONTRIBUTIONS_API_URL, {
        next: { revalidate: CACHE_TTL_SECONDS },
        signal: AbortSignal.timeout(8000),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = (await res.json()) as GitHubContributionsResponse;
      return data.contributions;
    } catch (err) {
      console.warn("GitHub contributions fetch failed, returning empty:", err);
      return [] as Activity[];
    }
  },
  ["github-contributions"],
  { revalidate: CACHE_TTL_SECONDS },
);
