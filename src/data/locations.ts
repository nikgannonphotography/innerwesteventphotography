export interface LocationHub {
  slug: string;
  name: string;
  tagline: string;
  suburbs: string[];
  keyVenues: string[];
  description: string;
  eventTypes: string[];
  relatedGalleries: string[];
  relatedGuideSlugs: string[];
}

export const LOCATIONS: LocationHub[] = [
  {
    slug: "inner-west",
    name: "Inner West Sydney",
    tagline: "Documentary event, cultural, and community photography throughout Sydney's creative Inner West.",
    suburbs: [
      "Marrickville",
      "Newtown",
      "Balmain",
      "Leichhardt",
      "Enmore",
      "Camperdown",
      "Annandale",
      "Rozelle",
      "Dulwich Hill",
      "Stanmore"
    ],
    keyVenues: [
      "Carriageworks (Eveleigh)",
      "Marrickville Town Hall & Industrial Warehouses",
      "Newtown Theatre & Historic Spaces",
      "Balmain Town Hall & Harbourside Parks",
      "Botany View Hotel & Local Music Venues"
    ],
    description:
      "Our home base and creative stomping ground. From warehouse brand activations in Marrickville and creative studio productions to community festivals and cultural assemblies in Newtown, we provide grounded, disciplined photographic documentation across the Inner West.",
    eventTypes: [
      "Brand launches & warehouse pop-ups",
      "Cultural street festivals & civic gatherings",
      "Creative agency mixers & studio productions",
      "Intimate weddings & milestone celebrations",
    ],
    relatedGalleries: [
      "royalle-modelling-x-leather-on-me-xteds-cameras",
      "the-clowns-court",
      "walk-of-faith",
    ],
    relatedGuideSlugs: [
      "sydney-venue-lighting-guide",
      "brand-activation-photography-production-guide",
      "not-for-profit-charity-event-photography-guide"
    ]
  },
  {
    slug: "sydney-cbd",
    name: "Sydney CBD & Surrounds",
    tagline: "High-level corporate conferences, galas, and executive summits in central Sydney and Darling Harbour.",
    suburbs: [
      "Sydney CBD",
      "Barangaroo",
      "Darling Harbour",
      "Circular Quay",
      "The Rocks",
      "Pyrmont",
      "Surry Hills",
      "Woolloomooloo"
    ],
    keyVenues: [
      "ICC Sydney (International Convention Centre)",
      "Four Seasons Hotel Sydney",
      "Crown Towers & Barangaroo Event Spaces",
      "Doltone House (Jones Bay Wharf & Hyde Park)",
      "Sofitel Sydney Darling Harbour",
      "Hyatt Regency & Hilton Sydney"
    ],
    description: "Comprehensive photographic coverage across Sydney's central commercial, legal, and financial districts. Led by Photographer & Creative Producer Nikolas Gannon, we bring executive presence and disciplined stage execution to top-tier venues.",
    eventTypes: [
      "Annual industry conferences & summits",
      "Charity galas & fundraising banquets",
      "Corporate awards nights & client receptions",
      "Executive board retreats & corporate headshots"
    ],
    relatedGalleries: [
      "sony-foundation-wharf4ward",
      "echo-change-future-action-summit-2026",
      "irish-festival-sydney-2026"
    ],
    relatedGuideSlugs: [
      "sydney-conference-photography-planning-checklist",
      "corporate-gala-dinner-photography-shot-list",
      "product-launch-photography-pr-delivery-guide"
    ]
  },
  {
    slug: "north-shore",
    name: "North Shore & Eastern Suburbs",
    tagline: "Corporate forums, university summits, and milestone celebrations across the North Shore and East.",
    suburbs: [
      "North Sydney",
      "Chatswood",
      "Macquarie Park",
      "Manly",
      "Mosman",
      "Bondi",
      "Double Bay",
      "Randwick"
    ],
    keyVenues: [
      "Macquarie University Theatres",
      "The Concourse Chatswood",
      "North Sydney Commercial Conference Centres",
      "Manly Harbourside Venues"
    ],
    description: "Covering academic symposiums, corporate tech campuses in Macquarie Park, and waterside milestone celebrations across Sydney's North Shore and Eastern Suburbs.",
    eventTypes: [
      "University forums & TEDx events",
      "Technology partner symposiums",
      "Private milestone anniversaries",
      "Healthcare & research conferences"
    ],
    relatedGalleries: [
      "tedx-macquarie-uni",
      "george-and-adrianas-engagement"
    ],
    relatedGuideSlugs: [
      "on-site-corporate-headshots-planning-guide",
      "sydney-conference-photography-planning-checklist",
      "sydney-venue-lighting-guide"
    ]
  },
  {
    slug: "western-sydney",
    name: "Greater Western Sydney",
    tagline: "Major stadium sports, civic summits, and community advocacy events across Western Sydney.",
    suburbs: [
      "Parramatta",
      "Sydney Olympic Park",
      "Penrith",
      "Liverpool",
      "Bankstown",
      "Blacktown"
    ],
    keyVenues: [
      "Accor Stadium & Qudos Bank Arena (Olympic Park)",
      "CommBank Stadium (Parramatta)",
      "Parramatta Town Hall & PHIVE",
      "Western Sydney Conference Centre"
    ],
    description: "Experienced coverage across Western Sydney's rapidly growing infrastructure, sports arenas, and civic leadership summits.",
    eventTypes: [
      "National sports events & grand finals",
      "Regional leadership dialogues & policy summits",
      "Community advocacy forums",
      "Commercial expo documentation"
    ],
    relatedGalleries: [
      "nrl-grand-final-2019",
      "latrell-mitchell-daniel-tupou-2019"
    ],
    relatedGuideSlugs: [
      "sydney-conference-photography-planning-checklist",
      "not-for-profit-charity-event-photography-guide",
      "pricing-and-rates-guide"
    ]
  }
];

export function getLocationBySlug(slug: string): LocationHub | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}
