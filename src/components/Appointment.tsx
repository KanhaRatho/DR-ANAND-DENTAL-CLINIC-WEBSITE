import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

export default function Appointment() {
  return (
    <section className="section" id="appointment" style={{ background: 'var(--background)' }}>
      <div className="container">
        
        <div className="appointment-wrapper">
          {/* Left Side: Info & CTAs */}
          <div className="appointment-info">
            <span className="section-tag">Book Now</span>
            <h2 className="section-title" style={{ marginTop: '16px', marginBottom: '24px' }}>
              Ready for a Brighter Smile?
            </h2>
            <p className="appointment-desc">
              Schedule your consultation today. Fill out the form below or reach out to us directly via phone or WhatsApp for immediate assistance.
            </p>
            
            <div className="appointment-quick-contacts">
              <a href="tel:09888529992" className="quick-contact-btn btn-call">
                <Phone size={24} />
                <div className="btn-text">
                  <span>Call Us Now</span>
                  <strong>098885 29992</strong>
                </div>
              </a>
              <a href="https://wa.me/919888529992" target="_blank" rel="noopener noreferrer" className="quick-contact-btn btn-whatsapp">
                <MessageCircle size={24} />
                <div className="btn-text">
                  <span>WhatsApp Us</span>
                  <strong>Message Clinic</strong>
                </div>
              </a>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="appointment-form-card">
            <div className="form-header">
              <Calendar size={28} color="var(--accent)" />
              <h3>Request an Appointment</h3>
            </div>
            
            <form className="appointment-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" required placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input type="tel" id="phone" required placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="john@example.com" />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Preferred Date *</label>
                  <input type="date" id="date" required />
                </div>
                <div className="form-group">
                  <label htmlFor="time">Preferred Time</label>
                  <select id="time">
                    <option value="">Any Time</option>
                    <option value="morning">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                    <option value="evening">Evening (4 PM - 7 PM)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="treatment">Treatment Needed</label>
                <select id="treatment">
                  <option value="">Select Treatment...</option>
                  <option value="checkup">General Checkup</option>
                  <option value="cleaning">Teeth Cleaning</option>
                  <option value="whitening">Teeth Whitening</option>
                  <option value="root-canal">Root Canal</option>
                  <option value="implants">Dental Implants</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message (Optional)</label>
                <textarea id="message" rows={3} placeholder="Any specific concerns or symptoms?"></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-submit-form">
                Confirm Booking Request
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
