import searchBarTwig from './search-bar.twig';
import metadata from './search-bar.component.yml';

const { properties } = metadata.props;

export default {
  title: 'Molecules/Search Bar',
  args: {
    action: properties.action.examples[0],
    param: properties.param.examples[0],
    placeholder: properties.placeholder.examples[0],
  },
};

// Shown open here; on the site it starts hidden and masthead.js opens it.
export const searchBar = (args) =>
  searchBarTwig(args).replace(' hidden data-search-bar', ' data-search-bar');
