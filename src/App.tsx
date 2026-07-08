import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MobileActionBar from './components/MobileActionBar';
import FloatingActions from './components/FloatingActions';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import LegalPages from './pages/LegalPages';

import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-white" style={{ paddingTop: '80px' }}>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/legal/:policyId" element={<LegalPages />} />
      </Routes>

      <Footer />
      <FloatingActions />
      <MobileActionBar />
    </div>
  );
}

export default App;
