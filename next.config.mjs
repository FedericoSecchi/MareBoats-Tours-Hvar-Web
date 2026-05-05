/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'MareBoats-Tours-Hvar-Web';

// GitHub Pages needs /repo basePath in production builds only.
// Never apply it during `next dev` — if NODE_ENV is wrongly set to production in the shell,
// dev would serve under /repoName and `/` would 404 locally.
const isDevServer =
  process.env.npm_lifecycle_event === 'dev' ||
  process.argv.includes('dev');

const useGhPagesBase =
  isProd && !isDevServer && !process.env.CUSTOM_DOMAIN;

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
  basePath: useGhPagesBase ? `/${repoName}` : '',
  assetPrefix: useGhPagesBase ? `/${repoName}` : '',
};

export default nextConfig;
