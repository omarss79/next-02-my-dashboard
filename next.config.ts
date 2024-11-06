import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'img-s-msn-com.akamaized.net'
      }
    ]
  }
};

export default nextConfig;
