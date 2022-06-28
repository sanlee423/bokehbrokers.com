const path = require('path');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([], {
  webpack(config) {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  },
  env: {
    CAMPEDIA_API_URL: process.env.CAMPEDIA_API_URL,
  },
});
