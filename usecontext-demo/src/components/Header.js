// src/components/Header.js
import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const headerStyles = {
    padding: '1rem 2rem',
    backgroundColor: theme === 'light' ? '#e0e0e0' : '#333',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const buttonStyles = {
    padding: '0.5rem 1rem',
    backgroundColor: theme === 'light' ? '#121212' : '#f0f0f0',
    color: theme === 'light' ? '#fefefe' : '#121212',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  return (
    <header style={headerStyles}>
      <h1>Demo de useContext</h1>
      <button style={buttonStyles} onClick={toggleTheme}>
        Cambiar a {theme === 'light' ? 'Oscuro' : 'Claro'}
      </button>
    </header>
  );
}
