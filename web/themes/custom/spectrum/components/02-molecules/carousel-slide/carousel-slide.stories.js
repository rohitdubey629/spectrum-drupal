import carouselSlideTwig from './carousel-slide.twig';
import metadata from './carousel-slide.component.yml';

const { properties } = metadata.props;

export default {
  title: 'Molecules/Carousel Slide',
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    heading: properties.heading.examples[0],
    text: properties.text.examples[0],
    image_url: properties.image_url.examples[0],
    image_alt: '',
    cta_text: properties.cta_text.examples[0],
    cta_url: properties.cta_url.examples[0],
  },
};

export const carouselSlide = (args) => carouselSlideTwig(args);

// No image: the dark navy fallback colour shows.
export const withoutImage = (args) => carouselSlideTwig({ ...args, image_url: '' });
