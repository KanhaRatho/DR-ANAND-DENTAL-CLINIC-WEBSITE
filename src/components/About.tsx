import React, { useRef } from 'react';
import { Shield, Sparkles, HeartHandshake, ArrowRight, Star, Award } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "end 10%"]
  });

  // 1. Section Entrance & Exit
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0.85]);
  const sectionY = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [50, 0, 0, -20]);
  const sectionScale = useTransform(scrollYProgress, [0, 0.15], [0.98, 1]);
  const sectionBlur = useTransform(scrollYProgress, [0, 0.15], ["blur(6px)", "blur(0px)"]);

  // 2. Images Side Entrance (Parallax)
  const imgOpacity = useTransform(scrollYProgress, [0.05, 0.25], [0, 1]);
  const imgY = useTransform(scrollYProgress, [0.05, 0.25], [50, 0]);
  // Subtle scroll parallax for visuals across entire scroll
  const visualParallax = useTransform(scrollYProgress, [0, 1], [0, -40]);

  // 3. Badge Animation
  const badgeOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  const badgeScale = useTransform(scrollYProgress, [0.1, 0.2], [0.9, 1]);
  const badgeY = useTransform(scrollYProgress, [0.1, 0.2], [15, 0]);
  const dotScale = useTransform(scrollYProgress, [0.15, 0.25], [0, 1]);

  // 4. Heading Line-by-Line & Parallax
  const hLine1Opacity = useTransform(scrollYProgress, [0.15, 0.25], [0, 1]);
  const hLine1Y = useTransform(scrollYProgress, [0.15, 0.25], [35, 0]);
  const hLine1Blur = useTransform(scrollYProgress, [0.15, 0.25], ["blur(10px)", "blur(0px)"]);
  const hLine1Tracking = useTransform(scrollYProgress, [0.15, 0.25], ["0.02em", "0em"]);
  
  const hLine2Opacity = useTransform(scrollYProgress, [0.18, 0.28], [0, 1]);
  const hLine2Y = useTransform(scrollYProgress, [0.18, 0.28], [35, 0]);
  const hLine2Blur = useTransform(scrollYProgress, [0.18, 0.28], ["blur(10px)", "blur(0px)"]);
  const hLine2Tracking = useTransform(scrollYProgress, [0.18, 0.28], ["0.02em", "0em"]);
  
  const headingParallaxY = useTransform(scrollYProgress, [0.2, 0.8], [0, -8]);

  // 5. Yellow Underline
  const underlineScaleX = useTransform(scrollYProgress, [0.25, 0.35], [0, 1]);

  // 6. Description Line-by-Line
  const descLine1Opacity = useTransform(scrollYProgress, [0.25, 0.35], [0, 1]);
  const descLine1Y = useTransform(scrollYProgress, [0.25, 0.35], [15, 0]);
  
  const descLine2Opacity = useTransform(scrollYProgress, [0.28, 0.38], [0, 1]);
  const descLine2Y = useTransform(scrollYProgress, [0.28, 0.38], [15, 0]);

  // 7. Trust Cards
  const cardsParallaxY = useTransform(scrollYProgress, [0.2, 0.8], [0, 10]);
  
  // Card 1
  const c1Opacity = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);
  const c1Y = useTransform(scrollYProgress, [0.35, 0.45], [35, 0]);
  const c1Scale = useTransform(scrollYProgress, [0.35, 0.45], [0.95, 1]);
  const c1Rotate = useTransform(scrollYProgress, [0.35, 0.45], [2, 0]);
  const c1IconScale = useTransform(scrollYProgress, [0.4, 0.5], [0.5, 1]);
  const c1IconRotate = useTransform(scrollYProgress, [0.4, 0.5], [12, 0]);
  const c1Shadow = useTransform(scrollYProgress, [0.35, 0.45], ["0px 0px 0px rgba(0,0,0,0)", "0px 10px 30px rgba(0,0,0,0.05)"]);

  // Card 2
  const c2Opacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const c2Y = useTransform(scrollYProgress, [0.4, 0.5], [35, 0]);
  const c2Scale = useTransform(scrollYProgress, [0.4, 0.5], [0.95, 1]);
  const c2Rotate = useTransform(scrollYProgress, [0.4, 0.5], [2, 0]);
  const c2IconScale = useTransform(scrollYProgress, [0.45, 0.55], [0.5, 1]);
  const c2IconRotate = useTransform(scrollYProgress, [0.45, 0.55], [12, 0]);
  const c2Shadow = useTransform(scrollYProgress, [0.4, 0.5], ["0px 0px 0px rgba(0,0,0,0)", "0px 10px 30px rgba(0,0,0,0.05)"]);

  // Card 3
  const c3Opacity = useTransform(scrollYProgress, [0.45, 0.55], [0, 1]);
  const c3Y = useTransform(scrollYProgress, [0.45, 0.55], [35, 0]);
  const c3Scale = useTransform(scrollYProgress, [0.45, 0.55], [0.95, 1]);
  const c3Rotate = useTransform(scrollYProgress, [0.45, 0.55], [2, 0]);
  const c3IconScale = useTransform(scrollYProgress, [0.5, 0.6], [0.5, 1]);
  const c3IconRotate = useTransform(scrollYProgress, [0.5, 0.6], [12, 0]);
  const c3Shadow = useTransform(scrollYProgress, [0.45, 0.55], ["0px 0px 0px rgba(0,0,0,0)", "0px 10px 30px rgba(0,0,0,0.05)"]);

  // 8. CTA Button
  const btnParallaxY = useTransform(scrollYProgress, [0.2, 0.8], [0, 15]);
  const btnOpacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const btnY = useTransform(scrollYProgress, [0.5, 0.6], [40, 0]);
  const btnScale = useTransform(scrollYProgress, [0.5, 0.6], [0.95, 1]);
  const btnGlow = useTransform(scrollYProgress, [0.55, 0.65], ["0px 0px 0px rgba(254,221,0,0)", "0px 8px 24px rgba(254,221,0,0.25)"]);

  return (
    <motion.section 
      className="section" 
      id="about" 
      ref={containerRef}
      style={{ 
        background: 'var(--background)',
        opacity: sectionOpacity,
        y: sectionY,
        scale: sectionScale,
        filter: sectionBlur
      }}
    >
      <div className="container about-layout">
        
        {/* Left Side - Image Composition */}
        <motion.div 
          className="about-visuals" 
          style={{ opacity: imgOpacity, y: imgY }}
        >
          <motion.div style={{ y: visualParallax, width: '100%', height: '100%', position: 'relative' }}>
            {/* Decorative Elements */}
            <div className="decor-dot yellow-dot"></div>
            <div className="decor-line"></div>
            <div className="decor-dot plum-dot"></div>

            {/* Premium Floating Badges */}
            <div className="about-float-badge badge-left">
              <div className="badge-icon-wrap">
                <Award size={16} color="var(--accent)" />
              </div>
              <div className="badge-text">
                <span className="badge-title">20+ Years</span>
                <span className="badge-sub">Experience</span>
              </div>
            </div>

            <div className="about-float-badge badge-right">
              <div className="badge-icon-wrap">
                <Star size={16} color="var(--accent)" />
              </div>
              <div className="badge-text">
                <span className="badge-title">4.9/5</span>
                <span className="badge-sub">Patient Rating</span>
              </div>
            </div>


            <div className="img-capsule primary-capsule">
              <img 
                src="/about our clinic-jpg.jpg" 
                alt="Premium dental care" 
                loading="lazy"
              />
            </div>
            
            <div className="img-capsule secondary-capsule">
              <img 
                src="/about our clinic 2nd-jpg.jpg" 
                alt="Modern luxury dental clinic" 
                loading="lazy"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Content */}
        <div className="about-content-new">
          
          <motion.div 
            className="about-badge-wrapper" 
            style={{ 
              marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px',
              opacity: badgeOpacity, scale: badgeScale, y: badgeY
            }}
          >
            <span className="section-tag" style={{ margin: 0, backgroundColor: 'rgba(13, 0, 10, 0.05)', color: 'var(--text-dark)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <motion.span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent)', scale: dotScale }} />
              About Our Clinic
            </span>
          </motion.div>
          
          <motion.h2 className="section-title" style={{ y: headingParallaxY }}>
            <motion.span style={{ display: 'block', opacity: hLine1Opacity, y: hLine1Y, filter: hLine1Blur, letterSpacing: hLine1Tracking }}>Redefining Dental Care</motion.span>
            <motion.span style={{ display: 'block', opacity: hLine2Opacity, y: hLine2Y, filter: hLine2Blur, letterSpacing: hLine2Tracking }}>with Empathy &amp; Expertise</motion.span>
          </motion.h2>
          
          <motion.div 
            className="about-underline" 
            style={{ 
              scaleX: underlineScaleX, 
              transformOrigin: 'left', 
              width: '80px', height: '3px', backgroundColor: 'var(--accent)', marginTop: '24px', borderRadius: '2px' 
            }} 
          />
          
          <motion.p className="about-desc" style={{ color: 'var(--secondary)', fontSize: '1.125rem', lineHeight: '1.7', marginTop: '24px' }}>
            <motion.span style={{ display: 'block', opacity: descLine1Opacity, y: descLine1Y }}>
              At SVN Dental Care, we believe visiting the dentist shouldn't be a source of anxiety.
            </motion.span>
            <motion.span style={{ display: 'block', opacity: descLine2Opacity, y: descLine2Y, marginTop: '4px' }}>
              Our philosophy is rooted in a deeply patient-first approach—combining gentle, stress-free care with world-class clinical precision for over two decades.
            </motion.span>
          </motion.p>
          
          <motion.div className="about-features-list" style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '32px', marginBottom: '40px', y: cardsParallaxY }}>
            
            {/* Card 1 */}
            <motion.div 
              className="about-feature-card"
              style={{ opacity: c1Opacity, y: c1Y, scale: c1Scale, rotate: c1Rotate, boxShadow: c1Shadow }}
              whileHover={{ y: -8, scale: 1.02, backgroundColor: 'rgba(255,255,255,1)', boxShadow: '0px 15px 40px rgba(0,0,0,0.08)' }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="feature-icon-circle">
                <motion.div style={{ scale: c1IconScale, rotate: c1IconRotate }}>
                  <Shield size={22} color="var(--accent)" />
                </motion.div>
              </div>
              <div className="feature-text">
                <h4>Stress-Free Environment</h4>
                <p>A relaxing sanctuary designed to eliminate dental anxiety completely.</p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              className="about-feature-card"
              style={{ opacity: c2Opacity, y: c2Y, scale: c2Scale, rotate: c2Rotate, boxShadow: c2Shadow }}
              whileHover={{ y: -8, scale: 1.02, backgroundColor: 'rgba(255,255,255,1)', boxShadow: '0px 15px 40px rgba(0,0,0,0.08)' }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="feature-icon-circle">
                <motion.div style={{ scale: c2IconScale, rotate: c2IconRotate }}>
                  <Sparkles size={22} color="var(--accent)" />
                </motion.div>
              </div>
              <div className="feature-text">
                <h4>Advanced Techniques</h4>
                <p>Modern pain management and state-of-the-art precision tools.</p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              className="about-feature-card"
              style={{ opacity: c3Opacity, y: c3Y, scale: c3Scale, rotate: c3Rotate, boxShadow: c3Shadow }}
              whileHover={{ y: -8, scale: 1.02, backgroundColor: 'rgba(255,255,255,1)', boxShadow: '0px 15px 40px rgba(0,0,0,0.08)' }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="feature-icon-circle">
                <motion.div style={{ scale: c3IconScale, rotate: c3IconRotate }}>
                  <HeartHandshake size={22} color="var(--accent)" />
                </motion.div>
              </div>
              <div className="feature-text">
                <h4>Personalized Care</h4>
                <p>Unrushed, dedicated consultations tailored to your unique smile.</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div style={{ y: btnParallaxY, width: '100%', display: 'flex', justifyContent: 'center' }}>
            <motion.button 
              className="about-cta-btn btn-primary"
              style={{ 
                opacity: btnOpacity, y: btnY, scale: btnScale, boxShadow: btnGlow,
                padding: '16px 32px', fontSize: '1.05rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px',
                border: 'none', borderRadius: '50px', cursor: 'pointer', background: 'var(--primary)', color: 'var(--white)'
              }}
              whileHover={{ y: -5, scale: 1.02, boxShadow: '0px 15px 40px rgba(254,221,0,0.4)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              Book Appointment 
              <motion.div
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
              >
                <ArrowRight size={20} className="cta-icon" />
              </motion.div>
            </motion.button>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
