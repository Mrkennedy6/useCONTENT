// src/ThemeContext.js
import React, { createContext, useState } from 'react';

// Crear el contexto
export const ThemeContext = createContext();

// Crear el Provider que envolverá la app y proveerá el estado global
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light'); // Estado global (tema claro/oscuro)

  // Función para cambiar el tema
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
