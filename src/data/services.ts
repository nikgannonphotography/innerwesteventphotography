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
      "Photography for conferences, awards nights, charity galas and corporate dinners.",
    summary:
      "From speakers and presentations to guest conversations and group photos, we cover the people and details of your event.",
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
      "Annual reports & internal updates",
      "Future event promotion & delegate marketing",
      "Sponsor reports & partner updates",
      "Corporate LinkedIn & internal communications",
    ],
    productionStages: [
      {
        stage: "1. Plan the Coverage",
        detail:
          "Share your schedule, key people and the photos you need.",
      },
      {
        stage: "2. Photograph the Event",
        detail:
          "Coverage follows the agreed schedule and photo list.",
      },
      {
        stage: "3. Select the Photos",
        detail:
          "Photos are reviewed and selected after the shoot.",
      },
      {
        stage: "4. Edit and Deliver",
        detail:
          "Edited photos are delivered in the agreed formats.",
      },
    ],
    deliverables: [
      "Online gallery to view and download your photos",
      "Photo usage agreed in your quote",
      "High-resolution print files and web-optimised formats",
    ],
    turnaroundStandard: "Delivery timing is agreed before booking.",
    turnaroundFast: "Tell us when you need the photos so we can confirm what is possible.",
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
    subtitle: "Charity Galas, Community Festivals & Forums",
    tagline:
      "Photography for charity events, fundraisers, community festivals and forums.",
    summary:
      "We photograph speakers, volunteers, supporters and guests, with experience across charity fundraisers and community events.",
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
    slug: "brand-campaigns-activations",
    number: "03",
    title: "Brand Campaigns & Activations",
    subtitle: "Product Launches, Pop-Ups & Brand Experiences",
    tagline:
      "Photography for product launches, brand events, pop-ups and campaigns.",
    summary:
      "We photograph your products, displays, guests and event. Share your brand guidelines and where you plan to use the photos.",
    commissioners: [
      "Brand marketing teams & creative agencies",
      "PR agencies & experiential production companies",
      "Consumer brands & hospitality groups",
      "Event venue marketing managers",
    ],
    subjects: [
      "Event spaces & product displays",
      "Consumer interaction & live experiences",
      "VIP guests & influencer appearances",
      "Product details & installations",
    ],
    businessUses: [
      "Social media campaigns & digital platform advertising",
      "Brand pitch decks, case studies & agency portfolios",
      "PR media distributions, lookbooks & retail displays",
      "Partner co-marketing campaigns",
    ],
    productionStages: [
      {
        stage: "1. Discuss the Brief",
        detail:
          "Review your brand guidelines, reference photos and intended uses.",
      },
      {
        stage: "2. Photograph the Event",
        detail:
          "Photograph the products, people and details on your shot list.",
      },
      {
        stage: "3. Select the Photos",
        detail:
          "Review the photos against your brief.",
      },
      {
        stage: "4. Edit and Deliver",
        detail:
          "Deliver edited photos in the agreed formats.",
      },
    ],
    deliverables: [
      "Photo usage agreed in your quote",
      "High-resolution and web-sized photos",
    ],
    turnaroundStandard: "Delivery timing is agreed before booking.",
    turnaroundFast: "Tell us when you need the photos so we can confirm what is possible.",
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
    number: "05",
    title: "Private Events, Weddings & Milestones",
    subtitle: "Intimate Weddings, Engagements, Birthdays & Celebrations",
    tagline:
      "Photography for birthdays, engagements, small weddings and family celebrations across Sydney.",
    summary:
      "Candid photos of your guests, alongside speeches, group photos and the details of your celebration.",
    commissioners: [
      "Couples planning intimate Sydney weddings & engagements",
      "Families celebrating milestone birthdays (30th, 40th, 50th, 70th, 80th)",
      "Private celebration hosts & party planners",
      "Milestone anniversary & family reunion committees",
    ],
    subjects: [
      "Candid photos of your guests",
      "Key ceremony moments, speeches & celebratory toasts",
      "Couple & family group photos",
      "Venue, table settings & event details",
      "Multi-generational family gatherings",
    ],
    businessUses: [
      "Photos to share with family and friends",
      "Photos for prints and albums",
      "Thank-you announcements & social milestone posts",
      "Permanent family photographic archives",
    ],
    productionStages: [
      {
        stage: "1. Plan the Coverage",
        detail:
          "Reviewing speech timings, key family members, and specific group portrait requests.",
      },
      {
        stage: "2. Photograph the Celebration",
        detail:
          "Candid guest photos, speeches and planned group photos.",
      },
      {
        stage: "3. Select the Photos",
        detail:
          "Review the photos from your celebration.",
      },
      {
        stage: "4. Edit and Deliver",
        detail:
          "Deliver edited photos in the agreed formats.",
      },
    ],
    deliverables: [
      "Online gallery to view and download your photos",
      "High-resolution and web-sized photos",
      "Personal printing and sharing terms agreed in your quote",
    ],
    turnaroundStandard: "Delivery timing is agreed before booking.",
    turnaroundFast: "Tell us when you need the photos so we can confirm what is possible.",
    relatedGallerySlugs: [
      "george-and-adrianas-engagement",
      "annas-birthday",
    ],
    relatedDocSlugs: [
      "turnaround-and-delivery-specs",
      "pricing-and-rates-guide",
    ],
  },
];

export function getServiceBySlug(slug: string): ServicePackage | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
