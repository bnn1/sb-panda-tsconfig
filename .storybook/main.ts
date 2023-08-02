import type { StorybookConfig } from "@storybook/nextjs";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: (config) => {
    if (!config.resolve) {
      config.resolve = {};
    }

    config.resolve.plugins = config.resolve.plugins || [];
    config.resolve.plugins.push(new TsconfigPathsPlugin());

    return config;
  },
};
export default config;
