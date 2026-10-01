import menuToggleTwig from './menu-toggle.twig';
import metadata from './menu-toggle.component.yml';

const { properties } = metadata.props;

export default {
  title: 'Atoms/Menu Toggle',
  args: {
    label: properties.label.examples[0],
    controls: properties.controls.examples[0],
  },
};

export const closed = (args) => menuToggleTwig(args);

// Static preview of the open state (the real toggle is handled by masthead.js).
export const open = (args) =>
  menuToggleTwig(args).replace('aria-expanded="false"', 'aria-expanded="true"');
