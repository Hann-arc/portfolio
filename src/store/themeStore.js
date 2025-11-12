import { create } from 'zustand';

const getInitialTheme = () => {
  const saved = localStorage.getItem('darkMode');
  if (saved === null) {
    localStorage.setItem('darkMode', 'true');
    return true;
  }
  return saved === 'true';
};

export const useThemeStore = create((set) => ({
  darkMode: getInitialTheme(),
  toggleDarkMode: () =>
    set((state) => {
      const newMode = !state.darkMode;
      localStorage.setItem('darkMode', (newMode));
      return { darkMode: newMode };
    }),
}));