import utilityNavTwig from './utility-nav.twig';
import data from './utility-nav.yml';

export default {
  title: 'Molecules/Utility Nav',
  args: data,
};

export const utilityNav = (args) => utilityNavTwig(args);

export const withTextLink = (args) =>
  utilityNavTwig({
    ...args,
    items: [...args.items, { title: 'Careers', url: '/careers', icon: '' }],
  });
