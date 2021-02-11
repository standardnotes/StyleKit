const path = require('path');

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  /**
   * Extending Storybook's webpack config.
   * The compatibility layer is what makes React-based modules work with Preact.
   * This is necessary for @reach packages to work.
   */
  webpackFinal: (config) => {
    config.resolve = {
      alias: {
        'react': 'preact/compat',
        'react-dom': 'preact/compat',
        "@Components": path.resolve(__dirname, '../src/components')
      }
    };
    return config;
  }
}
