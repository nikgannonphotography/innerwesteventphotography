export interface BlogPost {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  category: "pricing" | "venues" | "briefing" | "headshots" | "operations" | "turnaround";
  categoryLabel: string;
  date: string;
  isoDate: string;
  modifiedDate?: string;
  readTime: string;
  author: string;
  heroImage: string;
  summary: string;
  featured?: boolean;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string[];
      tableData?: {
        headers: string[];
        rows: string[][];
      };
      callout?: string;
      faqList?: { q: string; a: string }[];
    }[];
    conclusion: string;
  };
  relatedGalleries: string[];
  relatedDocSlugs: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "corporate-event-photography-pricing-guide-sydney",
    title: "Corporate Event Photography Pricing in Sydney",
    seoTitle: "Corporate Event Photography Rates Sydney",
    metaDescription: "Sydney corporate event photography rates across single-room sessions, multi-day conferences, and overlapping schedules. Plan deliverables and delivery timing.",
    category: "pricing",
    categoryLabel: "Pricing & Rates",
    date: "14 August 2026",
    isoDate: "2026-08-14",
    modifiedDate: "2026-09-14",
    readTime: "2 min read",
    author: "Nikolas Gannon",
    heroImage: "/galleries/posters/tedx-macquarie-uni.webp",
    summary: "What affects corporate event photography rates in Sydney, from room overlap to multi-day schedules and delivery deadlines.",
    featured: true,
    content: {
      intro: "Corporate event photography rates in Sydney depend on schedule density, venue logistics, overlapping rooms, and delivery deadlines. For general scope and inclusions, see the <a href='/docs/pricing-and-rates-guide'>Sydney event photography pricing guide</a>, or calculate an estimate directly with the <a href='/pricing#pricing-builder'>pricing builder</a>.",
      sections: [
        {
          heading: "What Affects Corporate Event Quotes",
          body: [
            "Corporate rates reflect the real hours on site, schedule pace, venue travel, and the specific photos your stakeholders need.",
            "Conferences with concurrent streams or tight press deadlines require deliberate planning rather than standard day packages. Your quote will state the agreed hours, coverage scope, and inclusions."
          ],
          tableData: {
            headers: ["Event Type", "Schedule Details to Share", "Key Cost Drivers", "What to Confirm"],
            rows: [
              ["Executive Breakfast or Panel", "Start and finish times with guest arrival", "Room lighting, podium access, and priority speakers", "On-site hours and final image turnaround"],
              ["Half-Day Seminar or Launch", "Run sheet, speaker roster, and key milestones", "Multiple speakers, sponsor activations, and media calls", "Coverage hours, image count, and usage rights"],
              ["Full-Day Conference", "Detailed run sheet, stage sessions, and breakout rooms", "Overlapping rooms, keynote transitions, and press deadlines", "Dedicated room priorities and interim delivery needs"],
              ["Multi-Day Summit", "Multi-day schedule and off-site dinner venues", "Multiple venue logistics, team travel, and daily selects", "Project scope, daily image batches, and total investment"]
            ]
          }
        },
        {
          heading: "Room Overlap, Delivery Deadlines, and Scope",
          body: [
            "Overlapping breakout sessions require careful coordination. A single photographer cannot cover two separate rooms simultaneously, so identify your priority sessions early or discuss bringing in a second photographer.",
            "If your communications team needs same-day selects for media distribution or social channels, agree on the exact timing and file quantities before booking so editing can be scheduled.",
            "Check the permitted uses, users, and duration of your commercial photo licence in the quote so all stakeholder and sponsor needs are covered."
          ],
          callout: "To check live rates for your event duration, use the <a href='/pricing#pricing-builder'>pricing builder</a> to generate an estimate before submitting your brief."
        },
        {
          heading: "Common Questions on Corporate Event Rates",
          body: [
            "Answers to frequent questions regarding corporate quoting, overtime, and delivery deadlines."
          ],
          faqList: [
            {
              q: "Why do rates vary between photographers?",
              a: "Rates reflect commercial experience, dual-camera backup, professional indemnity insurance, colour grading, and guaranteed delivery timelines. Always check inclusions in writing."
            },
            {
              q: "Are editing and colour grading included?",
              a: "Standard post-production and colour grading are included in all quotes. Special retouching or rapid turnaround should be specified in your brief."
            },
            {
              q: "What happens if our conference runs over schedule?",
              a: "Overtime is billed in agreed hourly increments subject to photographer availability on the day."
            }
          ]
        }
      ],
      conclusion: "A clear schedule with confirmed deliverables, room priorities, and media deadlines ensures an accurate, transparent quote."
    },
    relatedGalleries: [
      "tedx-macquarie-uni",
      "echo-change-future-action-summit-2026"
    ],
    relatedDocSlugs: [
      "pricing-and-rates-guide",
      "event-briefing-template"
    ]
  },
  {
    slug: "icc-sydney-event-photography-guide",
    title: "Planning Event Photography at ICC Sydney",
    seoTitle: "ICC Sydney Event Photographer",
    metaDescription: "Practical guide to photographing conferences, summits, and exhibitions at ICC Sydney in Darling Harbour. Loading dock logistics, lighting, and stage setup.",
    category: "venues",
    categoryLabel: "Venue Production",
    date: "02 August 2026",
    isoDate: "2026-08-02",
    modifiedDate: "2026-09-14",
    readTime: "2 min read",
    author: "Nikolas Gannon",
    heroImage: "/galleries/posters/echo-change-future-action-summit-2026.webp",
    summary: "What to share with your photographer before an ICC Sydney event, including rooms, access, lighting and the schedule.",
    featured: true,
    content: {
      intro: "For event photography at ICC Sydney in Darling Harbour, start with the room names and run sheet. This helps plan the route between sessions, where to photograph speakers and when there is time for group photos.",
      sections: [
        {
          heading: "Commercial Coverage at ICC Sydney",
          body: [
            "We provide <a href='/services/corporate-events-conferences'>corporate event and conference photography</a> across ICC Sydney's convention, exhibition, and theatre spaces. Comprehensive coverage spans plenary keynotes, concurrent panel sessions, exhibition floor activations, awards dinners, and dedicated sponsor areas.",
            "Whether documenting multi-day summits or evening banquets, coverage is tailored to capture high-impact stage moments, candid delegate engagement, sponsor brand presence, and venue atmosphere without interrupting the flow of your program."
          ]
        },
        {
          heading: "Plan Photography Around Your Rooms",
          body: [
            "Different spaces call for different coverage. Include the room names and floor plan in your brief.",
            "• Grand Ballroom. List important stage moments and any tables or groups that need photos. Allow time for room photos before guests arrive if these matter to you.",
            "• Exhibition halls. Identify the stands, displays and people you need photographed. Include any demonstrations or scheduled visits.",
            "• Pyrmont Theatre. Agree suitable positions for photographing the stage and audience, keeping aisles and sightlines clear.",
            "Use <a href='https://www.iccsydney.com/organisers/organiser-toolkit/floor-plans/'>ICC Sydney's floor plans</a> to identify each room and allow time to move between sessions."
          ]
        },
        {
          heading: "Confirm Access and Lighting Before the Day",
          body: [
            "Ask your event contact to confirm the arrival point, access passes, induction requirements and any insurance documents needed.",
            "Share the lighting plan or put your photographer in touch with the event's AV contact. Let them know about dark presentations, screen content and any restrictions on flash.",
            "Check the current <a href='https://www.iccsydney.com/organisers/organiser-toolkit/'>ICC Sydney organiser toolkit</a> for venue guidance and delivery information."
          ],
          callout: "If you want photos outside in Darling Harbour, include time for them in the schedule."
        }
      ],
      conclusion: "Confirm access, lighting and stage positions before the event so the photographer can work without disrupting the program."
    },
    relatedGalleries: [
      "echo-change-future-action-summit-2026",
      "sony-foundation-wharf4ward"
    ],
    relatedDocSlugs: [
      "sydney-venue-lighting-guide",
      "turnaround-and-delivery-specs"
    ]
  },
  {
    slug: "how-to-write-an-event-photography-brief",
    title: "How to Write an Event Photography Brief (With Checklist)",
    seoTitle: "Event Photography Shot List and Brief",
    metaDescription: "Write a simple event photography brief and shot list covering arrivals, keynote speakers, branding, networking, and delivery needs.",
    category: "briefing",
    categoryLabel: "Briefing & Planning",
    date: "22 July 2026",
    isoDate: "2026-07-22",
    modifiedDate: "2026-09-14",
    readTime: "2 min read",
    author: "Nikolas Gannon",
    heroImage: "/galleries/posters/order-of-australia-the-school-of-st-jude.webp",
    summary: "The details to share with your photographer, from the schedule and shot list to the photos you need most.",
    featured: false,
    content: {
      intro: "A photography brief can be short. Tell us what is happening, where and when, and which photos matter most. An existing run sheet is fine, and anything undecided can stay as TBC.",
      sections: [
        {
          heading: "What to Include in an Event Brief",
          body: [
            "Start with the dates, venues and requested photography hours. For larger projects, list each day separately and flag sessions happening at the same time in different places.",
            "Add a short list of the photos you need. Include names, times and reference photos where useful. You can also reference our comprehensive <a href='/docs/event-briefing-template'>event briefing guide</a> for deeper planning.",
            "Include a contact for planning and someone we can reach on the day. One person can cover both.",
            "Tell us when you need the photos and how they will be used. Mention venue restrictions or anyone who should not be photographed."
          ]
        },
        {
          heading: "Event Photography Shot List Essentials",
          body: [
            "A structured shot list ensures key event moments and stakeholder requirements are captured without ambiguity. Core categories often cover these areas.",
            "• Guest arrivals, registration, and welcome interactions",
            "• Venue architecture, sponsor signage, stage branding, and room setups before guests enter",
            "• Keynote speakers, MCs, panel discussions, and stage presentations",
            "• Audience reactions, attentiveness, and spontaneous engagement",
            "• Natural delegate networking, conversational exchanges, and cocktail hospitality",
            "• Formal awards presentations, trophy handovers, and stage lineups",
            "• Organised VIP groups, executive portraits, and board member photos",
            "• Event styling details, table arrangements, lighting design, and catering",
            "• Key stakeholders, patrons, and priority individuals identified in advance",
            "• Explicit turnaround needs, such as expedited press selects for media releases",
            "Treat this shot list as a priority guide rather than a rigid instruction to stage every frame. Live events move quickly, and an experienced photographer balances documented shot requirements with authentic, unposed documentary moments."
          ]
        },
        {
          heading: "Put the Most Important Photos First",
          body: [
            "Schedules can change. A short priority list helps your photographer understand what matters if two moments happen at once.",
            "You do not need an elaborate system. List the people, activities or details you most want photographed and add anything that would be useful to know."
          ]
        }
      ],
      conclusion: "Use the editable Word brief if it helps, or send what you already have. We will confirm coverage, cost, delivery and usage before booking."
    },
    relatedGalleries: [
      "order-of-australia-the-school-of-st-jude",
      "tedx-macquarie-uni"
    ],
    relatedDocSlugs: [
      "event-briefing-template",
      "licensing-and-commercial-rights"
    ]
  },
  {
    slug: "top-event-venues-inner-west-sydney",
    title: "Inner West Event Venues and Photography Planning",
    seoTitle: "Inner West Sydney Event Venues | Photography Planning Guide",
    metaDescription: "Plan photography for events in and around Sydney's Inner West, including Carriageworks, Marrickville Town Hall and community venues.",
    category: "venues",
    categoryLabel: "Venues & Locations",
    date: "10 July 2026",
    isoDate: "2026-07-10",
    readTime: "2 min read",
    author: "Nikolas Gannon",
    heroImage: "/galleries/posters/australian-fashion-week-2026.webp",
    summary: "What to consider when planning event photos in halls, warehouses and other local venues.",
    featured: false,
    content: {
      intro: "Events in and around Sydney's Inner West take place in town halls, warehouses, theatres and smaller community spaces. The room layout, available light and event schedule all affect how photography is planned.",
      sections: [
        {
          heading: "Carriageworks (Eveleigh)",
          body: [
            "Carriageworks occupies the former Eveleigh Railway Workshops and offers several spaces for events. Share the specific bay or room you have booked, as the layout matters more than the venue name alone.",
            "Discuss whether you want wide photos of the space, close photos of guests, or both. See <a href='https://carriageworks.com.au/venues/'>Carriageworks' venue information</a> for the available spaces."
          ]
        },
        {
          heading: "Marrickville Industrial Warehouses & Town Hall",
          body: [
            "For a warehouse event in Marrickville, share the address and any room or lighting plans. These spaces vary, so a few reference photos can help with planning.",
            "Marrickville Town Hall is a heritage venue available for performances, community events and celebrations. Check <a href='https://www.innerwest.nsw.gov.au/town-halls-100-people/marrickville-town-hall'>the council's venue page</a> for current hire details and access information."
          ]
        },
        {
          heading: "Newtown & Balmain Heritage Spaces",
          body: [
            "For events in Newtown or Balmain, include the venue address, room name and any outdoor areas in your brief. Discuss a suitable place for group photos before the event, especially if space is limited.",
            "If plans include outdoor photos, agree an indoor option in case the weather changes."
          ]
        }
      ],
      conclusion: "Once you have a venue in mind, share the date, location and what you need photographed. You do not need a finished event plan to start the conversation."
    },
    relatedGalleries: [
      "australian-fashion-week-2026",
      "the-clowns-court",
      "walk-of-faith"
    ],
    relatedDocSlugs: [
      "sydney-venue-lighting-guide"
    ]
  },
  {
    slug: "sydney-corporate-headshots-team-portraits-guide",
    title: "Planning Corporate Headshots and Team Portraits",
    seoTitle: "Corporate Headshots & Workplace Portraits Sydney | Planning Guide",
    metaDescription: "Plan corporate headshots at your Sydney workplace. Confirm staff numbers, backgrounds, scheduling, editing and how the photos will be used.",
    category: "headshots",
    categoryLabel: "Workplace & Portraits",
    date: "28 June 2026",
    isoDate: "2026-08-28",
    readTime: "2 min read",
    author: "Nikolas Gannon",
    heroImage: "/galleries/posters/tedx-macquarie-uni.webp",
    summary: "How to plan staff photos around your workplace, schedule and the look you need.",
    featured: false,
    content: {
      intro: "Workplace headshot sessions usually take 1–3 hours, depending on team size. Start with how many people need photos and a date that suits the team. Share existing staff photos if the new ones need to match.",
      sections: [
        {
          heading: "Choose a Background",
          body: [
            "• A plain background can help keep staff photos consistent. Discuss the colour, space and setup needed before booking.",
            "• Your workplace can also provide the background, such as an office, meeting room or outdoor area. Send reference photos so we can discuss what suits the space.",
            "If you need both individual headshots and group photos, include both in the brief. They need separate time in the schedule."
          ]
        },
        {
          heading: "Plan the Session Times",
          body: [
            "Confirm how much time each person needs before sending calendar invitations. Allow for setup, breaks and anyone who may arrive late.",
            "Choose one person to coordinate the staff list and let the photographer know about access needs or people who are nervous about having their photo taken.",
            "Agree how photos will be selected, what editing is included and when the final files are needed. On-site selection or detailed retouching should be discussed rather than assumed."
          ]
        }
      ],
      conclusion: "A repeatable lighting and framing setup keeps staff portraits consistent across your website, LinkedIn and pitch materials."
    },
    relatedGalleries: [
      "tedx-macquarie-uni",
      "echo-change-future-action-summit-2026"
    ],
    relatedDocSlugs: [
      "turnaround-and-delivery-specs"
    ]
  },
  {
    slug: "live-event-photo-delivery-for-press-social",
    title: "Planning Event Photo Delivery for Press and Social Media",
    seoTitle: "Same-Day Event Photo Delivery Sydney",
    metaDescription: "Need Sydney event photos for a press or social media deadline? Learn how same-day PR selects and media turnaround are planned and delivered.",
    category: "turnaround",
    categoryLabel: "Delivery & Turnaround",
    date: "15 June 2026",
    isoDate: "2026-06-15",
    modifiedDate: "2026-09-14",
    readTime: "2 min read",
    author: "Nikolas Gannon",
    heroImage: "/galleries/posters/sony-foundation-tones-and-i-at-wharf4ward.webp",
    summary: "How on-site transfer and editing can deliver selected images to media and social teams during an event.",
    featured: false,
    content: {
      intro: "If you need event photos for a press or social media deadline, discuss it before booking. Same-day PR selects are available when agreed in advance and operationally possible within the venue schedule.",
      sections: [
        {
          heading: "Plan Any Early Photo Delivery",
          body: [
            "Same-day image delivery is designed for immediate PR distribution, social channels, and wire services. For broader planning, see our <a href='/docs/product-launch-photography-pr-delivery-guide'>product launch PR delivery guide</a> and <a href='/services/corporate-events-conferences'>corporate conference services</a>.",
            "There is a fundamental operational distinction between a small, curated set of 5 to 15 priority selects and the complete edited gallery. Priority selects can be graded and transmitted during event breaks or immediately following key speeches, provided suitable work space and connectivity are available.",
            "Agree on the exact delivery deadline, image quantities, aspect ratios, and designated contact person before the event commences."
          ]
        },
        {
          heading: "What to Include in Your Delivery Request",
          body: [
            "Include the publication deadline, contact details for receiving editors or PR coordinators, and intended channels. Share any technical specs such as minimum resolution or vertical crops required for immediate social stories.",
            "Name the priority subjects or stage announcements needed in the initial transmission. The full, comprehensive gallery will follow within standard delivery timelines once thorough curation and consistency grading are complete."
          ]
        }
      ],
      conclusion: "A clear deadline and confirmed recipient list ensure priority images reach media desks promptly while maintaining full editorial quality."
    },
    relatedGalleries: [
      "sony-foundation-tones-and-i-at-wharf4ward",
      "australian-fashion-week-2026"
    ],
    relatedDocSlugs: [
      "turnaround-and-delivery-specs",
      "product-launch-photography-pr-delivery-guide"
    ]
  },
  {
    slug: "hiring-freelance-event-photographers-sydney-checklist",
    title: "Hiring an Event Photographer in Sydney",
    seoTitle: "Hiring an Event Photographer Sydney | 7 Things to Check",
    metaDescription: "Seven things to check before hiring a Sydney event photographer, including relevant work, coverage, backup plans, insurance, usage and delivery.",
    category: "operations",
    categoryLabel: "Operations & Standards",
    date: "01 June 2026",
    isoDate: "2026-06-01",
    readTime: "2 min read",
    author: "Nikolas Gannon",
    heroImage: "/galleries/global-impact-summit/09.webp",
    summary: "Questions to help you choose a photographer and understand what is included.",
    featured: false,
    content: {
      intro: "Start by looking at work from events similar to yours. Then check the practical details, including who will photograph the event, what is included and when you will receive the photos.",
      sections: [
        {
          heading: "Seven Things to Check Before Booking",
          body: [
            "1. Relevant work. Can you see photos from similar events, including the lighting and group sizes you expect?",
            "2. Insurance. Can the photographer provide the documents your venue requires?",
            "3. Backup plans. How are photos backed up, and what happens if equipment fails?",
            "4. Photo usage. Does the licence cover your intended uses, and are there time limits or additional fees?",
            "5. Your photographer. Who will photograph the event, and who should you contact on the day?",
            "6. Coverage and cost. Are the hours, locations, editing and any extra charges clear in the quote?",
            "7. Delivery. Have you agreed when the photos will arrive and how you will receive them?"
          ]
        }
      ],
      conclusion: "Checking these seven points will show whether the photographer is ready for the venue, schedule and delivery requirements."
    },
    relatedGalleries: [
      "global-impact-summit",
      "tedx-macquarie-uni"
    ],
    relatedDocSlugs: [
      "pricing-and-rates-guide",
      "licensing-and-commercial-rights"
    ]
  }
];

export const BLOG_SERVICE_LINKS: Record<string, string> = {
  "corporate-event-photography-pricing-guide-sydney":
    "corporate-events-conferences",
  "icc-sydney-event-photography-guide": "corporate-events-conferences",
  "how-to-write-an-event-photography-brief":
    "corporate-events-conferences",
  "top-event-venues-inner-west-sydney": "corporate-events-conferences",
  "sydney-corporate-headshots-team-portraits-guide":
    "workplace-portraits-headshots",
  "live-event-photo-delivery-for-press-social":
    "corporate-events-conferences",
  "hiring-freelance-event-photographers-sydney-checklist":
    "corporate-events-conferences",
};

export function getFeaturedBlogPosts(): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.featured);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
