import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placecats.com',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Fixes hot reloading in dev container
    if (!isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
    }
    return config
  },
};

export default nextConfig;
