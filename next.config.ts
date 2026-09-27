import type { NextConfig } from 'next';
import webpack from 'webpack';

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
      // Ignorar completamente los paquetes de Ledger en la compilación del servidor
      config.plugins.push(
        new webpack.IgnorePlugin({
          resourceRegExp: /^@ledgerhq\//,
        })
      );
    }

    return config;
  },
};

export default nextConfig;