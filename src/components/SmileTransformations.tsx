import React from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';

export default function SmileTransformations() {
  const transformations = [
    {
      category: "Teeth Whitening",
      caption: "Professional laser whitening removed years of deep coffee and tobacco stains, brightening this patient's smile by 8 shades in a single visit.",
      // REPLACE WITH ACTUAL PATIENT PHOTO:
      beforeImg: "/teeth%20whitening-before.jpg", 
      afterImg: "/teeth%20whitening-after.jpg"
    },
    {
      category: "Crowns",
      caption: "Custom-milled porcelain crowns were used to restore severely worn and cracked teeth, creating a durable and highly natural-looking bite.",
      // REPLACE WITH ACTUAL PATIENT PHOTO:
      beforeImg: "/crowns-before.jpg.jpg", 
      afterImg: "/crowns-after.jpg.jpg"
    },
    {
      category: "Veneers",
      caption: "A complete Hollywood smile makeover using ultra-thin porcelain veneers to correct uneven spacing, discoloration, and asymmetry.",
      // REPLACE WITH ACTUAL PATIENT PHOTO:
      beforeImg: "/veneers-before.jpg.jpg", 
      afterImg: "/veneers-after.jpg.jpg"
    },
    {
      category: "Smile Makeovers",
      caption: "A comprehensive combination of gum contouring, whitening, and dental bonding to achieve perfect facial harmony.",
      // REPLACE WITH ACTUAL PATIENT PHOTO:
      beforeImg: "/smile%20makeover-before.jpg", 
      afterImg: "/smile%20makeover-after.jpg"
    },
    {
      category: "Root Canal Restorations",
      caption: "We saved a severely decayed molar with a pain-free root canal, immediately capped with a natural-shade crown for total restoration.",
      // REPLACE WITH ACTUAL PATIENT PHOTO:
      beforeImg: "/root%20canal%20restoration-before.jpg", 
      afterImg: "/root%20canal%20restoration-after.jpg"
    },
    {
      category: "Implants",
      caption: "A permanent titanium dental implant flawlessly replaced a missing tooth, restoring both chewing function and aesthetic confidence.",
      // REPLACE WITH ACTUAL PATIENT PHOTO:
      beforeImg: "/implants-before.jpg", 
      afterImg: "/implants-after.jpg"
    }
  ];

  return (
    <section className="section" id="smiles" style={{ background: 'var(--white)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
          <span className="section-tag">Patient Success</span>
          <h2 className="section-title" style={{ marginTop: '16px' }}>Real Results, Real Smiles</h2>
          <p style={{ color: 'var(--secondary)', marginTop: '16px', fontSize: '1.125rem' }}>
            Explore the dramatic transformations achieved by our clinical team. Every smile tells a story of renewed confidence.
          </p>
          
          <div className="mobile-swipe-indicator">
            <span style={{ fontSize: '14px', marginRight: '6px' }}>Swipe to see more</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </div>
        </div>

        <div className="transformations-grid">
          {transformations.map((item, index) => (
            <div className="transformation-card" key={index}>
              <BeforeAfterSlider 
                beforeImg={item.beforeImg} 
                afterImg={item.afterImg} 
              />
              <span className="transformation-category">{item.category}</span>
              <p className="transformation-caption">{item.caption}</p>
            </div>
          ))}
        </div>

        <p className="disclaimer-text">
          * Results may vary from patient to patient. All before and after photos are used with explicit patient consent.
        </p>

      </div>
    </section>
  );
}
