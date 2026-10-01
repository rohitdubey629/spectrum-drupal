import introTwig from './intro.twig';
import metadata from './intro.component.yml';

const { properties } = metadata.props;

// Same body as the spectrumtech.com homepage (editor HTML with a spacer paragraph).
const body =
  '<p>For over three decades, Spectrum Technologies has set the global standard in laser wire marking, stripping, and processing systems.</p><p>&nbsp;</p><p>Discover how our technology continues to power innovation across industries.</p>';

export default {
  title: 'Organisms/Intro',
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    heading: properties.heading.examples[0],
    heading_tag: 'h2',
    cta_text: properties.cta_text.examples[0],
    cta_url: properties.cta_url.examples[0],
    background: 'grey',
  },
  argTypes: {
    heading_tag: { control: 'select', options: properties.heading_tag.enum },
    background: { control: 'select', options: properties.background.enum },
  },
};

export const intro = (args) => introTwig({ ...args, body });

export const withoutButton = (args) => introTwig({ ...args, body, cta_text: '' });

export const whiteBackground = (args) => introTwig({ ...args, body, background: 'white' });
