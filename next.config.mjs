/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'MareBoats-Tours-Hvar-Web';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Only apply basePath when no custom domain is configured
  basePath: process.env.CUSTOM_DOMAIN ? '' : `/${repoName}`,
  assetPrefix: process.env.CUSTOM_DOMAIN ? '' : `/${repoName}`,
};

export default nextConfig;
