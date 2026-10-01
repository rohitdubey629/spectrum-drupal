import textTwig from './text.twig';
import metadata from './text.component.yml';

const { properties } = metadata.props;

export default {
  title: 'Atoms/Text',
  args: {
    text: properties.text.examples[0],
    tag: 'p',
    size: 'large',
    color: '',
    weight: '',
    align: '',
    lines: 0,
  },
  argTypes: {
    tag: { control: 'select', options: properties.tag.enum },
    size: { control: 'select', options: properties.size.enum },
    color: { control: 'select', options: properties.color.enum },
    weight: { control: 'select', options: properties.weight.enum },
    align: { control: 'select', options: properties.align.enum },
  },
};

export const text = (args) => textTwig(args);

export const sizes = () =>
  properties.size.enum
    .map(
      (size) =>
        `<div style="margin-bottom: 16px;"><small style="font: 12px monospace; color: #818a8f;">${size}</small>${textTwig({ text: 'Trusted worldwide for precision, reliability, and performance.', size })}</div>`,
    )
    .join('');

const long =
  'Spectrum Technologies has been at the forefront of laser wire processing since 1989, designing systems that mark, strip and cut wire for the aerospace, defence, medical and space industries across the world.';

// Cut after 3 lines, like the stat cards on spectrumtech.com.
export const clamped = () => `<div style="max-width: 320px;">${textTwig({ text: long, lines: 3 })}</div>`;

// Rich content through the slot (Drupal: e.g. content.body).
export const richContent = () =>
  textTwig({
    tag: 'div',
    size: 'medium',
    content: '<p>First paragraph with <a href="#">a link</a>.</p><p>Second paragraph.</p>',
  });
