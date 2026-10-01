import statCardsTwig from './stat-cards.twig';
import data from './stat-cards.yml';

export default {
  title: 'Organisms/Stat Cards',
  parameters: {
    layout: 'fullscreen',
  },
  args: data,
  argTypes: {
    background: { control: 'select', options: ['grey', 'white'] },
  },
};

export const statCards = (args) => statCardsTwig(args);

export const whiteBackground = (args) => statCardsTwig({ ...args, background: 'white' });

// Same component, different number of cards.
export const twoCards = (args) => statCardsTwig({ ...args, items: args.items.slice(0, 2) });
