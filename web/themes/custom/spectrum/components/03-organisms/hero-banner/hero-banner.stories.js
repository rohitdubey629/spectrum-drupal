import heroBannerTwig from './hero-banner.twig';
import metadata from './hero-banner.component.yml';
import './hero-banner';

const { properties } = metadata.props;

// Theme assets/ is served statically by Storybook (frame of the live hero video).
const image = '<img src="/assets/images/hero-sample.jpg" alt="">';

export default {
  title: 'Organisms/Hero Banner',
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    heading: properties.heading.examples[0],
    subheading: properties.subheading.examples[0],
    cta_text: properties.cta_text.examples[0],
    cta_url: properties.cta_url.examples[0],
    scroll_text: properties.scroll_text.examples[0],
    overlay: false,
  },
};

// Content below the hero so "Scroll to Learn More" has somewhere to go.
const below = '<div style="height: 600px; padding: 40px; font: 16px Arial;">Next section</div>';

export const heroBanner = (args) => heroBannerTwig({ ...args, media: image }) + below;

export const withOverlay = (args) => heroBannerTwig({ ...args, media: image, overlay: true }) + below;

export const headingOnly = (args) =>
  heroBannerTwig({ ...args, media: image, subheading: '', cta_text: '', scroll_text: '' });
