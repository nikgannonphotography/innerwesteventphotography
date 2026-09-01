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
    title: "Corporate Events, Conferences & Galas",
    subtitle: "Conferences, Summits, Awards Galas, Dinners & Brand Activations",
    tagline:
      "Photography for corporate conferences, awards nights, galas, annual dinners and brand activations across Sydney.",
    summary:
      "Comprehensive photographic coverage for keynote speakers, panel discussions, awards presentations, VIP arrivals, sponsor activations and gala celebrations.",
    commissioners: [
      "Corporate event management teams & producers",
      "Marketing and communications directors",
      "Industry associations & professional bodies",
      "Executive conference committees",
      "Brand marketing teams & creative agencies",
    ],
    subjects: [
      "Keynote addresses & panel discussions",
      "Awards stage presentations & VIP arrivals",
      "Sponsor activations & branded exhibition booths",
      "Audience engagement, delegate networking & gala dinners",
    ],
    businessUses: [
      "Annual reports, sponsor & stakeholder marketing",
      "Future event promotion & delegate marketing",
      "PR press releases, editorial distributions & trade media",
      "Corporate LinkedIn & internal communications",
    ],
    productionStages: [
      {
        stage: "1. Plan the Coverage",
        detail:
          "Share your run sheet, key speakers, VIPs and shot priorities.",
      },
      {
        stage: "2. Photograph the Event",
        detail:
          "Coverage follows the agreed schedule, stage presentations and networking.",
      },
      {
        stage: "3. Select the Photos",
        detail:
          "Photos are curated, colour graded and edited after the event.",
      },
      {
        stage: "4. Edit and Deliver",
        detail:
          "High-res print files and web-optimised formats delivered via private online gallery.",
      },
    ],
    deliverables: [
      "Online gallery to view and download your photos",
      "Full commercial & editorial licence in perpetuity",
      "High-resolution print files and web-optimised formats",
    ],
    turnaroundStandard: "Standard curated delivery within 3–5 business days.",
    turnaroundFast: "Next-day priority highlights or live same-day PR delivery available upon request.",
    relatedGallerySlugs: [
      "tedx-macquarie-uni",
      "echo-change-future-action-summit-2026",
      "sony-foundation-wharf4ward",
      "australian-fashion-week-2026",
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
    subtitle: "Charity Galas, Community Festivals & Forums",
    tagline:
      "Photography for charity events, fundraisers, community festivals, cultural events and forums.",
    summary:
      "We photograph speakers, volunteers, supporters, patrons and guests with a dedicated 10% Community Courtesy Benefit.",
    commissioners: [
      "Not-for-profit communications & program leads",
      "Advocacy & charitable foundations",
      "Cultural organisations & community festival committees",
      "Philanthropic trusts & civic institutions",
    ],
    subjects: [
      "Speeches & keynote speakers",
      "Community assemblies & cultural performances",
      "Volunteer teams & frontline participants",
      "Donor recognition & patron conversations",
    ],
    businessUses: [
      "Impact reports, grant applications & donor updates",
      "Advocacy campaigns, community newsletters & web archives",
      "Event reports & community archives",
    ],
    productionStages: [
      {
        stage: "1. Plan the Coverage",
        detail:
          "Discuss key people, permissions and any sensitive situations.",
      },
      {
        stage: "2. Photograph the Event",
        detail: "Photograph speakers, guests, volunteers and activities.",
      },
      {
        stage: "3. Select the Photos",
        detail:
          "Choose photos that cover the people and activities at your event.",
      },
      {
        stage: "4. Edit and Deliver",
        detail:
          "Deliver edited photos for the uses agreed in your quote.",
      },
    ],
    deliverables: [
      "Edited event photos",
      "Photo usage agreed in your quote",
      "High-resolution photos for print",
      "Web-sized photos for online updates",
    ],
    turnaroundStandard: "Delivery timing is agreed before booking.",
    turnaroundFast: "Tell us when you need the photos so we can confirm what is possible.",
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
    slug: "workplace-portraits-headshots",
    number: "03",
    title: "Workplace Portraits & Headshots",
    subtitle: "Staff Headshots & Team Photos",
    tagline:
      "Staff portraits, team photos and headshots at your Sydney office or event.",
    summary:
      "We photograph individuals and teams for company websites, staff profiles and LinkedIn. Tell us how many people need photos and the look you have in mind.",
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
        stage: "1. Plan the Session",
        detail:
          "Agree on the location, number of people and time needed.",
      },
      {
        stage: "2. Set Up",
        detail: "Choose the background and lighting for your portraits.",
      },
      {
        stage: "3. Photograph the Team",
        detail:
          "Photograph each person and any agreed group photos.",
      },
      {
        stage: "4. Edit and Deliver",
        detail:
          "Confirm the editing needed and deliver the agreed files.",
      },
    ],
    deliverables: [
      "High-resolution and web-crop portraits for each person",
      "Photo usage agreed in your quote",
      "Online gallery to view and download your photos",
    ],
    turnaroundStandard: "Delivery timing is agreed before booking.",
    turnaroundFast: "Tell us when you need the photos so we can confirm what is possible.",
    relatedGallerySlugs: [
      "global-impact-summit",
      "echo-change-future-action-summit-2026",
    ],
    relatedDocSlugs: ["turnaround-and-delivery-specs"],
  },
  {
    slug: "private-events-milestones-celebrations",
    number: "04",
    title: "Birthdays & Private Celebrations",
    subtitle: "Birthdays, Dinner Parties, Christenings & Family Gatherings",
    tagline:
      "Photography for birthdays, dinner celebrations, engagement parties, christenings and family gatherings across Sydney.",
    summary:
      "Candid documentary photography capturing your guests, toasts, speeches and the joyful atmosphere of your celebration.",
    commissioners: [
      "Families and friends celebrating birthdays of all ages",
      "Private celebration hosts & dinner party organizers",
      "Families planning christenings, baptisms and reunions",
    ],
    subjects: [
      "Candid guest interactions & party atmosphere",
      "Speeches, toasts & cake cutting",
      "Family group portraits & guest arrivals",
      "Venue styling, table settings & celebratory details",
    ],
    businessUses: [
      "Private online gallery to share with family and friends",
      "High-resolution files for personal prints and albums",
      "Social media sharing and thank-you announcements",
    ],
    productionStages: [
      {
        stage: "1. Plan the Party",
        detail:
          "Review speech timings, key family members and any specific group photos requested.",
      },
      {
        stage: "2. Photograph the Celebration",
        detail:
          "Candid party photos, key moments, speeches and guest groups.",
      },
      {
        stage: "3. Curate & Grade",
        detail:
          "Every image is individually color graded and edited for consistent warmth and clarity.",
      },
      {
        stage: "4. Deliver",
        detail:
          "Delivered via private online gallery with full personal sharing and download rights.",
      },
    ],
    deliverables: [
      "Private online gallery with unlimited high-res downloads",
      "Full personal printing and sharing licence",
    ],
    turnaroundStandard: "Delivery within 3–5 business days.",
    turnaroundFast: "Next-day highlights available upon request.",
    relatedGallerySlugs: [
      "annas-birthday",
    ],
    relatedDocSlugs: [
      "turnaround-and-delivery-specs",
      "pricing-and-rates-guide",
    ],
  },
  {
    slug: "weddings-elopements",
    number: "05",
    title: "Weddings & Elopements",
    subtitle: "Intimate Ceremonies, Boutique Micro-Weddings & Full-Day Celebrations",
    tagline:
      "Documentary wedding photography for civil ceremonies, boutique weddings and celebrations across Sydney.",
    summary:
      "Timeless, authentic wedding photography focusing on real emotions, ceremony vows, bridal party portraits and full evening reception.",
    commissioners: [
      "Couples planning Sydney weddings, elopements & intimate ceremonies",
      "Boutique wedding planners & bridal coordinators",
    ],
    subjects: [
      "Bridal & groom preparations",
      "Ceremony vows, ring exchange & first kiss",
      "Creative couple portraits & bridal party shoot",
      "Family group portraits & guest candids",
      "Reception entrance, speeches, cake cutting, first dance & open party",
    ],
    businessUses: [
      "Private wedding gallery for couples and guests",
      "Fine-art prints, albums & archival keepsakes",
      "Social media announcements & thank-you cards",
    ],
    productionStages: [
      {
        stage: "1. Timeline & Run Sheet Consultation",
        detail:
          "We review your schedule, lighting conditions, location options and shot wish list.",
      },
      {
        stage: "2. Document the Wedding Day",
        detail:
          "Calm, observant documentary coverage alongside directed, flattering portrait sessions.",
      },
      {
        stage: "3. Fine-Art Editing & Color Grading",
        detail:
          "Every frame is meticulously curated and color-graded with skin-tone precision.",
      },
      {
        stage: "4. Gallery Delivery",
        detail:
          "Private online wedding gallery with full high-resolution digital downloads and personal print rights.",
      },
    ],
    deliverables: [
      "Private high-resolution online gallery with unlimited guest downloads",
      "Full personal print and sharing licence in perpetuity",
      "Web-optimised digital gallery for effortless mobile viewing",
    ],
    turnaroundStandard: "Full curated wedding gallery delivered within 2–3 weeks.",
    turnaroundFast: "Next-day sneak peek hero highlights (20–30 images) delivered within 24 hours.",
    relatedGallerySlugs: [
      "george-and-adrianas-engagement",
    ],
    relatedDocSlugs: [
      "turnaround-and-delivery-specs",
      "pricing-and-rates-guide",
      "intimate-sydney-wedding-engagement-photography-guide",
    ],
  },
];

export function getServiceBySlug(slug: string): ServicePackage | undefined {
  if (slug === "brand-campaigns-activations") {
    return SERVICES.find((s) => s.slug === "corporate-events-conferences");
  }
  return SERVICES.find((s) => s.slug === slug);
}
