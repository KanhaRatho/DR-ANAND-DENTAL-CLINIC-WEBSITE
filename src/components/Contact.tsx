import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, Stethoscope } from 'lucide-react';

export default function Contact() {
  return (
    <section className="section" id="contact" style={{ background: 'var(--white)', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
      <div className="container">
        
        
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <span className="section-tag">Get In Touch</span>
            <h2 className="section-title" style={{ marginTop: '16px' }}>Contact Details</h2>
          </div>
        

        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
          
          
            <div className="contact-card" style={{ height: '100%' }}>
              <div className="contact-icon"><MapPin size={28} /></div>
              <h3>Clinic Address</h3>
              <p>Near Umaramalingeswara Temple,<br/>
Opp. Datla Hospital,<br/>
Dasannapeta,<br/>
Vizianagaram, Andhra Pradesh 535002</p>
            </div>
          

          
            <div className="contact-card" style={{ height: '100%' }}>
              <div className="contact-icon"><Phone size={28} /></div>
              <h3>Phone & WhatsApp</h3>
              <p>Call Us: <strong>085003 86655</strong><br/>
WhatsApp: <strong>085003 86655</strong></p>
              <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
                <a href="tel:08500386655" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.9rem', flex: 1 }}>Call</a>
                <a href="https://wa.me/918500386655" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.9rem', flex: 1, background: '#25D366' }}>WhatsApp</a>
              </div>
            </div>
          

          
            <div className="contact-card" style={{ height: '100%' }}>
              <div className="contact-icon"><Clock size={28} /></div>
              <h3>Opening Hours</h3>
              <p style={{ marginTop: '12px' }}>Open • Closes 9:30 PM</p>
            </div>
          

        </div>

      </div>
    </section>
  );
}
