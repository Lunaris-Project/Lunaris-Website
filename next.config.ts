import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hyprluna.vercel.app',
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: process.env.NODE_ENV === 'development',
    minimumCacheTTL: 60, // Cache optimized images for 60 seconds by default
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048], // Device width breakpoints
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Image width breakpoints
  },
  experimental: {
    optimizeCss: true,
    optimizeServerReact: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  webpack: (config, { isServer }) => {
    // Bundle optimization
    if (!isServer) {
      // Only load needed locales for dayjs/moment/etc if used
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          commons: {
            name: 'commons',
            chunks: 'all',
            minChunks: 2,
          },
          // Separate material-ui, react, etc. into a framework chunk
          framework: {
            name: 'framework',
            test: /[\\/]node_modules[\\/](react|react-dom|next|framer-motion)[\\/]/,
            priority: 40,
            enforce: true,
          },
        },
      };
    }
    
    return config;
  },
};

export default nextConfig; 