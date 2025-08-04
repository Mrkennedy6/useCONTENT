// src/components/Content.js
import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

export default function Content() {
  const { theme } = useContext(ThemeContext);

  const contentStyles = {
    flexGrow: 1,
    padding: '2rem',
    fontSize: '1.2rem',
    lineHeight: '1.6',
    backgroundColor: theme === 'light' ? '#fafafa' : '#1e1e1e',
  };

  return (
    <main style={contentStyles}>
      <p>
        Este es un ejemplo de cómo usar <code>useContext</code> en React para manejar el estado global de la aplicación sin pasar props manualmente.
      </p>
      <p>
        Cambia el tema usando el botón en el encabezado para ver cómo todos los componentes reaccionan automáticamente al cambio de estado global.
      </p>
    </main>
  );
}
