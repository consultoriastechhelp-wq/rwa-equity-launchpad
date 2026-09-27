import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config, { isServer }) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      tls: false,
      crypto: false,
    };

    if (isServer) {
      config.externals = [
        ...(config.externals || []),
        '@ledgerhq/hw-transport',
        '@ledgerhq/hw-transport-webusb',
        '@ledgerhq/devices',
      ];
    }

    return config;
  },
};

export default nextConfig;