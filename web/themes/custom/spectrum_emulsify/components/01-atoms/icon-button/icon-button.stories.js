import iconButtonTwig from './icon-button.twig';
import { props } from './icon-button.component.yml';

const { properties } = props;

export default {
  title: 'Atoms/Icon Button',
  args: {
    icon: properties.icon.examples[0],
    label: properties.label.examples[0],
    hook: properties.hook.examples[0],
  },
  argTypes: {
    icon: { control: 'select', options: properties.icon.enum },
  },
};

export const search = (args) => iconButtonTwig(args);

export const close = (args) =>
  iconButtonTwig({
    ...args,
    icon: 'close',
    label: 'Close search',
    hook: 'search-close',
  });
