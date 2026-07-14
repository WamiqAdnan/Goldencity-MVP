import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset to the top on every route change. `index.css` sets
    // `html { scroll-behavior: smooth }`, which makes a plain scrollTo animate —
    // and a programmatic smooth scroll-to-top during a route change silently
    // no-ops on several mobile browsers, leaving the new page at the previous
    // page's scroll offset. Passing `behavior: 'instant'` bypasses the CSS rule
    // and forces an immediate jump.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}
