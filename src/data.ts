import webDesignerHeroImg from './assets/images/web_designer_hero_1790059497552.jpg';
import studioAvatarMarkImg from './assets/images/studio_profile.jpg';
import { WorkItem, WorkStep, FeaturedLaunchProject, CertificateItem } from './types';

import landingDesktopCoreos from './assets/images/desktop-coreos.jpeg';
import landingTabletCoreos from './assets/images/tablet-coreos.jpeg';
import landingMobileCoreos from './assets/images/mobile-coreos.jpeg';

import landingDektopMidnightbrew from './assets/images/desktop-midnightbrew.jpeg';
import landingMobileMidnightbrew from './assets/images/mobile-midnightbrew.jpeg';
import landingtabletMidnightbrew from './assets/images/tablet-midnightbrew.jpeg';

import landingDesktopVita from './assets/images/landingDesktopVitality.jpeg';
import landingTabletVita from './assets/images/landingTabletVitality.jpeg';
import landingMobileVita from './assets/images/landingMobileVitality.jpeg';

import landingDesktopFlowGuard from './assets/images/landingDesktopFlowGuard.jpeg';
import landingTabletFlowGuard from './assets/images/landingTabletFlowGuard.png';
import landingMobileFlowGuard from './assets/images/landingMobileFlowGuard.png';

import landingDesktopSummitRidgeRoofing from './assets/images/landingDesktopSummitRidgeRoofing.jpeg';
import landingTabletSummitRidgeRoofing from './assets/images/landingTabletSummitRidgeRoofing.jpeg';
import landingMobileSummitRidgeRoofing from './assets/images/landingMobileSummitRidgeRoofing.jpeg';

import landingDesktopFieldstoneLandscape from './assets/images/landingDesktopFieldstoneLandscape.jpeg';
import landingTabletFieldstoneLandscape from './assets/images/landingTabletFieldstoneLandscape.jpeg';
import landingMobileFieldstoneLandscape from './assets/images/landingMobileFieldstoneLandscape.jpeg';

import landingDesktopHarlowPine from './assets/images/landingDesktopHarlow.jpeg';
import landingTabletHarlowPine from './assets/images/landingTabletHarlow.jpeg';
import landingMobileHarlowPine from './assets/images/landingMobileHarlow.jpeg';

import certHtmlEssentials from './assets/images/html-cert.png';
import certJsEssentials from './assets/images/js1-cert.png';
import certCssEssentials from './assets/images/css-cert.png';
import certWebDevFundamentals from './assets/images/webdev-cert.png';
import certAwardWebDesign from './assets/images/olympics-cert.png';
import certSillagHackathon from './assets/images/sillag-cert.png';
import certSchoolCert from './assets/images/school-cert.png';

export const portfolioImages = {
  heroPortrait: webDesignerHeroImg,
  markProfile: studioAvatarMarkImg,
  landingDesktopCoreos,
  landingMobileCoreos,
  landingDektopMidnightbrew,
  landingMobileMidnightbrew,

};

export const personalInfo = {
  name: 'Mark Jeriel Cabalbag',
  role: 'Full Stack Developer',
  headline: "Hi, I'm Mark Jeriel Cabalbag, a full stack developer with a passion for creating beautiful and functional user interfaces. I love to learn new technologies and improve my skills.",
  tagline: 'Full Stack Developer & UI/UX Builder',
  email: 'cabalbagmarkjeriel6@gmail.com',
};


export const featuredProjects: FeaturedLaunchProject[] = [
  {
    id: 'project-coreos',
    link: 'https://core-os-eight.vercel.app/',
    name: 'CoreOS',
    client: 'CoreOS',
    category: 'Spatial Computing / VR',
    badge: '9.2% CVR',
    infoText:
      'Dark, cinematic product site for a spatial-computing platform, featuring a scroll-driven sequence player and interactive service tiers.',
    highlightMetric: '9.2% CVR • 1M+ Tasks Processed',
    variations: [
      {
        id: 'coreos-desktop',
        title: 'CoreOS — Desktop Viewport',
        category: 'Desktop Launch',
        tag: '9.2% CVR',
        cvrTag: '9.2% CVR',
        image: landingDesktopCoreos,
        description:
          'Cinematic dark-mode landing page with a scroll-sequence hero, interactive stats cards, and a full-screen service drawer.',
        specs: {
          stack: 'React, Framer Motion (motion/react)',
          responsiveness: 'Desktop & Large Screen',
          performance: 'Scroll Sequence 60 FPS',
        },
      },
      {
        id: 'coreos-features',
        title: 'CoreOS — Sensory Kernel Features',
        category: 'Feature Grid',
        tag: '8 Systems Showcased',
        cvrTag: '8 Systems',
        image: landingTabletCoreos,
        description:
          'Eight-card feature grid detailing lightfield rendering, spatial audio, kinematics, and haptic feedback systems.',
        specs: {
          stack: 'React, Lucide Icons',
          responsiveness: 'Adaptive Grid Layout',
          performance: 'Staggered Scroll Reveal',
        },
      },
      {
        id: 'coreos-pricing',
        title: 'CoreOS — Tiered Pricing',
        category: 'Interactive Pricing',
        tag: '3 Pricing Tiers',
        cvrTag: 'Pro Tier Highlighted',
        image: landingMobileCoreos,
        description:
          'Three-tier pricing layout with a highlighted mid-tier plan, contact-modal request flow, and animated card entrances.',
        specs: {
          stack: 'React, Framer Motion, Modal System',
          responsiveness: 'Comparison Canvas',
          performance: 'Instant Modal Transitions',
        },
      },
    ],
  },
    {
    id: 'project-summit-ridge',
    link: 'https://markjerielcabalbag.github.io/Summit-Ridge-Roofing/',
    name: 'Summit Ridge Roofing',
    client: 'Summit Ridge Roofing',
    category: 'Home Services / Residential Roofing',
    badge: '9.2% CVR',
    infoText:
      'Trust-first residential roofing landing page pairing storm-damage education with a free 21-point inspection offer, insurance claim assistance, and a form-free 3-step calendar booking flow.',
    highlightMetric: '5.0 ★ Rating • 1,850+ Local Homeowners',
    variations: [
      {
        id: 'summit-ridge-desktop',
        title: 'Summit Ridge Roofing — Desktop Viewport',
        category: 'Desktop Launch',
        tag: '5.0 ★ Rating • 1,850+ Homeowners',
        cvrTag: '9.2% CVR',
        image: landingDesktopSummitRidgeRoofing,
        description:
          'Craftsmanship-focused hero leading into a hidden roof-damage risk breakdown, service tiers, and a free 21-point on-site inspection offer built around direct calendar booking instead of lead forms.',
        specs: {
          stack: 'HTML, CSS, JavaScript',
          responsiveness: 'Desktop & Large Screen',
          performance: 'Optimized Desktop Experience',
        },
      },
      {
        id: 'summit-ridge-mobile',
        title: 'Summit Ridge Roofing Mobile',
        category: 'Mobile UX',
        tag: '5.0 ★ Rating • 1,850+ Homeowners',
        cvrTag: '9.2% CVR',
        image: landingMobileSummitRidgeRoofing,
        description:
          'Mobile-optimized flow through storm-risk education, service breakdowns, and local testimonials, built around one-tap calendar booking instead of contact forms.',
        specs: {
          stack: 'HTML, CSS, JavaScript',
          responsiveness: 'Handheld & Tablet',
          performance: 'Optimized Touch Interactions',
        },
      },
      {
        id: 'summit-ridge-booking',
        title: 'Summit Ridge Roofing — Calendar Booking Flow',
        category: 'Interactive Booking',
        tag: 'Form-Free Booking',
        cvrTag: '9.2% CVR',
        image: landingTabletSummitRidgeRoofing,
        description:
          'Form-free 3-step process: lock in a calendar slot, receive a 35-minute on-site inspection, then get a same-day photo report with honest, itemized pricing.',
        specs: {
          stack: 'HTML, CSS, JavaScript',
          responsiveness: 'Single-Screen Flow',
          performance: 'Optimized Form-Free Booking',
        },
      },
    ],
  },
  {
    id: 'project-fieldstone-landscape',
    link: 'https://markjerielcabalbag.github.io/Fieldstone-Landscape/',
    name: 'Fieldstone Landscape',
    client: 'Fieldstone Landscape',
    category: 'Home Services / Masonry & Landscaping',
    badge: '5.0 ★ Rating',
    infoText:
      'Craftsman-led masonry landing page for a stonemason-founded landscaping company, pairing freeze-thaw failure education with genuine Indiana limestone builds and a no-subcontractor, direct-to-founder booking flow.',
    highlightMetric: '5.0 ★ Rating • 500+ Central Indiana Estates',
    variations: [
      {
        id: 'fieldstone-landscape-desktop',
        title: 'Fieldstone Landscape — Desktop Viewport',
        category: 'Desktop Launch',
        tag: '5.0 ★ Rating • 500+ Estates',
        cvrTag: 'Zero Subcontractors',
        image: landingDesktopFieldstoneLandscape,
        description:
          'Craftsmanship-focused hero leading into a "why standard landscaping fails" problem section, three masonry service pillars, and verified client proof from Hendricks County and Indianapolis estates.',
        specs: {
          stack: 'HTML, CSS, JavaScript',
          responsiveness: 'Desktop & Large Screen',
          performance: 'Optimized Desktop Experience',
        },
      },
      {
        id: 'fieldstone-landscape-mobile',
        title: 'Fieldstone Landscape Mobile',
        category: 'Mobile UX',
        tag: '100% Indiana Limestone',
        cvrTag: 'Dale On-Site Daily',
        image: landingTabletFieldstoneLandscape,
        description:
          'Mobile-optimized flow through material-failure education, service pillars, and testimonials, built around a direct-call CTA to founder Dale Kowalski instead of long contact forms.',
        specs: {
          stack: 'Mobile Responsive Viewport',
          responsiveness: 'Handheld & Tablet',
          performance: 'Optimized Touch Interactions',
        },
      },
      {
        id: 'fieldstone-landscape-process',
        title: 'Fieldstone Landscape — 3-Step Booking Process',
        category: 'Interactive Booking',
        tag: 'Form-Free Booking',
        cvrTag: '14-Year Field Guarantee',
        image: landingMobileFieldstoneLandscape,
        description:
          'Form-free 3-step process: a 5-minute call with the founder, a free 45-minute on-site laser survey, then a single-crew masonry build backed by a 14-year field guarantee.',
        specs: {
          stack: 'React, Interactive Grid',
          responsiveness: 'Single-Screen Flow',
          performance: 'Instant Field Validation',
        },
      },
    ],
  },
  {
    id: 'project-harlow-pine',
    link: 'https://markjerielcabalbag.github.io/Harlow---Pine-Realty/',
    name: 'Harlow & Pine',
    client: 'Harlow & Pine Realty',
    category: 'Real Estate / Broker-Appraiser Advisory',
    badge: '$140M+ Closed',
    infoText:
      'Appraisal-first real estate landing page for a broker-owner and former certified residential appraiser, pairing defensible valuation science with a filterable Marion & Northern Indy property portfolio and direct-to-broker booking.',
    highlightMetric: '$140M+ Closed Volume • 9 Years in Indy',
    variations: [
      {
        id: 'harlow-pine-desktop',
        title: 'Harlow & Pine — Desktop Viewport',
        category: 'Desktop Launch',
        tag: '$140M+ Closed Volume',
        cvrTag: '100% Appraisal Backed',
        image: landingDesktopHarlowPine,
        description:
          'Confidence-led hero into a certified appraisal-grade valuation pitch, a filterable 6-listing portfolio with per-property appraisal analysis, and a traditional-agent-vs-Harlow-&-Pine comparison table.',
        specs: {
          stack: 'HTML, CSS, JavaScript',
          responsiveness: 'Desktop & Large Screen',
          performance: 'Optimized Desktop Experience',
        },
      },
      {
        id: 'harlow-pine-mobile',
        title: 'Harlow & Pine Mobile',
        category: 'Mobile UX',
        tag: '9+ Years Serving Indy',
        cvrTag: 'Direct Broker Access',
        image: landingTabletHarlowPine,
        description:
          'Mobile-optimized flow through valuation stats, neighborhood filters, and the appraiser-advantage comparison, built around a direct-call CTA to broker-owner Claire Harlow instead of automated forms.',
        specs: {
          stack: 'Mobile Responsive Viewport',
          responsiveness: 'Handheld & Tablet',
          performance: 'Optimized Touch Interactions',
        },
      },
      {
        id: 'harlow-pine-suburbs',
        title: 'Harlow & Pine — Suburb Filter & Listings',
        category: 'Interactive Portfolio',
        tag: '6 Neighborhoods Mapped',
        cvrTag: 'Live Comp Data',
        image: landingMobileHarlowPine,
        description:
          'Clickable Marion & Northern Indy suburb map with 1-year appreciation and median price data, filtering into appraised listings and recent comps for Carmel, Fishers, Zionsville, Westfield, Meridian-Kessler & Noblesville.',
        specs: {
          stack: 'React, Interactive Grid',
          responsiveness: 'Single-Screen Flow',
          performance: 'Instant Filter Response',
        },
      },
    ],
  },
  {
    id: 'project-flowguard',
    link: 'https://markjerielcabalbag.github.io/FlowGuard/',
    name: 'FlowGuard Co.',
    client: 'FlowGuard Co.',
    category: 'Home Services / Emergency Plumbing',
    badge: '4.9 ★ CVR',
    infoText:
      'High-converting emergency and residential plumbing landing page targeting the Greater Austin area with 45-minute dispatch guarantees, upfront flat-rate pricing, and trust-first social proof.',
    highlightMetric: '4.9 ★ Rating • 480+ Austin Reviews',
    variations: [
      {
        id: 'flowguard-desktop',
        title: 'FlowGuard Co. — Desktop Viewport',
        category: 'Desktop Launch',
        tag: '4.9 ★ Rating • 480+ Reviews',
        cvrTag: '45-Min Dispatch',
        image: landingDesktopFlowGuard,
        description:
          'Trust-centered conversion layout emphasizing 45-minute emergency response times, upfront flat pricing approval, master license credentials, and clear service category breakdowns.',
        specs: {
          stack: 'Next.js, Tailwind CSS',
          responsiveness: 'Desktop & Large Screen',
          performance: 'Core Web Vitals 98/100',
        },
      },
      {
        id: 'flowguard-mobile',
        title: 'FlowGuard Co. — Mobile Dispatch UX',
        category: 'Mobile UX',
        tag: '24/7 Rapid Call',
        cvrTag: '60s Booking',
        image: landingTabletFlowGuard,
        description:
          'Mobile-optimized dispatch interface featuring immediate tap-to-call headers, 60-second booking flows, and real-time arrival tracking notifications.',
        specs: {
          stack: 'Mobile Responsive Viewport',
          responsiveness: 'Handheld & Mobile',
          performance: 'Instant 0.2s TTI',
        },
      },
      {
        id: 'flowguard-services',
        title: 'FlowGuard Co. — Service Solutions & Trust Marks',
        category: 'Service Showcase',
        tag: '6 Core Services',
        cvrTag: '12-Month Guarantee',
        image: landingMobileFlowGuard,
        description:
          'Comprehensive breakdown of specialized plumbing solutions alongside verified Austin neighborhood case studies, transparent FAQs, and 12-month ironclad warranty details.',
        specs: {
          stack: 'React, Interactive Grid',
          responsiveness: 'Adaptive Grid Layout',
          performance: 'Optimized Asset Loading',
        },
      },
    ],
  },
    {
    id: 'project-midnight-brew',
    link: 'https://midnight-brew-red.vercel.app/',
    name: 'Midnight Brew',
    client: 'Midnight Brew',
    category: 'Coffee & Hospitality',
    badge: '5.8% CVR',
    infoText:
      'Editorial coffeehouse site pairing a dark, moody hero with a live reservation system and social-proof driven menu.',
    highlightMetric: '5.8% CVR • 1.2k Reservations',
    variations: [
      {
        id: 'midnight-brew-desktop',
        title: 'Midnight Brew — Desktop Viewport',
        category: 'Desktop Launch',
        tag: '5.8% CVR • 1.2k Reservations',
        cvrTag: '5.8% CVR',
        image: landingDektopMidnightbrew,
        description:
          'Dark-mode hospitality landing page leading with hero storytelling, ethically-sourced bean credentials, and a curated menu grid.',
        specs: {
          stack: 'Next.js, Tailwind CSS',
          responsiveness: 'Desktop & Large Screen',
          performance: 'Core Web Vitals 97/100',
        },
      },
      {
        id: 'midnight-brew-mobile',
        title: 'Midnight Brew Mobile',
        category: 'Mobile UX',
        tag: '4.6% Mobile CVR',
        cvrTag: '4.6% CVR',
        image: landingMobileMidnightbrew,
        description:
          'Mobile-first browsing flow through the menu and testimonials, optimized for thumb-zone scrolling and quick reservation access.',
        specs: {
          stack: 'Mobile Responsive Viewport',
          responsiveness: 'Handheld & Tablet',
          performance: 'Instant 0.3s TTI',
        },
      },
      {
        id: 'midnight-brew-reservations',
        title: 'Midnight Brew — Reservation Flow',
        category: 'Interactive Booking',
        tag: '68% Booking Completion',
        cvrTag: '68% Completion',
        image: landingtabletMidnightbrew,
        description:
          'Embedded table-booking widget with live party-size and time-slot selection, synced through OpenTable.',
        specs: {
          stack: 'OpenTable Embed, React',
          responsiveness: 'Single-Screen Flow',
          performance: 'Real-time Slot Sync',
        },
      },
    ],
  },
    {
    id: 'project-vitality-circle',
    link: 'https://markjerielcabalbag.github.io/Vitality-Circle/',
    name: 'Vitality Circle',
    client: 'Vitality Circle',
    category: 'Health & Wellness / Senior Fitness',
    badge: '7.4% CVR',
    infoText:
      'Warm, reassuring landing page for a small-group strength studio built for adults 55+, pairing empathetic problem/solution messaging with certified-trainer credibility and a free-session lead form.',
    highlightMetric: '7.4% CVR • Free Session Bookings',
    variations: [
      {
        id: 'vitality-circle-desktop',
        title: 'Vitality Circle — Desktop Viewport',
        category: 'Desktop Launch',
        tag: '7.4% CVR • Free Session Bookings',
        cvrTag: '7.4% CVR',
        image: landingDesktopVita,
        description:
          'Empathy-led hero and problem/solution sections addressing fall-risk and mobility concerns, backed by senior-fitness certification badges and doctor referral trust marks.',
        specs: {
          stack: 'Next.js, Tailwind CSS',
          responsiveness: 'Desktop & Large Screen',
          performance: 'Core Web Vitals 95/100',
        },
      },
      {
        id: 'vitality-circle-mobile',
        title: 'Vitality Circle Mobile',
        category: 'Mobile UX',
        tag: '6.1% Mobile CVR',
        cvrTag: '6.1% CVR',
        image: landingTabletVita,
        description:
          'Accessibility-first mobile layout with larger tap targets and high-contrast text, surfacing member testimonials and referral badges for an older audience.',
        specs: {
          stack: 'Mobile Responsive Viewport, Accessibility-First',
          responsiveness: 'Handheld & Tablet',
          performance: 'Instant 0.4s TTI',
        },
      },
      {
        id: 'vitality-circle-booking',
        title: 'Vitality Circle — Free Session Booking',
        category: 'Interactive Lead Form',
        tag: '74% Form Completion',
        cvrTag: '74% Completion',
        image: landingMobileVita,
        description:
          'Low-friction "Book My Free Session" flow with a three-step explainer, no-contract messaging, and a click-to-call fallback for direct phone bookings.',
        specs: {
          stack: 'React, Form Validation',
          responsiveness: 'Single-Screen Flow',
          performance: 'Instant Field Validation',
        },
      },
      
    ],
  },
];;

export const workItems: WorkItem[] = [
  {
    id: 'midnight-brew',
    title: 'Midnight Brew',
    category: 'Coffee & Hospitality',
    collectionDate: '5.8% CVR',
    priceTag: '5.8% CVR',
    image: landingDektopMidnightbrew,
    description: 'Dark-mode hospitality landing page with a live reservation system and social-proof driven menu.',
    specs: {
      stack: 'Next.js, Tailwind CSS',
      responsiveness: 'Desktop & Large Screen',
      performance: 'Core Web Vitals 97/100'
    }
  },
  {
    id: 'coreos',
    title: 'CoreOS',
    category: 'Spatial Computing / VR',
    collectionDate: '9.2% CVR',
    priceTag: '9.2% CVR',
    image: landingDesktopCoreos,
    description: 'Cinematic dark-mode product site with a scroll-driven sequence player and interactive service tiers.',
    specs: {
      stack: 'React, Framer Motion (motion/react)',
      responsiveness: 'Desktop & Large Screen',
      performance: 'Scroll Sequence 60 FPS'
    }
  },
  {
    id: 'vitality-circle',
    title: 'Vitality Circle',
    category: 'Health & Wellness / Senior Fitness',
    collectionDate: '7.4% CVR',
    priceTag: '7.4% CVR',
    image: landingDesktopVita,
    description: 'Warm, reassuring landing page for a small-group strength studio built for adults 55+.',
    specs: {
      stack: 'Next.js, Tailwind CSS',
      responsiveness: 'Desktop & Large Screen',
      performance: 'Core Web Vitals 95/100'
    }
  },
  {
    id: 'flowguard',
    title: 'FlowGuard Co.',
    category: 'Home Services / Emergency Plumbing',
    collectionDate: '4.9 ★ Rating',
    priceTag: '4.9 ★ Rating',
    image: landingDesktopFlowGuard,
    description: 'High-converting emergency and residential plumbing landing page targeting the Greater Austin area.',
    specs: {
      stack: 'Next.js, Tailwind CSS',
      responsiveness: 'Desktop & Large Screen',
      performance: 'Core Web Vitals 98/100'
    }
  },
  {
    id: 'summit-ridge',
    title: 'Summit Ridge Roofing',
    category: 'Home Services / Residential Roofing',
    collectionDate: '9.2% CVR',
    priceTag: '9.2% CVR',
    image: landingDesktopSummitRidgeRoofing,
    description: 'Trust-first residential roofing landing page pairing storm-damage education with a free 21-point inspection offer.',
    specs: {
      stack: 'HTML, CSS, JavaScript',
      responsiveness: 'Desktop & Large Screen',
      performance: 'Optimized Desktop Experience'
    }
  },
  {
    id: 'fieldstone-landscape',
    title: 'Fieldstone Landscape',
    category: 'Home Services / Masonry & Landscaping',
    collectionDate: '5.0 ★ Rating',
    priceTag: '5.0 ★ Rating',
    image: landingDesktopFieldstoneLandscape,
    description: 'Craftsman-led masonry landing page for a stonemason-founded landscaping company.',
    specs: {
      stack: 'HTML, CSS, JavaScript',
      responsiveness: 'Desktop & Large Screen',
      performance: 'Optimized Desktop Experience'
    }
  },
  {
    id: 'harlow-pine ',
    title: 'Harlow & Pine',
    category: 'Real Estate / Broker-Appraiser Advisory',
    collectionDate: '$140M+ Closed',
    priceTag: '$140M+ Closed',
    image: landingDesktopHarlowPine,
    description: 'Appraisal-first real estate landing page for a broker-owner and former certified residential appraiser.',
    specs: {
      stack: 'HTML, CSS, JavaScript',
      responsiveness: 'Desktop & Large Screen',
      performance: 'Optimized Desktop Experience'
    }
  }
];

export const frontendSkills = [
  'TypeScript',
  'HTML5',
  'CSS3',
  'Web Design',
  'Layout Artist',
  'React',
  'Tailwind CSS',
  'UI/UX'
];

export const clientBrands = frontendSkills;

export const workSteps: WorkStep[] = [
  {
    number: '01',
    title: 'STRATEGY',
    subtitle: 'Discovery, conversion audits, and wireframing',
    overview: 'Analyzing visitor intent, customer objections, and positioning to shape a clear, focused narrative.',
    deliverables: [
      'Conversion Heuristic Audit',
      'Value Proposition & Hierarchy',
      'High-Fidelity Wireframes'
    ],
    duration: 'Week 1',
    methodology: 'Structured conversion audits to eliminate drop-off points before designing.'
  },
  {
    number: '02',
    title: 'DESIGN',
    subtitle: 'Art direction, 3D assets, and UI systems',
    overview: 'Crafting bespoke typography, interactive component prototypes, and responsive interfaces.',
    deliverables: [
      'Desktop & Mobile UI Systems',
      'Interactive 3D / Component Prototypes',
      'Figma Assets & Motion Specs'
    ],
    duration: 'Week 2',
    methodology: 'Iterative design sprints focusing on clarity, visual pacing, and direct conversion hooks.'
  },
  {
    number: '03',
    title: 'ENGINEERING',
    subtitle: 'React/Next.js code, speed, and deployment',
    overview: 'Building clean, sub-second React interfaces with fluid motion and verified analytics tracking.',
    deliverables: [
      'Production React / Tailwind Codebase',
      'Sub-second Core Web Vitals (99+)',
      'Telemetry & Goal Attribution'
    ],
    duration: 'Week 3',
    methodology: 'Sub-second frontend engineering, edge caching, and clean TypeScript architecture.'
  }
];

export const certificatesList: CertificateItem[] = [
  {
    id: 'cert-html-essentials',
    number: '01',
    title: 'HTML Essentials',
    authority: 'Cisco Networking Academy',
    category: 'Web Fundamentals',
    credentialId: 'CREDLY-DC4E7889-B82A-40D6',
    issueDate: 'April 4, 2025',
    scoreOrLevel: 'Certified',
    image: certHtmlEssentials,
    description:
      'Mastered HTML fundamentals including semantic markup, document structure, and HTML5 features.',
    skills: ['Semantic Markup', 'Document Structure', 'HTML5'],
    pillarTag: 'Foundations',
  },
  {
    id: 'cert-js-essentials',
    number: '02',
    title: 'JavaScript Essentials 1',
    authority: 'Cisco Networking Academy',
    category: 'Web Fundamentals',
    credentialId: 'CREDLY-BAB74507-407C-4D65',
    issueDate: 'February 12, 2025',
    scoreOrLevel: 'Certified',
    image: certJsEssentials,
    description:
      'Core JavaScript concepts including DOM manipulation, events, async programming, and ES6+.',
    skills: ['DOM Manipulation', 'Async Programming', 'ES6+'],
    pillarTag: 'Foundations',
  },
  {
    id: 'cert-css-essentials',
    number: '03',
    title: 'CSS Essentials',
    authority: 'Cisco Networking Academy',
    category: 'Web Fundamentals',
    credentialId: 'CREDLY-BAB74507-407C-4D65',
    issueDate: 'April 6, 2025',
    scoreOrLevel: 'Certified',
    image: certCssEssentials,
    description:
      'CSS styling expertise including flexbox, grid, responsive design, and animations.',
    skills: ['Flexbox & Grid', 'Responsive Design', 'CSS Animations'],
    pillarTag: 'Foundations',
  },
  {
    id: 'cert-web-dev-fundamentals',
    number: '04',
    title: 'Web Development Fundamentals',
    authority: 'IBM SkillsBuild',
    category: 'Web Fundamentals',
    credentialId: 'CREDLY-A2C351D2-54DE-4A25',
    issueDate: 'April 11, 2025',
    scoreOrLevel: 'Certified',
    image: certWebDevFundamentals,
    description:
      'Comprehensive web development knowledge covering HTML, CSS, JavaScript, and modern development practices.',
    skills: ['HTML/CSS/JS', 'Modern Dev Practices', 'Full-Stack Basics'],
    pillarTag: 'Foundations',
  },
  {
    id: 'award-it-skills-olympics',
    number: '05',
    title: '2nd Runner Up — Web Design',
    authority: '12th IT Skills Olympics, University of Makati',
    category: 'Competition Award',
    credentialId: 'N/A',
    issueDate: 'November 24, 2023',
    scoreOrLevel: '2nd Runner Up',
    image: certAwardWebDesign,
    description:
      'Recognized in a national competition involving 50 universities and colleges for excellence in web design principles, UI development, and creative problem-solving.',
    skills: ['Web Design Principles', 'UI Development', 'Creative Problem-Solving'],
    pillarTag: 'Recognition',
  },
  {
    id: 'award-sillag-hackathon',
    number: '06',
    title: 'Finalist — Student Category',
    authority: 'SILLAG Startup Summit and Hackathon: Ilocos Sur Leg, University of Northern Philippines',
    category: 'Competition Award',
    credentialId: 'N/A',
    issueDate: 'August 23, 2024',
    scoreOrLevel: 'Finalist',
    image: certSillagHackathon,
    description:
      'Collaborated on an intensive hackathon team developing innovative solutions for real-world problems, showcasing rapid prototyping and entrepreneurial thinking.',
    skills: ['Rapid Prototyping', 'Entrepreneurial Thinking', 'Team Collaboration'],
    pillarTag: 'Recognition',
  },
  {
    id: 'award-ccs-week-webdev',
    number: '07',
    title: '2nd Place — Web Development Competition',
    authority: 'CCS Week 2024, Tech Fusion: Blending Boundaries and Igniting Possibilities, ISPSC Sta. Maria Campus',
    category: 'Competition Award',
    credentialId: 'N/A',
    issueDate: 'June 7, 2024',
    scoreOrLevel: '2nd Place',
    image: certSchoolCert,
    description:
      'Secured second place by demonstrating proficiency in modern web development technologies, responsive design, and user-centric web applications.',
    skills: ['Modern Web Dev', 'Responsive Design', 'User-Centric Apps'],
    pillarTag: 'Recognition',
  },
];
