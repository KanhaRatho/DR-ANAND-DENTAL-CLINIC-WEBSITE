import React, { useEffect, useRef, useState } from 'react';
import { MessageSquare, Camera, Stethoscope, ClipboardList, Activity, Heart } from 'lucide-react';
import Reveal from './Reveal';

const TimelineItem = ({ step, index, color, isActive }: { step: any, index: number, color: string, isActive: boolean }) => {
  const isEven = index % 2 === 0;

  return (
    <Reveal className={`v-timeline-item ${isEven ? 'item-left' : 'item-right'} ${isActive ? 'is-active-step' : ''}`} threshold={0.2}>
      <div className="v-timeline-center-node" style={{ background: color }}>
        <span className="v-timeline-number">{String(index + 1).padStart(2, '0')}</span>
      </div>
      
      <div className="v-timeline-content-wrapper">
        <div className="v-timeline-content">
          <div className="v-timeline-icon" style={{ color: color }}>
            {step.icon}
          </div>
          <div className="v-timeline-text">
            <h3 className="v-timeline-title">{step.title}</h3>
            <p className="v-timeline-desc">{step.desc}</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default function TreatmentProcess() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(-1);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const triggerPoint = windowHeight * 0.5;
      const scrolled = triggerPoint - rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / rect.height));
      
      setScrollProgress(progress);
      
      const stepIndex = Math.floor(progress * 6);
      setActiveStep(Math.min(5, Math.max(-1, stepIndex)));
    };
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const steps = [
    {
      icon: <MessageSquare size={28} />,
      title: "Consultation",
      desc: "Discuss your goals and concerns in a relaxed setting."
    },
    {
      icon: <Camera size={28} />,
      title: "Digital X-Ray",
      desc: "Low-radiation 3D imaging for precise clinical insights."
    },
    {
      icon: <Stethoscope size={28} />,
      title: "Diagnosis",
      desc: "A thorough examination of your oral health."
    },
    {
      icon: <ClipboardList size={28} />,
      title: "Treatment Plan",
      desc: "A clear, transparent roadmap tailored to your needs."
    },
    {
      icon: <Activity size={28} />,
      title: "Treatment",
      desc: "Pain-free procedures using state-of-the-art tech."
    },
    {
      icon: <Heart size={28} />,
      title: "Follow-up Care",
      desc: "Dedicated aftercare to ensure perfect healing."
    }
  ];

  const colors = ['var(--accent)'];

  return (
    <section className="section" id="process" style={{ background: '#f8fafc' }}>
      <div className="container">
        
        <Reveal className="timeline-header-wrapper" threshold={0.25}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto', marginBottom: '80px' }}>
            <span className="section-tag timeline-tag">How We Work</span>
            <h2 className="section-title timeline-title-anim" style={{ marginTop: '16px' }}>Your Journey to a Perfect Smile</h2>
            <p className="timeline-header-desc" style={{ color: 'var(--secondary)', marginTop: '16px', fontSize: '1.125rem' }}>
              We believe in complete transparency. Here is exactly what you can expect when you visit our clinic, from the moment you walk in to your final stunning result.
            </p>
          </div>
        </Reveal>

        <div className="v-timeline" ref={timelineRef}>
          <div className="v-timeline-line">
            <div className="v-timeline-line-progress" style={{ transform: `scaleY(${scrollProgress})` }}></div>
          </div>
          {steps.map((step, index) => (
            <TimelineItem 
              key={index} 
              step={step} 
              index={index} 
              color={colors[index % colors.length]} 
              isActive={activeStep === index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
