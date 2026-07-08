import React from 'react';

interface BeforeAfterStackedProps {
  beforeImg: string;
  afterImg: string;
}

export default function BeforeAfterSlider({ beforeImg, afterImg }: BeforeAfterStackedProps) {
  return (
    <div className="ba-ref-container">
      
      {/* Top Image: Before */}
      <div className="ba-ref-image-box">
        <img src={beforeImg} alt="Before treatment" className="ba-ref-img" />
        <span className="ba-ref-pill ba-ref-pill-before">before</span>
      </div>

      {/* Center connector ticks connecting top and bottom through the transparent gap */}
      <div className="ba-ref-connector">
        <span></span><span></span><span></span>
      </div>

      {/* Bottom Image: After */}
      <div className="ba-ref-bottom-wrapper">
        <div className="ba-ref-image-box">
          <img src={afterImg} alt="After treatment" className="ba-ref-img" />
          <span className="ba-ref-pill ba-ref-pill-after">after</span>
        </div>
      </div>

    </div>
  );
}
