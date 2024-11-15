/** @type {import('next').NextConfig} */
const nextConfig = {
  // Rewrite rules to map the URL to the public directory

  // Custom Webpack configuration to handle .glb files using url-loader
  webpack(config) {
    // Adding a rule to handle .glb files
    config.module.rules.push({
      test: /\.glb$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192, // You can adjust this limit based on the file size
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
