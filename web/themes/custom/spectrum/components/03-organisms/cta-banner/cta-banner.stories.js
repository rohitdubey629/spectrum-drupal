import ctaBannerTwig from './cta-banner.twig';
import metadata from './cta-banner.component.yml';

const { properties } = metadata.props;

// Theme assets/ is served statically by Storybook.
const media = '<img src="/assets/images/cta/cta-banner.jpg" alt="" loading="lazy">';
const body =
  '<p>Discover how Spectrum Technologies can help streamline manufacturing, reduce waste, and deliver precision results.</p>';

export default {
  title: 'Organisms/CTA Banner',
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    heading: properties.heading.examples[0],
    links: [
      { text: 'Contact us', url: '/contact-us' },
      { text: 'Submit a free sample', url: '/sample-processing' },
    ],
  },
};

export const ctaBanner = (args) => ctaBannerTwig({ ...args, media, body });

export const singleButton = (args) => ctaBannerTwig({ ...args, media, body, links: args.links.slice(0, 1) });

export const withoutImage = (args) => ctaBannerTwig({ ...args, body });
