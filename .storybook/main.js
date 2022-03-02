const path = require('path');

module.exports = {
  stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-actions", "@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-a11y"],

  /**
   * Extending Storybook's webpack config.
   * The compatibility layer is what makes React-based modules work with Preact.
   * This is necessary for @reach packages to work.
   */
  webpackFinal: config => {
    config.entry.push(path.resolve(__dirname, '../src/css/main.scss'));
    config.resolve.alias["react"] = 'preact/compat';
    config.resolve.alias["react-dom"] = 'preact/compat';
    config.resolve.alias["react-dom/test-utils"] = 'preact/test-utils';
    config.resolve.alias["@Components"] = path.resolve(__dirname, '../src/components');
    config.module.rules.push({
      test: /\.s[ac]ss$/i,
      use: ['style-loader', 'css-loader', {
        loader: 'sass-loader',
        options: {
          sassOptions: {
            outputStyle: 'expanded'
          }
        }
      }]
    });
    return config;
  },
  core: {
    builder: "webpack5"
  }
};