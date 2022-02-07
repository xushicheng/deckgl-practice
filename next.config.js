const path = require("path");
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')

module.exports = {
  swcMinify: true,
  webpack: (config, {}) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    config.plugins.push(new WindiCSSWebpackPlugin);
    return config;
  },
}
