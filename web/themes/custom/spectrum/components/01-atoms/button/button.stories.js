import buttonTwig from './button.twig';
import metadata from './button.component.yml';

const { properties } = metadata.props;

export default {
  title: 'Atoms/Button',
  args: {
    text: properties.text.examples[0],
    url: properties.url.examples[0],
    variant: 'primary',
    arrow: true,
  },
  argTypes: {
    variant: { control: 'select', options: properties.variant.enum },
  },
};

export const primary = (args) => buttonTwig(args);

// "light" is meant for dark backgrounds.
export const light = (args) =>
  `<div style="padding: 24px; background: #232429;">${buttonTwig({ ...args, variant: 'light', text: 'CONTACT US' })}</div>`;

export const withoutArrow = (args) => buttonTwig({ ...args, arrow: false });
