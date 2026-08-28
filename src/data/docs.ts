export interface DocGuide {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: "briefing" | "pricing" | "delivery" | "licensing" | "venues";
  categoryLabel: string;
  lastUpdated: string;
  readTime: string;
  summary: string;
  sections: {
    heading: string;
    content: string;
    subsections?: {
      title: string;
      body: string;
    }[];
  }[];
  keyTakeaways: string[];
  relatedService: string;
  relatedBlogSlugs: string[];
}

export const DOCS: DocGuide[] = [
  {
    slug: "event-briefing-template",
    number: "DOC-01",
    title: "The Professional Event Photography Briefing Template",
    subtitle: "A practical 4-tier briefing framework for corporate conferences, summits, and charity galas.",
    category: "briefing",
    categoryLabel: "Briefing Framework",
    lastUpdated: "August 2026",
    readTime: "6 min read",
    summary: "How to structure an event photography brief that eliminates misunderstandings, aligns expectations with sponsors and executives, and ensures your photographer captures what matters most.",
    sections: [
      {
        heading: "1. The Four-Tier Shot Priority Framework",
        content: "During a fast-moving live event, schedules shift. Having a pre-established shot hierarchy ensures your photographer never compromises primary stakeholder assets when stage timings change.",
        subsections: [
          {
            title: "Tier 1: Mandatory Keynotes, VIPs & Stage Handshakes",
            body: "Must-capture requirements including keynote speaker entrances, award recipient handshakes, dignitary arrivals, and sponsor cheque handovers. Reference photos and exact stage times are essential."
          },
          {
            title: "Tier 2: Sponsor Integration & Partner Booths",
            body: "Branded expo booths with active delegates, sponsored lanyards, stage backdrops, partner banners, and delegate gift bags required for sponsor ROI wrap-up reports."
          },
          {
            title: "Tier 3: Delegate Energy & Room Scale",
            body: "Wide architectural shots establishing room attendance, genuine attendee engagement during workshops, and dynamic crowd reactions."
          },
          {
            title: "Tier 4: Environmental Details & Atmosphere",
            body: "Table settings, floral arrangements, catering presentation, ambient venue architecture, and cocktail mingling."
          }
        ]
      },
      {
        heading: "2. Key Production Details to Include in Your Brief",
        content: "Provide the following baseline information when scoping your event coverage:",
        subsections: [
          {
            title: "Run of Show & Schedule Milestones",
            body: "Detail call times, speaker podium timings, lighting blackout periods, award sequences, and intermission durations."
          },
          {
            title: "On-Site Contact & Decision Maker",
            body: "Name, mobile number, and radio channel of the lead event producer or communications lead who can make live staging calls."
          },
          {
            title: "Turnaround Deadlines & PR Protocols",
            body: "Specify if next-morning press selects (20–40 images) or live social drops are needed, and confirm designated file transfer channels."
          }
        ]
      }
    ],
    keyTakeaways: [
      "Categorise shot lists into 4 distinct priority tiers.",
      "Provide reference headshots for all Tier 1 VIPs and board executives.",
      "Agree on expedited PR turnaround schedules before the event date.",
      "Ensure venue load-in access and audio-visual contacts are provided."
    ],
    relatedService: "corporate-events-conferences",
    relatedBlogSlugs: [
      "how-to-write-an-event-photography-brief",
      "corporate-event-photography-pricing-guide-sydney"
    ]
  },
  {
    slug: "pricing-and-rates-guide",
    number: "DOC-02",
    title: "Sydney Event Photography Pricing & Rate Structures",
    subtitle: "A comprehensive guide to commercial photography rates, inclusions, and scoping models in Sydney.",
    category: "pricing",
    categoryLabel: "Commercial Rates",
    lastUpdated: "August 2026",
    readTime: "8 min read",
    summary: "Understand commercial pricing structures across half-day, full-day, multi-day conferences, second shooters, and commercial licensing terms in the Sydney market.",
    sections: [
      {
        heading: "1. How Sydney Event Photography is Priced",
        content: "Commercial event photography is typically quoted on fixed half-day or full-day blocks rather than open-ended hourly fees, ensuring cost predictability.",
        subsections: [
          {
            title: "Half-Day Coverage (Up to 4 Hours)",
            body: "Ideal for evening awards galas, breakfast summits, product launches, or half-day seminars. Typically includes 200–350 fully colour-graded high-resolution master images."
          },
          {
            title: "Full-Day Coverage (Up to 8 Hours)",
            body: "Standard for full-day corporate conferences, multi-session symposiums, and all-day festivals. Typically includes 400–700+ master images with optional same-day PR highlight pack."
          },
          {
            title: "Multi-Day Conference Coverage",
            body: "Discounted multi-day structures with dedicated overnight turnaround workflows, daily media selects, and multi-photographer team coordination."
          }
        ]
      },
      {
        heading: "2. Second Shooters and Technical Scaling",
        content: "When an event exceeds 300 delegates or features concurrent breakout tracks, adding a second operator is critical to avoid missing simultaneous keynotes.",
        subsections: [
          {
            title: "When is a Second Shooter Necessary?",
            body: "Recommended for concurrent multi-room breakout sessions, large venues (e.g. ICC Sydney Grand Ballroom), or events requiring continuous stage coverage while roving awards tables."
          },
          {
            title: "Fast PR Turnaround Ingest",
            body: "On-site editor or Wi-Fi tethering workflow to deliver hero frames within minutes of key addresses."
          }
        ]
      }
    ],
    keyTakeaways: [
      "Half-day and full-day blocks provide transparent, fixed-scope budgeting.",
      "Commercial usage rights in perpetuity should always be included in writing.",
      "Multi-room breakouts require second shooter scoping.",
      "Confirm that the photographer can provide a current Certificate of Currency that meets the venue's requirements."
    ],
    relatedService: "corporate-events-conferences",
    relatedBlogSlugs: [
      "corporate-event-photography-pricing-guide-sydney",
      "hiring-freelance-event-photographers-sydney-checklist"
    ]
  },
  {
    slug: "turnaround-and-delivery-specs",
    number: "DOC-03",
    title: "Turnaround Times, File Formats & Delivery Specifications",
    subtitle: "Technical standards for image resolutions, colour profiles, client portals, and delivery timing.",
    category: "delivery",
    categoryLabel: "Delivery Specifications",
    lastUpdated: "August 2026",
    readTime: "5 min read",
    summary: "Detailed breakdown of our delivery timelines, high-resolution master files, web-optimised formats, and secure Australian-hosted digital galleries.",
    sections: [
      {
        heading: "1. Delivery Timelines",
        content: "We provide structured delivery tiers tailored to marketing and PR deadlines:",
        subsections: [
          {
            title: "Fast PR Selects (2–12 Hours)",
            body: "A curated batch of 20–40 hero images delivered on-site or by 9:00 AM next morning for urgent social media, press distribution, and executive LinkedIn updates."
          },
          {
            title: "Full Master Gallery (3–5 Business Days)",
            body: "The complete retouched image suite, individually balanced for colour/exposure balance, delivered via private client portal."
          }
        ]
      },
      {
        heading: "2. File Formats & Colour Standards",
        content: "Assets are delivered in dual formats to serve both large-format print publications and high-speed digital web platforms.",
        subsections: [
          {
            title: "High-Resolution Print Masters",
            body: "Full-resolution 300 DPI JPEGs in Adobe RGB colour profile, suitable for annual reports, billboards, and exhibition displays."
          },
          {
            title: "Web-Optimised Digital Assets",
            body: "Compressed 2048px (long edge) 72 DPI JPEGs in sRGB colour space, optimised for fast web loading, email newsletters, and social media."
          }
        ]
      }
    ],
    keyTakeaways: [
      "Fast PR selects delivered within 2–12 hours on request.",
      "Full master galleries delivered within 3–5 business days.",
      "Assets supplied in dual high-res (print) and web-optimised formats.",
      "Hosted on high-speed private galleries with unlimited team downloads."
    ],
    relatedService: "brand-campaigns-activations",
    relatedBlogSlugs: [
      "live-event-photo-delivery-for-press-social",
      "corporate-event-photography-pricing-guide-sydney"
    ]
  },
  {
    slug: "licensing-and-commercial-rights",
    number: "DOC-04",
    title: "Event Photography Licensing & Commercial Rights in Australia",
    subtitle: "Clear explanation of commercial usage rights, copyright law, and sponsor distribution rights.",
    category: "licensing",
    categoryLabel: "Legal & Licensing",
    lastUpdated: "August 2026",
    readTime: "7 min read",
    summary: "How Australian copyright law applies to commercial photography commissions, third-party sponsor usage rights, and non-commercial partner distribution.",
    sections: [
      {
        heading: "1. Standard Commercial Usage Licence",
        content: "Under the Australian Copyright Act 1968, the photographer owns copyright in the images unless otherwise assigned in writing. All our commercial and event commissions include a comprehensive, perpetual usage licence.",
        subsections: [
          {
            title: "What is Included in Your Licence",
            body: "Perpetual, worldwide, royalty-free usage across your organisation's website, marketing collateral, PR press kits, internal communications, annual reports, and social media channels."
          },
          {
            title: "Third-Party Sponsor & Vendor Rights",
            body: "Sponsors and commercial partners attending your event may use imagery for post-event editorial and reporting when coordinated through your communications team."
          }
        ]
      },
      {
        heading: "2. Participant Privacy & Crowded Venue Protocols",
        content: "Guidelines for documenting attendees in public and private commercial venues in NSW.",
        subsections: [
          {
            title: "Ticketing Terms & Notice of Filming",
            body: "We recommend including standard 'Notice of Photography & Filming' wording in attendee registration terms to ensure transparent consent."
          },
          {
            title: "Sensitive & Embargoed Material",
            body: "We respect non-disclosure agreements (NDAs) and embargoes on unreleased products, financial disclosures, or sensitive community members."
          }
        ]
      }
    ],
    keyTakeaways: [
      "Full commercial usage rights in perpetuity included with every commission.",
      "Zero recurring licensing renewal fees.",
      "Clear guidelines for third-party sponsor distribution.",
      "Full compliance with Australian privacy standards and NDAs."
    ],
    relatedService: "corporate-events-conferences",
    relatedBlogSlugs: [
      "how-to-write-an-event-photography-brief",
      "hiring-freelance-event-photographers-sydney-checklist"
    ]
  },
  {
    slug: "sydney-venue-lighting-guide",
    number: "DOC-05",
    title: "Sydney Event Venue Lighting & Photography Guide",
    subtitle: "Overcoming challenging ambient lighting in Sydney ballrooms, heritage halls, and convention centres.",
    category: "venues",
    categoryLabel: "Venue Production",
    lastUpdated: "August 2026",
    readTime: "6 min read",
    summary: "Technical strategies for photographing in low-light Sydney venues including ICC Sydney, Carriageworks, hotel ballrooms, and outdoor harbourside marquees.",
    sections: [
      {
        heading: "1. Common Lighting Challenges in Sydney Venues",
        content: "Every venue presents distinct challenges, from mixed LED stage lighting to cavernous dark ceilings that prevent bounce flash.",
        subsections: [
          {
            title: "High-Contrast Stage Lighting & Theatrical Spots",
            body: "Venues like ICC Sydney and university theatres use powerful spot beams with deep ambient shadows. We use high dynamic range full-frame sensors and fast prime lenses (f/1.4–f/2.8) to preserve skin tones without blowing highlights."
          },
          {
            title: "Industrial & Repurposed Heritage Venues",
            body: "Carriageworks and Marrickville warehouses feature mixed ambient light from high skylights and warm festoons. Off-camera flash grids and colour-matched gels balance skin tones naturally."
          }
        ]
      },
      {
        heading: "2. Working with Audio-Visual (AV) Teams",
        content: "Coordination between the photographer and in-house AV lighting operators makes a dramatic difference to image quality.",
        subsections: [
          {
            title: "Podium & Stage White Light Balancing",
            body: "Requesting neutral 4500K–5600K white light on speakers' faces rather than saturated coloured washes ensures clean, flattering portrait results."
          },
          {
            title: "House Light Dimming Cues",
            body: "Aligning on cue sheets so the photographer knows when auditorium lights will dim for video rolls or awards presentations."
          }
        ]
      }
    ],
    keyTakeaways: [
      "Use fast prime lenses (f/1.4–f/2.8) to shoot in low-light environments without harsh direct flash.",
      "Coordinate with AV lighting techs for neutral white light on key speakers.",
      "Silent electronic shutters eliminate camera click distraction during keynotes.",
      "Carry off-camera lighting for dark ballrooms and evening networking."
    ],
    relatedService: "corporate-events-conferences",
    relatedBlogSlugs: [
      "icc-sydney-event-photography-guide",
      "top-event-venues-inner-west-sydney"
    ]
  }
];

export function getDocBySlug(slug: string): DocGuide | undefined {
  return DOCS.find((d) => d.slug === slug);
}
