

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbars from './components/Navbar';
// import Homes from './pages/Home';
// import Abouts from './pages/About';
// import Career from './pages/Careers';
// import ContactForm from './pages/Contacts';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Login from './pages/Login';

// function App() {
//   const [darkMode, setDarkMode] = useState(() => {
//     return localStorage.getItem('darkMode') === 'true';
//   });

//   const toggleTheme = () => {
//     setDarkMode(prev => !prev);
//   };

//   useEffect(() => {
//     localStorage.setItem('darkMode', darkMode);
//   }, [darkMode]);

//   return (
//     <Router>
//       <div className={darkMode ? 'bg-dark text-white' : 'bg-light text-dark'} style={{ minHeight: '100vh' }}>
//         <Navbars darkMode={darkMode} toggleTheme={toggleTheme} />
//         <Routes>
//           <Route path="/" element={<Homes darkMode={darkMode} />} />
//           <Route path="/login" element={<Login />} />
//           {/* <Route path="/home" element={<Homes darkMode={darkMode} />} /> */}
//           <Route path="/about" element={<Abouts darkMode={darkMode} />} />
//           <Route path="/career" element={<Career darkMode={darkMode} />} />
//           <Route path="/contacts" element={<ContactForm darkMode={darkMode} />} />
//           <Route path="*" element={<h2 className="text-center mt-5">404: Page Not Found</h2>} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;




import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbars from './components/Navbar';
import Homes from './pages/Home';
import Abouts from './pages/About';
import Career from './pages/Careers';
import ContactForm from './pages/Contacts';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

  const toggleTheme = () => setDarkMode(prev => !prev);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  // Check login status inside component so it updates properly
  const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

  return (
    <Router>
      <div className={darkMode ? 'bg-dark text-white' : 'bg-light text-dark'} style={{ minHeight: '100vh' }}>
        <Navbars darkMode={darkMode} toggleTheme={toggleTheme} />
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <Homes darkMode={darkMode} /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/about"
            element={isLoggedIn ? <Abouts darkMode={darkMode} /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/career"
            element={isLoggedIn ? <Career darkMode={darkMode} /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/contacts"
            element={isLoggedIn ? <ContactForm darkMode={darkMode} /> : <Navigate to="/login" replace />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h2 className="text-center mt-5">404: Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
