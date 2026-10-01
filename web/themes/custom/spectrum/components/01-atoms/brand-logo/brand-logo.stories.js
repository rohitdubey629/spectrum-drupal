import brandLogoTwig from './brand-logo.twig';
import metadata from './brand-logo.component.yml';
// Theme assets/ is served statically by Storybook, so use the URL (not an import).
const logo = '/assets/images/spectrum-logo.svg';

const { properties } = metadata.props;

export default {
  title: 'Atoms/Brand Logo',
  args: {
    site_name: properties.site_name.examples[0],
    home_url: properties.home_url.examples[0],
  },
};

export const withLogo = (args) => brandLogoTwig({ ...args, logo_url: logo });

export const textFallback = (args) => brandLogoTwig({ ...args, logo_url: '' });
