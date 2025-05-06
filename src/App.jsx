// App.js
import React, { useState, useEffect } from 'react';
import Navbars from './components/Navbar';
import Homes from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Get stored value on initial load
    return localStorage.getItem('darkMode') === 'true';
  });

  const toggleTheme = () => {
    setDarkMode((prev) => {
      localStorage.setItem('darkMode', !prev);
      return !prev;
    });
  };

  return (
    <div className={darkMode ? 'bg-dark text-white' : 'bg-light text-dark'} style={{ minHeight: '100vh' }}>
      <Navbars darkMode={darkMode} toggleTheme={toggleTheme} />
      <Homes darkMode={darkMode} />
    </div>
  );
}

export default App;
