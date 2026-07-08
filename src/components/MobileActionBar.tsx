import React from 'react';
import { Phone, MessageCircle, MapPin, Calendar } from 'lucide-react';

export default function MobileActionBar() {
  return (
    <div className="mobile-action-bar">
      <div className="mobile-action-grid">
        <a href="tel:09888529992" className="mobile-action-item">
          <Phone size={20} />
          <span>Call Now</span>
        </a>
        <a href="https://wa.me/919888529992" className="mobile-action-item">
          <MessageCircle size={20} />
          <span>WhatsApp</span>
        </a>
        <a href="#location" className="mobile-action-item">
          <MapPin size={20} />
          <span>Directions</span>
        </a>
        <a href="#appointment" className="mobile-action-item primary">
          <div className="mobile-action-float" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
            <Calendar size={20} />
            <span>Book</span>
          </div>
        </a>
      </div>
    </div>
  );
}
