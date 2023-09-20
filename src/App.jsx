import React, { useState } from 'react';
import Navbar from './navbar';
import About from './About';
import Login from './Login';
import Home from './home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
AOS.init();

function App() {
  const [isHomeVisible, setIsHomeVisible] = useState(true);

  const handleNavItemClick = () => {
    setIsHomeVisible(false);
  };

  return (
    <div>
      <Navbar handleNavItemClick={handleNavItemClick} />
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Login" element={<Login />} />
      </Routes>
            {isHomeVisible && <Home />}

    </div>
  );
}

export default App;
