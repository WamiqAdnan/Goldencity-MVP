import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

// Floating "back to top" control. Appears once the user has scrolled past the
// first viewport and returns them to the top on click.
export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll(); // sync initial state (e.g. on a reload mid-page)
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      return;
    }
    // Native smooth scrolling (both the CSS `scroll-behavior: smooth` rule and an
    // explicit `behavior: 'smooth'`) silently no-ops on several mobile browsers,
    // so animate the scroll ourselves with rAF and set the offset instantly each
    // frame. easeOutCubic gives a natural deceleration into the top.
    const start = window.scrollY;
    const startTime = performance.now();
    const duration = 400;
    const step = (now) => {
      const t = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      window.scrollTo({ top: Math.round(start * (1 - eased)), left: 0, behavior: 'instant' });
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Scroll to top"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-lg shadow-primary-600/30 hover:from-primary-500 hover:to-primary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-secondary-900"
        >
          <FiArrowUp size={22} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
