import React from 'react';
import { MessageCircle, Calendar } from 'lucide-react';

export default function FloatingActions() {
  // On desktop we show both. On mobile we hide the book button because it's in the mobile action bar.
  return (
    <div className="floating-action">
      <a href="#appointment" className="fab fab-phone desktop-only" aria-label="Book Appointment" style={{ background: 'var(--gradient-primary)' }}>
        <Calendar size={24} />
      </a>
      <a href="https://wa.me/918500386655" target="_blank" rel="noopener noreferrer" className="fab fab-whatsapp" aria-label="WhatsApp us" style={{ background: '#25D366' }}>
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
