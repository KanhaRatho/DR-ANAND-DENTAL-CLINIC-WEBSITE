import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Patient Review",
      treatment: "Surgical Extraction",
      text: "I had a surgical tooth removal done recently and the entire experience was much better than I expected. The doctor and staff were very professional, patient and caring throughout the procedure. They explained every step clearly.",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
      name: "Patient Review",
      treatment: "Dental Care",
      text: "Treatment was painless and I experienced the best quality hygienic service.",
      avatar: "https://i.pravatar.cc/150?img=11"
    },
    {
      name: "Patient Review",
      treatment: "Specialist Care",
      text: "A pleasant hospitality by staff and the doctors have huge experience.",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    {
      name: "Patient Review",
      treatment: "General Dentistry",
      text: "Cutting edge dentistry meets compassionate care in every visit.",
      avatar: "https://i.pravatar.cc/150?img=12"
    },
    {
      name: "Patient Review",
      treatment: "Surgical Extraction",
      text: "I had a surgical tooth removal done recently and the entire experience was much better than I expected. The doctor and staff were very professional, patient and caring throughout the procedure. They explained every step clearly.",
      avatar: "https://i.pravatar.cc/150?img=9"
    },
    {
      name: "Patient Review",
      treatment: "Dental Care",
      text: "Treatment was painless and I experienced the best quality hygienic service.",
      avatar: "https://i.pravatar.cc/150?img=15"
    }
  ];

  return (
    <section className="section" id="reviews" style={{ background: 'var(--background)' }}>
      <div className="container">
        
        
          <div className="reviews-header">
            <div className="reviews-title-wrapper">
              <span className="section-tag">Patient Testimonials</span>
              <h2 className="section-title" style={{ marginTop: '16px' }}>Loved by Our Patients</h2>
            </div>
            <div className="reviews-rating-summary">
              <div className="stars-row">
                <Star fill="#FEDD00" color="#FEDD00" size={24} />
                <Star fill="#FEDD00" color="#FEDD00" size={24} />
                <Star fill="#FEDD00" color="#FEDD00" size={24} />
                <Star fill="#FEDD00" color="#FEDD00" size={24} />
                <Star fill="#FEDD00" color="#FEDD00" size={24} />
              </div>
              <p className="rating-text"><strong>5.0</strong> based on <strong>545+ Verified Google Reviews</strong></p>
            </div>
          </div>
        

        
          <div className="reviews-marquee-wrapper">
            <div className="reviews-marquee-track">
              {[...reviews, ...reviews].map((review, index) => (
                <div className="review-card" key={index}>
                  <div className="review-stars-small">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} fill="#FEDD00" color="#FEDD00" size={14} />
                    ))}
                  </div>
                  <p className="review-text">"{review.text}"</p>
                  <div className="review-author">
                    <img src={review.avatar} alt={review.name} className="review-avatar" />
                    <div className="review-author-info">
                      <h4>{review.name}</h4>
                      <span>{review.treatment}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        

      </div>
    </section>
  );
}
