/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'MareBoats-Tours-Hvar-Web';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  compress: true,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [390, 768, 1280, 1920],
    minimumCacheTTL: 60,
  },
  // Keep local development on root URL to avoid / 404.
  basePath: isProd && !process.env.CUSTOM_DOMAIN ? `/${repoName}` : '',
  assetPrefix: isProd && !process.env.CUSTOM_DOMAIN ? `/${repoName}` : '',
  async redirects() {
    return [
      {
        source: '/blue-cave',
        destination: '/tours/blue-cave-pakleni-islands',
        permanent: true,
      },
      {
        source: '/sunset',
        destination: '/tours/sunset-cruise',
        permanent: true,
      },
      {
        source: '/boat-rental',
        destination: '/rentals',
        permanent: true,
      },
      {
        source: '/services/scooter-rental',
        destination: '/rentals',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
