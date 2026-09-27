import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Decirle a Next.js que NO empaquete Ledger en el servidor Node
  serverExternalPackages: [
    '@ledgerhq/hw-transport',
    '@ledgerhq/hw-transport-webusb',
    '@ledgerhq/devices',
  ],
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      tls: false,
      crypto: false,
    };
    return config;
  },
};

export default nextConfig;