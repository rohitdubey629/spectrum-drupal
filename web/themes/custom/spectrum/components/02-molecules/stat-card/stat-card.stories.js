import statCardTwig from './stat-card.twig';
import metadata from './stat-card.component.yml';

const { properties } = metadata.props;

// Cards sit on the grey section background, 400px wide, as on the site.
const frame = (html) => `<div style="padding: 40px; background: #ebebeb;"><div style="max-width: 400px;">${html}</div></div>`;

export default {
  title: 'Molecules/Stat Card',
  args: {
    heading: properties.heading.examples[0],
    text: properties.text.examples[0],
    url: properties.url.examples[0],
    narrow_heading: false,
  },
};

export const statCard = (args) => frame(statCardTwig(args));

export const narrowHeading = (args) =>
  frame(statCardTwig({ ...args, heading: 'Global Coverage', narrow_heading: true }));

export const withoutLink = (args) => frame(statCardTwig({ ...args, url: '' }));
