import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Flights from './Compnents/Flights';
import Hotels from './Compnents/Hotels';
import Contact from './Compnents/ContactUs';
import HeaderComponent from './Compnents/HeaderUI/HeaderUI';
import Fonts from './HelperFiles/Fonts/Fonts.css';
import FooterComponent from './Compnents/Footer/Footer';

function App() {
  return (
    <Router>
      {/* Header displayed on all pages */}
      <nav>
      <HeaderComponent />
      </nav>
  

      
        <Routes>
          <Route path="/" element={<Contact />} />
          <Route path="/Hotels" element={<Hotels />} />
          <Route path="/Flights" element={<Flights />} />
        </Routes>
          {/* Footer displayed on all pages */}
          <FooterComponent />

    </Router>

  );
}

export default App;
