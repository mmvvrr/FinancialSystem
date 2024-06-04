/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  async redirects() {
    return [
      // Basic redirect
      {
        source: '/',
        destination: '/analytics',
        permanent: true,
      },
    ]
  },

};

export default nextConfig;
