import newsCardTwig from './news-card.twig';
import metadata from './news-card.component.yml';

const { properties } = metadata.props;

const frame = (html) => `<div style="max-width: 400px; padding: 24px;">${html}</div>`;

export default {
  title: 'Molecules/News Card',
  args: {
    title: properties.title.examples[0],
    url: properties.url.examples[0],
    date: properties.date.examples[0],
    datetime: properties.datetime.examples[0],
    tag: properties.tag.examples[0],
    image_url: properties.image_url.examples[0],
    image_alt: 'Artemis II Launch',
  },
};

export const newsCard = (args) => frame(newsCardTwig(args));

export const longTitle = (args) =>
  frame(
    newsCardTwig({
      ...args,
      title: 'Spectrum Technologies Opens New Production Facility and Celebrates 200th N50-100i System — with a title long enough to be cut after three lines',
    }),
  );

export const withoutImage = (args) => frame(newsCardTwig({ ...args, image_url: '', tag: 'tradeshows' }));
