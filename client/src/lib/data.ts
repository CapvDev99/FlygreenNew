// ============================================================
// FlyGreen24 – Content Data & Asset URLs
// Design: "Atmospheric Altitude" – Aerospace Editorial
// ============================================================

// CDN-hosted existing assets
export const ASSETS = {
  logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/LarBwuQdJXPCZokK.png",
  heroOriginal:
    "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/oVYmDFeTmcSCYRon.jpg",
  bild2Tank:
    "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/aZjAFrNtlGHhGcdd.jpg",
  bild3Tech:
    "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/JNYEbaIzkQuJBPOk.jpg",
  bild7:
    "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/MSJICZEMwrgixveK.png",
  bild8:
    "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/eBzrxYvpozlVgGbt.png",
  founder:
    "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/CvogAKZNfosHyigw.jpg",
  platformPreview:
    "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/pGgPvzGOQKiUmSBP.png",
  heroPc12: "/assets/hero-pc12.webp",
  forestAircraft: "/assets/solutions-forest-aircraft.webp",
  podcastStudio:
    "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/LEEXoDFxrGqTWOFG.jpg",
} as const;

// Generated images
export const GENERATED = {
  hero: "https://private-us-east-1.manuscdn.com/sessionFile/yo5U0yMK7Dtf0WA8Lr7wxO/sandbox/yk6YavKNl9JVGHuygVL9OA-img-1_1771434260000_na1fn_aGVyby1hdmlhdGlvbi1kYXJr.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUveW81VTB5TUs3RHRmMFdBOExyN3d4Ty9zYW5kYm94L3lrNllhdktObDlKVkdIdXlnVkw5T0EtaW1nLTFfMTc3MTQzNDI2MDAwMF9uYTFmbl9hR1Z5YnkxaGRtbGhkR2x2Ymkxa1lYSnIuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=DKUaH2q~3LVcky2MAKDFEASvlKXj8LvjEkvUzPFQ7yrQA9~Qlj-kn8bkS2eUJwTan1UOxQKcrCxIz2H4RKhknJ6evf3tZ4Fx~lXk3E8RD88VkE4KGAeYi5Pg3YEWC0oPyyXfHEZtZr4itscAikzBqdHRvHLIkyLQLveqiIxtIOUrfObKYPt2lRpzbWclIJEI6NKL3acn6chWYQU98Rl5U~HO~2gVDZifda1yJUdWPR88mJZ0m3EyJ~4viIm9RDQPb8iJfBrMl-nahvQFGv3Aab6n~OTvfLd7Ba8~ROGEoD6l4kGqjcVQy1~DNlel4RoWhWGYpWAA3i3~L4iRtuipCw__",
  whitelabel:
    "https://private-us-east-1.manuscdn.com/sessionFile/yo5U0yMK7Dtf0WA8Lr7wxO/sandbox/yk6YavKNl9JVGHuygVL9OA-img-2_1771434264000_na1fn_YjJiLXdoaXRlbGFiZWw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUveW81VTB5TUs3RHRmMFdBOExyN3d4Ty9zYW5kYm94L3lrNllhdktObDlKVkdIdXlnVkw5T0EtaW1nLTJfMTc3MTQzNDI2NDAwMF9uYTFmbl9ZakppTFhkb2FYUmxiR0ZpWld3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=azeldp8tmf9Ump9ePMhGnVbGO1K6~nj8QqQFYqvgDcwoRhuAWZRUfvFUKQobn1YlVw~hqP4di0YZZuigCb8F1m83lZxhTP17YEz490Z04hHDCtbSI~VZA1vbysHcT0RtEg3kaQw5xu9ElKxqzoQFh~UZhdAotE-m-RcLTjlA8SDUivME9jdWMHJiERIIdgy5gPOYKrfiY0z0fmcPLAhOBqASafU7oPSdbOrzT4j1M36dxFj1vYAt9TjA~I8MAGyiY4XeBrFSqvnik3aPsXwN6Y1SAOCBQJZuj5FN9bDNTlKM-HMIvU88hUyCw3-kSeavHDQx~0SISd9uC1N7gCVt8Q__",
  consulting:
    "https://private-us-east-1.manuscdn.com/sessionFile/yo5U0yMK7Dtf0WA8Lr7wxO/sandbox/yk6YavKNl9JVGHuygVL9OA-img-3_1771434259000_na1fn_YjJiLWNvbnN1bHRpbmc.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUveW81VTB5TUs3RHRmMFdBOExyN3d4Ty9zYW5kYm94L3lrNllhdktObDlKVkdIdXlnVkw5T0EtaW1nLTNfMTc3MTQzNDI1OTAwMF9uYTFmbl9ZakppTFdOdmJuTjFiSFJwYm1jLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=c9ZExM5MtyWitPUOeFaSk7cVrqvLg4LYXg~zBBndUXd1mrmpMNd1ByKoAAq8JvAnzDHaOOAO~zVs9ZvOPYpqE3~LUdHBtEwHNjLuyUzECDI9iKSMUe9MjrfvDLdt8~K3fY5DzZ9YJ3INWmyn6agQXZ66gmEE5TtFwNJ7MtDbBPmameoal-ATFRUSqUjcA725vMpRcwyYiWhWarhoye~TRjYXTRdIRBIIq2InEEQZPKntslqGQm6~APAMfQ6inCuZw34fL0bCzrtWx1SLGh1rPm2toOALUelNTqpRdHOfAxVp2hPo9d3hG1kj2MoV7kaUYwq~~2kcCQjV5T0vFIcidw__",
  saf: "https://private-us-east-1.manuscdn.com/sessionFile/yo5U0yMK7Dtf0WA8Lr7wxO/sandbox/yk6YavKNl9JVGHuygVL9OA-img-4_1771434261000_na1fn_c3VzdGFpbmFiaWxpdHktYWJzdHJhY3Q.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUveW81VTB5TUs3RHRmMFdBOExyN3d4Ty9zYW5kYm94L3lrNllhdktObDlKVkdIdXlnVkw5T0EtaW1nLTRfMTc3MTQzNDI2MTAwMF9uYTFmbl9jM1Z6ZEdGcGJtRmlhV3hwZEhrdFlXSnpkSEpoWTNRLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=k-lGeXXUnd03sqM1IqsXXryMOIaL0xJs2jXAFLz7HlCAACskthSqRjLKy2MCoF93wLluADPnAld4QIOsxfuHtg7dMbPY7enXt7gBa0apvV0vTu4pzkDnP783R5sP2qw9~dlLlRYDmlBVZrI6yr0G8x4awB7IhXY~DKuOc8mHDiI6UeVzMgpGs-iTTlUoy4apGKiLX8el966RfonF3Vj6Nv4~U-sWhIXXoL0PJFcKk86Ch~voYDhy1~RCy7oxtPw6ECpICIaz7QaZeP~WlGm4wh0L23aOQiatbUpuHvctaY6R0L7pGpZc8mA2eTIW2VT3wq3YRpbaEign8dkgviUIxA__",
  platform:
    "https://private-us-east-1.manuscdn.com/sessionFile/yo5U0yMK7Dtf0WA8Lr7wxO/sandbox/yk6YavKNl9JVGHuygVL9OA-img-5_1771434261000_na1fn_cGxhdGZvcm0tbW9ja3Vw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUveW81VTB5TUs3RHRmMFdBOExyN3d4Ty9zYW5kYm94L3lrNllhdktObDlKVkdIdXlnVkw5T0EtaW1nLTVfMTc3MTQzNDI2MTAwMF9uYTFmbl9jR3hoZEdadmNtMHRiVzlqYTNWdy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=F4W4wQECpJXoky6igxkXN4KtqoxX0GqBKJfIsQdU~T74ERRVeVqRbiuS4f~yqW19Skl~6UbZOF~J3KXg8sOUrIdoR93sN6O03wI9iURY4v5iwu1-dD016joKoci8ydGi7HQkYQu2irPtQy0zrT3Z33U2L2zd3nx5RZAyd8rRPgmwvtf4f3W9PYodgW0cOw7pD8bqNqpgEmesKJnk~cu64H5ZCr7bjSS0vX~vrPeXK3qfISR03kDs3p2AAOA08WKBrPGueqVFZCgy9dpORIEOwkkjgSivEiMNZpeFNu-aEfZr03K6Xqr4BMf4oavJbraMEWxCCO7YV5t96YhZ9KT2RA__",
} as const;

// Partner logos
export const PARTNERS = [
  {
    name: "Vini",
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/KaZBzVcGjDEhtVhF.png",
    url: "https://www.flyvini.com/",
  },
  {
    name: "Jet Aviation",
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/sfGwEkJfplWMQwAF.png",
    url: "https://www.jetaviation.com/",
  },
  {
    name: "Smartflyer",
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/ZBJKBMFmfSxaCFKd.png",
    url: "https://www.smartflyer.ch/",
  },
  {
    name: "Swiss Flying Club",
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/YOGIIpqooxMxmLIZ.png",
    url: "https://www.swissflyingclub.ch/",
  },
  {
    name: "UA Systems",
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/RBvTNVeWTWWbeVfA.png",
    url: "https://www.uasystems.com/",
  },
  {
    name: "Carbonfuture",
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/GmMpWLuYVCWYjUbD.jpg",
    url: "https://www.carbonfuture.earth/",
  },
  {
    name: "Energie 360",
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/IkoMtQqmXEJAZdIL.jpg",
    url: "https://www.energie360.ch/",
  },
  {
    name: "Dimarjan",
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/VFctJSepVfaBbuXg.png",
    url: "https://www.dimarjan.com/",
  },
  {
    name: "Venturelab",
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/YKpNmHuvzdOIAksy.png",
    url: "https://www.venturelab.swiss/",
  },
  {
    name: "ZID Bernapark",
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/bkFmtvaaoxKhgzic.png",
    url: "https://zid-bernapark.ch/",
  },
  {
    name: "Plaincolors",
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/dOZflalldDRdtiAy.png",
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
      "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/mRBUMGldzlTfsnUG.png",
    description:
      "A passionate pilot and aviation professional, Michael brings deep experience in business development and innovation management across the aviation industry. His love for flying, combined with a strong commitment to sustainability, inspired him to co-found FlyGreen24.",
    linkedin: "https://www.linkedin.com/in/michael-franco-erceylan/",
  },
  {
    name: "Benja Begovic",
    role: "Co-Founder & CTO",
    image:
      "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/arTZOgssevOEDtcz.png",
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
