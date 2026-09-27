import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    '@solana/wallet-adapter-base',
    '@solana/wallet-adapter-wallets',
  ],
  webpack: (config, { isServer }) => {
    config.resolve.fallback = { fs: false, os: false, path: false };
    
    if (isServer) {
      config.externals = [...(config.externals || []), '@ledgerhq/hw-transport', '@ledgerhq/hw-transport-webusb'];
    }

    return config;
  },
};

export default nextConfig;