import React from 'react';
import { BrowserRouter as Router, Route, Routes,useLocation } from 'react-router-dom';
import Flights from './Compnents/Flights';
import Hotels from './Compnents/Hotels';
import Contact from './Compnents/ContactUs';
import AboutUs from './Compnents/AboutUs';
import Login from './Compnents/Login';
import HeaderComponent from './Compnents/HeaderUI/HeaderUI';
import Fonts from './HelperFiles/Fonts/Fonts.css';
import FooterComponent from './Compnents/Footer/Footer';
import ToastComponent from './HelperFiles/Toast';
import axios from 'axios';



const Layout = () => {
  const location = useLocation();
  const hiddenPaths = ["/Login","/ToastComponent"];
  const hideHeaderFooter = hiddenPaths.includes(location.pathname);

  return (
    <div>
      {/* Conditionally render HeaderComponent if not on hidden paths */}
      {!hideHeaderFooter && <HeaderComponent />}
      
      {/* Render main content */}
      <Routes>
        <Route path="/" element={<ToastComponent />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Hotels" element={<Hotels />} />
        <Route path="/Flights" element={<Flights />} />
      </Routes>

      {/* Conditionally render FooterComponent if not on hidden paths */}
      {!hideHeaderFooter && <FooterComponent />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;