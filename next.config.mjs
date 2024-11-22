/** @type {import('next').NextConfig} */
import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypePrism from "@mapbox/rehype-prism";

const nextConfig = {
  pageExtensions: ["tsx", "mdx"],
  reactStrictMode: true,
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
      "avatars.githubusercontent.com", // GitHub avatars
    ],
  },
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

export default withMDX(nextConfig);
