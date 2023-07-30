const nextConfig = {
  // ... rest of the configuration.
  output: "standalone",
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
