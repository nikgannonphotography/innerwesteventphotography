export interface ServicePackage {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  summary: string;
  commissioners: string[];
  subjects: string[];
  businessUses: string[];
  productionStages: {
    stage: string;
    detail: string;
  }[];
  deliverables: string[];
  turnaroundStandard: string;
  turnaroundFast: string;
  relatedGallerySlugs: string[];
  relatedDocSlugs: string[];
}

export const SERVICES: ServicePackage[] = [
  {
    slug: "corporate-events-conferences",
    number: "01",
    title: "Corporate Events & Conferences",
    subtitle: "Conferences, Summits, Galas & Award Evenings",
    tagline:
      "Comprehensive documentary coverage for industry summits, annual conferences, awards galas, and corporate dinners.",
    summary:
      "We document large-scale corporate events with quiet execution, technical reliability, and clear stage visibility. One production lead manages scoping through delivery, with additional photographers available for multi-room coverage.",
    commissioners: [
      "Corporate event management teams & producers",
      "Marketing and communications directors",
      "Industry associations & professional bodies",
      "Executive conference committees",
    ],
    subjects: [
      "Keynote addresses & panel discussions",
      "Sponsor activations & branded exhibition booths",
      "Audience engagement & atmosphere",
      "VIP arrivals & award presentations",
    ],
    businessUses: [
      "Annual reports & executive stakeholder reviews",
      "Future event promotion & delegate marketing",
      "Sponsor wrap-up decks & partner ROI reporting",
      "Corporate LinkedIn & internal communications",
    ],
    productionStages: [
      {
        stage: "1. Briefing & Run-of-Show Alignment",
        detail:
          "Aligning on keynote timings, sponsor obligations, and priority shot hierarchies.",
      },
      {
        stage: "2. On-Site Production",
        detail:
          "Dual-card cameras, backup bodies, and silent shutters for quiet stage coverage.",
      },
      {
        stage: "3. Rapid Press Selects",
        detail:
          "Curated hero images (20–40 frames) delivered within 2–12 hours for immediate PR.",
      },
      {
        stage: "4. Master Retouching & Archival Delivery",
        detail:
          "Individually colour-graded master gallery delivered in print & web formats.",
      },
    ],
    deliverables: [
      "Private Australian-hosted digital gallery with unlimited high-res downloads",
      "Full commercial usage licence for all internal/marketing and PR channels",
      "High-resolution print files and web-optimised formats",
      "Fast morning-after PR highlight pack (on request)",
    ],
    turnaroundStandard: "3–5 business days for full master gallery",
    turnaroundFast: "2–12 hours for PR/social highlight selects",
    relatedGallerySlugs: [
      "tedx-macquarie-uni",
      "echo-change-future-action-summit-2026",
      "sony-foundation-wharf4ward",
    ],
    relatedDocSlugs: [
      "event-briefing-template",
      "pricing-and-rates-guide",
      "sydney-venue-lighting-guide",
    ],
  },
  {
    slug: "not-for-profit-community",
    number: "02",
    title: "Not-For-Profit & Community Forums",
    subtitle: "Philanthropic Galas, Community Festivals & Forums",
    tagline:
      "Respectful, disciplined photographic documentation for advocacy organisations, civic forums, and community festivals.",
    summary:
      "Drawing on extensive background in not-for-profit operations and community organisations, we provide culturally sensitive and disciplined photography for civic gatherings, forums, and charity fundraisers.",
    commissioners: [
      "Not-for-profit communications & program leads",
      "Advocacy & charitable foundations",
      "Cultural organisations & community festival committees",
      "Philanthropic trusts & civic institutions",
    ],
    subjects: [
      "Philanthropic addresses & keynote speakers",
      "Community assemblies & cultural performances",
      "Volunteer teams & frontline participants",
      "Donor recognition & patron conversations",
    ],
    businessUses: [
      "Impact reports, grant applications & donor updates",
      "Advocacy campaigns, community newsletters & web archives",
      "Philanthropic wrap-up reporting & public community archives",
    ],
    productionStages: [
      {
        stage: "1. Stakeholder & Sensitivity Alignment",
        detail:
          "Identifying VIPs, community sensitivities, and consent protocols.",
      },
      {
        stage: "2. Participatory Documentation",
        detail: "Quiet, non-intrusive coverage respecting cultural dynamics.",
      },
      {
        stage: "3. Fast Stakeholder Selections",
        detail:
          "Immediate highlight selects for donor wrap emails and social channels.",
      },
      {
        stage: "4. Comprehensive Impact Archive",
        detail:
          "Master digital assets catalogued for long-term grant applications.",
      },
    ],
    deliverables: [
      "Comprehensive digital image library organised by session/topic",
      "Full non-profit and public communications usage licence",
      "Print-ready assets for brochures, donor reports, and exhibition displays",
      "Social media formats for immediate community updates",
    ],
    turnaroundStandard: "3–5 business days for full impact library",
    turnaroundFast: "Same-day or next-morning selects on request",
    relatedGallerySlugs: [
      "sony-foundation-wharf4ward",
      "order-of-australia-the-school-of-st-jude",
      "irish-festival-sydney-2026",
    ],
    relatedDocSlugs: [
      "licensing-and-commercial-rights",
      "event-briefing-template",
    ],
  },
  {
    slug: "brand-campaigns-activations",
    number: "03",
    title: "Brand Campaigns & Activations",
    subtitle: "Product Launches, Pop-Ups & Brand Experiences",
    tagline:
      "Clean, brand-aligned visual documentation of product launches, commercial activations, experiential marketing, and pop-up events.",
    summary:
      "We produce clean, publication-ready imagery for commercial brand launches, pop-up activations, and ongoing marketing campaigns. Every shoot is built around specific creative requirements, sponsor brand guidelines, and quick turnaround for marketing teams.",
    commissioners: [
      "Brand marketing teams & creative agencies",
      "PR agencies & experiential production companies",
      "Direct-to-consumer consumer brands & hospitality groups",
      "Event venue marketing managers",
    ],
    subjects: [
      "Branded spatial architecture & product displays",
      "Consumer interaction & live experiences",
      "VIP guests & influencer appearances",
      "Macro product details & bespoke installations",
    ],
    businessUses: [
      "Social media campaigns & digital platform advertising",
      "Brand pitch decks, case studies & agency portfolios",
      "PR media distributions, lookbooks & retail displays",
      "Partner co-marketing campaigns",
    ],
    productionStages: [
      {
        stage: "1. Creative Brief & Moodboard Review",
        detail:
          "Reviewing brand guidelines, visual palette, and required hero formats.",
      },
      {
        stage: "2. Commercial Execution",
        detail:
          "Precision lighting and disciplined compositional framing on-site.",
      },
      {
        stage: "3. Same-Day Social Drops",
        detail:
          "On-site Wi-Fi tethering to deliver selects to social managers.",
      },
      {
        stage: "4. Commercial Grade Handover",
        detail:
          "High-resolution retouched assets ready for digital and print deployment.",
      },
    ],
    deliverables: [
      "Full commercial advertising and multi-channel marketing licence",
      "Rapid turnaround digital selects within 12–24 hours",
      "High-resolution master files and web-ready formats",
      "Vertical and horizontal crops formatted for digital campaigns",
    ],
    turnaroundStandard: "3–4 business days for master catalogue",
    turnaroundFast: "2–6 hours for live social media distribution",
    relatedGallerySlugs: [
      "australian-fashion-week-2026",
      "royalle-modelling-x-leather-on-me-xteds-cameras",
      "sony-foundation-tones-and-i-at-wharf4ward",
    ],
    relatedDocSlugs: [
      "turnaround-and-delivery-specs",
      "licensing-and-commercial-rights",
    ],
  },
  {
    slug: "workplace-portraits-headshots",
    number: "04",
    title: "Workplace Portraits & Headshots",
    subtitle: "On-Site Executive & Team Image Libraries",
    tagline:
      "Professional environmental portraits, team photography, and executive headshots on-location at your Sydney office or event.",
    summary:
      "We create natural corporate portraits and team imagery that convey confidence and approachability. Whether setting up a pop-up headshot studio at your annual conference or shooting executive portraits in your Sydney workplace, we work quickly with minimal interruption to business operations.",
    commissioners: [
      "People and Culture / HR leads",
      "Corporate communications and marketing teams",
      "Professional services firms (legal, finance, consultancy)",
      "Founders and executive leadership boards",
    ],
    subjects: [
      "Individual executive portraits & headshots",
      "Collaborative team working sessions & boardroom discussions",
      "Architectural workplace environments & office culture",
      "Speaker headshots during conference registration",
    ],
    businessUses: [
      "Company websites, About Us pages & team directories",
      "Executive LinkedIn profiles & thought leadership articles",
      "Recruitment campaigns, employer branding & graduate recruitment",
      "Annual reports and corporate governance filings",
    ],
    productionStages: [
      {
        stage: "1. Schedule & Setup Coordination",
        detail:
          "Establishing time slots per person to eliminate team downtime.",
      },
      {
        stage: "2. Mobile Studio or Environmental Staging",
        detail: "Setting up studio backdrops or soft natural office staging.",
      },
      {
        stage: "3. On-Screen Selection",
        detail:
          "Live tethered viewing so staff select their preferred shot immediately.",
      },
      {
        stage: "4. Natural Retouching & Delivery",
        detail:
          "Individual skin retouching preserving professional authenticity.",
      },
    ],
    deliverables: [
      "High-resolution and web-crop portraits for each person",
      "Transparent or natural office backgrounds as specified",
      "Full digital and print corporate usage rights",
      "Centralised corporate portal for HR/admin teams",
    ],
    turnaroundStandard: "3–5 business days for retouched portrait library",
    turnaroundFast: "24–48 hours for urgent executive onboarding",
    relatedGallerySlugs: [
      "global-impact-summit",
      "echo-change-future-action-summit-2026",
    ],
    relatedDocSlugs: ["turnaround-and-delivery-specs"],
  },
];

export function getServiceBySlug(slug: string): ServicePackage | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
