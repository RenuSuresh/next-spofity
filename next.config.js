

const nextConfig = {

  async rewrites() {
    return [
      {
        source: '/js/clevertap.min.js',
        destination: 'https://https://visionary-daifuku-766501.netlify.app/abc',
      },
    ]
  },

}

module.exports = nextConfig;