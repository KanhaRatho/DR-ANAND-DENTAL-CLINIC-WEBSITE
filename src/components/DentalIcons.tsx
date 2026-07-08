import React from 'react';

const PremiumSvg = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <div className={`service-premium-icon ${className}`}>
    <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#FFD400" floodOpacity="0.15" />
        </filter>
      </defs>
      <g filter="url(#shadow)">
        {children}
      </g>
    </svg>
  </div>
);

// Base premium tooth shape used across many icons
const BaseTooth = ({ fill = "#ffffff", stroke = "#12040A", strokeWidth = 3 }) => (
  <path 
    d="M 50 18
       C 35 18, 22 28, 22 45
       C 22 65, 27 70, 32 82
       C 36 90, 44 85, 45 70
       C 46 60, 54 60, 55 70
       C 56 85, 64 90, 68 82
       C 73 70, 78 65, 78 45
       C 78 28, 65 18, 50 18 Z"
    stroke={stroke}
    strokeWidth={strokeWidth}
    fill={fill}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
);

export const IconWhitening = () => (
  <PremiumSvg>
    <BaseTooth />
    <path d="M 65 25 L 70 30 L 75 25 L 70 20 Z" fill="#FFD400" />
    <path d="M 75 40 L 82 45 L 75 50 L 68 45 Z" fill="#FFD400" />
    <circle cx="82" cy="28" r="2" fill="#12040A" />
    <path d="M 35 40 Q 40 45 45 40" stroke="#12040A" strokeWidth="2" strokeLinecap="round" fill="none" />
  </PremiumSvg>
);

export const IconBonding = () => (
  <PremiumSvg>
    <BaseTooth />
    <path d="M 85 15 L 75 25 L 68 25 L 75 18 Z" fill="#FFD400" stroke="#12040A" strokeWidth="2" />
    <circle cx="65" cy="28" r="3" fill="#FFD400" />
    <path d="M 68 25 L 63 30" stroke="#12040A" strokeWidth="2" strokeLinecap="round" />
  </PremiumSvg>
);

export const IconCheckups = () => (
  <PremiumSvg>
    <BaseTooth />
    <circle cx="65" cy="65" r="18" fill="#ffffff" stroke="#12040A" strokeWidth="3" />
    <path d="M 78 78 L 90 90" stroke="#12040A" strokeWidth="4" strokeLinecap="round" />
    <path d="M 58 65 L 63 70 L 72 58" stroke="#FFD400" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </PremiumSvg>
);

export const IconCosmetic = () => (
  <PremiumSvg>
    <BaseTooth />
    <path d="M 40 45 Q 50 55 60 45" stroke="#12040A" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M 80 20 L 85 30 L 95 32 L 88 40 L 90 50 L 80 45 L 70 50 L 72 40 L 65 32 L 75 30 Z" fill="#FFD400" stroke="#12040A" strokeWidth="2" strokeLinejoin="round" />
  </PremiumSvg>
);

export const IconImplants = () => (
  <PremiumSvg>
    <path 
      d="M 50 18 C 35 18, 22 28, 22 45 C 22 55, 30 60, 30 60 L 70 60 C 70 60, 78 55, 78 45 C 78 28, 65 18, 50 18 Z"
      stroke="#12040A" strokeWidth="3" fill="#ffffff" strokeLinecap="round" strokeLinejoin="round"
    />
    <path d="M 40 60 L 40 90 L 50 95 L 60 90 L 60 60" fill="#FFD400" stroke="#12040A" strokeWidth="3" strokeLinejoin="round" />
    <line x1="35" y1="70" x2="65" y2="70" stroke="#12040A" strokeWidth="3" strokeLinecap="round" />
    <line x1="35" y1="80" x2="65" y2="80" stroke="#12040A" strokeWidth="3" strokeLinecap="round" />
  </PremiumSvg>
);

export const IconDentures = () => (
  <PremiumSvg>
    <path d="M 20 40 C 20 20, 80 20, 80 40" stroke="#12040A" strokeWidth="6" strokeLinecap="round" fill="none" />
    <rect x="30" y="38" width="8" height="12" rx="4" fill="#FFD400" stroke="#12040A" strokeWidth="2" />
    <rect x="42" y="39" width="16" height="14" rx="4" fill="#ffffff" stroke="#12040A" strokeWidth="2" />
    <rect x="62" y="38" width="8" height="12" rx="4" fill="#FFD400" stroke="#12040A" strokeWidth="2" />
    
    <path d="M 25 70 C 25 90, 75 90, 75 70" stroke="#12040A" strokeWidth="6" strokeLinecap="round" fill="none" />
    <rect x="35" y="58" width="8" height="10" rx="3" fill="#ffffff" stroke="#12040A" strokeWidth="2" />
    <rect x="45" y="56" width="10" height="12" rx="3" fill="#FFD400" stroke="#12040A" strokeWidth="2" />
    <rect x="57" y="58" width="8" height="10" rx="3" fill="#ffffff" stroke="#12040A" strokeWidth="2" />
  </PremiumSvg>
);

export const IconBridges = () => (
  <PremiumSvg>
    <path d="M 30 30 C 20 30, 15 40, 15 50 C 15 65, 20 70, 25 80 C 30 70, 35 65, 35 50 C 35 40, 30 30, 30 30 Z" stroke="#12040A" strokeWidth="3" fill="#ffffff" />
    <path d="M 50 30 C 40 30, 35 40, 35 50 C 35 60, 40 65, 50 65 C 60 65, 65 60, 65 50 C 65 40, 60 30, 50 30 Z" stroke="#12040A" strokeWidth="3" fill="#FFD400" />
    <path d="M 70 30 C 65 30, 65 40, 65 50 C 65 65, 70 70, 75 80 C 80 70, 85 65, 85 50 C 85 40, 80 30, 70 30 Z" stroke="#12040A" strokeWidth="3" fill="#ffffff" />
    <line x1="25" y1="45" x2="75" y2="45" stroke="#12040A" strokeWidth="4" strokeLinecap="round" />
  </PremiumSvg>
);

export const IconEmergency = () => (
  <PremiumSvg>
    <BaseTooth />
    <rect x="60" y="10" width="30" height="30" rx="15" fill="#FFD400" stroke="#12040A" strokeWidth="3" />
    <path d="M 75 18 L 75 32 M 68 25 L 82 25" stroke="#12040A" strokeWidth="4" strokeLinecap="round" />
  </PremiumSvg>
);

export const IconExtraction = () => (
  <PremiumSvg>
    <BaseTooth />
    <path d="M 20 10 L 35 30 C 35 30, 45 40, 50 35 L 80 5" stroke="#12040A" strokeWidth="4" strokeLinecap="round" fill="none" />
    <path d="M 30 5 L 45 25 C 45 25, 55 35, 60 25 L 85 15" stroke="#FFD400" strokeWidth="4" strokeLinecap="round" fill="none" />
    <circle cx="45" cy="30" r="3" fill="#12040A" />
  </PremiumSvg>
);

export const IconFillings = () => (
  <PremiumSvg>
    <BaseTooth />
    <path d="M 40 35 C 45 30, 55 30, 60 35 C 65 40, 55 50, 50 45 C 45 50, 35 40, 40 35 Z" fill="#FFD400" stroke="#12040A" strokeWidth="2" />
  </PremiumSvg>
);

export const IconLaser = () => (
  <PremiumSvg>
    <BaseTooth />
    <path d="M 10 20 L 40 45" stroke="#FFD400" strokeWidth="4" strokeLinecap="round" />
    <path d="M 45 50 L 55 60 M 35 55 L 45 65" stroke="#12040A" strokeWidth="2" strokeLinecap="round" />
    <circle cx="10" cy="20" r="4" fill="#12040A" />
  </PremiumSvg>
);

export const IconMouthGuard = () => (
  <PremiumSvg>
    <path d="M 50 10 L 85 25 L 85 50 C 85 75, 50 95, 50 95 C 50 95, 15 75, 15 50 L 15 25 Z" fill="#ffffff" stroke="#12040A" strokeWidth="3" strokeLinejoin="round" />
    <path d="M 50 25 L 70 35 L 70 50 C 70 65, 50 80, 50 80 C 50 80, 30 65, 30 50 L 30 35 Z" fill="#FFD400" />
    <path d="M 40 45 Q 50 55 60 45" stroke="#12040A" strokeWidth="3" strokeLinecap="round" fill="none" />
  </PremiumSvg>
);

export const IconSurgery = () => (
  <PremiumSvg>
    <BaseTooth />
    <path d="M 75 15 L 85 25 L 55 55 L 45 45 Z" fill="#FFD400" stroke="#12040A" strokeWidth="2" strokeLinejoin="round" />
    <line x1="55" y1="55" x2="40" y2="70" stroke="#12040A" strokeWidth="3" strokeLinecap="round" />
  </PremiumSvg>
);

export const IconPediatric = () => (
  <PremiumSvg>
    <g transform="scale(0.8) translate(10, 20)">
      <BaseTooth />
      <path d="M 40 45 Q 50 55 60 45" stroke="#12040A" strokeWidth="3" strokeLinecap="round" fill="none" />
      <circle cx="40" cy="35" r="2" fill="#12040A" />
      <circle cx="60" cy="35" r="2" fill="#12040A" />
    </g>
    <path d="M 75 15 C 85 15, 95 25, 95 40 C 95 55, 75 60, 75 60 C 75 60, 55 55, 55 40 C 55 25, 65 15, 75 15 Z" fill="#FFD400" stroke="#12040A" strokeWidth="2" />
    <path d="M 75 60 L 70 85" stroke="#12040A" strokeWidth="2" strokeLinecap="round" fill="none" />
  </PremiumSvg>
);

export const IconRootCanal = () => (
  <PremiumSvg>
    <BaseTooth />
    <path d="M 40 40 L 32 75 M 60 40 L 68 75 M 50 45 L 50 65" stroke="#FFD400" strokeWidth="4" strokeLinecap="round" fill="none" />
    <path d="M 40 40 L 32 75 M 60 40 L 68 75" stroke="#12040A" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" fill="none" />
  </PremiumSvg>
);

export const IconCleaning = () => (
  <PremiumSvg>
    <BaseTooth />
    <rect x="70" y="20" width="15" height="40" rx="4" fill="#FFD400" stroke="#12040A" strokeWidth="2" />
    <line x1="70" y1="30" x2="60" y2="30" stroke="#12040A" strokeWidth="3" strokeLinecap="round" />
    <line x1="70" y1="40" x2="60" y2="40" stroke="#12040A" strokeWidth="3" strokeLinecap="round" />
    <line x1="70" y1="50" x2="60" y2="50" stroke="#12040A" strokeWidth="3" strokeLinecap="round" />
    <path d="M 20 40 L 30 50" stroke="#FFD400" strokeWidth="3" strokeLinecap="round" />
    <path d="M 15 55 L 25 60" stroke="#FFD400" strokeWidth="3" strokeLinecap="round" />
  </PremiumSvg>
);

export const IconReshaping = () => (
  <PremiumSvg>
    <BaseTooth />
    <line x1="15" y1="20" x2="85" y2="20" stroke="#FFD400" strokeWidth="3" strokeDasharray="6 6" strokeLinecap="round" />
    <line x1="15" y1="40" x2="85" y2="40" stroke="#FFD400" strokeWidth="3" strokeDasharray="6 6" strokeLinecap="round" />
    <path d="M 90 10 L 90 50" stroke="#12040A" strokeWidth="3" strokeLinecap="round" />
    <path d="M 85 15 L 90 10 L 95 15 M 85 45 L 90 50 L 95 45" stroke="#12040A" strokeWidth="3" strokeLinecap="round" fill="none" />
  </PremiumSvg>
);

export const IconVeneers = () => (
  <PremiumSvg>
    <BaseTooth fill="#ffffff" />
    <path 
      d="M 50 12 C 40 12, 30 22, 30 45 C 30 65, 35 70, 40 82 C 45 90, 50 85, 50 70 Z"
      fill="#FFD400" stroke="#12040A" strokeWidth="2" opacity="0.9" strokeLinejoin="round"
    />
    <path d="M 15 45 L 25 45 M 20 40 L 25 45 L 20 50" stroke="#12040A" strokeWidth="3" strokeLinecap="round" fill="none" />
  </PremiumSvg>
);

export const IconCrowns = () => (
  <PremiumSvg>
    <BaseTooth />
    <path d="M 25 35 L 20 15 L 35 25 L 50 10 L 65 25 L 80 15 L 75 35 Z" fill="#FFD400" stroke="#12040A" strokeWidth="3" strokeLinejoin="round" />
    <circle cx="50" cy="10" r="3" fill="#12040A" />
    <circle cx="20" cy="15" r="3" fill="#12040A" />
    <circle cx="80" cy="15" r="3" fill="#12040A" />
  </PremiumSvg>
);

export const IconXRay = () => (
  <PremiumSvg>
    <rect x="15" y="15" width="70" height="70" rx="8" fill="#FFD400" fillOpacity="0.2" stroke="#12040A" strokeWidth="3" strokeDasharray="8 8" />
    <BaseTooth fill="none" stroke="#12040A" strokeWidth="3" />
    <circle cx="50" cy="45" r="15" stroke="#FFD400" strokeWidth="3" fill="none" />
    <circle cx="50" cy="45" r="2" fill="#12040A" />
  </PremiumSvg>
);

export const IconSmileDesign = () => (
  <PremiumSvg>
    <BaseTooth />
    <path d="M 22 45 L 50 18 L 78 45" stroke="#FFD400" strokeWidth="2" strokeDasharray="4 4" fill="none" />
    <rect x="20" y="43" width="4" height="4" fill="#12040A" />
    <rect x="48" y="16" width="4" height="4" fill="#12040A" />
    <rect x="76" y="43" width="4" height="4" fill="#12040A" />
    <path d="M 35 55 Q 50 65 65 55" stroke="#12040A" strokeWidth="3" strokeLinecap="round" fill="none" />
  </PremiumSvg>
);

export const IconJewellery = () => (
  <PremiumSvg>
    <BaseTooth />
    <path d="M 60 30 L 70 30 L 75 35 L 65 45 L 55 35 Z" fill="#FFD400" stroke="#12040A" strokeWidth="2" strokeLinejoin="round" />
    <path d="M 60 30 L 65 35 L 70 30 M 55 35 L 75 35 M 65 35 L 65 45" stroke="#12040A" strokeWidth="1" />
    <path d="M 80 25 L 85 20 M 85 40 L 90 45" stroke="#FFD400" strokeWidth="3" strokeLinecap="round" />
  </PremiumSvg>
);
