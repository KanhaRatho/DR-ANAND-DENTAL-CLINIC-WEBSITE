import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Calendar } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`header header-entrance ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          <div className="logo" style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--primary)' }}>
            Dr. Anand's Dental Clinic
          </div>
          
          <nav className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#smiles" className="nav-link">Smile Transformations</a>
            <a href="#reviews" className="nav-link">Reviews</a>
            <a href="#faq" className="nav-link">FAQ</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          <div className="header-actions">
            <a href="tel:09888529992" className="header-icon-btn" aria-label="Call us">
              <Phone size={18} />
            </a>
            <a href="https://wa.me/919888529992" target="_blank" rel="noopener noreferrer" className="header-icon-btn" aria-label="WhatsApp us" style={{ color: '#25D366' }}>
              <MessageCircle size={18} />
            </a>
            <a href="#appointment" className="btn btn-primary" style={{ padding: '10px 24px', textDecoration: 'none' }}>
              <Calendar size={18} />
              <span className="btn-text">Book Appointment</span>
            </a>
            <button 
              className="mobile-menu-btn" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        <nav style={{ display: 'flex', flexDirection: 'column' }}>
          <a href="#home" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#services" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#smiles" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Smile Transformations</a>
          <a href="#reviews" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
          <a href="#faq" className="nav-link" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
          <a href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </nav>
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <a href="#appointment" onClick={() => setMobileMenuOpen(false)} className="btn btn-primary" style={{ width: '100%', padding: '16px', textDecoration: 'none', textAlign: 'center' }}>
            Book Appointment
          </a>
        </div>
      </div>
    </>
  );
}
