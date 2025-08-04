// src/App.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  const { theme } = useContext(ThemeContext);

  const appStyles = {
    minHeight: '100vh',
    backgroundColor: theme === 'light' ? '#fefefe' : '#121212',
    color: theme === 'light' ? '#121212' : '#fefefe',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'all 0.3s ease',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  return (
    <div style={appStyles}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
