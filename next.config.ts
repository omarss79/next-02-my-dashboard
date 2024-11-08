import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'img-s-msn-com.akamaized.net'
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com'
      }
    ]
  }
};

export default nextConfig;
