import iconLinkTwig from './icon-link.twig';
import metadata from './icon-link.component.yml';

const { properties } = metadata.props;

export default {
  title: 'Atoms/Icon Link',
  args: {
    url: properties.url.examples[0],
    label: properties.label.examples[0],
    icon: properties.icon.examples[0],
    show_label: false,
  },
  argTypes: {
    icon: { control: 'select', options: properties.icon.enum },
  },
};

export const iconOnly = (args) => iconLinkTwig(args);

export const iconWithLabel = (args) =>
  iconLinkTwig({ ...args, show_label: true });

export const textOnly = (args) => iconLinkTwig({ ...args, icon: '' });
