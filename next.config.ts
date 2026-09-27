import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: [
    '@solana/wallet-adapter-base',
    '@solana/wallet-adapter-wallets',
    '@ledgerhq/hw-transport',
  ],
  webpack: (config, { isServer }) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      tls: false,
      crypto: false,
    };

    if (isServer) {
      config.externals = [
        ...(Array.isArray(config.externals) ? config.externals : [config.externals]),
        '@ledgerhq/hw-transport',
      ];
    }

    return config;
  },
};

export default nextConfig;