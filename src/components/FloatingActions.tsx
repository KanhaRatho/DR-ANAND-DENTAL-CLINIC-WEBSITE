import React, { useState, useEffect } from 'react';
import { MessageCircle, Calendar } from 'lucide-react';

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the button smoothly after Hero section animations finish (e.g., 2.5s)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2500); 
    
    // Or show immediately if the user scrolls down past the hero section
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      className="floating-action"
      style={{ 
        opacity: isVisible ? 1 : 0, 
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)', 
        transition: 'opacity 0.6s ease, transform 0.6s ease', 
        pointerEvents: isVisible ? 'auto' : 'none' 
      }}
    >
      <a href="#appointment" className="fab fab-phone desktop-only" aria-label="Book Appointment" style={{ background: 'var(--gradient-primary)' }}>
        <Calendar size={24} />
      </a>
      <a href="https://wa.me/919888529992" target="_blank" rel="noopener noreferrer" className="fab fab-whatsapp" aria-label="WhatsApp us" style={{ background: '#25D366' }}>
        <MessageCircle size={24} color="#fff" />
      </a>
      {/* We add a small CSS tweak directly here for hiding on mobile */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-only {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
