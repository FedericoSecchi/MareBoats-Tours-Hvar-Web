/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'MareBoats-Tours-Hvar-Web';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Keep local development on root URL to avoid / 404.
  basePath: isProd && !process.env.CUSTOM_DOMAIN ? `/${repoName}` : '',
  assetPrefix: isProd && !process.env.CUSTOM_DOMAIN ? `/${repoName}` : '',
};

export default nextConfig;
