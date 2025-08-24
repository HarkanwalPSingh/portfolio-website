/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
    stories: ["../src/**/*.mdx", "../src/components/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
    framework: {
      name: "@storybook/react-webpack5",
      options: {},
    },
    babel: async (options) => {
      options.presets = options.presets || [];
      options.presets.push(["@babel/preset-react", { runtime: "automatic" }]);
      return options;
    },
    webpackFinal: async (config) => {
      config.module.rules.push({
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { targets: "defaults" }],
              ["@babel/preset-react", { runtime: "automatic" }]
            ]
          }
        }
      });
      return config;
    },
    docs: {
      autodocs: "tag",
    },
  };
  export default config;
  