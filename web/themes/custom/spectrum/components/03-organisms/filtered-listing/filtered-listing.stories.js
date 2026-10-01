import filteredListingTwig from './filtered-listing.twig';
import cardMeta from '../../02-molecules/resource-card/resource-card.component.yml';

const card = cardMeta.props.properties;
const items = Array.from({ length: 6 }, () => ({
  title: card.title.examples[0],
  url: card.url.examples[0],
  summary: card.summary.examples[0],
  image_url: card.image_url.examples[0],
}));

// Stand-in for the Drupal exposed form (no Apply button, as on the site).
const filters = `
  <form>
    <div class="form-item"><label for="cat">Category</label>
      <select id="cat"><option>All Categories</option><option>CRM</option></select></div>
    <fieldset><legend class="visually-hidden">Topics</legend><div class="form-checkboxes">
      ${['Sales Enablement', 'CRM', 'Inbound Strategy', 'Website']
        .map((t, i) => `<div class="form-item"><input type="checkbox" id="t${i}"><label for="t${i}">${t}</label></div>`)
        .join('')}
    </div></fieldset>
  </form>`;

export default {
  title: 'Organisms/Filtered Listing',
  parameters: {
    layout: 'fullscreen',
  },
  args: { items },
};

export const filteredListing = (args) => filteredListingTwig({ ...args, filters, summary: '1 – 6 of 6' });

export const noResults = (args) =>
  filteredListingTwig({ ...args, items: [], filters, empty: 'No resources found.' });
