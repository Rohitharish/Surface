/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/Model.glb',
        destination: '/public/Model.glb', // Ensure your Model is in the public directory
      },
    ];
  },
};

export default nextConfig;
