const nodeExternals = require('webpack-node-externals');

module.exports = (args) => ({
  ...args,
  externals: [nodeExternals({ modulesDir: '../node_modules' })],
});
