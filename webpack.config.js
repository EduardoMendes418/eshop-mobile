const { createWebpackConfigAsync } = require("@expo/webpack-config");

module.exports = async function (env, argv) {
  const config = await createWebpackConfigAsync(env, argv);

  // Aqui você pode customizar, por exemplo:
  // config.resolve.alias['@components'] = path.resolve(__dirname, 'src/components');

  return config;
};
