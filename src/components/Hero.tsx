import React from 'react';
import { Calendar, MessageCircle, Star, Shield, Award, Sparkles, Heart } from 'lucide-react';

import CountUp from './CountUp';

export default function Hero() {
  return (
    <section className="hero hero-entrance" id="home">
      <div className="container hero-container">
        
        {/* Left Content */}
        <div className="hero-content">
          
            <div className="hero-badge">
              <Sparkles size={16} color="var(--accent)" />
              <span className="hero-badge-text">Premium Dental Care</span>
            </div>
          
            <h1 className="hero-title">
              Creating Beautiful Smiles With Precision & Care
            </h1>
          
            <p className="hero-subtitle">
              Experience gentle, expert, and patient-first dental care in a state-of-the-art luxury clinic designed for your comfort and peace of mind.
            </p>
          
            <div className="hero-actions">
              <button className="btn btn-primary hero-btn-1">
                <Calendar size={20} />
                Book Appointment
              </button>
              <button className="btn btn-secondary hero-btn-2">
                <MessageCircle size={20} />
                Chat on WhatsApp
              </button>
            </div>

            <div className="hero-stats-row">
              <div className="hero-stat">
                <h4><CountUp end={20} suffix="+" /></h4>
                <p>Years Experience</p>
              </div>
              <div className="hero-stat">
                <h4><CountUp end={545} suffix="+" /></h4>
                <p>Google Reviews</p>
              </div>
              <div className="hero-stat">
                <h4><CountUp end={5} suffix=".0" /></h4>
                <p>Star Rating</p>
              </div>
            </div>
          
        </div>

        {/* Right Content - Image & Badges */}
        <div className="hero-image-wrapper">
          <img 
            src="/hero.png" 
            alt="Dentist holding dental mold" 
            className="hero-img"
          />
          
          <div className="trust-badge badge-1">
            <Shield size={20} />
            Emergency Care
          </div>
          
          <div className="trust-badge badge-2">
            <Award size={20} />
            Experienced Dentists
          </div>
          
          <div className="trust-badge badge-3">
            <Sparkles size={20} />
            Latest Technology
          </div>
          
          <div className="trust-badge badge-4">
            <Heart size={20} />
            Pain-Free Treatment
          </div>
        </div>

      </div>
    </section>
  );
}
