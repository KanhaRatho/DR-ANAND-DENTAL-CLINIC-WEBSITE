import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const policies: Record<string, { title: string; content: React.ReactNode }> = {
  'privacy-policy': {
    title: 'Privacy Policy',
    content: (
      <>
        <h3>1. Introduction</h3>
        <p>At Dr. Anand's Dental Clinic, patient confidentiality and data protection are paramount. This Privacy Policy outlines how we collect, use, and safeguard your personal and medical information in accordance with standard medical ethics and applicable Indian data protection laws.</p>
        
        <h3>2. Information We Collect</h3>
        <p>We collect personal information (name, contact details, date of birth) and medical history (previous treatments, allergies, current medications) strictly necessary for providing optimal dental care.</p>
        
        <h3>3. How We Use Your Information</h3>
        <p>Your information is used solely for diagnostic purposes, treatment planning, appointment scheduling, and internal record keeping. We do not sell or share your data with third parties for marketing purposes.</p>

        <h3>4. Data Security</h3>
        <p>We implement robust physical and digital security measures to prevent unauthorized access to your patient records. Only authorized clinic staff and treating doctors have access to your medical history.</p>
      </>
    )
  },
  'terms-and-conditions': {
    title: 'Terms & Conditions',
    content: (
      <>
        <h3>1. Agreement to Terms</h3>
        <p>By booking an appointment or receiving treatment at Dr. Anand's Dental Clinic, you agree to these Terms and Conditions.</p>
        
        <h3>2. Treatment Consent</h3>
        <p>All invasive procedures require explicit informed consent. You have the right to ask questions about the risks, benefits, and alternatives of any proposed treatment plan.</p>
        
        <h3>3. Right to Refuse Treatment</h3>
        <p>Our doctors reserve the right to refuse treatment if a patient exhibits abusive behavior, fails to disclose critical medical history, or if the requested treatment is deemed medically unsound.</p>
      </>
    )
  },
  'cookie-policy': {
    title: 'Cookie Policy',
    content: (
      <>
        <h3>1. Use of Cookies</h3>
        <p>Our website uses minimal cookies to enhance user experience, such as remembering your preferences or analyzing basic site traffic patterns.</p>
        
        <h3>2. Third-Party Analytics</h3>
        <p>We may use tools like Google Analytics to understand how visitors interact with our site. This data is anonymized and cannot be used to identify you personally.</p>
      </>
    )
  },
  'cancellation-policy': {
    title: 'Cancellation Policy',
    content: (
      <>
        <h3>1. Notice Requirement</h3>
        <p>We request that you provide at least 24 hours notice if you need to cancel or reschedule your appointment. This allows us to offer the time slot to another patient in need.</p>
        
        <h3>2. Late Arrivals</h3>
        <p>If you arrive more than 15 minutes late, we may need to reschedule your appointment to avoid disrupting the schedule for subsequent patients.</p>
      </>
    )
  },
  'refund-policy': {
    title: 'Refund Policy',
    content: (
      <>
        <h3>1. Treatment Guarantees</h3>
        <p>Dental treatments involve biological variables. While we strive for perfection and use the highest quality materials, we cannot offer a 100% money-back guarantee on medical procedures.</p>
        
        <h3>2. Material Defects</h3>
        <p>If a prosthetic (crown, bridge, denture) fails due to a verified material or lab defect within the specified warranty period, we will repair or replace it at no additional cost.</p>
      </>
    )
  },
  'disclaimer': {
    title: 'Medical Disclaimer',
    content: (
      <>
        <h3>1. Informational Purposes Only</h3>
        <p>The content provided on this website (including text, graphics, and images) is for general informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.</p>
        
        <h3>2. No Doctor-Patient Relationship</h3>
        <p>Reading this website or submitting a contact form does not create a formal doctor-patient relationship until an in-person consultation occurs.</p>
      </>
    )
  },
  'accessibility': {
    title: 'Accessibility Statement',
    content: (
      <>
        <h3>1. Our Commitment</h3>
        <p>Dr. Anand's Dental Clinic is committed to ensuring digital accessibility for all users, including those with disabilities. We strive to continually improve the user experience and apply relevant accessibility standards.</p>
        
        <h3>2. Physical Accessibility</h3>
        <p>Our physical clinic in Vizianagaram is wheelchair accessible, ensuring that all patients can receive care comfortably.</p>
      </>
    )
  }
};

export default function LegalPages() {
  const { policyId } = useParams();
  const policy = policyId ? policies[policyId] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [policyId]);

  if (!policy) {
    return (
      <div className="container" style={{ padding: '120px 0', textAlign: 'center', minHeight: '60vh' }}>
        <h2>Page Not Found</h2>
        <Link to="/" className="btn btn-primary" style={{ marginTop: '24px' }}>Return Home</Link>
      </div>
    );
  }

  return (
    <div className="legal-page" style={{ padding: '120px 0 80px 0', minHeight: '80vh', background: 'var(--background)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', textDecoration: 'none', fontWeight: 600, marginBottom: '40px' }}>
          <ArrowLeft size={20} /> Back to Home
        </Link>
        
        <div className="legal-content-card" style={{ background: 'var(--white)', padding: '60px', borderRadius: '24px', boxShadow: '0 20px 60px rgba(0,0,0,0.05)' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '40px', color: 'var(--text-dark)', borderBottom: '2px solid rgba(0,0,0,0.05)', paddingBottom: '24px' }}>
            {policy.title}
          </h1>
          <div className="legal-text-body">
            {policy.content}
          </div>
        </div>

      </div>

      <style>{`
        .legal-text-body h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-dark);
          margin-top: 32px;
          margin-bottom: 12px;
        }
        .legal-text-body p {
          font-size: 1.05rem;
          color: var(--secondary);
          line-height: 1.8;
          margin-bottom: 16px;
        }
        @media (max-width: 768px) {
          .legal-content-card {
            padding: 32px 20px;
          }
          .legal-content-card h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
