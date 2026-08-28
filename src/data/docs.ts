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
  searchIntent: "planning" | "cost" | "delivery" | "rights" | "venue";
  seoTitle: string;
  metaDescription: string;
  publishedDate: string;
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
  relatedLocations: string[];
  relatedGalleries: string[];
  relatedGuides: string[];
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
    searchIntent: "planning",
    seoTitle: "Event Photography Briefing Template for Sydney Events",
    metaDescription: "Use this event photography briefing template to organise priorities, run-sheet timings, stakeholders and delivery requirements for a Sydney event.",
    publishedDate: "2026-08-28",
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
    ],
    relatedLocations: ["sydney-cbd", "inner-west"],
    relatedGalleries: ["global-impact-summit", "sony-foundation-wharf4ward"],
    relatedGuides: ["pricing-and-rates-guide", "turnaround-and-delivery-specs"]
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
    searchIntent: "cost",
    seoTitle: "Sydney Event Photography Pricing and Rate Guide",
    metaDescription: "Understand how Sydney event photography is scoped across half-day, full-day and multi-day coverage, including additional photographers and delivery needs.",
    publishedDate: "2026-08-28",
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
    ],
    relatedLocations: ["sydney-cbd", "inner-west", "north-shore", "western-sydney"],
    relatedGalleries: ["global-impact-summit", "tedx-macquarie-uni"],
    relatedGuides: ["event-briefing-template", "turnaround-and-delivery-specs"]
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
    searchIntent: "delivery",
    seoTitle: "Event Photography Turnaround and Delivery Specifications",
    metaDescription: "Plan event photography delivery for press, social, web and print, including priority selections, file formats, colour spaces and gallery handover.",
    publishedDate: "2026-08-28",
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
    ],
    relatedLocations: ["sydney-cbd"],
    relatedGalleries: ["echo-change-future-action-summit-2026", "australian-fashion-week-2026"],
    relatedGuides: ["event-briefing-template", "product-launch-photography-pr-delivery-guide"]
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
    searchIntent: "rights",
    seoTitle: "Event Photography Licensing and Commercial Rights Australia",
    metaDescription: "A practical overview of event photography copyright, client usage, sponsor distribution, privacy planning and written licensing terms in Australia.",
    publishedDate: "2026-08-28",
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
    ],
    relatedLocations: [],
    relatedGalleries: ["world-vision", "order-of-australia-the-school-of-st-jude"],
    relatedGuides: ["event-briefing-template", "turnaround-and-delivery-specs"]
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
    searchIntent: "venue",
    seoTitle: "Sydney Event Venue Lighting and Photography Guide",
    metaDescription: "Plan photography around stage lighting, mixed colour, dark ballrooms and AV cues at Sydney event venues including ICC Sydney and Carriageworks.",
    publishedDate: "2026-08-28",
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
    ],
    relatedLocations: ["sydney-cbd", "inner-west"],
    relatedGalleries: ["australian-fashion-week-2026", "global-impact-summit"],
    relatedGuides: ["sydney-conference-photography-planning-checklist", "event-briefing-template"]
  },
  {
    slug: "sydney-conference-photography-planning-checklist",
    number: "DOC-06",
    title: "Sydney Conference Photography Planning Checklist",
    subtitle: "A practical checklist for event managers coordinating speakers, rooms, sponsors and delivery across a conference program.",
    category: "briefing",
    categoryLabel: "Conference Planning",
    lastUpdated: "August 2026",
    readTime: "7 min read",
    summary: "Plan conference photography coverage around the run sheet, concurrent rooms, stakeholder priorities and communications deadlines.",
    searchIntent: "planning",
    seoTitle: "Sydney Conference Photography Planning Checklist",
    metaDescription: "Plan Sydney conference photography across speakers, stages, breakout rooms, sponsors and image delivery with a practical production checklist.",
    publishedDate: "2026-08-28",
    sections: [
      {
        heading: "Set coverage priorities before the run sheet is final",
        content: "Photography works best when the event team identifies the images it must leave with before the schedule is locked. List the speakers, announcements, sponsor obligations and audience moments that carry the most communications value.",
        subsections: [
          {
            title: "Name the decision maker",
            body: "Nominate one producer or communications lead who can resolve timing changes and approve priority selections during the event."
          },
          {
            title: "Identify people before show day",
            body: "Provide names, roles and reference photographs for speakers, executives, award recipients and stakeholders who must be documented."
          }
        ]
      },
      {
        heading: "Map rooms, stages and concurrent sessions",
        content: "A single photographer cannot cover simultaneous keynote, breakout and networking activity in separate spaces. Mark every overlap in the program and decide which session has priority or whether the brief needs additional coverage.",
        subsections: [
          {
            title: "Allow movement time",
            body: "Include realistic travel time between rooms, security points and backstage areas, particularly in large convention centres."
          },
          {
            title: "Protect the main stage",
            body: "Keep continuous stage coverage when missing a keynote entrance, announcement or handover would create a gap in the final record."
          }
        ]
      },
      {
        heading: "Confirm sponsor, media and delivery requirements",
        content: "Record which sponsor marks, partner activations and media moments must appear in the image set. Agree on selection timing, approval contacts and transfer method before doors open.",
        subsections: [
          {
            title: "Separate urgent selects",
            body: "List the moments needed first for press, executive channels or social publishing so they can be identified during capture."
          },
          {
            title: "Plan naming and access",
            body: "Confirm whether the communications team needs named folders, speaker groupings or restricted access for sensitive sessions."
          }
        ]
      },
      {
        heading: "Run the final production check",
        content: "Before the event, confirm photographer call time, venue access, loading instructions, accreditation, dress requirements, meal breaks, AV contacts and the latest run sheet. Send one controlled brief rather than parallel versions from multiple stakeholders."
      }
    ],
    keyTakeaways: [
      "Prioritise speakers, announcements, sponsors and audience moments before the schedule is locked.",
      "Mark every concurrent session and travel gap in the run sheet.",
      "Nominate one on-site decision maker for live changes.",
      "Agree on priority selection and delivery requirements before the event."
    ],
    relatedService: "corporate-events-conferences",
    relatedBlogSlugs: ["icc-sydney-event-photography-guide", "how-to-write-an-event-photography-brief"],
    relatedLocations: ["sydney-cbd", "western-sydney"],
    relatedGalleries: ["global-impact-summit", "echo-change-future-action-summit-2026"],
    relatedGuides: ["event-briefing-template", "sydney-venue-lighting-guide", "turnaround-and-delivery-specs"]
  },
  {
    slug: "corporate-gala-dinner-photography-shot-list",
    number: "DOC-07",
    title: "Corporate Gala Dinner Photography Shot Planning Guide",
    subtitle: "A clear shot hierarchy for arrivals, room detail, stage programs, awards, sponsors and guest atmosphere.",
    category: "briefing",
    categoryLabel: "Gala Planning",
    lastUpdated: "August 2026",
    readTime: "6 min read",
    summary: "Build a gala dinner photography plan that covers formal program milestones and the atmosphere around them without turning the evening into a rigid shot list.",
    searchIntent: "planning",
    seoTitle: "Corporate Gala Dinner Photography Shot List Sydney",
    metaDescription: "Plan corporate gala dinner photography across arrivals, room details, stage moments, awards, sponsors and guest atmosphere in Sydney.",
    publishedDate: "2026-08-28",
    sections: [
      {
        heading: "Build the shot hierarchy",
        content: "Start with the moments that cannot be repeated. Awards, announcements, sponsor presentations and keynote appearances sit above general atmosphere because a missed formal milestone cannot be recreated after the event.",
        subsections: [
          {
            title: "Mandatory people and pairings",
            body: "List award presenters, recipients, executives, dignitaries and partner representatives with the exact groupings required."
          },
          {
            title: "Flexible atmosphere coverage",
            body: "Treat guest interaction, reactions and room energy as an editorial brief rather than a list of every table."
          }
        ]
      },
      {
        heading: "Plan arrivals, room, stage and awards",
        content: "Allow time before guests enter for room scale, signage, tables and sponsor details. Confirm the stage position, lectern light, award handover path and whether recipients pause for a photograph.",
        subsections: [
          {
            title: "Protect arrival coverage",
            body: "Decide whether arrivals require a media wall, informal greetings or both, and nominate someone who can identify priority guests."
          },
          {
            title: "Confirm the award rhythm",
            body: "Tell the photographer whether winners pause on stage, move to a separate portrait area or return directly to their tables."
          }
        ]
      },
      {
        heading: "Cover sponsors, guests and sensitive moments",
        content: "Sponsor visibility should feel connected to real participation. Photograph active booths, branded stages and partner representatives without replacing the event story with repeated logo frames.",
        subsections: [
          {
            title: "Respect guest boundaries",
            body: "Flag private tables, protected attendees and moments where photography is not appropriate before the room opens."
          },
          {
            title: "Coordinate formal portraits",
            body: "Schedule board, committee or sponsor groups at a known time and place instead of trying to assemble them during service."
          }
        ]
      },
      {
        heading: "Plan delivery after the event",
        content: "Identify the first images needed for media, internal reporting, sponsor recaps and social channels. Confirm who can approve those selections and whether names or award categories must accompany the files."
      }
    ],
    keyTakeaways: [
      "Rank irreplaceable stage and award moments above general atmosphere.",
      "Allow empty-room time before guest arrival.",
      "Identify priority guests and required groupings in advance.",
      "Separate urgent media images from the complete event gallery."
    ],
    relatedService: "corporate-events-conferences",
    relatedBlogSlugs: ["how-to-write-an-event-photography-brief", "corporate-event-photography-pricing-guide-sydney"],
    relatedLocations: ["sydney-cbd"],
    relatedGalleries: ["sony-foundation-wharf4ward", "maggie-beer"],
    relatedGuides: ["event-briefing-template", "turnaround-and-delivery-specs", "licensing-and-commercial-rights"]
  },
  {
    slug: "brand-activation-photography-production-guide",
    number: "DOC-08",
    title: "Brand Activation Photography Production Guide",
    subtitle: "Plan useful campaign coverage around customer interaction, brand visibility, agency priorities and final asset use.",
    category: "briefing",
    categoryLabel: "Activation Planning",
    lastUpdated: "August 2026",
    readTime: "7 min read",
    summary: "A production guide for photographing brand activations, pop-ups and experiential events without losing the real customer experience.",
    searchIntent: "planning",
    seoTitle: "Brand Activation Photography Production Guide Sydney",
    metaDescription: "Plan Sydney brand activation photography around campaign use, customer interaction, branded environments, agency priorities and delivery.",
    publishedDate: "2026-08-28",
    sections: [
      {
        heading: "Define campaign use before the event",
        content: "Start with the channels and formats the campaign team needs after the activation. A press release, case study, social sequence and internal report each require different combinations of people, environment, branding and detail.",
        subsections: [
          {
            title: "List required formats",
            body: "Identify where horizontal, vertical and square crops matter so important brand elements are not trapped at the edge of every frame."
          },
          {
            title: "Separate hero images from documentation",
            body: "Name the few frames expected to lead the campaign and the broader set needed to prove participation and delivery."
          }
        ]
      },
      {
        heading: "Plan customer interaction and brand visibility",
        content: "The strongest activation photographs show what people did and how the brand enabled it. Build the brief around genuine participation, then identify the signs, products and environments that need to remain legible.",
        subsections: [
          {
            title: "Photograph use, not empty display",
            body: "Prioritise people engaging with the experience before repeating static product and signage frames."
          },
          {
            title: "Protect key brand marks",
            body: "Show the photographer which product faces, campaign messages and partner marks must be readable in final selections."
          }
        ]
      },
      {
        heading: "Coordinate agency, venue and production teams",
        content: "Confirm access before opening, public interaction periods, talent timings, media arrivals and any restricted zones. Give the photographer one production contact for schedule changes and one communications contact for asset priorities.",
        subsections: [
          {
            title: "Schedule clean environment frames",
            body: "Allow a short window after build completion and before doors open for uncluttered photographs of the finished activation."
          },
          {
            title: "Flag consent requirements",
            body: "Record any talent releases, participant notices or client approval steps that affect what can be photographed and published."
          }
        ]
      },
      {
        heading: "Build a usable campaign image library",
        content: "Group the final brief around hero campaign frames, active participation, product detail, partner visibility, staff delivery and environmental context. This creates a varied library instead of dozens of near-identical crowd photographs."
      }
    ],
    keyTakeaways: [
      "Define campaign channels and crop needs before capture.",
      "Show real participation with clear brand context.",
      "Schedule an empty activation window before opening.",
      "Confirm consent and approval requirements in the brief."
    ],
    relatedService: "brand-campaigns-activations",
    relatedBlogSlugs: ["live-event-photo-delivery-for-press-social", "how-to-write-an-event-photography-brief"],
    relatedLocations: ["inner-west", "sydney-cbd"],
    relatedGalleries: ["australian-fashion-week-2026", "royalle-modelling-x-leather-on-me-xteds-cameras"],
    relatedGuides: ["product-launch-photography-pr-delivery-guide", "event-briefing-template", "licensing-and-commercial-rights"]
  },
  {
    slug: "product-launch-photography-pr-delivery-guide",
    number: "DOC-09",
    title: "Product Launch Photography and PR Delivery Guide",
    subtitle: "Plan capture, approvals and priority delivery around press, social and stakeholder deadlines.",
    category: "delivery",
    categoryLabel: "PR Delivery",
    lastUpdated: "August 2026",
    readTime: "6 min read",
    summary: "A practical workflow for product launch photography when communications teams need selected images during or soon after the event.",
    searchIntent: "delivery",
    seoTitle: "Product Launch Photography and PR Delivery Sydney",
    metaDescription: "Plan Sydney product launch photography around media deadlines, priority selections, approval contacts and reliable PR image delivery.",
    publishedDate: "2026-08-28",
    sections: [
      {
        heading: "Work backwards from publication deadlines",
        content: "Start with the first real publishing deadline and work back to the moment the required image can be photographed. A launch speech cannot be delivered before it happens, so the media plan must distinguish pre-event product frames from live announcement coverage.",
        subsections: [
          {
            title: "Name the first-use channel",
            body: "Confirm whether the first files are for press distribution, social publishing, executive communications or internal reporting."
          },
          {
            title: "Define the minimum useful set",
            body: "List the small group of scenes needed first rather than asking for a rushed version of the complete event gallery."
          }
        ]
      },
      {
        heading: "Set priority selections and approval contacts",
        content: "The photographer needs a clear way to identify launch leaders, spokespeople, talent, partners and approved product configurations. Nominate one person who can approve or redirect priority selections during the event.",
        subsections: [
          {
            title: "Share visual references",
            body: "Provide names and reference images for priority people and identify the exact product version, packaging or screen state that can be shown."
          },
          {
            title: "Record embargoes",
            body: "Document any timing, market or audience restrictions that affect when files can leave the production team."
          }
        ]
      },
      {
        heading: "Plan capture, ingest and delivery on site",
        content: "Reserve a safe working position, power access and a reliable transfer path when delivery is required during the event. The workflow must not remove the photographer from must-capture live moments.",
        subsections: [
          {
            title: "Protect capture coverage",
            body: "Schedule ingest around gaps in the run sheet or scope separate support when continuous live coverage and immediate editing overlap."
          },
          {
            title: "Confirm the transfer route",
            body: "Agree on a client gallery, secure transfer or communications channel before the event instead of improvising file delivery on site."
          }
        ]
      },
      {
        heading: "Protect quality during fast turnaround",
        content: "Priority delivery still needs selection, exposure and colour review. Limit the first batch to the images that carry immediate communications value, then complete the broader gallery through the agreed post-event workflow."
      }
    ],
    keyTakeaways: [
      "Work backwards from the first genuine publishing deadline.",
      "Define a small priority set and one approval contact.",
      "Record embargoes and approved product details in writing.",
      "Protect live coverage when ingest and editing overlap."
    ],
    relatedService: "brand-campaigns-activations",
    relatedBlogSlugs: ["live-event-photo-delivery-for-press-social", "how-to-write-an-event-photography-brief"],
    relatedLocations: ["sydney-cbd"],
    relatedGalleries: ["australian-fashion-week-2026", "guy-jules-sebastian"],
    relatedGuides: ["turnaround-and-delivery-specs", "brand-activation-photography-production-guide", "event-briefing-template"]
  },
  {
    slug: "on-site-corporate-headshots-planning-guide",
    number: "DOC-10",
    title: "On-Site Corporate Headshots Planning Guide for Sydney Teams",
    subtitle: "Plan a consistent mobile headshot session around space, lighting, staff flow and final image use.",
    category: "briefing",
    categoryLabel: "Headshot Planning",
    lastUpdated: "August 2026",
    readTime: "6 min read",
    summary: "A practical guide for HR, communications and marketing teams organising on-site corporate headshots in a Sydney workplace.",
    searchIntent: "planning",
    seoTitle: "On-Site Corporate Headshots Planning Guide Sydney",
    metaDescription: "Plan on-site corporate headshots for a Sydney team, including visual consistency, room requirements, staff scheduling and final file use.",
    publishedDate: "2026-08-28",
    sections: [
      {
        heading: "Choose a consistent visual brief",
        content: "Decide whether the image library should use a neutral background, workplace environment or a controlled combination. Match the approach to existing leadership portraits, brand guidelines and the places the files will be used.",
        subsections: [
          {
            title: "Set framing and wardrobe guidance",
            body: "Agree on crop, orientation and clothing guidance before invitations go out so the full team receives one clear instruction."
          },
          {
            title: "Plan for future starters",
            body: "Record the background, lighting and framing setup so later staff can be photographed consistently."
          }
        ]
      },
      {
        heading: "Plan space, light and staff flow",
        content: "Choose a room with enough depth for the background, lighting and camera position, plus a separate waiting point that does not interrupt nearby work. Avoid meeting rooms with fixed tables that leave no usable shooting distance.",
        subsections: [
          {
            title: "Control interruptions",
            body: "Reserve the room, manage access and allow setup time before the first appointment."
          },
          {
            title: "Check practical access",
            body: "Confirm lifts, parking, loading, power and building access for a mobile lighting setup."
          }
        ]
      },
      {
        heading: "Build the schedule around the team",
        content: "Use individual appointment windows with small buffers rather than asking the whole team to queue. Add separate time for executives, group photographs or people who need a quieter session.",
        subsections: [
          {
            title: "Nominate an internal coordinator",
            body: "One staff contact should manage arrivals, missed appointments and the approved name list."
          },
          {
            title: "Allow for selection",
            body: "Confirm whether participants choose a preferred frame during the session or whether the communications team selects centrally."
          }
        ]
      },
      {
        heading: "Prepare files for directories and LinkedIn",
        content: "List the required crop, dimensions, naming convention and background treatment for staff directories, media biographies, proposals and LinkedIn. One consistent master can then support the required exports."
      }
    ],
    keyTakeaways: [
      "Set one visual brief before staff invitations are sent.",
      "Reserve enough room depth and setup time for mobile lighting.",
      "Use scheduled appointments with small buffers.",
      "Define crop, naming and delivery requirements before export."
    ],
    relatedService: "workplace-portraits-headshots",
    relatedBlogSlugs: ["sydney-corporate-headshots-team-portraits-guide", "hiring-freelance-event-photographers-sydney-checklist"],
    relatedLocations: ["sydney-cbd", "north-shore"],
    relatedGalleries: [],
    relatedGuides: ["event-briefing-template", "licensing-and-commercial-rights"]
  },
  {
    slug: "not-for-profit-charity-event-photography-guide",
    number: "DOC-11",
    title: "Not-For-Profit and Charity Event Photography Planning Guide",
    subtitle: "Plan respectful event coverage around mission, consent, supporters, community and communications needs.",
    category: "briefing",
    categoryLabel: "Community Planning",
    lastUpdated: "August 2026",
    readTime: "7 min read",
    summary: "A briefing guide for charities and not-for-profit teams balancing event documentation, participant dignity and useful communications assets.",
    searchIntent: "planning",
    seoTitle: "Not-For-Profit Event Photography Planning Guide Sydney",
    metaDescription: "Plan respectful not-for-profit and charity event photography in Sydney around mission, consent, community, supporters and communications needs.",
    publishedDate: "2026-08-28",
    sections: [
      {
        heading: "Translate the mission into a photography brief",
        content: "Start with what the organisation needs people to understand after seeing the images. Name the work, people and outcomes that matter, then connect event moments to those themes without staging a false version of the community.",
        subsections: [
          {
            title: "Define the story in plain language",
            body: "Give the photographer a short explanation of the organisation, the event purpose and the audiences who will use the final images."
          },
          {
            title: "Identify essential people and moments",
            body: "List speakers, volunteers, participants, partners and program milestones that must be represented."
          }
        ]
      },
      {
        heading: "Handle dignity, consent and sensitive situations",
        content: "Photography should not expose a participant, service user or family to risk. Flag people who cannot be photographed, restricted spaces, cultural protocols and situations where explicit permission is required.",
        subsections: [
          {
            title: "Make restrictions usable on site",
            body: "Use clear identifiers, staff guidance or controlled zones so privacy requirements can be followed during a moving event."
          },
          {
            title: "Avoid token images",
            body: "Document people as active participants with context and agency rather than reducing them to a generic symbol of need."
          }
        ]
      },
      {
        heading: "Balance speakers, supporters and community",
        content: "Formal stakeholders matter, but the final gallery should also show volunteers, participants, service delivery and real interaction. Set priorities that reflect both accountability and lived experience.",
        subsections: [
          {
            title: "Record partner obligations",
            body: "List required sponsor or funder moments while keeping them proportionate to the event story."
          },
          {
            title: "Plan quiet and active coverage",
            body: "Include wide context, individual interactions, practical work, stage moments and small details that explain how the event felt."
          }
        ]
      },
      {
        heading: "Plan communications delivery",
        content: "Identify the first images needed for media, supporter updates, fundraising, reports and internal records. Confirm approval steps for sensitive material and keep restricted images separate from general distribution."
      }
    ],
    keyTakeaways: [
      "Connect the image brief to the organisation's real mission and audiences.",
      "Make consent and privacy restrictions practical on site.",
      "Balance formal stakeholders with participants, volunteers and service delivery.",
      "Separate restricted material from general communications delivery."
    ],
    relatedService: "not-for-profit-community",
    relatedBlogSlugs: ["how-to-write-an-event-photography-brief", "live-event-photo-delivery-for-press-social"],
    relatedLocations: ["inner-west", "sydney-cbd"],
    relatedGalleries: ["world-vision", "oz-harvest", "kokoda-track-foundation"],
    relatedGuides: ["event-briefing-template", "licensing-and-commercial-rights", "turnaround-and-delivery-specs"]
  }
];

export function getDocBySlug(slug: string): DocGuide | undefined {
  return DOCS.find((d) => d.slug === slug);
}
