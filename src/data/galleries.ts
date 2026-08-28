export interface GalleryImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  orientation?: "landscape" | "portrait";
  span?: "full" | "half";
}

export interface GalleryProject {
  slug: string;
  title: string;
  category:
    | "corporate"
    | "not-for-profit"
    | "fashion-editorial"
    | "celebrations-milestone"
    | "weddings-engagements"
    | "concerts"
    | "sports";
  categoryLabel: string;
  subtitle: string;
  clientRole: string;
  year: string;
  location: string;
  summary: string;
  overview: string;
  scope: string[];
  deliverables: string[];
  featured?: boolean;
  posterImage: string;
  images: Array<string | GalleryImage>;
}

const numberedGalleryImages = (
  folder: string,
  prefix: string,
  count: number,
  pad = 2,
) =>
  Array.from({ length: count }, (_, index) => {
    const number = String(index + 1).padStart(pad, "0");
    const filename = prefix ? `${prefix}-${number}` : number;
    return `/galleries/_derived/display/${folder}/${filename}.webp`;
  });

export const GALLERIES: GalleryProject[] = [
  {
    slug: "sony-foundation-wharf4ward",
    title: "Sony Foundation Wharf4Ward",
    category: "not-for-profit",
    categoryLabel: "Not-For-Profit",
    subtitle: "Charity Gala & Fundraising Stage Coverage",
    clientRole:
      "Photographer & Client Engagement Director @ We Are World Change",
    year: "2019",
    location: "Woolloomooloo Wharf, Sydney",
    summary:
      "Comprehensive multi-venue documentation across Woolloomooloo Wharf for Sony Foundation Australia's premier youth cancer fundraiser.",
    overview:
      "Wharf4Ward is Sony Foundation's flagship fundraising event, activating multiple venues along the Woolloomooloo Finger Wharf concurrently. Coverage encompassed VIP arrivals, corporate partner tables, live auction segments, sponsor activations, and keynote stage presentations under tight live-run conditions.",
    scope: [
      "Multi-venue simultaneous event coverage",
      "VIP arrivals and sponsor partner activations",
      "Live auction and keynote documentation",
      "Fast-turnaround highlight delivery for immediate PR and social distribution",
    ],
    deliverables: [
      "High-resolution retouched master gallery",
      "Media-optimised PR press kit selection within 12 hours",
      "Social media-ready aspect ratios for partner reporting",
    ],
    featured: true,
    posterImage: "/galleries/_posters/sony-foundation-wharf4ward.webp",
    images: [
      "/galleries/_derived/display/sony-foundation-wharf4ward/sony-foundation-wharf4ward-1.webp",
      "/galleries/_derived/display/sony-foundation-wharf4ward/sony-foundation-wharf4ward-2.webp",
      "/galleries/_derived/display/sony-foundation-wharf4ward/sony-foundation-wharf4ward-3.webp",
      "/galleries/_derived/display/sony-foundation-wharf4ward/sony-foundation-wharf4ward-4.webp",
      "/galleries/_derived/display/sony-foundation-wharf4ward/sony-foundation-wharf4ward-5.webp",
      "/galleries/_derived/display/sony-foundation-wharf4ward/sony-foundation-wharf4ward-6.webp",
      "/galleries/_derived/display/sony-foundation-wharf4ward/sony-foundation-wharf4ward-7.webp",
      "/galleries/_derived/display/sony-foundation-wharf4ward/sony-foundation-wharf4ward-8.webp",
      "/galleries/_derived/display/sony-foundation-wharf4ward/sony-foundation-wharf4ward-9.webp",
    ],
  },
  {
    slug: "tedx-macquarie-uni",
    title: "TEDx Macquarie Uni",
    category: "corporate",
    categoryLabel: "Corporate",
    subtitle: "Annual Conference & Stage Keynote Documentation",
    clientRole: "Commissioned Lead Event Photographer",
    year: "2018",
    location: "Macquarie University, Sydney",
    summary:
      "Full-day TEDx conference documentation adhering to strict global brand standards and challenging stage lighting.",
    overview:
      "Official photography coverage for the annual TEDx Macquarie University conference. The coverage focused on documenting keynote addresses, speaker gestures, audience absorption, and backstage speaker preparation under high-contrast theatrical lighting.",
    scope: [
      "Speaker keynotes & panel discussions across multiple sessions",
      "Delegate networking and interactive breakout spaces",
      "Backstage speaker preparation and portraiture",
      "Sponsor activation booths and branded collateral",
    ],
    deliverables: [
      "Full conference master archive with individual speaker folders",
      "TEDx global brand compliant colour grading",
      "Expedited social media highlight package",
    ],
    featured: true,
    posterImage: "/galleries/_posters/tedx-macquarie-uni.webp",
    images: numberedGalleryImages(
      "tedx-macquarie-uni",
      "tedx-macquarie-uni",
      6,
    ),
  },
  {
    slug: "maggie-beer",
    title: "Maggie Beer",
    category: "not-for-profit",
    categoryLabel: "Not-For-Profit",
    subtitle: "Maggie Beer Foundation Keynote",
    clientRole: "Keynote Speaker Documentation",
    year: "2024",
    location: "Sydney",
    summary:
      "Keynote stage address by Maggie Beer AO highlighting the work of the Maggie Beer Foundation at the Global Impact Summit.",
    overview:
      "Stage photography documenting culinary icon and foundation leader Maggie Beer AO during her address at the Global Impact Summit.",
    scope: [
      "Main stage keynote address",
      "Audience engagement",
      "Speaker portraiture",
    ],
    deliverables: [
      "High-resolution keynote gallery",
      "PR and media release files",
    ],
    featured: true,
    posterImage: "/galleries/_posters/maggie-beer.webp",
    images: numberedGalleryImages("maggie-beer", "", 5),
  },
  {
    slug: "australian-fashion-week-2026",
    title: "Australian Fashion Week 2026",
    category: "fashion-editorial",
    categoryLabel: "Fashion & Editorial",
    subtitle: "Runway & Backstage Editorial Documentation",
    clientRole: "Accredited Editorial Photographer",
    year: "2026",
    location: "Carriageworks, Eveleigh, Sydney",
    summary:
      "Editorial and runway documentation across Australian Fashion Week, covering designer showcases, backstage preparation, and guest arrivals.",
    overview:
      "Fast-paced commercial coverage documenting the precision of runway presentations and the pace of backstage model lineup. Images served press releases, designer lookbooks, and luxury publication features.",
    scope: [
      "Runway full-length and detail photography",
      "Backstage hair, makeup and styling preparation",
      "Front-row VIP arrivals and street style documentation",
    ],
    deliverables: [
      "High-resolution editorial color-graded assets",
      "Rapid runway image drops for fashion media feeds",
      "Designer lookbook master files",
    ],
    featured: true,
    posterImage: "/galleries/_posters/australian-fashion-week-2026.webp",
    images: numberedGalleryImages(
      "australian-fashion-week-2026",
      "australian-fashion-week-2026",
      6,
    ),
  },
  {
    slug: "guy-jules-sebastian",
    title: "Guy & Jules Sebastian",
    category: "not-for-profit",
    categoryLabel: "Not-For-Profit",
    subtitle: "The Sebastian Foundation Keynote & Panel",
    clientRole: "Stage & Keynote Documentation",
    year: "2024",
    location: "Sydney",
    summary:
      "Keynote presentation and panel address by Guy and Jules Sebastian for The Sebastian Foundation at the Global Impact Summit.",
    overview:
      "Stage and keynote documentation covering Guy and Jules Sebastian's address at the Global Impact Summit. Photography focused on the stage presentation, audience reactions, and backstage moments.",
    scope: [
      "Keynote stage address",
      "Panel discussion",
      "Speaker and audience interaction",
    ],
    deliverables: [
      "High-resolution stage selects",
      "Social media highlight pack",
      "Full digital master gallery",
    ],
    featured: true,
    posterImage: "/galleries/_posters/guy-jules-sebastian.webp",
    images: numberedGalleryImages("guy-jules-sebastian", "", 9),
  },
  {
    slug: "annas-birthday",
    title: "Anna's Birthday",
    category: "celebrations-milestone",
    categoryLabel: "Celebrations & Milestone",
    subtitle: "Backyard Birthday Celebration",
    clientRole: "Private event photography",
    year: "2026",
    location: "Sydney",
    summary:
      "A relaxed Sydney birthday photographed through candid guest moments, shared food, and afternoon portraits.",
    overview:
      "A private backyard celebration photographed with a light documentary approach. Coverage focused on Anna, family and friends, the long-table lunch, and the small details that gave the afternoon its character.",
    scope: [
      "Candid guest and family coverage",
      "Birthday details, food, and table setting",
      "Natural portraits throughout the afternoon",
    ],
    deliverables: [
      "Curated high-resolution image gallery",
      "Web-ready files for easy sharing",
    ],
    featured: false,
    posterImage: "/galleries/_posters/annas-birthday.webp",
    images: [
      {
        src: "/galleries/_derived/display/annas-birthday/annas-birthday-1.webp",
        alt: "Anna smiling beside her birthday cake as family watch",
        width: 1500,
        height: 1000,
        orientation: "landscape",
        span: "full",
      },
      {
        src: "/galleries/_derived/display/annas-birthday/annas-birthday-2.webp",
        alt: "Birthday pastries arranged with mint leaves",
        width: 1200,
        height: 1800,
        orientation: "portrait",
        span: "half",
      },
      {
        src: "/galleries/_derived/display/annas-birthday/annas-birthday-4.webp",
        alt: "Guests seated at a long backyard birthday lunch",
        width: 1200,
        height: 1800,
        orientation: "portrait",
        span: "half",
      },
      {
        src: "/galleries/_derived/display/annas-birthday/annas-birthday-3.webp",
        alt: "A guest choosing a pastry during the birthday lunch",
        width: 1500,
        height: 1000,
        orientation: "landscape",
        span: "half",
      },
      {
        src: "/galleries/_derived/display/annas-birthday/annas-birthday-5.webp",
        alt: "Two guests posing together in the afternoon light",
        width: 1500,
        height: 1000,
        orientation: "landscape",
        span: "half",
      },
    ],
  },
  {
    slug: "global-impact-summit",
    title: "Global Impact Summit",
    category: "corporate",
    categoryLabel: "Corporate",
    subtitle: "Main Stage, Media Wall & Performances",
    clientRole: "Lead Summit Stage & Production Photography",
    year: "2024",
    location: "Sydney",
    summary:
      "Full summit coverage spanning main stage keynote sessions, VIP media wall arrivals, and live performances.",
    overview:
      "Comprehensive event photography for the Global Impact Summit in Sydney. Coverage included main stage panels, plenary addresses, media wall red carpet arrivals, and live performances by artists including Grent Perez and Benee.",
    scope: [
      "Main stage plenary sessions & panels",
      "Media wall arrivals & portraits",
      "Live music performances & audience atmosphere",
    ],
    deliverables: [
      "Comprehensive digital master library",
      "Same-day social highlight pack",
      "Media release selects",
    ],
    featured: true,
    posterImage: "/galleries/_posters/global-impact-summit.webp",
    images: numberedGalleryImages("global-impact-summit", "", 16),
  },
  {
    slug: "oz-harvest",
    title: "OzHarvest",
    category: "not-for-profit",
    categoryLabel: "Not-For-Profit",
    subtitle: "Social Impact Activation Stand",
    clientRole: "Partner Space & Interaction Documentation",
    year: "2024",
    location: "Sydney",
    summary:
      "Documentation of OzHarvest's activation stand and delegate engagement at the Global Impact Summit.",
    overview:
      "On-site documentation of the OzHarvest partner stand in the main summit area, capturing team interactions, branded materials, and attendee engagement.",
    scope: [
      "Partner stand and activation coverage",
      "Team and delegate engagement",
      "Brand signage details",
    ],
    deliverables: [
      "High-resolution digital gallery",
      "Partner recap assets",
    ],
    featured: false,
    posterImage: "/galleries/_posters/oz-harvest.webp",
    images: numberedGalleryImages("oz-harvest", "", 7),
  },
  {
    slug: "echo-change-future-action-summit-2026",
    title: "Echo Change Future Action Summit",
    category: "corporate",
    categoryLabel: "Corporate",
    subtitle: "Civic Leadership & Policy Forum",
    clientRole: "Lead Photographer & Media Producer",
    year: "2026",
    location: "Sydney CBD",
    summary:
      "High-level visual documentation of policy leaders, international keynote speakers, and collaborative roundtable sessions.",
    overview:
      "The Echo Change Future Action Summit convened leaders across climate policy, ethical technology, and community development. Visual documentation required quiet execution during sensitive policy roundtables and executive portraits for post-event publications.",
    scope: [
      "Opening plannaries and keynote addresses",
      "Chatham House rule breakout sessions",
      "Executive headshots & speaker portraits on-site",
      "Evening delegate reception and networking dinner",
    ],
    deliverables: [
      "Curated digital press room assets within 4 hours",
      "Complete white-label policy summit archive",
      "High-resolution print assets for annual impact publication",
    ],
    featured: true,
    posterImage:
      "/galleries/_posters/echo-change-future-action-summit-2026.webp",
    images: numberedGalleryImages(
      "echo-change-future-action-summit-2026",
      "echo-change-future-action-summit-2026",
      6,
    ),
  },
  {
    slug: "royalle-modelling-x-leather-on-me-xteds-cameras",
    title: "Royalle Modeling x Leather On Me",
    category: "fashion-editorial",
    categoryLabel: "Fashion & Editorial",
    subtitle: "Commercial Studio Campaign & Brand Collaboration",
    clientRole: "Lead Photographer & Lighting Director",
    year: "2022",
    location: "Sydney Studio & Location",
    summary:
      "High-contrast fashion campaign produced in collaboration with Royalle Modelling and Ted's Cameras.",
    overview:
      "Commercial lookbook production highlighting bespoke leather apparel. Utilised precision studio lighting and location setups to emphasize texture, cut, and material quality.",
    scope: [
      "Multi-look studio lighting configurations",
      "Model direction and apparel styling capture",
      "Product macro detail photography",
    ],
    deliverables: [
      "Commercial advertising print masters",
      "Web campaign and social media format cuts",
      "Brand partner co-marketing asset pack",
    ],
    featured: false,
    posterImage:
      "/galleries/_posters/royalle-modelling-x-leather-on-me-xteds-cameras.webp",
    images: [
      "/galleries/_derived/display/royalle-modelling-x-leather-on-me-xteds-cameras/AFW-Royalle-Nikolas-Gannon-1.webp",
      "/galleries/_derived/display/royalle-modelling-x-leather-on-me-xteds-cameras/Nikolas-Gannon_AFW-Royalle-Teds_00001.webp",
      "/galleries/_derived/display/royalle-modelling-x-leather-on-me-xteds-cameras/Nikolas-Gannon_AFW-Royalle-Teds_00002.webp",
      "/galleries/_derived/display/royalle-modelling-x-leather-on-me-xteds-cameras/Nikolas-Gannon_AFW-Royalle-Teds_00004.webp",
      "/galleries/_derived/display/royalle-modelling-x-leather-on-me-xteds-cameras/Nikolas-Gannon_AFW-Royalle-Teds_00005.webp",
    ],
  },
  {
    slug: "world-vision",
    title: "World Vision",
    category: "not-for-profit",
    categoryLabel: "Not-For-Profit",
    subtitle: "Global Humanitarian Partner Stand",
    clientRole: "Partner Space Documentation",
    year: "2024",
    location: "Sydney",
    summary:
      "Documentation of World Vision's partner presence and delegate discussions at the Global Impact Summit.",
    overview:
      "Coverage of the World Vision partner space in the main summit hall, documenting team discussions and organizational presence.",
    scope: [
      "Partner stand documentation",
      "Attendee interactions",
      "Branded visual assets",
    ],
    deliverables: [
      "High-resolution image archive",
      "Marketing and reporting selects",
    ],
    featured: false,
    posterImage: "/galleries/_posters/world-vision.webp",
    images: numberedGalleryImages("world-vision", "", 4),
  },
  {
    slug: "order-of-australia-the-school-of-st-jude",
    title: "Order of Australia & The School of St Jude",
    category: "not-for-profit",
    categoryLabel: "Not-For-Profit",
    subtitle: "Civic Reception & Philanthropic Address",
    clientRole: "Director of Production @ We Are World Change",
    year: "2019",
    location: "Sydney",
    summary:
      "Civic reception documentation honouring Gemma Sisia AO and philanthropic benefactors supporting education in Tanzania.",
    overview:
      "Commissioned to provide dignified, formal event photography for a private civic reception. Responsibilities included formal dignitary group portraits, keynote speech coverage, and documenting donor interactions.",
    scope: [
      "Formal dignitary group portraiture",
      "Keynote address by Gemma Sisia AO",
      "Philanthropic patron conversations and book signing",
      "Venue and award presentation coverage",
    ],
    deliverables: [
      "Archival print-ready master gallery",
      "Direct media distribution selects for foundation newsletters",
      "Private VIP download portal",
    ],
    featured: true,
    posterImage:
      "/galleries/_posters/order-of-australia-the-school-of-st-jude.webp",
    images: numberedGalleryImages(
      "order-of-australia-the-school-of-st-jude",
      "order-of-australia-the-school-of-st-jude",
      4,
    ),
  },
  {
    slug: "george-and-adrianas-engagement",
    title: "George & Adriana's Engagement",
    category: "weddings-engagements",
    categoryLabel: "Wedding & Engagement",
    subtitle: "Private Milestone & Proposal Celebration",
    clientRole: "Lead Documentary Photographer",
    year: "2026",
    location: "Sydney Harbour Foreshore",
    summary:
      "Intimate harbourside milestone documentation combining candid documentary portraits with Sydney architectural backdrops.",
    overview:
      "A bespoke private celebration on Sydney Harbour. The brief called for natural milestone coverage documenting guest interactions without intrusive direction.",
    scope: [
      "Harbourside couple portraiture at golden hour",
      "Family and guest cocktail celebration",
      "Ambient venue details and speeches",
    ],
    deliverables: [
      "Curated digital gallery",
      "Fine-art retouched portrait selects",
      "High-resolution print files",
    ],
    featured: false,
    posterImage: "/galleries/_posters/george-and-adrianas-engagement.webp",
    images: numberedGalleryImages(
      "george-and-adrianas-engagement",
      "george-and-adrianas-engagement",
      6,
    ),
  },
  {
    slug: "kokoda-track-foundation",
    title: "Kokoda Track Foundation",
    category: "not-for-profit",
    categoryLabel: "Not-For-Profit",
    subtitle: "Community Leadership Partner Stand",
    clientRole: "Partner Stand Documentation",
    year: "2024",
    location: "Sydney",
    summary:
      "Documentation of the Kokoda Track Foundation stand and team engagement at the Global Impact Summit.",
    overview:
      "On-site documentation of the Kokoda Track Foundation activation area, capturing team members and delegate conversations.",
    scope: [
      "Partner stand coverage",
      "Team portraits and interactions",
    ],
    deliverables: [
      "High-resolution digital gallery",
      "Web-ready assets",
    ],
    featured: false,
    posterImage: "/galleries/_posters/kokoda-track-foundation.webp",
    images: numberedGalleryImages("kokoda-track-foundation", "", 3),
  },
  {
    slug: "sony-foundation-tones-and-i-at-wharf4ward",
    title: "Tones and I at Wharf4Ward",
    category: "concerts",
    categoryLabel: "Concerts",
    subtitle: "Live Headline Concert Documentation",
    clientRole: "Lead Stage Photographer @ We Are World Change",
    year: "2019",
    location: "Woolloomooloo, Sydney",
    summary:
      "Live stage documentation of ARIA award-winning artist Tones and I performing at the Sony Foundation Wharf4Ward charity benefit.",
    overview:
      "Dynamic live performance coverage on the open-air wharf stage. Required fast shutter responsiveness across rapid lighting changes and high-energy crowd reactions while maintaining clean framing around sponsor signage.",
    scope: [
      "Headline musical artist stage performance",
      "Crowd engagement and VIP attendee reactions",
      "Stage lighting and audio-visual integration",
    ],
    deliverables: [
      "High-impact concert performance suite",
      "Immediate social media drops for artist and foundation management",
      "Long-term promotional rights",
    ],
    featured: false,
    posterImage:
      "/galleries/_posters/sony-foundation-tones-and-i-at-wharf4ward.webp",
    images: [
      "/galleries/_derived/display/sony-foundation-tones-and-i-at-wharf4ward/sony-foundation-tones-and-i-at-wharf4ward-1.webp",
      "/galleries/_derived/display/sony-foundation-tones-and-i-at-wharf4ward/sony-foundation-tones-and-i-at-wharf4ward-2.webp",
      "/galleries/_derived/display/sony-foundation-tones-and-i-at-wharf4ward/sony-foundation-tones-and-i-at-wharf4ward-3.webp",
      "/galleries/_derived/display/sony-foundation-tones-and-i-at-wharf4ward/sony-foundation-tones-and-i-at-wharf4ward-4.webp",
      "/galleries/_derived/display/sony-foundation-tones-and-i-at-wharf4ward/sony-foundation-tones-and-i-at-wharf4ward-5.webp",
      "/galleries/_derived/display/sony-foundation-tones-and-i-at-wharf4ward/sony-foundation-tones-and-i-at-wharf4ward-6.webp",
    ],
  },
  {
    slug: "irish-festival-sydney-2026",
    title: "St Patrick's Day Festival Sydney",
    category: "not-for-profit",
    categoryLabel: "Not-For-Profit",
    subtitle: "Cultural Festival & Civic Street Parade",
    clientRole: "Commissioned Festival Documentarian",
    year: "2026",
    location: "The Rocks & Sydney CBD",
    summary:
      "Vibrant cultural festival and street parade documentation throughout the historic precinct of The Rocks.",
    overview:
      "The annual Sydney St Patrick's Day Festival brings thousands of community members to The Rocks. The brief required documenting street movement, family attendees, civic dignitaries, and food and beverage partner stalls.",
    scope: [
      "Parade marching units, pipe bands & dancers",
      "Live music stage performances in First Fleet Park",
      "Family precinct and cultural workshops",
      "Sponsor activations and hospitality zones",
    ],
    deliverables: [
      "Multi-category festival master gallery",
      "Sponsor reporting highlight reel",
      "Social media distribution assets",
    ],
    featured: false,
    posterImage: "/galleries/_posters/irish-festival-sydney-2026.webp",
    images: numberedGalleryImages(
      "irish-festival-sydney-2026",
      "sydney-st-patricks-day-festival-2026",
      9,
    ),
  },
  {
    slug: "laundry-lane",
    title: "Laundry Lane",
    category: "corporate",
    categoryLabel: "Corporate",
    subtitle: "Creative Agency Partner Stand",
    clientRole: "Partner Space Documentation",
    year: "2024",
    location: "Sydney",
    summary:
      "Documentation of Laundry Lane Productions' brand stand and video presentation at the Global Impact Summit.",
    overview:
      "Coverage of Laundry Lane's creative exhibition booth, capturing team interactions and video showcase displays.",
    scope: [
      "Booth and stand documentation",
      "Team engagement and displays",
    ],
    deliverables: [
      "High-resolution commercial library",
      "Social and marketing selects",
    ],
    featured: false,
    posterImage: "/galleries/_posters/laundry-lane.webp",
    images: numberedGalleryImages("laundry-lane", "", 3),
  },
  {
    slug: "nrl-grand-final-2019",
    title: "NRL Grand Final 2019",
    category: "sports",
    categoryLabel: "Sports",
    subtitle: "National Sporting Grand Final & Crowd Energy",
    clientRole: "Accredited Sports Media Photographer",
    year: "2019",
    location: "ANZ Stadium, Sydney Olympic Park",
    summary:
      "High-speed sports documentation recording decisive game plays, player reactions, and trophy presentations at the 2019 NRL Grand Final.",
    overview:
      "Fast-action sports coverage demanding telephoto precision, anticipation of plays, and documentation of 80,000+ passionate supporters.",
    scope: [
      "On-field match action and tackle sequences",
      "Sideline team bench and coaching box reactions",
      "Post-match trophy presentation and victory lap",
    ],
    deliverables: [
      "Media wire optimized sports action selection",
      "Full stadium match master gallery",
    ],
    featured: false,
    posterImage: "/galleries/_posters/nrl-grand-final-2019.webp",
    images: numberedGalleryImages("nrl-grand-final-2019", "", 8),
  },
  {
    slug: "latrell-mitchell-daniel-tupou-2019",
    title: "Latrell Mitchell & Daniel Tupou",
    category: "sports",
    categoryLabel: "Sports",
    subtitle: "Sideline Elite Sports Portraiture",
    clientRole: "Commercial Sports Photographer",
    year: "2019",
    location: "Sydney Olympic Park",
    summary:
      "Disciplined sideline portraiture documenting athlete focus, physical exertion, and post-match reactions.",
    overview:
      "Close-up sports portraiture documenting elite athletes in the heat of competition. High-speed prime lenses isolated subject expressions against stadium crowds.",
    scope: [
      "On-field sideline sports portraiture",
      "Post-match athlete interactions & recovery",
      "High-contrast black and white editorial grading",
    ],
    deliverables: [
      "Commercial sports editorial asset pack",
      "Monochrome high-resolution collector prints",
    ],
    featured: false,
    posterImage: "/galleries/_posters/latrell-mitchell-daniel-tupou-2019.webp",
    images: numberedGalleryImages("latrell-mitchell-daniel-tupou-2019", "", 3),
  },
];

export function getFeaturedGalleries(): GalleryProject[] {
  return GALLERIES.filter((g) => g.featured);
}

export function getGalleryBySlug(slug: string): GalleryProject | undefined {
  return GALLERIES.find((g) => g.slug === slug);
}
