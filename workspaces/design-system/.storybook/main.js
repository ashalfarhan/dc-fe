module.exports = {
  staticDirs: ['../public'],
  stories: ['../stories/**/*.story.@(tsx|mdx)'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: { docs: { configureJSX: true } },
    },
  ],
  webpackFinal(config) {
    const path = require('path');
    
    // Remove existing css loader
    config.module.rules = config.module.rules.filter(
      (f) => f.test.toString() !== '/\\.css$/'
    );
    
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader?modules=true'],
      include: path.resolve(__dirname, '../src'),
    });

    return config;
  },
  typescript: {
    check: true,
  },
};
