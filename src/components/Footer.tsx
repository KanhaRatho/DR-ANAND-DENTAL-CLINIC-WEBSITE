import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, MapPin, Phone, Clock, ShieldCheck, Sparkles, HeartHandshake, ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 300, damping: 24 } }
  };

  return (
    <footer className="luxury-footer">
      <div className="container">
        <motion.div 
          className="luxury-footer-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Brand Col */}
          <motion.div variants={itemVariants}>
            <div className="footer-brand-badge">
              <Stethoscope size={28} color="white" />
            </div>
            <div className="footer-brand-title">
              Dr. Anand's<span>Dental Clinic</span>
            </div>
            <p className="footer-brand-tagline">
              Delivering world-class, pain-free dental care with advanced technology and a gentle touch. Experience true luxury in oral healthcare.
            </p>
            <div className="footer-trust-pill">
              <Star size={14} color="var(--accent)" fill="var(--accent)" /> 5★ Patient Care
            </div>
            <div className="footer-socials">
              <a href="#" className="footer-social-btn" aria-label="Instagram">IG</a>
              <a href="#" className="footer-social-btn" aria-label="Facebook">FB</a>
              <a href="#" className="footer-social-btn" aria-label="Twitter">X</a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="footer-col-header">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/#about" className="footer-link-item">About Us</Link></li>
              <li><Link to="/#services" className="footer-link-item">Our Services</Link></li>
              <li><Link to="/#technology" className="footer-link-item">Technology</Link></li>
              <li><Link to="/#faq" className="footer-link-item">FAQs</Link></li>
              <li><Link to="/#contact" className="footer-link-item">Contact Us</Link></li>
            </ul>
          </motion.div>

          {/* Contact Details */}
          <motion.div variants={itemVariants}>
            <h4 className="footer-col-header">Get In Touch</h4>
            <div className="footer-contact-item">
              <MapPin size={18} className="footer-contact-icon" />
              <span>
                Subramanyam Peta, Ayyakoneru,<br/>
                Vizianagaram, Andhra Pradesh 535002
              </span>
            </div>
            <div className="footer-contact-item">
              <Phone size={18} className="footer-contact-icon" />
              <span>098885 29992</span>
            </div>
            <div className="footer-contact-item">
              <Clock size={18} className="footer-contact-icon" />
              <span>
                Open • Closes 9:00 PM
              </span>
            </div>
          </motion.div>

          {/* Trust & CTA */}
          <motion.div variants={itemVariants}>
            <h4 className="footer-col-header">Why Choose Us</h4>
            <div className="footer-trust-badges">
              <div className="footer-badge-card">
                <div className="footer-badge-icon"><ShieldCheck size={18} /></div>
                <span className="footer-badge-text">Sterilized Equipment</span>
              </div>
              <div className="footer-badge-card">
                <div className="footer-badge-icon"><Sparkles size={18} /></div>
                <span className="footer-badge-text">Advanced Technology</span>
              </div>
              <div className="footer-badge-card">
                <div className="footer-badge-icon"><HeartHandshake size={18} /></div>
                <span className="footer-badge-text">Patient First Approach</span>
              </div>
            </div>
            <Link to="/#appointment" className="footer-cta">
              Book Appointment <ArrowRight size={16} />
            </Link>
          </motion.div>

        </motion.div>

        <motion.div 
          className="footer-bottom-bar"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="footer-copyright">
            &copy; {currentYear} Dr. Anand's Dental Clinic. Designed with ❤️ for Better Smiles.
          </div>
          <div className="footer-legal-links">
            <Link to="/legal/privacy-policy">Privacy Policy</Link>
            <Link to="/legal/terms-and-conditions">Terms</Link>
            <Link to="/legal/refund-policy">Refund Policy</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
