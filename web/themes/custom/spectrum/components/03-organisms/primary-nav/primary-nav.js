/**
 * @file
 * Primary nav: open/close the mega menu panels (same behavior as
 * spectrumtech.com).
 *
 * - Clicking a top item (title or chevron) opens its panel; the top link does
 *   not navigate, the "Explore …" link inside the panel does.
 * - Only one panel is open at a time (desktop and mobile).
 * - Desktop (≥ 992px): clicking outside or tabbing away closes the panel.
 * - Escape closes the open panel and moves focus back to its chevron.
 */
((Drupal) => {
  const desktop = window.matchMedia('(min-width: 992px)');

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

  function setOpen(item, open) {
    const toggle = item.querySelector('[data-primary-nav-toggle]');
    const panel = document.getElementById(toggle.getAttribute('aria-controls'));
    toggle.setAttribute('aria-expanded', String(open));
    item.classList.toggle('is-open', open);
    if (panel) {
      panel.hidden = !open;
    }
  }

  function closeAll(nav, except = null) {
    nav.querySelectorAll('[data-primary-nav-item].is-open').forEach((item) => {
      if (item !== except) {
        setOpen(item, false);
      }
    });
  }

  /**
   * Wire up one top-level item that has a panel.
   */
  function bindItem(nav, item) {
    const bar = item.querySelector('.primary-nav__bar');

    bar.addEventListener('click', (event) => {
      event.preventDefault();
      const open = !item.classList.contains('is-open');
      closeAll(nav, item);
      setOpen(item, open);
    });

    item.addEventListener('focusout', (event) => {
      if (desktop.matches && !item.contains(event.relatedTarget)) {
        setOpen(item, false);
      }
    });
  }

  Drupal.behaviors.spectrumPrimaryNav = {
    attach(context) {
      onceElements('primary-nav', '[data-primary-nav]', context).forEach(
        (nav) => {
          // Debug: uncomment to check that the behavior attached.
          // console.log('primary-nav attached', nav);

          nav
            .querySelectorAll('[data-primary-nav-item]')
            .forEach((item) => bindItem(nav, item));

          nav.addEventListener('keydown', (event) => {
            if (event.key !== 'Escape') {
              return;
            }
            const openItem = nav.querySelector(
              '[data-primary-nav-item].is-open',
            );
            if (openItem) {
              setOpen(openItem, false);
              openItem.querySelector('[data-primary-nav-toggle]').focus();
            }
          });

          document.addEventListener('click', (event) => {
            if (desktop.matches && !nav.contains(event.target)) {
              closeAll(nav);
            }
          });

          // Switching between mobile and desktop starts from a clean state.
          desktop.addEventListener('change', () => closeAll(nav));
        },
      );
    },
  };
})(Drupal);
