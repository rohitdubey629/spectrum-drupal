import megaMenuColumnTwig from './mega-menu-column.twig';
import navData from '../../03-organisms/primary-nav/primary-nav.yml';

// Real Spectrum data from the Primary nav sample.
const products = navData.items.find((item) => item.title === 'Products');
const industries = navData.items.find((item) => item.title === 'Industries');

export default {
  title: 'Molecules/Mega Menu Column',
};

export const withHeading = {
  args: products.columns[0],
  render: (args) => megaMenuColumnTwig(args),
};

export const withoutHeading = {
  args: { ...industries.columns[0], heading: '', heading_url: '' },
  render: (args) => megaMenuColumnTwig(args),
};
