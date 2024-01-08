

const nextConfig = {
  async rewrites() {
    return [
      {
        source: 'https://www.google-analytics.com/analytics.js',
        destination: '/new-route',
      },
    ];
  },

}

module.exports = nextConfig;