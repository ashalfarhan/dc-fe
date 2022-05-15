const path = require('path');

const pathAlias = [
  'components',
  'hooks',
  'mocks',
  'models',
  'network',
  'state',
  'utils',
  'test-utils',
];

const aliases = {
  webpack: pathAlias.reduce(
    (alias, name) => ({
      ...alias,
      [`@${name}`]: path.resolve(`./src/${name}`),
    }),
    {}
  ),
  jest: pathAlias.reduce(
    (alias, name) => ({ ...alias, [`@${name}`]: `<rootDir>/src/${name}` }),
    {}
  ),
};

/** @type {import("@craco/craco").CracoConfig} */
const config = {
  webpack: {
    alias: aliases.webpack,
  },
  jest: {
    configure: {
      moduleNameMapper: aliases.jest,
    },
  },
};

module.exports = config;
