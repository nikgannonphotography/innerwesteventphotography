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
      "Enmore",
      "Balmain",
      "Rozelle",
      "Leichhardt",
      "Camperdown",
      "Stanmore",
      "Dulwich Hill",
      "Petersham",
      "Annandale",
      "Erskineville",
      "Glebe",
      "Summer Hill",
      "Ashfield",
      "Ashbury",
      "Haberfield",
      "Lilyfield",
      "Birchgrove"
    ],
    keyVenues: [
      "Carriageworks (Eveleigh)",
      "Marrickville Town Hall & Industrial Warehouses",
      "The Eveleigh by The Grounds",
      "Factory Theatre (Marrickville)",
      "Newtown Theatre & Historic Spaces",
      "Balmain Town Hall & Harbourside Parks",
      "Camperdown Commons",
      "Glebe Town Hall"
    ],
    description:
      "Our home base and creative stomping ground. From warehouse brand activations in Marrickville and creative studio productions to community festivals, corporate gatherings, and cultural assemblies in Newtown, we provide grounded, disciplined photographic documentation across the Inner West.",
    eventTypes: [
      "Brand launches & warehouse pop-ups",
      "Cultural street festivals & civic gatherings",
      "Creative agency mixers & studio productions",
      "Community forums & NGO assemblies",
      "Intimate weddings & milestone celebrations"
    ],
    relatedGalleries: [
      "royalle-modelling-x-leather-on-me-xteds-cameras",
      "the-clowns-court",
      "walk-of-faith",
      "oz-harvest"
    ],
    relatedGuideSlugs: [
      "sydney-venue-lighting-guide",
      "brand-activation-photography-production-guide",
      "not-for-profit-charity-event-photography-guide",
      "top-event-venues-inner-west-sydney"
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
      "Woolloomooloo",
      "Potts Point",
      "Paddington",
      "Double Bay",
      "Bondi",
      "Coogee",
      "Rose Bay",
      "Darlinghurst",
      "Redfern",
      "Haymarket",
      "Walsh Bay"
    ],
    keyVenues: [
      "ICC Sydney (International Convention Centre)",
      "Four Seasons Hotel Sydney",
      "Crown Towers & Barangaroo Event Spaces",
      "Doltone House (Jones Bay Wharf, Hyde Park & Darling Island)",
      "Sofitel Sydney Darling Harbour",
      "Hyatt Regency & Hilton Sydney",
      "Sydney Opera House (Yallamundi Rooms)",
      "Museum of Contemporary Art (MCA)",
      "Pier One Sydney Harbour",
      "The Fullerton Hotel Sydney",
      "Ivy Ballroom"
    ],
    description: "Comprehensive photographic coverage across Sydney's central commercial, legal, and financial districts. Led by Photographer & Creative Producer Nikolas Gannon, we bring executive presence and disciplined stage execution to top-tier venues.",
    eventTypes: [
      "Annual industry conferences & summits",
      "Charity galas & fundraising banquets",
      "Corporate awards nights & client receptions",
      "Executive board retreats & corporate headshots",
      "High-profile PR launches & press photocalls"
    ],
    relatedGalleries: [
      "sony-foundation-wharf4ward",
      "echo-change-future-action-summit-2026",
      "irish-festival-sydney-2026",
      "global-impact-summit",
      "australian-fashion-week-2026"
    ],
    relatedGuideSlugs: [
      "sydney-conference-photography-planning-checklist",
      "corporate-gala-dinner-photography-shot-list",
      "product-launch-photography-pr-delivery-guide",
      "icc-sydney-event-photography-guide"
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
      "St Leonards",
      "Crows Nest",
      "Mosman",
      "Neutral Bay",
      "Manly",
      "Freshwater",
      "Brookvale",
      "Kirribilli",
      "Lane Cove",
      "Dee Why",
      "Bondi Junction",
      "Vaucluse"
    ],
    keyVenues: [
      "Macquarie University Theatres & Incubator",
      "The Concourse Chatswood",
      "North Sydney Commercial Conference Centres",
      "Manly Harbourside Venues",
      "Q Station Manly",
      "Taronga Zoo Event Centre (The Gantry)",
      "Deckhouse Woolwich"
    ],
    description: "Covering academic symposiums, corporate tech campuses in Macquarie Park, and waterside milestone celebrations across Sydney's North Shore, Northern Beaches, and Eastern Suburbs.",
    eventTypes: [
      "University forums & TEDx events",
      "Technology partner symposiums",
      "Private milestone anniversaries & birthdays",
      "Healthcare & research conferences",
      "Executive team portraits & corporate headshots"
    ],
    relatedGalleries: [
      "tedx-macquarie-uni",
      "george-and-adrianas-engagement",
      "annas-birthday"
    ],
    relatedGuideSlugs: [
      "on-site-corporate-headshots-planning-guide",
      "sydney-conference-photography-planning-checklist",
      "sydney-venue-lighting-guide"
    ]
  },
  {
    slug: "western-sydney",
    name: "Greater Western Sydney & South",
    tagline: "Major stadium sports, civic summits, and commercial expos across Western Sydney and South.",
    suburbs: [
      "Parramatta",
      "Sydney Olympic Park",
      "Penrith",
      "Liverpool",
      "Bankstown",
      "Blacktown",
      "Castle Hill",
      "Norwest",
      "Ryde",
      "Mascot",
      "Alexandria",
      "Rosebery",
      "Canterbury",
      "Strathfield",
      "Homebush",
      "Campbelltown"
    ],
    keyVenues: [
      "Accor Stadium & Qudos Bank Arena (Olympic Park)",
      "CommBank Stadium (Parramatta)",
      "Parramatta Town Hall & PHIVE",
      "Western Sydney Conference Centre",
      "Novotel Sydney Olympic Park",
      "Waterview in Bicentennial Park",
      "The Grounds of Alexandria",
      "The William Inglis Hotel (Warwick Farm)"
    ],
    description: "Experienced coverage across Western Sydney's rapidly growing commercial infrastructure, sports arenas, brand warehouses, and civic leadership summits.",
    eventTypes: [
      "National sports events & grand finals",
      "Regional leadership dialogues & policy summits",
      "Community advocacy & cultural festivals",
      "Commercial expo & trade show documentation",
      "Large-format industrial activations"
    ],
    relatedGalleries: [
      "nrl-grand-final-2019",
      "latrell-mitchell-daniel-tupou-2019",
      "world-vision"
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
