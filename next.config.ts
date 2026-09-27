import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: false,
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
      // Reemplazar @ledgerhq/hw-transport con false en el servidor para evitar que busque submódulos rotos
      config.resolve.alias = {
        ...config.resolve.alias,
        '@ledgerhq/hw-transport': false,
        '@ledgerhq/hw-transport-webusb': false,
      };
    }

    return config;
  },
};

export default nextConfig;