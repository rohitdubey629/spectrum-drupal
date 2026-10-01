// Same CSS Drupal loads: the global library + every component's own CSS.
import '../css/base.css';

import.meta.glob('../components/**/*.css', { eager: true });

// Minimal Drupal global so component JS (Drupal.behaviors) runs in Storybook.
window.Drupal = window.Drupal || { behaviors: {} };

/**
 * Render the story into a wrapper, then attach Drupal behaviors to it —
 * the same thing Drupal does after a page (or AJAX content) loads.
 */
const withDrupalBehaviors = (storyFn) => {
  const wrapper = document.createElement('div');
  const story = storyFn();
  if (typeof story === 'string') {
    wrapper.innerHTML = story;
  } else {
    wrapper.appendChild(story);
  }
  setTimeout(() => {
    Object.values(window.Drupal.behaviors).forEach((behavior) => {
      if (typeof behavior.attach === 'function') {
        behavior.attach(wrapper, {});
      }
    });
  });
  return wrapper;
};

/** @type { import('@storybook/html-vite').Preview } */
const preview = {
  decorators: [withDrupalBehaviors],
  parameters: {
    options: {
      storySort: {
        order: ['Atoms', 'Molecules', 'Organisms'],
      },
    },
  },
};

export default preview;
