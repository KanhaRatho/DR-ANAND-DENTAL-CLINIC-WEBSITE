const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'Services.tsx');
let code = fs.readFileSync(filePath, 'utf8');

// Add import
const importStr = `
import { 
  IconWhitening, IconBonding, IconCheckups, IconCosmetic, 
  IconImplants, IconDentures, IconBridges, IconEmergency, 
  IconExtraction, IconFillings, IconLaser, IconMouthGuard, 
  IconSurgery, IconPediatric, IconRootCanal, IconCleaning, 
  IconReshaping, IconVeneers, IconCrowns, IconXRay, 
  IconSmileDesign, IconJewellery 
} from './DentalIcons';
`;

// Insert import after existing imports
code = code.replace("import Reveal from './Reveal';", "import Reveal from './Reveal';\n" + importStr);

const iconMap = {
  "Teeth Whitening": "IconWhitening",
  "Dental Bonding": "IconBonding",
  "Routine Checkups": "IconCheckups",
  "Cosmetic Dentistry": "IconCosmetic",
  "Dental Implants": "IconImplants",
  "Dentures": "IconDentures",
  "Bridges": "IconBridges",
  "Emergency Dentistry": "IconEmergency",
  "Tooth Extraction": "IconExtraction",
  "Dental Fillings": "IconFillings",
  "Laser Dentistry": "IconLaser",
  "Mouth Guards": "IconMouthGuard",
  "Oral Surgery": "IconSurgery",
  "Pediatric Dentistry": "IconPediatric",
  "Root Canal Treatment": "IconRootCanal",
  "Teeth Cleaning": "IconCleaning",
  "Teeth Reshaping": "IconReshaping",
  "Veneers": "IconVeneers",
  "Crowns": "IconCrowns",
  "Digital X-Ray": "IconXRay",
  "Smile Designing": "IconSmileDesign",
  "Tooth Jewellery": "IconJewellery"
};

// Loop over iconMap to inject `largeIcon: IconName,` into the objects
for (const [title, icon] of Object.entries(iconMap)) {
  const regex = new RegExp(`(title:\\s*"${title}",)`, "g");
  code = code.replace(regex, `$1\n    largeIcon: ${icon},`);
}

// Layout Modification
const oldLayout = `<div className="service-details">
                  <div className="service-detail-item">
                    <span className="service-detail-label">Key Benefits</span>`;

const newLayout = `<div className="service-content-wrapper" style={{ display: 'flex', position: 'relative' }}>
                  <div className="service-details" style={{ width: '60%', zIndex: 2 }}>
                  <div className="service-detail-item">
                    <span className="service-detail-label">Key Benefits</span>`;

const oldLayoutEnd = `<div className="service-detail-item" style={{ marginTop: '8px' }}>
                    <span className="service-detail-label">Ideal For</span>
                    <span className="service-detail-text">{service.candidates}</span>
                  </div>
                </div>`;

const newLayoutEnd = `<div className="service-detail-item" style={{ marginTop: '8px' }}>
                    <span className="service-detail-label">Ideal For</span>
                    <span className="service-detail-text">{service.candidates}</span>
                  </div>
                </div>
                {service.largeIcon && (
                  <div className="service-premium-icon-container" style={{ position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)', width: '38%', opacity: 0.95, zIndex: 1, pointerEvents: 'none' }}>
                    <service.largeIcon />
                  </div>
                )}
                </div>`;

code = code.replace(oldLayout, newLayout);
code = code.replace(oldLayoutEnd, newLayoutEnd);

fs.writeFileSync(filePath, code);
console.log("Successfully updated Services.tsx");
