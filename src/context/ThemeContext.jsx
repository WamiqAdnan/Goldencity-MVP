import { createContext, useCallback, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(undefined);

const STORAGE_KEY = 'theme';

/**
 * Resolve the theme to use on first paint:
 * 1. an explicit choice the user saved earlier (localStorage), else
 * 2. the operating system / browser preference (prefers-color-scheme).
 * Guarded for SSR / non-browser environments.
 */
function getInitialTheme() {
  if (typeof window === 'undefined') return 'light';

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {
    // localStorage can throw (private mode, disabled cookies) — fall through.
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  // Keep the <html> class and localStorage in sync with the current theme.
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Ignore persistence failures — the in-memory theme still works.
    }
  }, [theme]);

  // While the user hasn't made an explicit choice, follow OS preference changes live.
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event) => {
      let hasExplicitChoice = false;
      try {
        hasExplicitChoice = window.localStorage.getItem(STORAGE_KEY) !== null;
      } catch {
        hasExplicitChoice = false;
      }
      if (!hasExplicitChoice) setTheme(event.matches ? 'dark' : 'light');
    };
    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === 'dark' }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
