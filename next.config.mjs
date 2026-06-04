/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isGithubActions ? '/elan-production' : '',
  assetPrefix: isGithubActions ? '/elan-production/' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubActions ? '/elan-production' : '',
  },
  sassOptions: {
    additionalData: `$asset-prefix: "${isGithubActions ? '/elan-production' : ''}";`,
  },
};

export default nextConfig;
