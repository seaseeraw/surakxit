
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navbars from './components/Navbar';  
// import Homes from './pages/Home';  
// import Abouts from './pages/About';  
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   const [darkMode, setDarkMode] = useState(() => {
//     // Get stored value on initial load
//     return localStorage.getItem('darkMode') === 'true';
//   });

//   const toggleTheme = () => {
//     setDarkMode((prev) => {
//       localStorage.setItem('darkMode', !prev);
//       return !prev;
//     });
//   };

//   return (
//     <Router>
//       <div className={darkMode ? 'bg-dark text-white' : 'bg-light text-dark'} style={{ minHeight: '100vh' }}>
//         <Navbars darkMode={darkMode} toggleTheme={toggleTheme} />
//         <Switch>
//           <Route exact path="/" render={() => <Homes darkMode={darkMode} />} />
//           <Route path="/about" render={() => <Abouts darkMode={darkMode} />} />
          
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbars from './components/Navbar';
import Homes from './pages/Home';
import Abouts from './pages/About';
import Career from './pages/Careers';
import ContactForm from './pages/Contacts';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <Router>
      <div className={darkMode ? 'bg-dark text-white' : 'bg-light text-dark'} style={{ minHeight: '100vh' }}>
        <Navbars darkMode={darkMode} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Homes darkMode={darkMode} />} />
          <Route path="/about" element={<Abouts darkMode={darkMode} />} />
          <Route path="/carrer" element={<Career darkMode={darkMode} />} />
          <Route path="/contacts" element={<ContactForm darkMode={darkMode} />} />
          <Route path="*" element={<h2 className="text-center mt-5">404: Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
