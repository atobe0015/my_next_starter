const path = require('path')

const config = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'node_modules')]
  }

  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     use: ["@svgr/webpack"],
  //   });
  //   return config;
  // },
}

module.exports = config
