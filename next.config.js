const path = require('path');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([], {
  webpack(config) {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  },
  async redirects() {
    return [
      {
        source: '/brands/list',
        destination: '/brands',
        permanent: true,
      },
      {
        source: '/cameras/list',
        destination: '/cameras',
        permanent: true,
      },
      {
        source: '/film/list',
        destination: '/film',
        permanent: true,
      },
      {
        source: '/lens/list',
        destination: '/lens',
        permanent: true,
      },
    ];
  },
  env: {
    CAMPEDIA_API_URL: process.env.CAMPEDIA_API_URL,
    ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
    ALGOLIA_API_KEY: process.env.ALGOLIA_API_KEY,
    ALGOLIA_BRANDS_INDEX: process.env.ALGOLIA_BRANDS_INDEX,
    ALGOLIA_CAMERAS_INDEX: process.env.ALGOLIA_CAMERAS_INDEX,
    ALGOLIA_LENS_INDEX: process.env.ALGOLIA_LENS_INDEX,
  },
});
