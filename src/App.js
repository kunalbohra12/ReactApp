import React from 'react';
import { BrowserRouter as Router, Route, Routes,useLocation } from 'react-router-dom';
import Flights from './Compnents/Pages/Flights';
import Hotels from './Compnents/Pages/Hotels';
import Contact from './Compnents/Pages/ContactUs';
import AboutUs from './Compnents/Pages/AboutUs';
import Home from './Compnents/Pages/Home';
import HeaderComponent from './Compnents/HeaderUI/HeaderUI';
import Fonts from './HelperFiles/Fonts/Fonts.css';
import FooterComponent from './Compnents/Footer/Footer';
import 'react-toastify/dist/ReactToastify.css'; // import first
import { ToastContainer } from 'react-toastify'; // then this
import axios from 'axios';
import { images } from './HelperFiles/Images/Images';
import SignUpComponent from './Compnents/Auth/SignUp';
import LoginComponent from './Compnents/Auth/Login';
import ForgotPassword from './Compnents/Auth/ForgotPassword';
import ResetPassword from './Compnents/Auth/ResetPassword';
import Verification from './Compnents/Auth/Verification';


const Layout = () => {
  const location = useLocation();
  const hiddenPaths = ["/","/SignUpComponent","/ForgotPassword","/ResetPassword","/Verification"];
  const hideHeaderFooter = hiddenPaths.includes(location.pathname);

  return (
    <>
    <div>
      {/* Conditionally render HeaderComponent if not on hidden paths */}
      {!hideHeaderFooter && <HeaderComponent />}
      <ToastContainer autoClose={1000} position='bottom-center' />
      {/* Render main content */}
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/SignUpComponent" element={<SignUpComponent />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/Verification" element={<Verification />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Hotels" element={<Hotels />} />
        <Route path="/Flights" element={<Flights />} />
      </Routes>


      {/* Conditionally render FooterComponent if not on hidden paths */}
      {!hideHeaderFooter && <FooterComponent />}
    </div>
      </>
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