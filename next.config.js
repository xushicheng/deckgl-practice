const path = require('path');

const config = {
  reactStrictMode: true,
  // swcMinify: true 打出来有 Identifier 'n' has already been declared 的错误, 先禁用
  swcMinify: true,

  webpack: (config, { }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config;
  },
};

module.exports = config;
