import mastheadTwig from './masthead.twig';
import brandLogoTwig from '../../01-atoms/brand-logo/brand-logo.twig';
import utilityNavTwig from '../../02-molecules/utility-nav/utility-nav.twig';
import primaryNavTwig from '../primary-nav/primary-nav.twig';
import utilityNavData from '../../02-molecules/utility-nav/utility-nav.yml';
import primaryNavData from '../primary-nav/primary-nav.yml';
import '../primary-nav/primary-nav';
import './masthead';

// Theme assets/ is served statically by Storybook, so use the URL (not an import).
const logo = '/assets/images/spectrum-logo.svg';

/**
 * Same composition Drupal does in templates/layout/region--header.html.twig:
 * each slot receives the rendered child component.
 */
const slots = {
  branding: brandLogoTwig({
    logo_url: logo,
    site_name: 'Spectrum Technologies',
    home_url: '#',
  }),
  utility: utilityNavTwig(utilityNavData),
  navigation: primaryNavTwig(primaryNavData),
};

export default {
  title: 'Organisms/Masthead',
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    search_action: '/search/node',
    search_placeholder: 'Search all of Spectrum',
  },
};

export const masthead = (args) => mastheadTwig({ ...args, ...slots });

// Resize the canvas below 992px (viewport toolbar) and use the Menu button.
export const mobile = {
  render: (args) => mastheadTwig({ ...args, ...slots }),
  globals: {
    viewport: { value: 'mobile2', isRotated: false },
  },
};
