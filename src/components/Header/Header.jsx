import React from 'react';
import { useTheme } from '../../themeContext';
import styles from './Header.module.scss';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`${styles.header} ${theme === 'dark' ? styles.dark : ''}`}>
      <h1>Task Tracker</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </header>
  );
};

export default Header;
