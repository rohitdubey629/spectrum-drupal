import svgIconTwig from './svg-icon.twig';
import metadata from './svg-icon.component.yml';

const { properties } = metadata.props;

export default {
  title: 'Atoms/SVG Icon',
  args: {
    name: properties.name.examples[0],
    size: properties.size.examples[0],
  },
  argTypes: {
    name: { control: 'select', options: properties.name.enum },
    size: { control: { type: 'range', min: 12, max: 48, step: 2 } },
  },
};

export const icon = (args) => svgIconTwig(args);

export const allIcons = () =>
  `<div style="display: flex; gap: 24px; align-items: center; color: #1e1e1e;">${properties.name.enum
    .map(
      (name) =>
        `<figure style="margin: 0; text-align: center; font: 12px Arial;">${svgIconTwig({ name, size: 24 })}<figcaption>${name}</figcaption></figure>`,
    )
    .join('')}</div>`;
