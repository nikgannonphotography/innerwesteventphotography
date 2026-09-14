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
  modifiedDate?: string;
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
    title: "Event Photography Project Brief",
    subtitle:
      "An editable Word brief for events across one or several days and venues.",
    category: "briefing",
    categoryLabel: "Briefing Checklist",
    lastUpdated: "August 2026",
    readTime: "2 min read",
    summary:
      "What to share with your photographer, including the schedule, important people and photos you need.",
    searchIntent: "planning",
    seoTitle: "Event Photography Briefing Template for Sydney Events",
    metaDescription:
      "Download an editable Word event photography brief. Share dates, venues, contacts, photo priorities and delivery needs for your Sydney event.",
    publishedDate: "2026-08-28",
    sections: [
      {
        heading: "1. Start With What You Know",
        content:
          "Share the event name, dates, venues and what you need photographed. Leave anything undecided as TBC. You do not need a finished brief to ask for a quote.",
        subsections: [
          {
            title: "Dates and Locations",
            body: "For larger projects, list each day and venue separately. Include start and finish times where known, and flag sessions happening at the same time in different rooms.",
          },
          {
            title: "Contacts",
            body: "Include the person arranging the photography, someone we can reach on the day, and whoever approves the brief. These can all be the same person.",
          },
          {
            title: "Photos You Need",
            body: "Put the most important photos first. Add names, times or reference photos where useful. A short list is fine, and you can add rows in Word as the project grows.",
          },
        ],
      },
      {
        heading: "2. Share Any Deadlines or Restrictions",
        content:
          "Tell us what matters for your project so we can confirm the work and cost before booking.",
        subsections: [
          {
            title: "Delivery and Use",
            body: "Include when you need the photos, where they will be used and who needs to use them. If some photos are needed earlier, give the deadline so we can discuss what is possible.",
          },
          {
            title: "Things to Know on the Day",
            body: "Note venue access, photography restrictions, anyone who should not be photographed, and photos that cannot be shared yet.",
          },
          {
            title: "Send What You Already Have",
            body: "An existing run sheet or brief is welcome. There is no need to repeat it in the template. Coverage, delivery, usage and any extra requests will be confirmed in the quote.",
          },
        ],
      },
    ],
    keyTakeaways: [
      "Use the Word document if you need an editable brief.",
      "List each day or venue and put your most important photos first.",
      "Leave unknown details as TBC or send an existing run sheet.",
      "Confirm coverage, cost, delivery and usage before booking.",
    ],
    relatedService: "corporate-events-conferences",
    relatedBlogSlugs: [
      "how-to-write-an-event-photography-brief",
      "corporate-event-photography-pricing-guide-sydney",
    ],
    relatedLocations: ["sydney-cbd", "inner-west"],
    relatedGalleries: ["global-impact-summit", "sony-foundation-wharf4ward"],
    relatedGuides: ["pricing-and-rates-guide", "turnaround-and-delivery-specs"],
  },
  {
    slug: "pricing-and-rates-guide",
    number: "DOC-02",
    title: "Sydney Event Photography Pricing Guide",
    subtitle:
      "What affects your event photography quote and what to confirm before booking.",
    category: "pricing",
    categoryLabel: "Commercial Rates",
    lastUpdated: "September 2026",
    readTime: "3 min read",
    summary:
      "Plan coverage for a short event, a full day or several days. Confirm the hours, editing, delivery, licensing, and payment terms in your quote.",
    searchIntent: "cost",
    seoTitle: "Event Photography Pricing Guide Sydney",
    metaDescription:
      "Understand Sydney event photography pricing, hourly rates, and scope. Learn what your confirmed quote should include for corporate, charity, and private events.",
    publishedDate: "2026-08-28",
    modifiedDate: "2026-09-14",
    sections: [
      {
        heading: "1. How Sydney Event Photography is Priced",
        content:
          "Your quote depends on on-site time, locations, and the photos needed. Rather than inflexible packages, coverage is tailored to your run sheet. To generate an instant indicative fee before requesting a formal quote, use our live interactive Pricing Builder on the pricing page.",
        subsections: [
          {
            title: "Part-Day Coverage",
            body: "Suitable for breakfast panels, launch announcements, cocktail receptions, and keynotes. Pricing is based on continuous hours on site, including professional curation and colour grading.",
          },
          {
            title: "Full-Day Summits and Conferences",
            body: "Designed for full-day programs with multiple keynote speakers, panel discussions, sponsor exhibition areas, and networking sessions.",
          },
          {
            title: "Multi-Day Programs",
            body: "For multi-day conventions, festivals, or consecutive event programs, coverage is scoped across each day's distinct schedule and venue logistics.",
          },
        ],
      },
      {
        heading: "2. What Your Quote Should State",
        content:
          "A transparent commercial photography quote should leave no ambiguity about what is delivered, when it arrives, and how the photos can be used. Ensure your written agreement explicitly defines these key areas.",
        subsections: [
          {
            title: "Coverage Hours and Overtime",
            body: "Exact arrival time, scheduled finish time, and continuous on-site hours. Overtime rates should be stated clearly upfront so unexpected run sheet delays can be accommodated smoothly.",
          },
          {
            title: "Editing and Turnaround Deadlines",
            body: "Individual curation, colour balancing, and delivery timing. Standard delivery is typically 3 to 5 business days, with any priority next-day or same-day PR selects agreed before the event.",
          },
          {
            title: "Commercial Licensing and Rights",
            body: "Full commercial, PR, editorial, web, and internal communications rights granted in perpetuity, without ongoing renewal or syndication fees.",
          },
          {
            title: "Multiple Rooms and Additional Photographers",
            body: "Confirmation of whether single-photographer coverage is sufficient, or if concurrent breakout rooms require a second accredited photographer.",
          },
          {
            title: "GST, Invoicing and Terms",
            body: "Transparent GST disclosure, clear payment terms, and deposit expectations confirmed prior to holding the date.",
          },
        ],
      },
      {
        heading: "3. Overlapping Sessions and Priority Delivery",
        content:
          "One photographer cannot be in two breakout rooms simultaneously. Flag overlapping sessions early so priorities can be agreed or additional coverage quoted.",
        subsections: [
          {
            title: "Coverage in Different Rooms",
            body: "Identify which concurrent sessions are essential to photograph and which can be documented through ambient room views between speeches.",
          },
          {
            title: "Priority PR Selects",
            body: "If your media team needs hero images during the event or first thing the following morning, agree on the exact quantity and delivery window before the event.",
          },
        ],
      },
    ],
    keyTakeaways: [
      "Generate an instant estimate via the Pricing Builder before requesting a formal quote.",
      "Confirm on-site coverage hours, editing, and delivery deadlines in writing.",
      "Ensure full commercial reproduction rights are granted in perpetuity without renewal fees.",
      "Flag overlapping breakout rooms and priority PR selects before booking.",
      "Verify the photographer holds current public liability insurance meeting venue requirements.",
    ],
    relatedService: "corporate-events-conferences",
    relatedBlogSlugs: [
      "corporate-event-photography-pricing-guide-sydney",
      "hiring-freelance-event-photographers-sydney-checklist",
    ],
    relatedLocations: [
      "sydney-cbd",
      "inner-west",
      "north-shore",
      "western-sydney",
    ],
    relatedGalleries: ["global-impact-summit", "tedx-macquarie-uni"],
    relatedGuides: ["event-briefing-template", "turnaround-and-delivery-specs"],
  },
  {
    slug: "turnaround-and-delivery-specs",
    number: "DOC-03",
    title: "Event Photo Delivery & File Formats",
    subtitle:
      "Planning when you need your photos and which files to request.",
    category: "delivery",
    categoryLabel: "Photo Delivery",
    lastUpdated: "August 2026",
    readTime: "5 min read",
    summary:
      "How to plan photo delivery for print, websites and social media. Agree on timing, file formats and gallery access before booking.",
    searchIntent: "delivery",
    seoTitle: "Event Photography Turnaround and Photo Delivery",
    metaDescription:
      "Plan event photography delivery for press, social, web and print, including priority selections, file formats, colour spaces and gallery handover.",
    publishedDate: "2026-08-28",
    sections: [
      {
        heading: "1. Delivery Timelines",
        content:
          "Tell us your deadline before booking. Your quote will confirm the agreed delivery timing.",
        subsections: [
          {
            title: "Photos Needed for a Deadline",
            body: "If you need some photos before the full gallery, list the deadline, recipients and intended use. Availability must be confirmed before booking.",
          },
          {
            title: "Full Event Gallery",
            body: "Confirm the delivery date, file formats and how you will receive the edited photos.",
          },
        ],
      },
      {
        heading: "2. File Formats & Colour Standards",
        content:
          "Tell your photographer whether the photos are for print, online use or both.",
        subsections: [
          {
            title: "High-Resolution Print Masters",
            body: "Share any file requirements from your printer, including image dimensions and colour profile.",
          },
          {
            title: "Web-Optimised Digital Assets",
            body: "Share the sizes needed for your website, email newsletter or social media.",
          },
        ],
      },
    ],
    keyTakeaways: [
      "Confirm any early photo delivery before booking.",
      "Agree on a delivery date for the full gallery.",
      "Agree on the files needed for print and online use.",
      "Confirm gallery access, downloads and how long photos will remain available.",
    ],
    relatedService: "corporate-events-conferences",
    relatedBlogSlugs: [
      "live-event-photo-delivery-for-press-social",
      "corporate-event-photography-pricing-guide-sydney",
    ],
    relatedLocations: ["sydney-cbd"],
    relatedGalleries: [
      "echo-change-future-action-summit-2026",
      "australian-fashion-week-2026",
    ],
    relatedGuides: [
      "event-briefing-template",
      "product-launch-photography-pr-delivery-guide",
    ],
  },
  {
    slug: "licensing-and-commercial-rights",
    number: "DOC-04",
    title: "Event Photography Licensing & Commercial Rights in Australia",
    subtitle:
      "Clear explanation of commercial usage rights, copyright law, and sponsor distribution rights.",
    category: "licensing",
    categoryLabel: "Legal & Licensing",
    lastUpdated: "August 2026",
    readTime: "7 min read",
    summary:
      "How Australian copyright law applies to commercial photography commissions, third-party sponsor usage rights, and non-commercial partner distribution.",
    searchIntent: "rights",
    seoTitle: "Event Photography Licensing and Commercial Rights Australia",
    metaDescription:
      "A practical overview of event photography copyright, client usage, sponsor distribution, privacy planning and written licensing terms in Australia.",
    publishedDate: "2026-08-28",
    sections: [
      {
        heading: "1. Standard Commercial Usage Licence",
        content:
          "Confirm copyright ownership and permitted photo use in your booking agreement. Our quote sets out the usage agreed for your shoot.",
        subsections: [
          {
            title: "What is Included in Your Licence",
            body: "List where you plan to use the photos, including websites, advertising, press, reports and social media. Check which uses your agreement covers.",
          },
          {
            title: "Third-Party Sponsor & Vendor Rights",
            body: "If sponsors or partners need photos, include their intended uses when discussing the licence.",
          },
        ],
      },
      {
        heading: "2. Participant Privacy & Crowded Venue Protocols",
        content:
          "Guidelines for documenting attendees in public and private commercial venues in NSW.",
        subsections: [
          {
            title: "Ticketing Terms & Notice of Filming",
            body: "Discuss how attendees will be informed about photography and how requests not to be photographed will be handled.",
          },
          {
            title: "Sensitive & Embargoed Material",
            body: "Share any proposed non-disclosure agreement, embargo or sensitive content restrictions before booking so they can be reviewed.",
          },
        ],
      },
    ],
    keyTakeaways: [
      "Photo usage is agreed for each booking.",
      "Check the licence duration and any renewal fees.",
      "Clear guidelines for third-party sponsor distribution.",
      "Discuss privacy requirements and any proposed NDA before booking.",
    ],
    relatedService: "corporate-events-conferences",
    relatedBlogSlugs: [
      "how-to-write-an-event-photography-brief",
      "hiring-freelance-event-photographers-sydney-checklist",
    ],
    relatedLocations: [],
    relatedGalleries: [
      "world-vision",
      "order-of-australia-the-school-of-st-jude",
    ],
    relatedGuides: ["event-briefing-template", "turnaround-and-delivery-specs"],
  },
  {
    slug: "sydney-venue-lighting-guide",
    number: "DOC-05",
    title: "Sydney Event Venue Lighting & Photography Guide",
    subtitle:
      "Overcoming challenging ambient lighting in Sydney ballrooms, heritage halls, and convention centres.",
    category: "venues",
    categoryLabel: "Venue Production",
    lastUpdated: "August 2026",
    readTime: "6 min read",
    summary:
      "Technical strategies for photographing in low-light Sydney venues including ICC Sydney, Carriageworks, hotel ballrooms, and outdoor harbourside marquees.",
    searchIntent: "venue",
    seoTitle: "Sydney Event Venue Lighting and Photography Guide",
    metaDescription:
      "Plan photography around stage lighting, mixed colour, dark ballrooms and AV cues at Sydney event venues including ICC Sydney and Carriageworks.",
    publishedDate: "2026-08-28",
    sections: [
      {
        heading: "1. Common Lighting Challenges in Sydney Venues",
        content:
          "Every venue presents distinct challenges, from mixed LED stage lighting to cavernous dark ceilings that prevent bounce flash.",
        subsections: [
          {
            title: "High-Contrast Stage Lighting & Theatrical Spots",
            body: "Stages can be much brighter than the surrounding room. Share the lighting plan and any restrictions on flash photography.",
          },
          {
            title: "Industrial & Repurposed Heritage Venues",
            body: "Carriageworks and Marrickville warehouses feature mixed ambient light from high skylights and warm festoons. Off-camera flash grids and colour-matched gels balance skin tones naturally.",
          },
        ],
      },
      {
        heading: "2. Working with Audio-Visual (AV) Teams",
        content:
          "Coordination between the photographer and in-house AV lighting operators makes a dramatic difference to image quality.",
        subsections: [
          {
            title: "Podium & Stage White Light Balancing",
            body: "Requesting neutral 4500K–5600K white light on speakers' faces rather than saturated coloured washes ensures clean, flattering portrait results.",
          },
          {
            title: "House Light Dimming Cues",
            body: "Aligning on cue sheets so the photographer knows when auditorium lights will dim for video rolls or awards presentations.",
          },
        ],
      },
    ],
    keyTakeaways: [
      "Use fast prime lenses (f/1.4–f/2.8) to shoot in low-light environments without harsh direct flash.",
      "Coordinate with AV lighting techs for neutral white light on key speakers.",
      "Silent electronic shutters eliminate camera click distraction during keynotes.",
      "Carry off-camera lighting for dark ballrooms and evening networking.",
    ],
    relatedService: "corporate-events-conferences",
    relatedBlogSlugs: [
      "icc-sydney-event-photography-guide",
      "top-event-venues-inner-west-sydney",
    ],
    relatedLocations: ["sydney-cbd", "inner-west"],
    relatedGalleries: ["australian-fashion-week-2026", "global-impact-summit"],
    relatedGuides: [
      "sydney-conference-photography-planning-checklist",
      "event-briefing-template",
    ],
  },
  {
    slug: "sydney-conference-photography-planning-checklist",
    number: "DOC-06",
    title: "Sydney Conference Photography Planning Checklist",
    subtitle:
      "A practical checklist for event managers coordinating speakers, rooms, sponsors and delivery across a conference program.",
    category: "briefing",
    categoryLabel: "Conference Planning",
    lastUpdated: "August 2026",
    readTime: "7 min read",
    summary:
      "Plan conference photography coverage around the run sheet, concurrent rooms, stakeholder priorities and communications deadlines.",
    searchIntent: "planning",
    seoTitle: "Sydney Conference Photography Planning Checklist",
    metaDescription:
      "Plan Sydney conference photography across speakers, stages, breakout rooms, sponsors and image delivery with a practical production checklist.",
    publishedDate: "2026-08-28",
    sections: [
      {
        heading: "Set coverage priorities before the run sheet is final",
        content:
          "Photography works best when the event team identifies the images it must leave with before the schedule is locked. List the speakers, announcements, sponsor obligations and audience moments that carry the most communications value.",
        subsections: [
          {
            title: "Name the decision maker",
            body: "Nominate one producer or communications lead who can resolve timing changes and approve priority selections during the event.",
          },
          {
            title: "Identify people before show day",
            body: "Provide names, roles and reference photographs for speakers, executives, award recipients and stakeholders who must be documented.",
          },
        ],
      },
      {
        heading: "Map rooms, stages and concurrent sessions",
        content:
          "A single photographer cannot cover simultaneous keynote, breakout and networking activity in separate spaces. Mark every overlap in the program and decide which session has priority or whether the brief needs additional coverage.",
        subsections: [
          {
            title: "Allow movement time",
            body: "Include realistic travel time between rooms, security points and backstage areas, particularly in large convention centres.",
          },
          {
            title: "Protect the main stage",
            body: "Keep continuous stage coverage when missing a keynote entrance, announcement or handover would create a gap in the final record.",
          },
        ],
      },
      {
        heading: "Confirm sponsor, media and delivery requirements",
        content:
          "Record which sponsor marks, partner activations and media moments must appear in the image set. Agree on selection timing, approval contacts and transfer method before doors open.",
        subsections: [
          {
            title: "Separate urgent selects",
            body: "List the moments needed first for press, executive channels or social publishing so they can be identified during capture.",
          },
          {
            title: "Plan naming and access",
            body: "Confirm whether the communications team needs named folders, speaker groupings or restricted access for sensitive sessions.",
          },
        ],
      },
      {
        heading: "Run the final production check",
        content:
          "Before the event, confirm photographer call time, venue access, loading instructions, accreditation, dress requirements, meal breaks, AV contacts and the latest run sheet. Send one controlled brief rather than parallel versions from multiple stakeholders.",
      },
    ],
    keyTakeaways: [
      "Prioritise speakers, announcements, sponsors and audience moments before the schedule is locked.",
      "Mark every concurrent session and travel gap in the run sheet.",
      "Nominate one on-site decision maker for live changes.",
      "Agree on priority selection and delivery requirements before the event.",
    ],
    relatedService: "corporate-events-conferences",
    relatedBlogSlugs: [
      "icc-sydney-event-photography-guide",
      "how-to-write-an-event-photography-brief",
    ],
    relatedLocations: ["sydney-cbd", "western-sydney"],
    relatedGalleries: [
      "global-impact-summit",
      "echo-change-future-action-summit-2026",
    ],
    relatedGuides: [
      "event-briefing-template",
      "sydney-venue-lighting-guide",
      "turnaround-and-delivery-specs",
    ],
  },
  {
    slug: "corporate-gala-dinner-photography-shot-list",
    number: "DOC-07",
    title: "Corporate Gala Dinner Photography Shot Planning Guide",
    subtitle:
      "A clear shot hierarchy for arrivals, room detail, stage programs, awards, sponsors and guest atmosphere.",
    category: "briefing",
    categoryLabel: "Gala Planning",
    lastUpdated: "August 2026",
    readTime: "6 min read",
    summary:
      "Build a gala dinner photography plan that covers formal program milestones and the atmosphere around them without turning the evening into a rigid shot list.",
    searchIntent: "planning",
    seoTitle: "Corporate Gala Dinner Photography Shot List Sydney",
    metaDescription:
      "Plan corporate gala dinner photography across arrivals, room details, stage moments, awards, sponsors and guest atmosphere in Sydney.",
    publishedDate: "2026-08-28",
    sections: [
      {
        heading: "Build the shot hierarchy",
        content:
          "Start with the moments that cannot be repeated. Awards, announcements, sponsor presentations and keynote appearances sit above general atmosphere because a missed formal milestone cannot be recreated after the event.",
        subsections: [
          {
            title: "Mandatory people and pairings",
            body: "List award presenters, recipients, executives, dignitaries and partner representatives with the exact groupings required.",
          },
          {
            title: "Flexible atmosphere coverage",
            body: "Treat guest interaction, reactions and room energy as an editorial brief rather than a list of every table.",
          },
        ],
      },
      {
        heading: "Plan arrivals, room, stage and awards",
        content:
          "Allow time before guests enter for room scale, signage, tables and sponsor details. Confirm the stage position, lectern light, award handover path and whether recipients pause for a photograph.",
        subsections: [
          {
            title: "Protect arrival coverage",
            body: "Decide whether arrivals require a media wall, informal greetings or both, and nominate someone who can identify priority guests.",
          },
          {
            title: "Confirm the award rhythm",
            body: "Tell the photographer whether winners pause on stage, move to a separate portrait area or return directly to their tables.",
          },
        ],
      },
      {
        heading: "Cover sponsors, guests and sensitive moments",
        content:
          "Sponsor visibility should feel connected to real participation. Photograph active booths, branded stages and partner representatives without replacing the event story with repeated logo frames.",
        subsections: [
          {
            title: "Respect guest boundaries",
            body: "Flag private tables, protected attendees and moments where photography is not appropriate before the room opens.",
          },
          {
            title: "Coordinate formal portraits",
            body: "Schedule board, committee or sponsor groups at a known time and place instead of trying to assemble them during service.",
          },
        ],
      },
      {
        heading: "Plan delivery after the event",
        content:
          "Identify the first images needed for media, internal reporting, sponsor recaps and social channels. Confirm who can approve those selections and whether names or award categories must accompany the files.",
      },
    ],
    keyTakeaways: [
      "Rank irreplaceable stage and award moments above general atmosphere.",
      "Allow empty-room time before guest arrival.",
      "Identify priority guests and required groupings in advance.",
      "Separate urgent media images from the complete event gallery.",
    ],
    relatedService: "corporate-events-conferences",
    relatedBlogSlugs: [
      "how-to-write-an-event-photography-brief",
      "corporate-event-photography-pricing-guide-sydney",
    ],
    relatedLocations: ["sydney-cbd"],
    relatedGalleries: ["sony-foundation-wharf4ward", "maggie-beer"],
    relatedGuides: [
      "event-briefing-template",
      "turnaround-and-delivery-specs",
      "licensing-and-commercial-rights",
    ],
  },
  {
    slug: "brand-activation-photography-production-guide",
    number: "DOC-08",
    title: "Brand Activation Photographer Sydney Production Guide",
    subtitle:
      "Plan useful campaign coverage around customer interaction, brand visibility, agency priorities and final asset use.",
    category: "briefing",
    categoryLabel: "Activation Planning",
    lastUpdated: "September 2026",
    readTime: "7 min read",
    summary:
      "A production guide for hiring a brand activation photographer in Sydney, documenting pop-ups, sponsor experiences, and experiential marketing without disrupting the customer flow.",
    searchIntent: "planning",
    seoTitle: "Brand Activation Photographer Sydney | Production Guide",
    metaDescription:
      "Plan Sydney brand activation photography around campaign use, customer interaction, branded environments, agency priorities and fast PR delivery.",
    publishedDate: "2026-08-28",
    modifiedDate: "2026-09-14",
    sections: [
      {
        heading: "Define campaign use before the event",
        content:
          "Start with the channels and formats the brand team needs after the activation. A press release, agency case study, social sequence, and internal stakeholder report each require different combinations of people, custom environment, branding, and detail.",
        subsections: [
          {
            title: "List required formats",
            body: "Identify where horizontal, vertical, and square crops matter so critical brand marks and hero architecture are framed naturally for each channel.",
          },
          {
            title: "Separate hero images from documentation",
            body: "Name the key frames expected to lead the campaign and the broader documentary set needed to verify footfall, sponsor integration, and delivery.",
          },
        ],
      },
      {
        heading: "Plan customer interaction and brand visibility",
        content:
          "The strongest brand activation photography captures what people did and how the brand enabled it. Build the brief around authentic visitor engagement, then identify the products, signage, and environmental textures that must remain sharp and legible.",
        subsections: [
          {
            title: "Photograph engagement, not empty displays",
            body: "Prioritise people actively interacting with the experience, sampling products, or engaging with staff before repeating static display angles.",
          },
          {
            title: "Protect key brand marks",
            body: "Brief the photographer on which logos, campaign taglines, and sponsor marks must be clearly readable across wide and detail selections.",
          },
        ],
      },
      {
        heading: "Coordinate agency, venue and production teams",
        content:
          "Confirm access before opening, peak consumer periods, talent timings, VIP arrivals, and any media windows. Give the photographer one production contact for on-site schedule updates and one PR or comms contact for priority asset delivery.",
        subsections: [
          {
            title: "Collaborating with Activation Agencies and Producers",
            body: "Experiential marketing agencies design and install the build, while the photographer provides clean, publication-ready proof. Working closely with agency producers, PR teams, and venue managers ensures the installation and crowd interaction are captured seamlessly without claiming agency fabrication duties.",
          },
          {
            title: "Schedule clean environment frames",
            body: "Allow a dedicated 15-minute window after build completion and before doors open for pristine, unobstructed photographs of the architectural installation.",
          },
          {
            title: "Flag consent and talent releases",
            body: "Confirm any talent contracts, influencer obligations, or crowd notice requirements that govern how the final images can be distributed.",
          },
        ],
      },
      {
        heading: "Build a usable campaign image library",
        content:
          "Group the final brief around hero campaign frames, active consumer participation, product detail, partner visibility, and atmospheric wide shots. This creates a multi-purpose asset library for PR, social feeds, and agency portfolio recaps.",
      },
    ],
    keyTakeaways: [
      "Collaborate directly with experiential agencies and producers to schedule clean build frames before doors open.",
      "Focus on authentic consumer participation and legible brand signage rather than static displays.",
      "Scope same-day PR selects or rapid delivery prior to the event for embargo and press distribution.",
      "Generate an instant estimate via the Pricing Builder on our pricing page.",
    ],
    relatedService: "brand-campaigns-activations",
    relatedBlogSlugs: [
      "live-event-photo-delivery-for-press-social",
      "how-to-write-an-event-photography-brief",
    ],
    relatedLocations: ["inner-west", "sydney-cbd"],
    relatedGalleries: [
      "australian-fashion-week-2026",
      "royalle-modelling-x-leather-on-me-xteds-cameras",
    ],
    relatedGuides: [
      "product-launch-photography-pr-delivery-guide",
      "event-briefing-template",
      "pricing-and-rates-guide",
    ],
  },
  {
    slug: "product-launch-photography-pr-delivery-guide",
    number: "DOC-09",
    title: "Product Launch Photography and PR Delivery Guide",
    subtitle:
      "Plan capture, approvals and priority delivery around press, social and stakeholder deadlines.",
    category: "delivery",
    categoryLabel: "PR Delivery",
    lastUpdated: "September 2026",
    readTime: "6 min read",
    summary:
      "A practical workflow for product launch photography when communications teams need selected images during or soon after the event.",
    searchIntent: "delivery",
    seoTitle: "Product Launch Photographer Sydney | PR Delivery Guide",
    metaDescription:
      "Plan Sydney product launch photography around media deadlines, priority selections, approval contacts, and reliable PR image delivery.",
    publishedDate: "2026-08-28",
    modifiedDate: "2026-09-14",
    sections: [
      {
        heading: "Work backwards from publication deadlines",
        content:
          "Start with the first real publishing deadline and work back to the moment the required image can be photographed. A launch speech cannot be delivered before it happens, so the media plan must distinguish pre-event product frames from live announcement coverage.",
        subsections: [
          {
            title: "Name the first-use channel",
            body: "Confirm whether the first files are for press distribution, social publishing, executive communications or internal reporting.",
          },
          {
            title: "Define the minimum useful set",
            body: "List the small group of scenes needed first rather than asking for a rushed version of the complete event gallery.",
          },
        ],
      },
      {
        heading: "Set priority selections and approval contacts",
        content:
          "The photographer needs a clear way to identify launch leaders, spokespeople, talent, partners and approved product configurations. Nominate one person who can approve or redirect priority selections during the event.",
        subsections: [
          {
            title: "Share visual references",
            body: "Provide names and reference images for priority people and identify the exact product version, packaging or screen state that can be shown.",
          },
          {
            title: "Record embargoes",
            body: "Document any timing, market or audience restrictions that affect when files can leave the production team.",
          },
        ],
      },
      {
        heading: "Plan capture, ingest and delivery on site",
        content:
          "Reserve a safe working position, power access and a reliable transfer path when delivery is required during the event. The workflow must not remove the photographer from must-capture live moments.",
        subsections: [
          {
            title: "Protect capture coverage",
            body: "Schedule ingest around gaps in the run sheet or scope separate support when continuous live coverage and immediate editing overlap.",
          },
          {
            title: "Confirm the transfer route",
            body: "Agree on a client gallery, secure transfer or communications channel before the event instead of improvising file delivery on site.",
          },
        ],
      },
      {
        heading: "Protect quality during fast turnaround",
        content:
          "Priority delivery still needs selection, exposure and colour review. Limit the first batch to the images that carry immediate communications value, then complete the broader gallery through the agreed post-event workflow.",
      },
    ],
    keyTakeaways: [
      "Work backwards from the first genuine publishing deadline.",
      "Define a small priority set and one approval contact.",
      "Record embargoes and approved product details in writing.",
      "Protect live coverage when ingest and editing overlap.",
      "Generate an instant estimate via the Pricing Builder on our pricing page.",
    ],
    relatedService: "brand-campaigns-activations",
    relatedBlogSlugs: [
      "live-event-photo-delivery-for-press-social",
      "how-to-write-an-event-photography-brief",
    ],
    relatedLocations: ["sydney-cbd"],
    relatedGalleries: ["australian-fashion-week-2026", "guy-jules-sebastian"],
    relatedGuides: [
      "turnaround-and-delivery-specs",
      "brand-activation-photography-production-guide",
      "event-briefing-template",
      "pricing-and-rates-guide",
    ],
  },
  {
    slug: "on-site-corporate-headshots-planning-guide",
    number: "DOC-10",
    title: "On-Site Corporate Headshots Planning Guide for Sydney Teams",
    subtitle:
      "Plan a consistent mobile headshot session around space, lighting, staff flow and final image use.",
    category: "briefing",
    categoryLabel: "Headshot Planning",
    lastUpdated: "August 2026",
    readTime: "6 min read",
    summary:
      "Workplace headshot sessions usually take 1–3 hours, depending on team size. Share how many people need photos so we can confirm the time and price.",
    searchIntent: "planning",
    seoTitle: "On-Site Corporate Headshots Planning Guide Sydney",
    metaDescription:
      "Plan on-site corporate headshots for a Sydney team, including visual consistency, room requirements, staff scheduling and final file use.",
    publishedDate: "2026-08-28",
    sections: [
      {
        heading: "Choose a consistent visual brief",
        content:
          "Decide whether the image library should use a neutral background, workplace environment or a controlled combination. Match the approach to existing leadership portraits, brand guidelines and the places the files will be used.",
        subsections: [
          {
            title: "Set framing and wardrobe guidance",
            body: "Agree on crop, orientation and clothing guidance before invitations go out so the full team receives one clear instruction.",
          },
          {
            title: "Plan for future starters",
            body: "Record the background, lighting and framing setup so later staff can be photographed consistently.",
          },
        ],
      },
      {
        heading: "Plan space, light and staff flow",
        content:
          "Choose a room with enough depth for the background, lighting and camera position, plus a separate waiting point that does not interrupt nearby work. Avoid meeting rooms with fixed tables that leave no usable shooting distance.",
        subsections: [
          {
            title: "Control interruptions",
            body: "Reserve the room, manage access and allow setup time before the first appointment.",
          },
          {
            title: "Check practical access",
            body: "Confirm lifts, parking, loading, power and building access for a mobile lighting setup.",
          },
        ],
      },
      {
        heading: "Build the schedule around the team",
        content:
          "Use individual appointment windows with small buffers rather than asking the whole team to queue. Add separate time for executives, group photographs or people who need a quieter session.",
        subsections: [
          {
            title: "Nominate an internal coordinator",
            body: "One staff contact should manage arrivals, missed appointments and the approved name list.",
          },
          {
            title: "Allow for selection",
            body: "Confirm whether participants choose a preferred frame during the session or whether the communications team selects centrally.",
          },
        ],
      },
      {
        heading: "Prepare files for directories and LinkedIn",
        content:
          "List the required crop, dimensions, naming convention and background treatment for staff directories, media biographies, proposals and LinkedIn. One consistent master can then support the required exports.",
      },
    ],
    keyTakeaways: [
      "Set one visual brief before staff invitations are sent.",
      "Reserve enough room depth and setup time for mobile lighting.",
      "Use scheduled appointments with small buffers.",
      "Define crop, naming and delivery requirements before export.",
    ],
    relatedService: "workplace-portraits-headshots",
    relatedBlogSlugs: [
      "sydney-corporate-headshots-team-portraits-guide",
      "hiring-freelance-event-photographers-sydney-checklist",
    ],
    relatedLocations: ["sydney-cbd", "north-shore"],
    relatedGalleries: [],
    relatedGuides: [
      "event-briefing-template",
      "licensing-and-commercial-rights",
    ],
  },
  {
    slug: "not-for-profit-charity-event-photography-guide",
    number: "DOC-11",
    title: "Charity Event Photographer Sydney Planning Guide",
    subtitle:
      "Plan respectful event coverage around mission, consent, supporters, community and communications needs.",
    category: "briefing",
    categoryLabel: "Community Planning",
    lastUpdated: "September 2026",
    readTime: "7 min read",
    summary:
      "A briefing guide for charities and not-for-profit teams briefing a charity event photographer or charity gala photographer in Sydney.",
    searchIntent: "planning",
    seoTitle: "Charity Event Photographer Sydney | Planning Guide",
    metaDescription:
      "Plan respectful charity event photography in Sydney. Guidance for fundraising galas, donor summits, consent protocols, and impact communications.",
    publishedDate: "2026-08-28",
    modifiedDate: "2026-09-14",
    sections: [
      {
        heading: "Translate the mission into a photography brief",
        content:
          "When briefing a charity event photographer or charity gala photographer in Sydney, start with what the organisation needs supporters and stakeholders to understand after seeing the images. Name the cause, people, and community impact that matter, then connect event moments to those themes without staging a false version of the occasion.",
        subsections: [
          {
            title: "Define the story in plain language",
            body: "Give the photographer a clear briefing on the foundation, the fundraising or forum purpose, and the audiences who will use the final images.",
          },
          {
            title: "Identify essential people and moments",
            body: "List keynote speakers, major donors, patrons, frontline volunteers, and award milestones that must be documented.",
          },
        ],
      },
      {
        heading: "Handle dignity, consent and sensitive situations",
        content:
          "Photography should never expose a participant, service user, or vulnerable family to risk. Flag people who cannot be photographed, restricted spaces, cultural protocols, and situations where explicit written permission is required.",
        subsections: [
          {
            title: "Make restrictions usable on site",
            body: "Use discrete lanyard identifiers, staff chaperones, or designated photo-free zones so privacy requirements can be respected without disrupting the event.",
          },
          {
            title: "Avoid token images",
            body: "Document participants as active leaders with agency and dignity rather than reducing them to generic symbols of disadvantage.",
          },
        ],
      },
      {
        heading: "Balance speakers, supporters and community",
        content:
          "At a charity gala or community celebration, formal donors and board members matter, but the final gallery must also celebrate volunteers, frontline workers, and authentic engagement. Balanced coverage delivers proof of both financial accountability and lived community impact.",
        subsections: [
          {
            title: "Record partner and sponsor obligations",
            body: "List required sponsor activations, cheque handovers, and patron portraits while keeping them proportionate to the real event atmosphere.",
          },
          {
            title: "Plan quiet and active coverage",
            body: "Include wide room atmosphere, heartfelt conversations, auction moments, and stage addresses that convey how the evening truly felt.",
          },
        ],
      },
      {
        heading: "Plan communications delivery and impact reporting",
        content:
          "Identify the first hero images needed for post-event media distributions, donor thank-you emails, and board updates. Confirm approval processes for sensitive material and keep restricted images clearly separated from general marketing assets.",
      },
    ],
    keyTakeaways: [
      "Connect the photography brief directly to your mission, donor reporting, and public advocacy.",
      "Establish practical, on-the-ground consent protocols to protect participant dignity.",
      "Balance formal stage presentations with authentic donor, volunteer, and community interactions.",
      "Eligible organisations receive a dedicated 10% Community Courtesy Benefit on standard event coverage.",
    ],
    relatedService: "not-for-profit-community",
    relatedBlogSlugs: [
      "how-to-write-an-event-photography-brief",
      "hiring-freelance-event-photographers-sydney-checklist",
    ],
    relatedLocations: ["inner-west", "sydney-cbd"],
    relatedGalleries: [
      "sony-foundation-wharf4ward",
      "order-of-australia-the-school-of-st-jude",
      "irish-festival-sydney-2026",
    ],
    relatedGuides: [
      "event-briefing-template",
      "pricing-and-rates-guide",
      "licensing-and-commercial-rights",
    ],
  },
  {
    slug: "private-celebration-and-milestone-photography-guide",
    number: "DOC-12",
    title: "Milestone Birthdays & Private Celebrations: Sydney Photography Planning Guide",
    subtitle:
      "A complete planning guide for capturing milestone birthdays, family reunions, and private celebrations across Sydney.",
    category: "briefing",
    categoryLabel: "Celebrations Guide",
    lastUpdated: "August 2026",
    readTime: "5 min read",
    summary:
      "How to plan photography for milestone birthdays (30th, 40th, 50th, 80th) and private family celebrations with candid documentary coverage, key toast timing, and group portrait coordination.",
    searchIntent: "planning",
    seoTitle: "Milestone Birthday & Private Event Photography Guide Sydney",
    metaDescription:
      "Step-by-step guide for planning photography for milestone birthdays, family celebrations, and private parties in Sydney. Shot list priorities and guest coordination.",
    publishedDate: "2026-08-28",
    sections: [
      {
        heading: "1. Candid Photos and Key Moments",
        content:
          "Candid photos cover guests talking, laughing and enjoying the celebration. Allow time for any group photos you would also like.",
        subsections: [
          {
            title: "Guest Arrivals & Atmosphere",
            body: "Documenting guests arriving, greeting the host, and experiencing the styled venue atmosphere during the first 30–45 minutes.",
          },
          {
            title: "Speeches, Toasts & Cake Cutting",
            body: "Capturing emotional reactions from the crowd, the speaker's key delivery, and the genuine reactions of the person being celebrated.",
          },
        ],
      },
      {
        heading: "2. Structuring Family & VIP Group Portraits",
        content:
          "Make a short list of family and friend groups you would like photographed. Agree on a time for those photos that fits your event.",
      },
      {
        heading: "3. Receiving and Sharing Your Photos",
        content:
          "Agree on delivery timing and how you will share photos with guests. Mention any early deadline before booking.",
      },
    ],
    keyTakeaways: [
      "Keep formal group portrait lists focused and schedule them early in the event.",
      "Document authentic speech reactions and ambient room energy.",
      "Confirm how guests can access the photos.",
      "Discuss any early delivery deadline before booking.",
    ],
    relatedService: "private-events-milestones-celebrations",
    relatedBlogSlugs: [
      "top-event-venues-inner-west-sydney",
      "live-event-photo-delivery-for-press-social",
    ],
    relatedLocations: ["inner-west", "sydney-cbd", "north-shore"],
    relatedGalleries: ["annas-birthday", "george-and-adrianas-engagement"],
    relatedGuides: [
      "event-briefing-template",
      "turnaround-and-delivery-specs",
      "pricing-and-rates-guide",
    ],
  },
  {
    slug: "intimate-sydney-wedding-engagement-photography-guide",
    number: "DOC-13",
    title: "Intimate Sydney Weddings & Engagements: Documentary Planning Guide",
    subtitle:
      "A modern, relaxed approach to documenting boutique Sydney weddings, foreshore engagements, and intimate vows.",
    category: "briefing",
    categoryLabel: "Wedding & Engagement Guide",
    lastUpdated: "August 2026",
    readTime: "6 min read",
    summary:
      "How to plan documentary wedding and engagement photography for Sydney foreshore venues, historic Inner West spaces, and private celebrations without rigid production stress.",
    searchIntent: "planning",
    seoTitle: "Intimate Sydney Wedding & Engagement Photography Guide",
    metaDescription:
      "Planning guide for intimate weddings and engagement celebrations in Sydney. Documentary storytelling, golden hour timing, and relaxed foreshore portraits.",
    publishedDate: "2026-08-28",
    sections: [
      {
        heading: "1. The Documentary Philosophy for Intimate Celebrations",
        content:
          "Plan photography around the ceremony, speeches, candid guest photos and any couple or family portraits you would like.",
        subsections: [
          {
            title: "Foreshore & Waterfront Timing",
            body: "Planning couple portraits around golden hour light across Sydney Harbour, Balmain foreshore, or coastal lookouts.",
          },
          {
            title: "Receptions & Long Lunches",
            body: "Capturing tablescape styling, shared feasts, emotional toasts, and ambient party atmosphere without intrusive equipment.",
          },
        ],
      },
      {
        heading: "2. Streamlined Logistics & Timeline Scoping",
        content:
          "Whether you need 4 hours of coverage for an intimate ceremony and cocktail reception or full evening documentation, we work with you to create a simple timeline that protects your time with guests.",
      },
      {
        heading: "3. Archival Handover & Full Digital Rights",
        content:
          "Discuss the files you need for printing and sharing. Confirm the permitted uses and delivery details in your quote.",
      },
    ],
    keyTakeaways: [
      "Focus on candid connection, emotional speeches, and atmospheric styling.",
      "Take advantage of Sydney's distinctive harbour and heritage architecture for brief relaxed portraits.",
      "Confirm file formats and guest access before booking.",
      "Check what is included in your quote and whether any extras cost more.",
    ],
    relatedService: "private-events-milestones-celebrations",
    relatedBlogSlugs: [
      "top-event-venues-inner-west-sydney",
      "hiring-freelance-event-photographers-sydney-checklist",
    ],
    relatedLocations: ["sydney-cbd", "inner-west", "north-shore"],
    relatedGalleries: ["george-and-adrianas-engagement", "annas-birthday"],
    relatedGuides: [
      "event-briefing-template",
      "sydney-venue-lighting-guide",
      "pricing-and-rates-guide",
    ],
  },
  {
    slug: "sydney-studio-hire-and-production-equipment-guide",
    number: "DOC-14",
    title: "Planning a Sydney Studio Photography Shoot",
    subtitle:
      "Questions to ask about studio space, equipment and people needed for a shoot.",
    category: "venues",
    categoryLabel: "Studio & Production Guide",
    lastUpdated: "August 2026",
    readTime: "7 min read",
    summary:
      "A planning checklist for a studio shoot in Sydney. Studio, equipment and crew hire are separate services and are not included unless expressly agreed in your quote.",
    searchIntent: "venue",
    seoTitle: "Sydney Photography Studio Hire & Production Equipment Guide",
    metaDescription:
      "Planning a studio photography shoot in Sydney? Questions to ask about studio space, lighting, equipment, crew and separate hire costs.",
    publishedDate: "2026-08-28",
    sections: [
      {
        heading: "1. Daylight vs Cyclorama Studio Hire in Sydney",
        content:
          "Discuss the photos you need before booking a space. Check light, backgrounds, access, hire hours and what the studio includes.",
        subsections: [
          {
            title: "Daylight Studios (Inner West & Surry Hills)",
            body: "Ideal for lifestyle lookbooks, brand activations, and natural executive portraits featuring high ceilings, timber floors, and expansive north/east facing industrial windows.",
          },
          {
            title: "Cyclorama (Cyc Wall) Studios (Alexandria & Waterloo)",
            body: "Essential for pure seamless commercial product shoots, fashion campaigns, and multi-talent group staging requiring full lighting control and floor-to-ceiling infinity curves.",
          },
        ],
      },
      {
        heading: "2. Equipment and Lighting",
        content:
          "Check what equipment the photographer and studio will supply. Any additional hire needs an agreed supplier, cost and person responsible for collection and return.",
      },
      {
        heading: "3. Who Is Needed on the Shoot?",
        content:
          "If your shoot needs an assistant, stylist or hair and makeup artist, confirm who will book and pay for them. Do not assume these services are part of the photography booking.",
      },
    ],
    keyTakeaways: [
      "Confirm the space suits the photos you need.",
      "Check equipment inclusions and separate hire costs.",
      "Agree who will arrange any additional people.",
      "Only services expressly agreed in your quote are included.",
    ],
    relatedService: "corporate-events-conferences",
    relatedBlogSlugs: [
      "hiring-freelance-event-photographers-sydney-checklist",
      "how-to-write-an-event-photography-brief",
    ],
    relatedLocations: ["inner-west", "sydney-cbd"],
    relatedGalleries: [
      "australian-fashion-week-2026",
      "royalle-modelling-x-leather-on-me-xteds-cameras",
    ],
    relatedGuides: [
      "event-briefing-template",
      "turnaround-and-delivery-specs",
      "pricing-and-rates-guide",
    ],
  },
];

export function getDocBySlug(slug: string): DocGuide | undefined {
  return DOCS.find((d) => d.slug === slug);
}
