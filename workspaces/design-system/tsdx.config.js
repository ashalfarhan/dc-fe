const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const atImport = require('postcss-import');

module.exports = {
  rollup(config) {
    config.plugins.push(
      postcss({
        plugins: [
          autoprefixer(),
          cssnano({
            preset: 'default',
          }),
          atImport(),
        ],
        inject: true,
        modules: true,
      })
    );

    return config;
  },
};
