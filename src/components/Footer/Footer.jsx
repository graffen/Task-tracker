import React from 'react';
import { useTheme } from '../../themeContext';
import styles from './Footer.module.scss';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`${styles.footer} ${theme === 'dark' ? styles.dark : ''}`}>
      <p>&copy; 2024 Task Tracker</p>
    </footer>
  );
};

export default Footer;
