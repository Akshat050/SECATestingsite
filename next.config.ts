import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? "/SECATestingsite" : "",
  assetPrefix: isGithubPages ? "/SECATestingsite/" : "",
};

export default nextConfig;
