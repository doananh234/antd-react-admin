/* eslint-disable */
const {
  override,
  fixBabelImports,
  addLessLoader,
  addDecoratorsLegacy,
  useBabelRc,
} = require('customize-cra');
const themeConfig = require('./src/configs/theme/index');

/* eslint-disable */
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': themeConfig.palette.primary,
      '@card-shadow': themeConfig.card.shadow,
      '@table-header-bg': themeConfig.background.headerTable,
      '@table-header-color': themeConfig.text.headerTable,
      '@menu-collapsed-width': '64px',
      '@label-color': themeConfig.text.headerTable,
      '@icon-color': themeConfig.text.formIcon,
      '@input-height-base': '40px',
      '@border-radius-base': '2px',
      '@input-border-color': 'transparent',
      '@tabs-highlight-color': themeConfig.text.primary,
      '@tabs-active-color': themeConfig.text.gray,
      '@pagination-item-bg-active': themeConfig.palette.primary,
    },
  }),
  addDecoratorsLegacy(),
  useBabelRc(),
);
