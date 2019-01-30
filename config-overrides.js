/* eslint-disable */
const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const themeConfig = require('./src/configs/theme');

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], // change importing css to less
    config
  );
  config = rewireLess.withLoaderOptions({
    modifyVars: {
      '@primary-color': themeConfig.palette.primary,
    },
    javascriptEnabled: true,
  })(config, env);
  return config;
};
