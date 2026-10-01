/**
 * @file
 * Masthead: mobile menu and search bar (same behavior as spectrumtech.com).
 *
 * - Menu toggle (mobile): opens the full-screen menu and locks page scroll
 *   (class "masthead-menu-open" on <html>).
 * - Search button: shows the search bar and focuses the input; the close
 *   button or Escape hides it.
 * - Escape also closes the mobile menu; switching to desktop resets both.
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

  function bindMenu(masthead) {
    const toggle = masthead.querySelector('[data-menu-toggle]');
    if (!toggle) {
      return () => {};
    }

    const setOpen = (open) => {
      toggle.setAttribute('aria-expanded', String(open));
      masthead.classList.toggle('is-menu-open', open);
      document.documentElement.classList.toggle('masthead-menu-open', open);
    };

    toggle.addEventListener('click', () => {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    return setOpen;
  }

  function bindSearch(masthead) {
    const bar = masthead.querySelector('[data-search-bar]');
    const openButton = masthead.querySelector('[data-hook="search-open"]');
    if (!bar || !openButton) {
      return () => {};
    }
    const closeButton = bar.querySelector('[data-hook="search-close"]');

    const setOpen = (open) => {
      bar.hidden = !open;
      openButton.setAttribute('aria-expanded', String(open));
      masthead.classList.toggle('is-search-open', open);
      if (open) {
        bar.querySelector('input').focus();
      }
    };

    openButton.addEventListener('click', () => setOpen(bar.hidden));
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        setOpen(false);
        openButton.focus();
      });
    }

    return setOpen;
  }

  Drupal.behaviors.spectrumMasthead = {
    attach(context) {
      onceElements('masthead', '[data-masthead]', context).forEach(
        (masthead) => {
          // Debug: uncomment to check that the behavior attached.
          // console.log('masthead attached', masthead);

          const setMenuOpen = bindMenu(masthead);
          const setSearchOpen = bindSearch(masthead);

          masthead.addEventListener('keydown', (event) => {
            if (event.key !== 'Escape') {
              return;
            }
            if (masthead.classList.contains('is-search-open')) {
              setSearchOpen(false);
            } else if (masthead.classList.contains('is-menu-open')) {
              setMenuOpen(false);
              masthead.querySelector('[data-menu-toggle]').focus();
            }
          });

          desktop.addEventListener('change', () => {
            setMenuOpen(false);
            setSearchOpen(false);
          });
        },
      );
    },
  };
})(Drupal);
