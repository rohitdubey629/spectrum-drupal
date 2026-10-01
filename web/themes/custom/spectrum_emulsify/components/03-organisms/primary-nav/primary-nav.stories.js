import primaryNavTwig from './primary-nav.twig';
import data from './primary-nav.yml';
import './primary-nav';

export default {
  title: 'Organisms/Primary Nav',
  parameters: {
    layout: 'fullscreen',
  },
  args: data,
};

// Wrapped in a positioned box so the desktop mega menu panel has an anchor,
// the same way the Masthead organism provides one on the real site.
const frame = (html) =>
  `<div style="position: relative; display: flex; justify-content: center; border-bottom: 1px solid rgb(0 0 0 / 8%);">${html}</div>`;

export const primaryNav = (args) => frame(primaryNavTwig(args));

// "Products" panel opened on load, handy for styling the mega menu.
export const productsOpen = (args) =>
  frame(
    primaryNavTwig(args)
      .replace(
        'aria-expanded="false" aria-controls="primary-nav-panel-2"',
        'aria-expanded="true" aria-controls="primary-nav-panel-2"',
      )
      .replace('id="primary-nav-panel-2" hidden', 'id="primary-nav-panel-2"')
      .replace(
        /(<li class="primary-nav__item primary-nav__item--has-panel)(" data-primary-nav-item>\s*<div class="primary-nav__bar">\s*<a class="primary-nav__link" href="\/products")/,
        '$1 is-open$2',
      ),
  );
