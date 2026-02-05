import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com", "cdn.example.com"],
  },
};

export default withFlowbiteReact(nextConfig);
