import React, { useState } from 'react';
import { 
  Sparkles, PenTool, Stethoscope, Smile, ShieldCheck, Activity, Heart, 
  Zap, Crosshair, Droplets, Camera, Gem, Scissors, CheckCircle2, ArrowRight, Calendar,
  ChevronUp, ChevronDown
} from 'lucide-react';
import Reveal from './Reveal';

import { 
  IconWhitening, IconBonding, IconCheckups, IconCosmetic, 
  IconImplants, IconDentures, IconBridges, IconEmergency, 
  IconExtraction, IconFillings, IconLaser, IconMouthGuard, 
  IconSurgery, IconPediatric, IconRootCanal, IconCleaning, 
  IconReshaping, IconVeneers, IconCrowns, IconXRay, 
  IconSmileDesign, IconJewellery 
} from './DentalIcons';


const servicesData = [
  {
    title: "Teeth Whitening",
    largeIcon: IconWhitening,
    icon: <Sparkles size={28} />,
    desc: "Professional bleaching to safely and effectively brighten your smile by several shades in a single visit.",
    benefits: ["Removes deep stains", "Immediate results", "Safe for enamel"],
    duration: "45 - 60 mins",
    recovery: "None (Mild sensitivity for 24h)",
    candidates: "Patients with stained or yellowed teeth.",
    longDesc: "Our professional teeth whitening treatment uses advanced, clinically-safe bleaching agents to break down stubborn stains and discoloration. Unlike over-the-counter products, our supervised procedure protects your enamel and gums while delivering immediate, dramatically brighter results in just one session.",
    steps: ["Initial shade assessment", "Gum protection applied", "Whitening gel application", "LED light activation (if applicable)"],
    faqs: [
      { q: "Will it make my teeth sensitive?", a: "Some patients experience mild sensitivity for 24 hours, but we use desensitizing agents to minimize any discomfort." },
      { q: "How long do the results last?", a: "With proper oral hygiene and minimizing staining foods, results can last up to 2 years." }
    ]
  },
  {
    title: "Dental Bonding",
    largeIcon: IconBonding,
    icon: <PenTool size={28} />,
    desc: "Application of a tooth-colored resin to repair chips, cracks, or gaps, seamlessly blending with natural teeth.",
    benefits: ["Fixes minor imperfections", "Cost-effective", "Non-invasive"],
    duration: "30 - 60 mins",
    recovery: "None",
    candidates: "Chipped, cracked, or gapped teeth.",
    longDesc: "Dental bonding is a fast and minimally invasive cosmetic procedure where a tooth-colored composite resin is applied and hardened with a special light. This effectively 'bonds' the material to the tooth, restoring or improving your smile without the need for extensive enamel removal.",
    steps: ["Shade selection to match your teeth", "Light surface etching", "Resin application and molding", "Curing with UV light and final polishing"],
    faqs: [
      { q: "Is the procedure painful?", a: "Not at all. Bonding usually requires no anesthesia unless it's being used to fill a decayed tooth." }
    ]
  },
  {
    title: "Routine Checkups",
    largeIcon: IconCheckups,
    icon: <Stethoscope size={28} />,
    desc: "Comprehensive exam to monitor oral health, catch early signs of decay, and prevent future dental issues.",
    benefits: ["Prevents decay", "Catches issues early", "Maintains oral health"],
    duration: "30 mins",
    recovery: "None",
    candidates: "Everyone (Every 6 months).",
    longDesc: "Routine checkups are the cornerstone of preventative dentistry. During this visit, our team conducts a thorough examination of your teeth, gums, and mouth to identify any early signs of decay, oral cancer, or periodontal disease before they escalate into costly problems.",
    steps: ["Visual examination of teeth and gums", "Oral cancer screening", "Bite and jaw alignment check", "Personalized hygiene consultation"],
    faqs: [
      { q: "Do I really need a checkup if my teeth feel fine?", a: "Yes. Many dental issues, like early cavities and gum disease, don't cause pain until they are in advanced stages." }
    ]
  },
  {
    title: "Cosmetic Dentistry",
    largeIcon: IconCosmetic,
    icon: <Smile size={28} />,
    desc: "Customized aesthetic treatments designed to enhance the overall appearance and symmetry of your smile.",
    benefits: ["Boosts confidence", "Tailored to your face", "Long-lasting results"],
    duration: "Varies by procedure",
    recovery: "Varies by procedure",
    candidates: "Anyone unhappy with their smile.",
    longDesc: "Cosmetic dentistry is an art form focused on improving the aesthetics of your smile. Whether it's subtle reshaping or a complete smile makeover combining veneers, whitening, and alignment, we tailor every treatment to complement your unique facial features.",
    steps: ["In-depth cosmetic consultation", "Digital smile design and preview", "Treatment planning and scheduling", "Execution of customized procedures"],
    faqs: [
      { q: "Can I preview my new smile?", a: "Absolutely. We use digital imaging to show you simulated results before any treatment begins." }
    ]
  },
  {
    title: "Dental Implants",
    largeIcon: IconImplants,
    icon: <ShieldCheck size={28} />,
    desc: "Permanent titanium replacements for missing teeth roots, capped with natural-looking crowns.",
    benefits: ["Permanent solution", "Looks & feels natural", "Prevents bone loss"],
    duration: "1 - 2 hours (Surgery)",
    recovery: "3 - 5 days",
    candidates: "Missing one or more teeth.",
    longDesc: "Dental implants are the gold standard for replacing missing teeth. A biocompatible titanium post is surgically placed into the jawbone, acting as a permanent artificial root. Once integrated with the bone, a custom-crafted crown is attached, restoring full function and a flawless appearance.",
    steps: ["3D CBCT scan and surgical planning", "Implant placement surgery", "Osseointegration healing phase (3-6 months)", "Attachment of custom crown"],
    faqs: [
      { q: "How long do implants last?", a: "With excellent oral hygiene, the implant post can last a lifetime, while the crown may need replacement after 10-15 years." },
      { q: "Is the surgery painful?", a: "The procedure is performed under local anesthesia, so you will feel no pain, though mild soreness is expected during recovery." }
    ]
  },
  {
    title: "Dentures",
    largeIcon: IconDentures,
    icon: <Smile size={28} />,
    desc: "Custom-fitted removable appliances to replace missing teeth and restore functionality.",
    benefits: ["Restores chewing", "Improves speech", "Supports facial structure"],
    duration: "Multiple visits",
    recovery: "Adjustment period of a few weeks",
    candidates: "Missing multiple or all teeth.",
    longDesc: "Modern dentures are highly customized, removable prosthetic devices designed to replace missing teeth and surrounding tissues. Whether you need partial or full dentures, they are crafted to look incredibly natural while restoring your ability to eat, speak, and smile confidently.",
    steps: ["Impressions and bite registration", "Creation of a wax model for try-in", "Final adjustments and fitting", "Post-delivery care instructions"],
    faqs: [
      { q: "Will they look natural?", a: "Yes, modern acrylics and resins perfectly mimic the translucency of natural teeth and the color of your gums." }
    ]
  },
  {
    title: "Bridges",
    largeIcon: IconBridges,
    icon: <Crosshair size={28} />,
    desc: "Fixed dental restorations used to bridge the gap created by one or more missing teeth.",
    benefits: ["Prevents teeth shifting", "Restores bite", "Fixed (non-removable)"],
    duration: "2 visits",
    recovery: "None",
    candidates: "Missing 1-3 consecutive teeth.",
    longDesc: "A dental bridge closes the gap caused by missing teeth using a custom false tooth anchored by crowns on the adjacent natural teeth. This fixed solution restores your bite distribution, prevents your remaining teeth from shifting out of position, and seamlessly completes your smile.",
    steps: ["Preparation of abutment teeth", "Digital or physical impressions", "Placement of a temporary bridge", "Cementing of the permanent bridge"],
    faqs: [
      { q: "How do I clean under a bridge?", a: "You will need to use special floss threaders or a water flosser to clean underneath the false tooth and maintain healthy gums." }
    ]
  },
  {
    title: "Emergency Dentistry",
    largeIcon: IconEmergency,
    icon: <Activity size={28} />,
    desc: "Immediate care for severe pain, knocked-out teeth, or urgent infections to save your smile.",
    benefits: ["Immediate pain relief", "Saves natural teeth", "Prevents infection"],
    duration: "Immediate",
    recovery: "Varies",
    candidates: "Severe pain, trauma, swelling.",
    longDesc: "Dental emergencies can't wait. Whether it's a knocked-out tooth, a severe abscess, or excruciating pain, our clinic provides priority appointments to address trauma, stop bleeding, and eliminate pain immediately, maximizing the chances of saving your natural teeth.",
    steps: ["Immediate pain management", "X-ray diagnostics to assess damage", "Emergency intervention (extraction, root canal, or splinting)", "Prescription for antibiotics/painkillers if needed"],
    faqs: [
      { q: "What should I do if my tooth is knocked out?", a: "Hold it by the crown (not the root), gently rinse it without scrubbing, and try to place it back in the socket or keep it in milk until you reach us." }
    ]
  },
  {
    title: "Tooth Extraction",
    largeIcon: IconExtraction,
    icon: <Scissors size={28} />,
    desc: "Safe and painless removal of severely decayed, damaged, or impacted teeth (including wisdom teeth).",
    benefits: ["Stops spread of decay", "Relieves pain", "Prevents crowding"],
    duration: "20 - 45 mins",
    recovery: "1 - 3 days",
    candidates: "Severe decay, impacted wisdom teeth.",
    longDesc: "While our goal is always to save a tooth, sometimes extraction is the only option to protect your overall oral health. Whether it's a simple extraction for a damaged tooth or a surgical removal of impacted wisdom teeth, we use advanced techniques and anesthesia to ensure a completely painless experience.",
    steps: ["Local anesthesia administration", "Gentle loosening of the tooth", "Extraction", "Placement of gauze and post-op instructions"],
    faqs: [
      { q: "Will I need stitches?", a: "Simple extractions usually do not require stitches, but surgical extractions (like wisdom teeth) often do." }
    ]
  },
  {
    title: "Dental Fillings",
    largeIcon: IconFillings,
    icon: <Droplets size={28} />,
    desc: "Tooth-colored composite resin used to treat cavities and restore the structural integrity of the tooth.",
    benefits: ["Stops decay", "Matches tooth color", "Durable"],
    duration: "20 - 30 mins",
    recovery: "None",
    candidates: "Cavities, minor tooth damage.",
    longDesc: "We use high-quality, BPA-free composite resin to treat cavities. This material chemically bonds to the tooth, requiring less drilling than traditional silver amalgams. Best of all, it is color-matched to your exact tooth shade, making the filling completely invisible.",
    steps: ["Removal of decayed tooth material", "Cleaning of the cavity", "Layering of the composite resin", "Curing with light and polishing"],
    faqs: [
      { q: "Are composite fillings as strong as metal ones?", a: "Yes, modern composites are extremely durable and can withstand the heavy chewing forces of the back teeth." }
    ]
  },
  {
    title: "Laser Dentistry",
    largeIcon: IconLaser,
    icon: <Zap size={28} />,
    desc: "Advanced laser technology for minimally invasive gum treatments, cavity prep, and soft tissue procedures.",
    benefits: ["Minimizes bleeding", "Faster healing", "Often requires no anesthesia"],
    duration: "Varies",
    recovery: "Very fast (1 day)",
    candidates: "Gum disease, gummy smiles.",
    longDesc: "Laser dentistry is revolutionizing oral care. By using focused light energy, we can perform highly precise procedures on soft tissues (like gums) with almost no bleeding, swelling, or need for stitches. It is incredibly gentle, making it perfect for anxious patients.",
    steps: ["Application of numbing gel (if needed)", "Targeted laser treatment", "Instant cauterization", "Immediate recovery"],
    faqs: [
      { q: "Is laser dentistry safe?", a: "Absolutely. Dental lasers are FDA-approved and actually reduce the risk of infection by sterilizing the area as they work." }
    ]
  },
  {
    title: "Mouth Guards",
    largeIcon: IconMouthGuard,
    icon: <ShieldCheck size={28} />,
    desc: "Custom-molded protective devices for sports or to prevent teeth grinding (bruxism) while sleeping.",
    benefits: ["Protects teeth", "Reduces jaw pain", "Custom fit for comfort"],
    duration: "2 visits (Impressions & Fitting)",
    recovery: "None",
    candidates: "Athletes, teeth grinders.",
    longDesc: "A custom-fitted mouth guard provides superior protection compared to store-bought boil-and-bite guards. Whether you need a heavy-duty athletic guard to protect against impact or a slim night guard to stop bruxism (grinding) from wearing down your enamel, we custom mold it to your exact dental anatomy.",
    steps: ["Precise dental impressions taken", "Guard fabricated in the lab", "Final fitting and bite adjustment"],
    faqs: [
      { q: "How do I clean my night guard?", a: "Brush it daily with a soft toothbrush and cold water, and occasionally soak it in a specialized retainer cleaner." }
    ]
  },
  {
    title: "Oral Surgery",
    largeIcon: IconSurgery,
    icon: <Activity size={28} />,
    desc: "Complex surgical interventions including bone grafting, jaw surgery, and complex extractions.",
    benefits: ["Resolves complex issues", "Restores bone structure"],
    duration: "1 - 3 hours",
    recovery: "3 - 7 days",
    candidates: "Complex impacted teeth, bone loss.",
    longDesc: "Our clinic is equipped to handle complex oral surgeries with precision and care. From preparing the jaw for implants with bone grafting, to correcting severe structural issues, our surgical team prioritizes your comfort, utilizing advanced sedation options and meticulous techniques.",
    steps: ["Comprehensive 3D scan and planning", "Administration of anesthesia/sedation", "Surgical procedure", "Suturing and detailed aftercare planning"],
    faqs: [
      { q: "Will I be awake during the surgery?", a: "We offer various sedation options, from local anesthesia to conscious sedation, ensuring you remain comfortable and pain-free." }
    ]
  },
  {
    title: "Pediatric Dentistry",
    largeIcon: IconPediatric,
    icon: <Heart size={28} />,
    desc: "Gentle, fun, and specialized dental care focused on the unique needs of infants, children, and teens.",
    benefits: ["Prevents early decay", "Builds good habits", "Stress-free environment"],
    duration: "30 mins",
    recovery: "None",
    candidates: "Children aged 1 to 18.",
    longDesc: "We believe a child's early dental experiences shape their oral health for life. Our pediatric services focus on making visits fun, educational, and completely fear-free. From sealants that prevent cavities to tracking jaw development, we ensure your child's smile grows strong and healthy.",
    steps: ["Gentle introduction to the dental chair", "Interactive counting and cleaning of teeth", "Fluoride treatment (if applicable)", "Parent consultation on diet and brushing"],
    faqs: [
      { q: "When should I bring my child for their first visit?", a: "The ADA recommends scheduling the first visit within 6 months of their first tooth erupting, or by their first birthday." }
    ]
  },
  {
    title: "Root Canal Treatment",
    largeIcon: IconRootCanal,
    icon: <Crosshair size={28} />,
    desc: "Removal of infected pulp from inside the tooth to eliminate pain and save the natural tooth structure.",
    benefits: ["Saves natural tooth", "Eliminates severe pain", "Stops infection"],
    duration: "60 - 90 mins",
    recovery: "1 - 2 days",
    candidates: "Deep decay, severe toothache.",
    longDesc: "Despite its reputation, a modern root canal is essentially as routine and painless as a deep filling. When the inner pulp of a tooth becomes infected, we carefully remove the bacteria, sanitize the root canals, and seal the tooth to save it from extraction and provide immediate relief from pain.",
    steps: ["Deep local anesthesia", "Removal of infected nerve tissue", "Cleaning and shaping of root canals", "Sealing with biocompatible gutta-percha", "Placement of a temporary or permanent crown"],
    faqs: [
      { q: "Does a root canal hurt?", a: "No. The pain you feel is the infection. The procedure itself is highly numbed and designed to eliminate your pain." }
    ]
  },
  {
    title: "Teeth Cleaning",
    largeIcon: IconCleaning,
    icon: <Sparkles size={28} />,
    desc: "Professional scaling and polishing to remove plaque and tartar buildup above and below the gumline.",
    benefits: ["Prevents gum disease", "Freshens breath", "Removes surface stains"],
    duration: "45 mins",
    recovery: "None",
    candidates: "Everyone (Every 6 months).",
    longDesc: "Even with excellent brushing and flossing, plaque calcifies into hard tartar that can only be removed by professional tools. Our deep cleaning process (scaling and root planing) removes these bacterial deposits, polishes away surface stains, and leaves your teeth feeling incredibly smooth and your breath fresh.",
    steps: ["Ultrasonic scaling to break down tartar", "Manual scaling for precision", "Professional gritty paste polishing", "Expert flossing"],
    faqs: [
      { q: "Why do my gums bleed when I floss?", a: "Bleeding is usually a sign of gingivitis (early gum disease) caused by plaque buildup. Regular professional cleanings will resolve this." }
    ]
  },
  {
    title: "Teeth Reshaping",
    largeIcon: IconReshaping,
    icon: <Scissors size={28} />,
    desc: "Subtle contouring of the enamel to fix uneven edges and create a more harmonious smile.",
    benefits: ["Painless", "Immediate results", "Improves symmetry"],
    duration: "30 mins",
    recovery: "None",
    candidates: "Uneven, chipped, or pointy teeth.",
    longDesc: "Enamelplasty, or teeth reshaping, is a highly conservative cosmetic procedure. By delicately polishing away micro-millimeters of enamel, we can round off sharp canines, even out jagged edges, and create a perfectly symmetrical smile line—all in a single, painless visit without any anesthesia.",
    steps: ["Smile evaluation", "Marking areas for contouring", "Gentle polishing using fine diamond burs", "Smoothing and polishing"],
    faqs: [
      { q: "Will reshaping damage my enamel?", a: "No, we only remove a fraction of a millimeter of the outermost enamel layer, ensuring the tooth remains strong and healthy." }
    ]
  },
  {
    title: "Veneers",
    largeIcon: IconVeneers,
    icon: <Smile size={28} />,
    desc: "Ultra-thin porcelain shells permanently bonded to the front of teeth for a flawless Hollywood smile.",
    benefits: ["Total smile makeover", "Stain-resistant", "Durable porcelain"],
    duration: "2 - 3 visits",
    recovery: "None (Mild sensitivity)",
    candidates: "Severely stained, chipped, or uneven teeth.",
    longDesc: "Porcelain veneers are the ultimate cosmetic dental solution. These ultra-thin, custom-crafted shells are bonded to the front of your teeth, instantly correcting gaps, chips, deep discoloration, and misalignment. Veneers are highly stain-resistant and mimic the light-reflecting properties of natural teeth.",
    steps: ["Smile design consultation", "Minimal enamel preparation", "Temporary veneers placed", "Permanent porcelain veneers bonded"],
    faqs: [
      { q: "Are veneers permanent?", a: "Yes, because a tiny amount of enamel is removed, the process is irreversible. The veneers themselves last 10-15 years." }
    ]
  },
  {
    title: "Crowns",
    largeIcon: IconCrowns,
    icon: <ShieldCheck size={28} />,
    desc: "Custom-made caps that entirely cover a damaged tooth to restore its shape, size, and strength.",
    benefits: ["Protects weak teeth", "Restores functionality", "Natural appearance"],
    duration: "2 visits",
    recovery: "None",
    candidates: "Cracked teeth, post-root canal.",
    longDesc: "When a tooth is severely damaged by decay or trauma, a dental crown is used to completely encase the visible portion of the tooth above the gum line. Our premium crowns are crafted from high-grade porcelain or zirconia, providing exceptional bite strength while blending seamlessly with your surrounding teeth.",
    steps: ["Tooth preparation and shaping", "Digital impressions taken", "Temporary crown placed", "Permanent crown cemented into place"],
    faqs: [
      { q: "Why do I need a crown after a root canal?", a: "A root canal removes the blood supply to the tooth, making it brittle. A crown acts like a helmet, protecting it from fracturing." }
    ]
  },
  {
    title: "Digital X-Ray",
    largeIcon: IconXRay,
    icon: <Camera size={28} />,
    desc: "High-resolution, low-radiation digital imaging used for accurate diagnosis and treatment planning.",
    benefits: ["Up to 90% less radiation", "Instant results", "Highly detailed"],
    duration: "5 mins",
    recovery: "None",
    candidates: "Diagnostic phase for all patients.",
    longDesc: "We utilize advanced digital radiography, which exposes patients to up to 90% less radiation than traditional film X-rays. These high-definition images are instantly available on our monitors, allowing our doctors to detect hidden decay, bone loss, and infections that are invisible to the naked eye.",
    steps: ["Placement of a comfortable digital sensor", "Capture of image", "Instant review on the operatory screen"],
    faqs: [
      { q: "Are dental X-rays safe during pregnancy?", a: "While radiation levels are extremely low, we generally defer routine X-rays during pregnancy unless there is an absolute dental emergency." }
    ]
  },
  {
    title: "Smile Designing",
    largeIcon: IconSmileDesign,
    icon: <PenTool size={28} />,
    desc: "Comprehensive digital planning to redesign your smile combining multiple cosmetic treatments.",
    benefits: ["Predictable results", "Customized to facial structure"],
    duration: "Consultation + Treatment time",
    recovery: "Varies",
    candidates: "Those seeking a total smile makeover.",
    longDesc: "Smile Designing is a deeply personalized architectural approach to cosmetic dentistry. Using digital photography and sophisticated software, we analyze your facial symmetry, lip line, and tooth proportions to orchestrate a combination of treatments (veneers, whitening, gum contouring) that deliver your dream smile.",
    steps: ["Facial and dental digital photography", "Software analysis and aesthetic design", "Presentation of digital mockup", "Execution of multi-disciplinary treatments"],
    faqs: [
      { q: "Do I get a say in how my final smile looks?", a: "Absolutely. Smile Designing is highly collaborative. You approve the digital mockup before we ever touch a tooth." }
    ]
  },
  {
    title: "Tooth Jewellery",
    largeIcon: IconJewellery,
    icon: <Gem size={28} />,
    desc: "Safe, non-invasive bonding of tiny gems or crystals to the tooth surface for a unique sparkle.",
    benefits: ["Painless", "Temporary/Removable", "No drilling required"],
    duration: "15 mins",
    recovery: "None",
    candidates: "Anyone wanting a trendy smile accent.",
    longDesc: "Tooth jewellery is a trendy, painless, and completely non-invasive way to add a subtle sparkle to your smile. Using specialized dental adhesives (the same used for braces), we bond high-quality crystals or gold charms to the surface of your tooth without any drilling or damage to the enamel.",
    steps: ["Selection of the jewel", "Cleaning and drying the tooth surface", "Application of bonding agent", "Curing with a UV light"],
    faqs: [
      { q: "Can it be removed later?", a: "Yes, the process is 100% reversible. We can safely polish off the adhesive whenever you decide to remove it, leaving the enamel untouched." }
    ]
  }
];

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(prev => prev === index ? null : index);
  };

  return (
    <section className="section" id="treatments" style={{ background: 'var(--background)' }}>
      <div className="container">
        
        <Reveal className="service-header-wrapper" threshold={0.25}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto', marginBottom: '24px' }}>
            <span className="section-tag service-tag">Premium Treatments</span>
            <h2 className="section-title service-title-anim" style={{ marginTop: '16px' }}>Comprehensive Dental Services</h2>
            <p className="service-header-desc" style={{ color: 'var(--secondary)', marginTop: '16px', fontSize: '1.125rem' }}>
              From routine maintenance to advanced restorative and cosmetic procedures, we offer a full spectrum of luxury dental care under one roof.
            </p>
            
            <div className="mobile-swipe-indicator">
              <span style={{ fontSize: '14px', marginRight: '6px' }}>Swipe to see more</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>
          </div>
        </Reveal>

        <div className="services-grid">
          {servicesData.map((service, index) => {
            const formattedNumber = String(index + 1).padStart(3, '0');
            const isExpanded = expandedIndex === index;
            
            return (
              <Reveal 
                className="service-card" 
                key={index} 
                threshold={0.15}
                style={{ '--stagger-delay': `${(index % 3) * 120}ms` } as React.CSSProperties}
              >
                <div className="service-card-number">{formattedNumber}</div>
                
                <div className="service-icon-wrapper">
                  {service.icon}
                </div>
                
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
                
                <div className="service-content-wrapper" style={{ display: 'flex', position: 'relative' }}>
                  <div className="service-details" style={{ width: '60%', zIndex: 2 }}>
                  <div className="service-detail-item">
                    <span className="service-detail-label">Key Benefits</span>
                    <ul className="service-benefits">
                      {service.benefits.map((benefit, bIndex) => (
                        <li key={bIndex}>
                          <CheckCircle2 size={16} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '8px' }}>
                    <div className="service-detail-item">
                      <span className="service-detail-label">Duration</span>
                      <span className="service-detail-text">{service.duration}</span>
                    </div>
                    {service.recovery && (
                      <div className="service-detail-item">
                        <span className="service-detail-label">Recovery</span>
                        <span className="service-detail-text">{service.recovery}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="service-detail-item" style={{ marginTop: '8px' }}>
                    <span className="service-detail-label">Ideal For</span>
                    <span className="service-detail-text">{service.candidates}</span>
                  </div>
                </div>
                {service.largeIcon && (
                  <div className="service-premium-icon-container" style={{ position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)', width: '38%', opacity: 0.95, zIndex: 1, pointerEvents: 'none' }}>
                    <service.largeIcon />
                  </div>
                )}
                </div>

                {/* ACCORDION CONTENT */}
                <div className={`service-accordion-content ${isExpanded ? 'expanded' : ''}`}>
                  <div className="accordion-inner">
                    <div className="accordion-section">
                      <h4 className="accordion-heading">Treatment Overview</h4>
                      <p className="accordion-text">{service.longDesc}</p>
                    </div>

                    <div className="accordion-section">
                      <h4 className="accordion-heading">What to Expect</h4>
                      <ul className="accordion-steps">
                        {service.steps.map((step, sIndex) => (
                          <li key={sIndex}><span className="step-num">{sIndex + 1}</span> {step}</li>
                        ))}
                      </ul>
                    </div>

                    {service.faqs && service.faqs.length > 0 && (
                      <div className="accordion-section">
                        <h4 className="accordion-heading">Frequently Asked Questions</h4>
                        <div className="accordion-faqs">
                          {service.faqs.map((faq, fIndex) => (
                            <div key={fIndex} className="accordion-faq-item">
                              <span className="faq-q">{faq.q}</span>
                              <p className="faq-a">{faq.a}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="service-actions" style={{ marginTop: '24px' }}>
                  <button 
                    className="btn btn-secondary" 
                    style={{ padding: '12px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                    onClick={() => toggleAccordion(index)}
                  >
                    {isExpanded ? (
                      <>Show Less <ChevronUp size={16} /></>
                    ) : (
                      <>Learn More <ChevronDown size={16} /></>
                    )}
                  </button>
                  <button className="btn btn-primary" style={{ padding: '12px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                    <Calendar size={16} /> Book
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
