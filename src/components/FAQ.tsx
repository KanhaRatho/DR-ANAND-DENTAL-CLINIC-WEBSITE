import React, { useState } from 'react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';
import Reveal from './Reveal';

const faqs = [
  { category: "General & Appointments", question: "Are appointments required?", answer: "While we recommend booking an appointment to avoid waiting, we do accept walk-in patients based on doctor availability." },
  { category: "General & Appointments", question: "Can I book through WhatsApp?", answer: "Yes! You can message us directly on WhatsApp to check availability and book your appointment instantly." },
  { category: "General & Appointments", question: "Do you treat children?", answer: "Absolutely! We provide pediatric dentistry services in a child-friendly, gentle environment to ensure a stress-free experience." },
  { category: "General & Appointments", question: "Do you handle emergency appointments?", answer: "Yes, we prioritize dental emergencies such as severe toothaches, broken teeth, or trauma. Please call us immediately." },
  { category: "General & Appointments", question: "How often should I visit the dentist?", answer: "We recommend visiting every 6 months for a routine checkup and professional cleaning to maintain optimal oral health." },
  { category: "General & Appointments", question: "Is your clinic wheelchair accessible?", answer: "Yes, our clinic is fully accessible for patients using wheelchairs or mobility aids." },
  { category: "General & Appointments", question: "What should I bring to my first appointment?", answer: "Please bring any previous dental records, X-rays, and a list of current medications you are taking." },
  { category: "General & Appointments", question: "How long does a routine checkup take?", answer: "A routine checkup and cleaning usually takes about 30 to 45 minutes." },

  { category: "Root Canals & Restorations", question: "Does a root canal hurt?", answer: "Not at all. With our advanced anesthesia and modern techniques, a root canal is virtually painless, similar to getting a routine filling." },
  { category: "Root Canals & Restorations", question: "How many sittings does a root canal take?", answer: "Most root canals are completed in a single sitting, though complex cases may require two." },
  { category: "Root Canals & Restorations", question: "Will I need a crown after a root canal?", answer: "Yes, a root canal weakens the tooth structure, so a crown is essential to protect it and restore full function." },
  { category: "Root Canals & Restorations", question: "How long does a dental crown last?", answer: "With proper care and oral hygiene, high-quality dental crowns can last 10 to 15 years, or even a lifetime." },
  { category: "Root Canals & Restorations", question: "Are extractions painful?", answer: "We use effective local anesthesia to ensure extractions are completely pain-free. You will only feel slight pressure." },
  { category: "Root Canals & Restorations", question: "What should I eat after an extraction?", answer: "Stick to soft, cool foods like yogurt, smoothies, and mashed potatoes for the first 24 hours. Avoid hot and spicy foods." },
  { category: "Root Canals & Restorations", question: "Can a decayed tooth heal on its own?", answer: "No, tooth enamel cannot regenerate once decayed. A filling or crown is necessary to stop the decay from spreading." },
  
  { category: "Cosmetic & Technology", question: "How much does teeth whitening cost?", answer: "The cost varies depending on the type of whitening (in-clinic vs at-home). Contact us for our current packages and offers." },
  { category: "Cosmetic & Technology", question: "Is teeth whitening safe?", answer: "Yes, professional teeth whitening under a dentist's supervision is completely safe and does not damage enamel." },
  { category: "Cosmetic & Technology", question: "What is smile designing?", answer: "Smile designing is a comprehensive cosmetic treatment plan that may include veneers, whitening, and contouring to give you a perfect smile." },
  { category: "Cosmetic & Technology", question: "What are dental veneers?", answer: "Veneers are ultra-thin, custom-made porcelain shells bonded to the front of your teeth to fix chips, gaps, or severe discoloration." },
  { category: "Cosmetic & Technology", question: "Is laser dentistry safe?", answer: "Yes, laser dentistry is extremely safe, highly precise, minimally invasive, and promotes faster healing than traditional methods." },
  { category: "Cosmetic & Technology", question: "Are digital X-rays safe?", answer: "Absolutely. Digital X-rays emit up to 90% less radiation compared to traditional film X-rays and are highly safe." },
  { category: "Cosmetic & Technology", question: "What are invisible aligners?", answer: "Invisible aligners are clear, removable trays used to straighten teeth without the need for traditional metal braces." },

  { category: "Implants & Replacements", question: "What is a dental implant?", answer: "An implant is a titanium post surgically placed into the jawbone to act as an artificial root for a replacement tooth." },
  { category: "Implants & Replacements", question: "Are dental implants permanent?", answer: "Yes, dental implants fuse with your jawbone and are designed to be a permanent, lifelong solution for missing teeth." },
  { category: "Implants & Replacements", question: "Does the implant procedure hurt?", answer: "The procedure is done under local anesthesia and is surprisingly comfortable. Post-op soreness is minimal and easily managed." },
  { category: "Implants & Replacements", question: "Can anyone get dental implants?", answer: "Most healthy adults with sufficient jawbone density can get implants. We perform a 3D scan to assess your eligibility." },
  { category: "Implants & Replacements", question: "What is the alternative to implants?", answer: "Alternatives include dental bridges (which require filing adjacent teeth) or removable dentures." },

  { category: "Payments & Policies", question: "What payment methods do you accept?", answer: "We accept cash, UPI (Google Pay, PhonePe), all major credit/debit cards, and bank transfers." },
  { category: "Payments & Policies", question: "Do you offer EMI options?", answer: "Yes, we offer easy EMI options for major treatments like implants, braces, and full mouth rehabilitations." },
  { category: "Payments & Policies", question: "Do you accept dental insurance?", answer: "We assist with documentation for insurance reimbursement. Please check your specific policy coverage for dental treatments." },
  { category: "Payments & Policies", question: "Are consultation fees adjusted in the treatment cost?", answer: "Yes, in many cases, if you proceed with a major treatment plan on the same day, the initial consultation fee is adjusted." },
  { category: "Payments & Policies", question: "What is your cancellation policy?", answer: "We request at least 24 hours notice for cancellations so we can offer the time slot to another patient in need." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("General & Appointments");

  const categories = Array.from(new Set(faqs.map(f => f.category)));
  const filteredFaqs = faqs.filter(f => f.category === activeCategory);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section faq-section" id="faq" style={{ background: 'var(--background)' }}>
      <div className="container">
        
        <Reveal className="faq-reveal-wrapper" threshold={0.05}>
          <div className="faq-header text-center">
            <div className="faq-icon-wrapper" style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
              <MessageCircleQuestion size={40} color="var(--accent)" />
            </div>
            <span className="section-tag faq-tag-anim">Got Questions?</span>
            <h2 className="section-title faq-title-anim" style={{ marginTop: '16px' }}>Frequently Asked Questions</h2>
            <p className="faq-subtitle faq-subtitle-anim" style={{ maxWidth: '600px', margin: '16px auto 40px auto', color: 'var(--secondary)', fontSize: '1.1rem' }}>
              Find answers to all your concerns about treatments, appointments, and clinic policies.
            </p>
          </div>
        
          <div className="faq-container">
            {/* Category Tabs */}
            <div className="faq-tabs">
              {categories.map((cat, idx) => (
                <button 
                  key={cat}
                  className={`faq-tab-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
                  style={{ '--stagger-delay': `${idx * 70}ms` } as React.CSSProperties}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* FAQ Accordion List */}
            <div className="faq-list">
              {filteredFaqs.map((faq, index) => (
                <div 
                  key={faq.question}
                  className={`faq-item ${openIndex === index ? 'open' : ''}`}
                  onClick={() => toggleFaq(index)}
                  style={{ '--stagger-delay': `${index * 80}ms` } as React.CSSProperties}
                >
                  <div className="faq-question">
                    <h3>{faq.question}</h3>
                    <ChevronDown className="faq-icon" size={20} />
                  </div>
                  <div className="faq-answer-wrapper">
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
