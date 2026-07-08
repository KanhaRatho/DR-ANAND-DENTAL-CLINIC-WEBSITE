import React, { Suspense, lazy } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';

// Lazy load below-the-fold components
const Services = lazy(() => import('../components/Services'));
const SmileTransformations = lazy(() => import('../components/SmileTransformations'));
const Features = lazy(() => import('../components/Features'));
const About = lazy(() => import('../components/About'));
const TreatmentProcess = lazy(() => import('../components/TreatmentProcess'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const DoctorProfile = lazy(() => import('../components/DoctorProfile'));
const Gallery = lazy(() => import('../components/Gallery'));
const Appointment = lazy(() => import('../components/Appointment'));
const FAQ = lazy(() => import('../components/FAQ'));
const Location = lazy(() => import('../components/Location'));
const Contact = lazy(() => import('../components/Contact'));

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Loading...</div>}>
          <Features />
          <About />
          <DoctorProfile />
          <Services />
          <SmileTransformations />
          <TreatmentProcess />
          <Gallery />
          <Testimonials />
          <FAQ />
          <Location />
          <Appointment />
          <Contact />
        </Suspense>
      </main>
    </>
  );
}
