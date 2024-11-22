import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
});

const hasPAT = () => {
  return !!process.env.GITHUB_PERSONAL_ACCESS_TOKEN;
};

export const getUserRepositories = async (username: string) => {
  if (hasPAT()) {
    try {
      // Fetch pinned repositories using GraphQL API
      const pinnedRepos = await octokit.graphql<any>({
        query: `
          query ($username: String!) {
            user(login: $username) {
              pinnedItems(first: 6, types: [REPOSITORY]) {
                nodes {
                  ... on Repository {
                    name
                    stargazers {
                      totalCount
                    }
                    forkCount
                    url
                    description
                  }
                }
              }
            }
          }
        `,
        username,
      });

      const pinnedRepoNames = pinnedRepos.user.pinnedItems.nodes.map(
        (repo: any) => repo.name
      );

      // Fetch all repositories using REST API
      const { data } = await octokit.rest.repos.listForUser({
        username,
        per_page: 100, // Fetch up to 100 repos
        visibility: "public",
      });

      // Separate pinned repositories from the rest
      const pinned = data.filter((repo) => pinnedRepoNames.includes(repo.name));
      const nonPinned = data.filter((repo) => !pinnedRepoNames.includes(repo.name));

      // Sort non-pinned repositories by stargazers count
      const sortedNonPinned = nonPinned.sort(
        (a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0)
      );

      // Combine pinned repositories first, then the rest
      const combined = [...pinned, ...sortedNonPinned];

      return combined.slice(0, 20); // Limit to top 20 repositories
    } catch (error) {
      console.log(error);
      return null;
    }
  } else {
    try {
      const res = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=100`
      );
      const data = await res.json();

      // Sort by stargazers count if PAT is not available
      const sortedData = data.sort(
        (a: any, b: any) => b.stargazers_count - a.stargazers_count
      );

      return sortedData.slice(0, 20); // Limit to top 20 repositories
    } catch (error) {
      console.log(error);
      return null;
    }
  }
};
