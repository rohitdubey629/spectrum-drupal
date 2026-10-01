import headingTwig from './heading.twig';
import metadata from './heading.component.yml';

const { properties } = metadata.props;

export default {
  title: 'Atoms/Heading',
  args: {
    text: properties.text.examples[0],
    tag: 'h2',
    size: '',
    color: '',
    weight: '',
    uppercase: false,
    align: '',
  },
  argTypes: {
    tag: { control: 'select', options: properties.tag.enum },
    size: { control: 'select', options: properties.size.enum },
    color: { control: 'select', options: properties.color.enum },
    weight: { control: 'select', options: properties.weight.enum },
    align: { control: 'select', options: properties.align.enum },
  },
};

export const heading = (args) => headingTwig(args);

// The whole type scale — resize below 768px to see the mobile sizes.
export const typeScale = () =>
  ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
    .map(
      (size) =>
        `<div style="margin-bottom: 24px;"><small style="font: 12px monospace; color: #818a8f;">${size}</small>${headingTwig({ text: 'Setting the standard', tag: size })}</div>`,
    )
    .join('');

// Same tag, different looks: semantics and size are independent.
export const tagVersusSize = () =>
  headingTwig({ text: 'An h2 that looks like h4', tag: 'h2', size: 'h4' }) +
  headingTwig({ text: 'A paragraph that looks like h2', tag: 'p', size: 'h2' });

export const onDark = () =>
  `<div style="padding: 32px; background: #232429;">${headingTwig({ text: 'Setting the standard', tag: 'h1', color: 'white', weight: 'bold', uppercase: true })}</div>`;
