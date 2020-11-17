// eslint-disable-next-line
const CracoLessPlugin = require('craco-less');
const themeConfig = require('./src/configs/theme/index');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': themeConfig.palette.primary,
              '@pagination-item-bg-active': themeConfig.palette.primary,
              '@layout-sider-background': themeConfig.palette.primary,
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
