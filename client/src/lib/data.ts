// ============================================================
// FlyGreen24 – Content Data & Asset URLs
// Design: "Atmospheric Altitude" – Aerospace Editorial
// ============================================================

// Website images are hosted alongside the application to keep them stable.
export const ASSETS = {
  logo: "/assets/flygreen24-logo.webp",
  platformPreview: "/assets/platform-calculator.png",
  heroPc12: "/assets/hero-pc12.webp",
  forestAircraft: "/assets/solutions-forest-aircraft.webp",
  podcastStudio: "/assets/podcast-studio.jpg",
} as const;

// Partner logos
export const PARTNERS = [
  {
    name: "Vini",
    logo: "/assets/partner-vini.png",
    url: "https://www.flyvini.com/",
  },
  {
    name: "Jet Aviation",
    logo: "/assets/partner-jet-aviation.png",
    url: "https://www.jetaviation.com/",
  },
  {
    name: "Smartflyer",
    logo: "/assets/partner-smartflyer.png",
    url: "https://www.smartflyer.ch/",
  },
  {
    name: "Swiss Flying Club",
    logo: "/assets/partner-swiss-flying-club.png",
    url: "https://www.swissflyingclub.ch/",
  },
  {
    name: "UA Systems",
    logo: "/assets/partner-ua-systems.png",
    url: "https://www.uasystems.com/",
  },
  {
    name: "Carbonfuture",
    logo: "/assets/partner-carbonfuture.webp",
    url: "https://www.carbonfuture.earth/",
  },
  {
    name: "Energie 360",
    logo: "/assets/partner-energie-360.webp",
    url: "https://www.energie360.ch/",
  },
  {
    name: "Dimarjan",
    logo: "/assets/partner-dimarjan.png",
    url: "https://www.dimarjan.com/",
  },
  {
    name: "Venturelab",
    logo: "/assets/partner-venturelab.png",
    url: "https://www.venturelab.swiss/",
  },
  {
    name: "ZID Bernapark",
    logo: "/assets/partner-zid-bernapark.png",
    url: "https://zid-bernapark.ch/",
  },
  {
    name: "Plaincolors",
    logo: "/assets/partner-plaincolors.webp",
    url: "https://smart-up-map.ch/",
  },
] as const;

// Navigation links
export const NAV_LINKS = [
  { label: "Solutions", href: "#solutions" },
  { label: "Platform", href: "#platform" },
  { label: "B2B Services", href: "#b2b" },
  { label: "About", href: "#about" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
] as const;

// External links
export const EXTERNAL_LINKS = {
  app: "https://app.flygreen24.com",
  calendly: "https://calendly.com/flygreen24/exchange",
  compensate: "https://app.flygreen24.com/compensate-flights",
  projects: "https://app.flygreen24.com/projects",
  privacy: "https://app.flygreen24.com/privacy-policy",
  terms: "https://app.flygreen24.com/terms",
  imprint: "https://app.flygreen24.com/imprint",
  spotify: "https://open.spotify.com/show/6hP6H125iS0rqxDxWX5vZQ",
  email: "welcome@flygreen24.com",
} as const;

// Impact metrics
export const METRICS = [
  { value: 100, suffix: "%", label: "CO₂ Reduction with SAFc" },
  {
    value: 2000,
    suffix: "",
    label: "Tonnes of CO₂ Saved",
    displayValue: ">2000",
  },
  { value: 100, suffix: "%", label: "Blockchain Transparency" },
] as const;

// B2B Services
export const B2B_SERVICES = [
  {
    title: "White Label Solutions",
    description:
      "Integrate our sustainability platform under your own brand. Offer SAF access, carbon offsetting, and certificate generation to your clients.",
    features: [
      "Custom branding & UI",
      "Automated certificates",
      "Client dashboard",
    ],
    icon: "layers",
  },
  {
    title: "Sustainability as a Service",
    description:
      "Embed sustainability directly into your operations. Our modular SaaS solution provides sustainability via a single API.",
    features: [
      "API integration",
      "CO₂ calculator widget",
      "SAFc & Carbon Credits access",
    ],
    icon: "cloud",
  },
  {
    title: "Corporate Emissions Accounting",
    description:
      "Facilitating carbon accounting for flight-related emissions, fully automated and consolidated in a single dashboard.",
    features: [
      "Commercial flights calculator",
      "CSV bulk upload capabilities",
      "Dashboard and reporting",
    ],
    icon: "chart",
  },
  {
    title: "Green Fares",
    description:
      "Embed sustainability directly into your flight offering with our green fares solution.",
    features: [
      "CO₂ flight calculator",
      "Partial offsetting per PAX",
      "Aviation Carbon Portfolio",
    ],
    icon: "ticket",
  },
  {
    title: "Strategic Consulting",
    description:
      "Navigate the path to net-zero with expert guidance. We help aviation-related stakeholders develop and execute actionable sustainability strategies.",
    features: [
      "Sustainability roadmap",
      "Digital Enablement",
      "Regulatory guidance",
    ],
    icon: "compass",
  },
] as const;

// Solution pillars
export const SOLUTIONS = [
  {
    title: "Assess your Flight Emissions",
    description:
      "With our in-house developed emission calculator, we provide high-accuracy flight emissions assessments for General Aviation aircraft.",
    icon: "calculator",
    cta: "Calculate Now",
    href: EXTERNAL_LINKS.compensate,
    external: true,
  },
  {
    title: "Sustainable Aviation Fuel Certificates",
    description:
      "By leveraging the Book & Claim concept, we make Sustainable Aviation Fuel (SAF) tradable without requiring physical refueling at your airport. You purchase the SAF attribute, and we ensure it is supplied and used where it is available.",
    icon: "fuel",
    cta: "Buy SAFc Now",
    href: EXTERNAL_LINKS.compensate,
    external: true,
  },
  {
    title: "Climate Protection Initiatives",
    description:
      "We partner directly with regional climate projects that support aviation's net-zero goals. All projects are hand-selected by our team based on quality criteria tailored to the needs of the aviation industry.",
    icon: "leaf",
    cta: "Explore",
    href: EXTERNAL_LINKS.projects,
    external: true,
  },
  {
    title: "Blockchain Transparency",
    description:
      "We use blockchain technology to bring traceability and transparency to every transaction and climate contribution. Every transaction is recorded on-chain.",
    icon: "shield",
    cta: "Get Certificate",
    href: "#platform",
    external: false,
  },
] as const;

// Founders
export const FOUNDERS = [
  {
    name: "Michael Franco",
    role: "Co-Founder & CEO",
    image:
      "/assets/founder-michael-franco.png",
    description:
      "A passionate pilot and aviation professional, Michael brings deep experience in business development and innovation management across the aviation industry. His love for flying, combined with a strong commitment to sustainability, inspired him to co-found FlyGreen24.",
    linkedin: "https://www.linkedin.com/in/michael-franco-erceylan/",
  },
  {
    name: "Benja Begovic",
    role: "Co-Founder & CTO",
    image:
      "/assets/founder-benja-begovic.png",
    description:
      "With a background in IT, blockchain, and cloud solutions, Benja is the tech mind behind FlyGreen24. His drive for integrating cutting-edge technologies with sustainable impact led him to join forces with Michael to build a platform where innovation meets climate action.",
    linkedin: "https://www.linkedin.com/in/benja-begovic-4a3007176/",
  },
] as const;

// Steps
export const STEPS = [
  {
    number: "01",
    title: "Calculate Emissions",
    description:
      "Use our simple calculator to determine the carbon footprint of your flights.",
  },
  {
    number: "02",
    title: "Choose Impact",
    description:
      "Select from SAF credits, verified carbon projects, or a combination of both.",
  },
  {
    number: "03",
    title: "Receive Certificate",
    description:
      "Get a blockchain-verified certificate documenting your contribution to sustainable aviation.",
  },
] as const;
