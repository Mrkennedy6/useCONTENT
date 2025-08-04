// src/components/Footer.js
import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

export default function Footer() {
  const { theme } = useContext(ThemeContext);

  const footerStyles = {
    padding: '1rem 2rem',
    textAlign: 'center',
    backgroundColor: theme === 'light' ? '#e0e0e0' : '#333',
    color: theme === 'light' ? '#121212' : '#fefefe',
  };

  return (
    <footer style={footerStyles}>
      <small>© 2025 Demo de useContext - Proyecto educativo</small>
    </footer>
  );
}
