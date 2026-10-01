import resourceCardTwig from './resource-card.twig';
import metadata from './resource-card.component.yml';

const { properties } = metadata.props;

const frame = (html) => `<div style="max-width: 360px; padding: 24px;">${html}</div>`;

export default {
  title: 'Molecules/Resource Card',
  args: {
    title: properties.title.examples[0],
    url: properties.url.examples[0],
    summary: properties.summary.examples[0],
    image_url: properties.image_url.examples[0],
    image_alt: '',
  },
};

export const resourceCard = (args) => frame(resourceCardTwig(args));

export const withoutImage = (args) => frame(resourceCardTwig({ ...args, image_url: '' }));
