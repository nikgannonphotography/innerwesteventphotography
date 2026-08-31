export interface BlogPost {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  category: "pricing" | "venues" | "briefing" | "headshots" | "operations" | "turnaround";
  categoryLabel: string;
  date: string;
  isoDate: string;
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
    seoTitle: "Corporate Event Photography Pricing Sydney | Rates & Costs",
    metaDescription: "Sydney corporate event photography pricing across hourly, half-day and full-day coverage, including licensing, delivery and additional photographers.",
    category: "pricing",
    categoryLabel: "Pricing & Rates",
    date: "14 August 2026",
    isoDate: "2026-08-14",
    readTime: "2 min read",
    author: "Nikolas Gannon",
    heroImage: "/galleries/posters/tedx-macquarie-uni.webp",
    summary: "What affects an event photography quote, and what to confirm about coverage, editing, delivery and usage.",
    featured: true,
    content: {
      intro: "Corporate event photography in Sydney may be priced by the hour, half day, full day or project. This guide explains the common structures, what may be included and what to confirm before approving a quote.",
      sections: [
        {
          heading: "What Affects Your Photography Quote",
          body: [
            "The cost depends on the time needed, the event schedule, locations and the photos you want. Share what you know so we can quote for your event.",
            "These are planning points, not fixed packages. Your quote will state the agreed hours and inclusions."
          ],
          tableData: {
            headers: ["Event", "Schedule to Share", "What May Affect Cost", "What to Confirm"],
            rows: [
              ["Short Event", "Start and finish times", "Location and required photos", "Coverage hours and editing"],
              ["Half-Day Event", "Sessions and key moments", "Travel and changes of location", "Coverage, files and delivery"],
              ["Full-Day Conference", "Run sheet and room locations", "Overlapping sessions and deadlines", "What can be covered and when photos arrive"],
              ["Several Days", "A schedule for each day", "Venues, travel and delivery needs", "Scope and cost for the whole project"]
            ]
          }
        },
        {
          heading: "Key Cost Drivers to Consider in Your Brief",
          body: [
            "Overlapping sessions need planning. One photographer cannot be in two rooms at once, so tell us which moments matter most and whether more coverage is needed.",
            "If you need photos for a press or social media deadline, discuss the timing before booking so we can confirm what is possible.",
            "Check the permitted uses, users and duration of your photo licence in the quote. Do not assume every use is included."
          ],
          callout: "Confirm that the photographer can provide a current Certificate of Currency when the venue requires it, and ask how images are backed up during the event."
        },
        {
          heading: "Common Questions on Sydney Event Photography Rates",
          body: [
            "Here are answers to frequent questions regarding quoting, overtime, and delivery deadlines."
          ],
          faqList: [
            {
              q: "Why do rates vary so widely between photographers?",
              a: "Rates reflect experience, equipment backup, editing, insurance and delivery speed. Ask each photographer to state what is included in writing."
            },
            {
              q: "Are editing and colour grading included in the day rate?",
              a: "Check what editing is included in your quote. If you need detailed retouching or particular file versions, discuss these before booking."
            },
            {
              q: "What happens if our event runs over schedule?",
              a: "Confirm how extra time will be handled before booking. Any extension depends on availability and the agreed cost."
            }
          ]
        }
      ],
      conclusion: "A clear brief with defined deliverables, timing and shot priorities makes quotes easier to compare."
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
    seoTitle: "ICC Sydney Event Photography Guide | Darling Harbour Venue Tips",
    metaDescription: "Practical guide to photographing conferences, summits, and exhibitions at ICC Sydney in Darling Harbour. Loading dock logistics, lighting, and stage setup.",
    category: "venues",
    categoryLabel: "Venue Production",
    date: "02 August 2026",
    isoDate: "2026-08-02",
    readTime: "2 min read",
    author: "Nikolas Gannon",
    heroImage: "/galleries/posters/echo-change-future-action-summit-2026.webp",
    summary: "What to share with your photographer before an ICC Sydney event, including rooms, access, lighting and the schedule.",
    featured: true,
    content: {
      intro: "For event photography at ICC Sydney in Darling Harbour, start with the room names and run sheet. This helps plan the route between sessions, where to photograph speakers and when there is time for group photos.",
      sections: [
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
    seoTitle: "How to Write an Event Photography Brief | Checklist",
    metaDescription: "Write a simple event photography brief with dates, venues, key photos and delivery needs. Includes an editable Word template for larger projects.",
    category: "briefing",
    categoryLabel: "Briefing & Planning",
    date: "22 July 2026",
    isoDate: "2026-07-22",
    readTime: "2 min read",
    author: "Nikolas Gannon",
    heroImage: "/galleries/posters/order-of-australia-the-school-of-st-jude.webp",
    summary: "The details to share with your photographer, from the schedule to the photos you need most.",
    featured: false,
    content: {
      intro: "A photography brief can be short. Tell us what is happening, where and when, and which photos matter most. An existing run sheet is fine, and anything undecided can stay as TBC.",
      sections: [
        {
          heading: "What to Include in an Event Brief",
          body: [
            "Start with the dates, venues and requested photography hours. For larger projects, list each day separately and flag sessions happening at the same time in different places.",
            "Add a short list of the photos you need. Include names, times and reference photos where useful.",
            "Include a contact for planning and someone we can reach on the day. One person can cover both.",
            "Tell us when you need the photos and how they will be used. Mention venue restrictions or anyone who should not be photographed."
          ]
        },
        {
          heading: "Put the Most Important Photos First",
          body: [
            "Schedules can change. A short priority list helps your photographer understand what matters if two moments happen at once.",
            "You do not need a detailed system. List the people, activities or details you most want photographed and add anything that would be useful to know."
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
      intro: "For corporate headshots at your Sydney workplace, start with the number of people, where the photos will be used and a date that suits the team. Share existing staff photos if the new ones need to match.",
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
    seoTitle: "Fast PR Photo Delivery for Live Events | Media Turnaround Guide",
    metaDescription: "Need Sydney event photos for a press or social media deadline? Plan the timing, photo selection, recipients and delivery requirements before booking.",
    category: "turnaround",
    categoryLabel: "Delivery & Turnaround",
    date: "15 June 2026",
    isoDate: "2026-06-15",
    readTime: "2 min read",
    author: "Nikolas Gannon",
    heroImage: "/galleries/posters/sony-foundation-tones-and-i-at-wharf4ward.webp",
    summary: "How on-site transfer and editing can deliver selected images to media and social teams during an event.",
    featured: false,
    content: {
      intro: "If you need event photos for a press or social media deadline, discuss it before booking. Early delivery depends on the schedule and time available for selecting and editing photos.",
      sections: [
        {
          heading: "Plan Any Early Photo Delivery",
          body: [
            "Some events allow time to select and edit a small number of photos on site. This needs to be agreed with the photographer in advance.",
            "Agree on the deadline, number of photos and who will receive them. A delivery method and schedule should be confirmed before the event."
          ]
        },
        {
          heading: "What to Include in Your Request",
          body: [
            "Include the deadline, who needs the photos and where they will be used. Share any file requirements from the publication or social media team.",
            "Name the people or moments needed for the first selection. Confirm when the full gallery will follow, as an early selection is only part of the delivery."
          ]
        }
      ],
      conclusion: "A clear deadline helps your photographer confirm what is possible before you book."
    },
    relatedGalleries: [
      "sony-foundation-tones-and-i-at-wharf4ward",
      "australian-fashion-week-2026"
    ],
    relatedDocSlugs: [
      "turnaround-and-delivery-specs"
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
  "top-event-venues-inner-west-sydney": "brand-campaigns-activations",
  "sydney-corporate-headshots-team-portraits-guide":
    "workplace-portraits-headshots",
  "live-event-photo-delivery-for-press-social":
    "brand-campaigns-activations",
  "hiring-freelance-event-photographers-sydney-checklist":
    "corporate-events-conferences",
};

export function getFeaturedBlogPosts(): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.featured);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
