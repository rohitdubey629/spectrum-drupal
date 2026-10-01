import mediaContentTwig from './media-content.twig';
import metadata from './media-content.component.yml';

const { properties } = metadata.props;

// Theme assets/ is served statically by Storybook.
const image = (name) => `<img src="/assets/images/media-content/${name}.jpg" alt="" loading="lazy">`;

export default {
  title: 'Organisms/Media Content',
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    label: properties.label.examples[0],
    heading: properties.heading.examples[0],
    cta_text: properties.cta_text.examples[0],
    cta_url: properties.cta_url.examples[0],
    image_position: 'left',
  },
  argTypes: {
    image_position: { control: 'inline-radio', options: properties.image_position.enum },
  },
};

const contractBody =
  '<p>Bring your wire processing project to life without investing in new equipment. Our contract manufacturing team delivers precision marking, stripping, and cutting services to the highest industry standards - from prototypes to full-scale production.</p>';

export const imageLeft = (args) => mediaContentTwig({ ...args, media: image('contract'), body: contractBody });

// Same component, image on the right — as the Support row on the live site.
export const imageRight = (args) =>
  mediaContentTwig({
    ...args,
    image_position: 'right',
    label: 'Support',
    heading: 'Keeping Your Systems Performing at Their Best',
    body: '<p>We’re committed to long-term reliability. From training and preventive maintenance to responsive technical support, Spectrum’s team ensures your systems continue to deliver accuracy and uptime, year after year.</p>',
    cta_text: 'Learn about our Support Services',
    cta_url: '/technical-support',
    media: image('support'),
  });

// The three homepage rows, alternating sides, 80px apart.
export const alternatingRows = (args) =>
  `<div style="display: flex; flex-direction: column; gap: 80px;">${[
    imageLeft(args),
    imageRight(args),
    mediaContentTwig({
      ...args,
      label: 'Resources',
      heading: 'See the Results Before You Invest',
      body: '<p>Explore real examples of wire processing from our machines. Our wire sample gallery highlights the precision, consistency, and quality you can expect - helping you find the perfect solution for your application.</p>',
      cta_text: 'View the Wire Sample Gallery',
      cta_url: '/resources/wire-sample-gallery',
      media: image('resources'),
    }),
  ].join('')}</div>`;
