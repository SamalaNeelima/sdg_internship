import React from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import MobilePrivacyPolicy from './pages/MobilePrivacyPolicy';
import Header from './pages/Header';
import Footer from './pages/Footer';
import './App.css'




const App = () => {
  return (
    <Router>
    <Header />
    <Routes>
    <Route path="/" element={<Navigate to="/terms-and-conditions" replace />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/mobile-privacy" element={<MobilePrivacyPolicy />} />
    </Routes>
    <Footer />
  </Router>
  );
};

export default App;
