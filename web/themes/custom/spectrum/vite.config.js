import { defineConfig } from 'vite';
import twig from 'vite-plugin-twig-drupal';
import yml from '@modyfi/vite-plugin-yaml';
import { join } from 'node:path';

// Used by Storybook only (Drupal loads the component CSS/JS itself).
export default defineConfig({
  plugins: [
    // "spectrum" namespace = components/, so SDC IDs such as
    // spectrum:masthead resolve in Storybook the same way they do in Drupal
    // (the plugin also searches the atoms/molecules/organisms sub-folders).
    twig({
      namespaces: {
        spectrum: join(import.meta.dirname, 'components'),
      },
    }),
    yml(),
  ],
});
