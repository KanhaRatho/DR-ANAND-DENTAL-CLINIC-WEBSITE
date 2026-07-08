import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import Reveal from './Reveal';

const images = [
  { url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80", alt: "Reception Area", category: "Reception" },
  { url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80", alt: "Treatment Room 1", category: "Treatment Rooms" },
  { url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80", alt: "Advanced Equipment", category: "Equipment" },
  { url: "https://images.unsplash.com/photo-1605684954998-685c79d6a018?auto=format&fit=crop&w=800&q=80", alt: "Doctor at work", category: "Doctor" },
  { url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80", alt: "Waiting Area", category: "Waiting Area" },
  { url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80", alt: "Clinic Interior", category: "Clinic Interiors" },
];

export default function Gallery() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <section className="section gallery-section" id="gallery" style={{ background: 'var(--white)' }}>
      <div className="container">
        
        <Reveal className="gallery-header-wrapper" threshold={0.25}>
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <span className="section-tag gallery-tag">Our Clinic</span>
            <h2 className="section-title gallery-title-anim" style={{ marginTop: '16px' }}>Tour the Facility</h2>
          </div>
        </Reveal>

        <div className="gallery-grid">
          {images.map((img, idx) => (
            <Reveal 
              className="gallery-item-wrapper" 
              key={idx}
              threshold={0.15}
              style={{ '--stagger-delay': `${(idx % 3) * 100}ms` } as React.CSSProperties}
            >
              <div className="gallery-item" onClick={() => setLightboxImg(img.url)}>
                <img src={img.url} alt={img.alt} loading="lazy" />
                <div className="gallery-overlay">
                  <ZoomIn size={32} color="var(--white)" />
                  <span>{img.category}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div className="lightbox-modal" onClick={() => setLightboxImg(null)}>
          <button className="lightbox-close" onClick={() => setLightboxImg(null)}>
            <X size={32} />
          </button>
          <img src={lightboxImg} alt="Enlarged view" className="lightbox-image" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}
