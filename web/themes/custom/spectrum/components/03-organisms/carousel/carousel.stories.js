import carouselTwig from './carousel.twig';
import data from './carousel.yml';
import './carousel';

export default {
  title: 'Organisms/Carousel',
  parameters: {
    layout: 'fullscreen',
  },
  args: data,
};

export const industries = (args) => carouselTwig(args);

// Faster autoplay to see the fade (2s per slide).
export const fastAutoplay = (args) => carouselTwig({ ...args, interval: 2000 });

export const withoutHeading = (args) => carouselTwig({ ...args, heading: '', subheading: '', label: 'Industries' });

export const singleSlide = (args) => carouselTwig({ ...args, slides: args.slides.slice(0, 1) });
