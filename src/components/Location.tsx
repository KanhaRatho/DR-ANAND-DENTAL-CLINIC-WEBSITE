import React from 'react';
import { MapPin, Navigation, Clock } from 'lucide-react';
import Reveal from './Reveal';

export default function Location() {
  return (
    <section className="section location-section" id="location" style={{ background: 'var(--white)' }}>
      <div className="container">
        
        <Reveal className="location-reveal-wrapper" threshold={0.2}>
          <div className="location-wrapper">
            
            <div className="location-content">
              <span className="section-tag location-tag-anim">Find Us</span>
              <h2 className="section-title location-title-anim" style={{ marginTop: '16px', marginBottom: '24px' }}>
                Visit Our Clinic
              </h2>
              <p className="location-desc location-desc-anim">
                We are conveniently located in the heart of the city. Drop by for a consultation or a complete smile makeover.
              </p>

              <div className="location-details-box">
                <div className="detail-row">
                  <div className="detail-icon-wrap"><MapPin size={24} /></div>
                  <div>
                    <h4 className="location-detail-title">Clinic Address</h4>
                    <div className="location-detail-text">
                      <span className="loc-line loc-line-1">SVN Dental Care</span>
                      <span className="loc-line loc-line-2">Near Umaramalingeswara Temple, Opp. Datla Hospital, Dasannapeta, Vizianagaram, Andhra Pradesh 535002</span>
                    </div>
                  </div>
                </div>
                
                <div className="detail-row">
                  <div className="detail-icon-wrap"><Clock size={24} /></div>
                  <div>
                    <h4 className="location-detail-title">Opening Hours</h4>
                    <div className="location-detail-text">
                      <span className="loc-line loc-line-3">Mon - Sat: 9:00 AM - 8:30 PM</span>
                      <span className="loc-line loc-line-4">Sun: 10:00 AM - 2:00 PM (By Appt.)</span>
                    </div>
                  </div>
                </div>
              </div>

              <a 
                href="https://maps.google.com/?q=SVN+Dental+Care,Vizianagaram,Andhra+Pradesh" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-directions location-btn-anim"
              >
                <Navigation size={20} />
                Get Directions via Google Maps
              </a>
            </div>

            <div className="location-map-wrapper">
              <div className="map-placeholder" style={{ width: '100%', height: '400px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}>
                <iframe 
                  src="https://maps.google.com/maps?q=SVN+Dental+Care,Vizianagaram,Andhra+Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  aria-hidden="false" 
                  tabIndex={0}
                  title="SVN Dental Care Location"
                ></iframe>
              </div>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
