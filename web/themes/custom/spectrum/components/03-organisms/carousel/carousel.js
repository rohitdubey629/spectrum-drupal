/**
 * @file
 * Carousel: fading slideshow (same behavior as spectrumtech.com).
 *
 * - Autoplay: next slide every data-interval ms (10s), looping.
 * - Play/pause button toggles autoplay.
 * - A dot shows its slide and pauses autoplay.
 * - Inactive slides are "inert", so their links are not focusable.
 * - Users who prefer reduced motion start paused.
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

  function initCarousel(carousel) {
    const slides = carousel.querySelectorAll('[data-carousel-slide]');
    const dots = carousel.querySelectorAll('[data-carousel-dot]');
    const playButton = carousel.querySelector('[data-carousel-play]');
    const interval = parseInt(carousel.dataset.interval, 10) || 0;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let current = 0;
    let timer = null;

    if (slides.length < 2) {
      return;
    }

    const show = (index) => {
      current = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => {
        const active = i === current;
        slide.classList.toggle('is-active', active);
        slide.toggleAttribute('inert', !active);
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle('is-active', i === current);
        if (i === current) {
          dot.setAttribute('aria-current', 'true');
        } else {
          dot.removeAttribute('aria-current');
        }
      });
      // Debug: uncomment to follow the slide changes.
      // console.log('carousel slide', current + 1, '/', slides.length);
    };

    const setPlaying = (playing) => {
      clearInterval(timer);
      timer = null;
      if (playing && interval > 0) {
        timer = setInterval(() => show(current + 1), interval);
      }
      carousel.classList.toggle('is-paused', !timer);
      if (playButton) {
        playButton.setAttribute('aria-label', timer ? 'Pause autoplay' : 'Resume autoplay');
      }
    };

    if (playButton) {
      playButton.addEventListener('click', () => setPlaying(!timer));
    }

    dots.forEach((dot) => {
      dot.addEventListener('click', () => {
        show(parseInt(dot.dataset.carouselDot, 10));
        setPlaying(false);
      });
    });

    setPlaying(!reducedMotion);
  }

  Drupal.behaviors.spectrumCarousel = {
    attach(context) {
      onceElements('carousel', '[data-carousel]', context).forEach(initCarousel);
    },
  };
})(Drupal);
