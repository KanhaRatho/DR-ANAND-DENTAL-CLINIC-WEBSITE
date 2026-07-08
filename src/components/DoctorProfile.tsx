import React from 'react';
import { Plus, Star, Smile, Sparkles } from 'lucide-react';
import Reveal from './Reveal';

export default function DoctorProfile() {
  return (
    <section className="section luxury-doctor-section" id="doctor-profile">
      <div className="container">
        
        {/* Cinematic Headline */}
        <div className="luxury-doctor-header text-center">
          <Reveal threshold={0.1} className="luxury-reveal-title">
            <div className="badge-wrapper" style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
              <span className="section-tag" style={{ margin: 0, backgroundColor: 'rgba(13, 0, 10, 0.04)', color: 'var(--text-dark)', display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '10px 24px', fontWeight: 600 }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent)' }}></span>
                Meet Our Doctor
              </span>
            </div>
            <h2 className="luxury-doctor-title">
              Prioritize your dental health<br/>
              with expert care
            </h2>
          </Reveal>
          <Reveal threshold={0.1} className="luxury-reveal-underline">
            <div className="double-underline-wrapper">
              <div className="luxury-doctor-underline-yellow"></div>
              <div className="luxury-doctor-underline-black"></div>
            </div>
          </Reveal>
        </div>

        {/* Hero Portrait Centerpiece */}
        <div className="luxury-doctor-composition">
          <Reveal threshold={0.1} className="luxury-reveal-portrait">
            <div className="luxury-portrait-frame floating-element">
              <img 
                src="/doctor.jpg" 
                alt="Dr. Anand's Dental Clinic" 
                className="luxury-portrait-image"
                loading="lazy"
              />
              
              {/* Luxury Info Card Overlay */}
              <div className="luxury-info-card">
                <div className="luxury-info-icon"><Plus size={20} color="var(--primary)" /></div>
                <div className="luxury-info-text">
                  <h4>Dr. Anand's Dental Clinic</h4>
                  <p>Lead Dental Surgeon</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Supporting Copy & Trust Highlights */}
        <div className="luxury-doctor-footer text-center">
          <Reveal threshold={0.1} className="luxury-reveal-quote">
            <p className="luxury-doctor-quote">
              Your smile is <strong>something precious.</strong><br/>
              Protect your oral health for a <strong>better, brighter future.</strong>
            </p>
          </Reveal>
          
          {/* Trust Highlights (Asymmetrical Layout) */}
          <div className="luxury-trust-grid">
            <Reveal threshold={0.1} className="luxury-reveal-card" style={{ animationDelay: '0s' }}>
              <div className="luxury-trust-card floating-element" style={{ animationDelay: '0s' }}>
                <div className="trust-card-icon"><Star size={20} color="var(--primary)" /></div>
                <div className="trust-card-content">
                  <h5>5.0 Google Rating</h5>
                </div>
                <div className="trust-card-accent"></div>
              </div>
            </Reveal>

            <Reveal threshold={0.1} className="luxury-reveal-card" style={{ animationDelay: '0.15s' }}>
              <div className="luxury-trust-card floating-element" style={{ animationDelay: '-2s' }}>
                <div className="trust-card-icon"><Smile size={20} color="var(--primary)" /></div>
                <div className="trust-card-content">
                  <h5>190+ Verified Reviews</h5>
                </div>
                <div className="trust-card-accent"></div>
              </div>
            </Reveal>

            <Reveal threshold={0.1} className="luxury-reveal-card wide-card" style={{ animationDelay: '0.3s' }}>
              <div className="luxury-trust-card floating-element" style={{ animationDelay: '-4s' }}>
                <div className="trust-card-icon"><Sparkles size={20} color="var(--primary)" /></div>
                <div className="trust-card-content">
                  <h5>Modern Dental Care</h5>
                </div>
                <div className="trust-card-accent"></div>
              </div>
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  );
}
