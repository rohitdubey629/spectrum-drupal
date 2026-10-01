/**
 * @file
 * Hero banner: "Scroll to Learn More" smoothly scrolls to the section right
 * below the hero, leaving room for the sticky masthead.
 */
((Drupal) => {
  /**
   * Run setup once per element. Uses Drupal's once() when it is loaded and a
   * data attribute fallback in Storybook, where core/once is not available.
   */
  function onceElements(id, selector, context) {
    if (typeof once === 'function') {
      return once(id, selector, context);
    }
    const flag = `data-once-${id}`;
    return Array.from(context.querySelectorAll(selector)).filter((el) => {
      if (el.hasAttribute(flag)) {
        return false;
      }
      el.setAttribute(flag, '');
      return true;
    });
  }

  Drupal.behaviors.spectrumHeroBanner = {
    attach(context) {
      onceElements('hero-banner', '[data-hero-banner]', context).forEach(
        (hero) => {
          const link = hero.querySelector('[data-hero-scroll]');
          if (!link) {
            return;
          }

          link.addEventListener('click', (event) => {
            event.preventDefault();
            const masthead = document.querySelector('[data-masthead]');
            const offset = masthead ? masthead.offsetHeight : 0;
            const top =
              hero.getBoundingClientRect().bottom + window.scrollY - offset;

            // Debug: uncomment to check the scroll target position.
            // console.log('hero scroll to', top);

            window.scrollTo({ top, behavior: 'smooth' });
          });
        },
      );
    },
  };
})(Drupal);
