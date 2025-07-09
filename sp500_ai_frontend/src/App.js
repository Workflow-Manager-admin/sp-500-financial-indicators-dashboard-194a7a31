import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          color: '#fb1313',
          fontFamily: "Palatino, 'Palatino Linotype', serif",
          fontWeight: 'bold',
          backgroundColor: 'rgba(31, 43, 65, 1)',
          fontSize: '1.145rem',
          textAlign: 'center',
        }}
      >
        S&P 500 TRACKER
      </header>
    </div>
  );
}

export default App;
