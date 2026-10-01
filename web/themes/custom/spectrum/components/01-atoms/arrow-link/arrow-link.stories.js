import arrowLinkTwig from './arrow-link.twig';
import metadata from './arrow-link.component.yml';

const { properties } = metadata.props;

export default {
  title: 'Atoms/Arrow Link',
  args: {
    text: properties.text.examples[0],
    url: properties.url.examples[0],
  },
};

export const arrowLink = (args) => arrowLinkTwig(args);
