import badgeTwig from './badge.twig';
import metadata from './badge.component.yml';

export default {
  title: 'Atoms/Badge',
  args: {
    text: metadata.props.properties.text.examples[0],
  },
};

export const badge = (args) => badgeTwig(args);
