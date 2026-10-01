import newsGridTwig from './news-grid.twig';
import data from './news-grid.yml';

export default {
  title: 'Organisms/News Grid',
  parameters: {
    layout: 'fullscreen',
  },
  args: data,
};

export const latestNews = (args) => newsGridTwig(args);

// Same component with fewer cards.
export const twoCards = (args) => newsGridTwig({ ...args, items: args.items.slice(0, 2) });
