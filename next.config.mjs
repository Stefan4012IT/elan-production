/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isGithubActions ? '/elan' : '',
  assetPrefix: isGithubActions ? '/elan/' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubActions ? '/elan' : '',
  },
  sassOptions: {
    additionalData: `$asset-prefix: "${isGithubActions ? '/elan' : ''}";`,
  },
};

export default nextConfig;
