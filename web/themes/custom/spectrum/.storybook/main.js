/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: ['../components/**/*.mdx', '../components/**/*.stories.@(js|jsx)'],
  addons: ['@storybook/addon-docs'],
  framework: '@storybook/html-vite',
  // Theme assets (logo, …) are served at /assets, like /themes/custom/spectrum/assets in Drupal.
  staticDirs: [{ from: '../assets', to: '/assets' }],
};
export default config;
