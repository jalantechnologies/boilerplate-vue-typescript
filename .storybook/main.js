const path = require("path");
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/vue3",
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader",
        {
          loader: require.resolve("sass-resources-loader"),
          options: {
            resources: path.resolve(__dirname, "../src/assets/scss/main.scss"),
            resources: path.resolve(
              __dirname,
              "../src/assets/vendor/font-awesome/css/font-awesome.css"
            ),
            resources: path.resolve(
              __dirname,
              "../src/assets/vendor/nucleo/css/nucleo.css"
            ),
          },
        },
      ],
      include: path.resolve(__dirname, "../"),
    });

    return config;
  },
};
