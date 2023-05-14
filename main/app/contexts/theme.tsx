'use client'

import React from 'react';

interface Props {
  children: React.ReactNode;
}

interface ThemeContextProps {
  themeMode: 'light' | 'dark' | 'system';
  toggleThemeHandler: () => void;
}

const ThemeContext = React.createContext<ThemeContextProps>({
  themeMode: 'light',
  toggleThemeHandler: () => {},
});

const ThemeContextProvider = (props: Props) => {
  const [themeMode, setThemeMode] = React.useState<'light' | 'dark' | 'system'>('light');
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    // initialThemeHandler();
  }, []);

  function initialThemeHandler(): void {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const localTheme = localStorage.getItem('themeMode') as 'light' | 'dark' | null;
    if (localTheme && (localTheme === 'light' || localTheme === 'dark')) {
      setThemeMode(localTheme);
    } else {
      setThemeMode(systemTheme);
    }
  }

  function toggleThemeHandler(): void {
    setThemeMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
  }

  React.useEffect(() => {
    if (mounted) {
      localStorage.setItem('themeMode', themeMode);
      document.body.classList.remove('light', 'dark');
      document.body.classList.add(themeMode);
    }
  }, [mounted, themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, toggleThemeHandler }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
export const useThemeContext = () => React.useContext(ThemeContext);
