import React from 'react';
import { Award, Cpu, PiggyBank, Heart, Feather, CheckCircle, Monitor, Activity, ShieldCheck, Calendar } from 'lucide-react';
import CountUp from './CountUp';
import Reveal from './Reveal';

export default function Features() {
  const features = [
    {
      icon: <Award size={28} />,
      title: "World-Class Dental Experts",
      desc: "Our highly trained specialists bring decades of expertise, ensuring your smile is in the hands of the absolute best."
    },
    {
      icon: <Cpu size={28} />,
      title: "State-of-the-Art Technology",
      desc: "Precision diagnostics and advanced treatments powered by the latest dental innovations for optimal results."
    },
    {
      icon: <PiggyBank size={28} />,
      title: "Affordable Care",
      desc: "Experience premium quality dental care that seamlessly fits your budget with our flexible payment options."
    },
    {
      icon: <Heart size={28} />,
      title: "Gentle Approach",
      desc: "We embrace a warm, patient-first philosophy, ensuring you feel completely relaxed and valued during every visit."
    },
    {
      icon: <Feather size={28} />,
      title: "Pain-Free Dentistry",
      desc: "Our advanced clinical techniques prioritize your maximum comfort, ensuring a virtually pain-free experience at every step."
    },
    {
      icon: <CheckCircle size={28} />,
      title: "Honest Pricing",
      desc: "We believe in complete transparency. Enjoy upfront pricing and detailed treatment plans with no hidden fees, ever."
    },
    {
      icon: <Monitor size={28} />,
      title: "Digital X-Rays",
      desc: "Utilizing low-radiation digital imaging for faster, safer, and crystal-clear diagnostics you can always trust."
    },
    {
      icon: <Activity size={28} />,
      title: "Priority Emergency Care",
      desc: "We provide prompt, priority attention to resolve dental emergencies and alleviate pain when you need it the absolute most."
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "100% Sterile Environment",
      desc: "Our rigorous sterilization protocols exceed global safety standards, ensuring a perfectly sterile and safe environment."
    }
  ];

  const colors = ['var(--primary)', 'var(--secondary)', '#0D000A', '#0D000A'];

  return (
    <section className="section features-section" id="why-us" style={{ background: '#f8fafc', overflow: 'hidden' }}>
      <div className="container">
        
        <Reveal className="features-header-wrapper" threshold={0.5}>
          <div className="features-header" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto', marginBottom: '60px' }}>
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title" style={{ marginTop: '16px' }}>The Gold Standard in Dental Care</h2>
            <p style={{ color: 'var(--secondary)', marginTop: '16px', fontSize: '1.125rem' }}>
              We combine clinical excellence with a deeply empathetic approach to redefine what a trip to the dentist should feel like.
            </p>
          </div>
        </Reveal>

        <div className="info-list">
          {features.map((feature, index) => {
            const isEven = index % 2 !== 0; // index 1, 3, 5...
            const accentColor = colors[index % colors.length];
            
            return (
              <Reveal 
                key={index} 
                className={`info-card ${isEven ? 'accent-left' : 'accent-right'}`} 
                threshold={0.2}
              >
                {(isVisible) => (
                  <>
                    {isEven && (
                      <div className="info-accent left" style={{ background: accentColor }}></div>
                    )}
                    
                    <div className="info-number-wrap">
                      <span className="info-number">
                        {isVisible ? <CountUp end={index + 1} duration={800} /> : '0'}
                      </span>
                      <span className="info-number-label">Point</span>
                    </div>
                    
                    <div className="info-icon">
                      {feature.icon}
                    </div>
                    
                    <div className="info-divider"></div>
                    
                    <div className="info-content">
                      <h3 className="info-title">{feature.title}</h3>
                      <p className="info-desc">{feature.desc}</p>
                    </div>

                    {!isEven && (
                      <div className="info-accent right" style={{ background: accentColor }}></div>
                    )}
                  </>
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal className="features-cta-wrapper" threshold={0.5}>
          <div className="features-cta" style={{ textAlign: 'center', marginTop: '56px' }}>
            <button className="btn btn-primary">
              <Calendar size={20} />
              Book Your Consultation
            </button>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
