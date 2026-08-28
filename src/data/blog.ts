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
    readTime: "7 min read",
    author: "Nikolas Gannon",
    heroImage: "/galleries/_posters/tedx-macquarie-uni.webp",
    summary: "A transparent breakdown of Sydney commercial event photography rates, standard inclusions, overtime charges, and licensing models.",
    featured: true,
    content: {
      intro: "Corporate event photography in Sydney may be priced by the hour, half day, full day or project. This guide explains the common structures, what may be included and what to confirm before approving a quote.",
      sections: [
        {
          heading: "Standard Sydney Event Photography Rates",
          body: [
            "Commercial event photographers in Sydney generally price by half-day (up to 4 hours) or full-day (up to 8 hours) blocks, with hourly rates typically reserved for short assignments (2-hour minimum).",
            "The table below shows common pricing structures used for Sydney event photography:"
          ],
          tableData: {
            headers: ["Coverage Tier", "Duration", "Typical Price Range (AUD)", "Standard Inclusions"],
            rows: [
              ["Short Assignment", "2 Hours", "$650 – $950", "1 Photographer, 80–120 retouched frames, standard web/PR licence"],
              ["Half-Day Coverage", "Up to 4 Hours", "$1,200 – $1,800", "1 Photographer, 200–350 retouched frames, full commercial licence"],
              ["Full-Day Conference", "Up to 8 Hours", "$2,200 – $3,400", "1 Lead Photographer, 400–700 frames, rapid PR highlight pack"],
              ["Multi-Day Summit", "2–3 Days", "$4,000 – $7,500+", "Lead photographer, additional photographer option, daily highlights, full gallery"]
            ]
          }
        },
        {
          heading: "Key Cost Drivers to Consider in Your Brief",
          body: [
            "1. Multi-Track & Concurrent Breakouts: When an event operates across 3 or more concurrent breakout rooms, a single photographer cannot cover all speakers. Factoring a second shooter ($150–$220/hr) is essential for full coverage.",
            "2. Fast PR Turnaround: If your social media or media relations team requires hero selects on the night or early next morning, ensure this rapid turnaround is built into the agreement.",
            "3. Commercial Usage Rights: Professional corporate assignments should include perpetual, royalty-free commercial usage for your company's marketing, PR, and annual reports without recurring renewal fees."
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
              a: "Yes. All professional quotes from established studios include individual image culling, exposure balancing, colour grading, and delivery via digital portal."
            },
            {
              q: "What happens if our event runs over schedule?",
              a: "Overtime is billed in 30 or 60-minute increments, agreed before call time. Standard overtime rates range from $150 to $250 per hour."
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
    title: "Photographing at ICC Sydney: Production Guide for Event Managers",
    seoTitle: "ICC Sydney Event Photography Guide | Darling Harbour Venue Tips",
    metaDescription: "Practical guide to photographing conferences, summits, and exhibitions at ICC Sydney in Darling Harbour. Loading dock logistics, lighting, and stage setup.",
    category: "venues",
    categoryLabel: "Venue Production",
    date: "02 August 2026",
    isoDate: "2026-08-02",
    readTime: "6 min read",
    author: "Nikolas Gannon",
    heroImage: "/galleries/_posters/echo-change-future-action-summit-2026.webp",
    summary: "How to plan photography logistics at International Convention Centre Sydney, including room scale, low ambient lighting, and contractor induction.",
    featured: true,
    content: {
      intro: "As Australia's premier convention and exhibition centre, ICC Sydney hosts the country's largest corporate and trade events. Documenting assignments in this venue requires understanding its cavernous scale, specific AV lighting setups, and strict contractor protocols.",
      sections: [
        {
          heading: "Navigating Scale: Grand Ballroom vs. Exhibition Halls",
          body: [
            "ICC Sydney features distinct spaces requiring tailored photographic strategies:",
            "• The Grand Ballroom: High ceilings and sophisticated stage rigging allow dramatic wide-angle room shots. Stage lighting can be high-contrast, requiring fast prime lenses (f/1.4–f/2.8) and quiet electronic shutters during addresses.",
            "• Exhibition Centre: Spanning multiple levels, documenting tradeshow booths requires balanced fill lighting to manage overhead fluorescents and illuminated display screens.",
            "• Pyrmont Theatres: Steeper raked seating demands elevated telephoto positioning from the central sound desk or side aisles to photograph speaker expressions without obstructing sightlines."
          ]
        },
        {
          heading: "Contractor Compliance & Venue Inductions",
          body: [
            "ICC Sydney enforces strict venue safety standards. Before arriving on-site, event managers must ensure photographers:",
            "• Provide a current Certificate of Currency that meets the venue's requirements.",
            "• Have completed the ICC contractor induction portal if loading via the Darling Drive loading dock.",
            "• Coordinate with in-house AV teams (Encore Event Technologies) to verify stage lighting white balance."
          ],
          callout: "Pro tip: Brief your photographer to capture the exterior Darling Harbour forecourt and convention facade at twilight to anchor the visual scale of your event."
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
    metaDescription: "Step-by-step guide to writing a clear, effective event photography brief. Avoid missed shots and align your photographer with sponsor priorities.",
    category: "briefing",
    categoryLabel: "Briefing & Planning",
    date: "22 July 2026",
    isoDate: "2026-07-22",
    readTime: "5 min read",
    author: "Nikolas Gannon",
    heroImage: "/galleries/_posters/order-of-australia-the-school-of-st-jude.webp",
    summary: "The four parts of a clear photography brief, covering VIPs, sponsors, timing and delivery.",
    featured: false,
    content: {
      intro: "A vague photography brief leads to missed coverage, unphotographed sponsors, and generic albums. A structured brief aligns expectations, establishes shot hierarchies, and gives your photographer the operational clarity needed on event day.",
      sections: [
        {
          heading: "What to Include in an Event Brief",
          body: [
            "An effective brief contains four core components:",
            "1. Event Context & Run of Show: The complete timeline with precise stage times, keynote entrances, award presentations, and curtain calls.",
            "2. Tiered Shot Hierarchy: Classifying shot requests into Tier 1 (Mandatory Keynotes/Awards), Tier 2 (Sponsor & Exhibition Activations), and Tier 3 (Ambient Networking & Room Energy).",
            "3. Key Stakeholder Identification: Named VIP list with reference photos or titles so the photographer can proactively locate executives on the floor.",
            "4. Technical & Turnaround Specifications: Required delivery deadlines (e.g. 20 hero selects by 10 PM for press distribution, master gallery by Friday)."
          ]
        },
        {
          heading: "Why Shot Hierarchies Matter",
          body: [
            "During live events, schedules shift. A tiered shot list ensures your photographer prioritises Tier 1 requirements even if stage timings shift unexpectedly.",
            "This structure guarantees that sponsor obligations and board executive portraits are secured before general networking shots."
          ]
        }
      ],
      conclusion: "Taking 20 minutes to structure your brief ensures your photo library delivers high ROI across all marketing, donor, and corporate channels."
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
    title: "Top Event Venues in the Inner West for Corporate & Cultural Events",
    seoTitle: "Top Event Venues Inner West Sydney | Industrial & Cultural Spaces",
    metaDescription: "Explore the best event and conference venues across Sydney's Inner West: Carriageworks, Marrickville Town Hall, industrial warehouses, and community halls.",
    category: "venues",
    categoryLabel: "Venues & Locations",
    date: "10 July 2026",
    isoDate: "2026-07-10",
    readTime: "6 min read",
    author: "Nikolas Gannon",
    heroImage: "/galleries/_posters/australian-fashion-week-2026.webp",
    summary: "A photographer's guide to the unique architecture, lighting, and spatial characteristics of Inner West Sydney venues.",
    featured: false,
    content: {
      intro: "Sydney's Inner West offers character-rich venues that stand apart from traditional CBD hotel ballrooms. From repurposed industrial rail yards to heritage municipal halls, these spaces provide distinct backdrops for product launches, cultural assemblies, and creative conferences.",
      sections: [
        {
          heading: "Carriageworks (Eveleigh)",
          body: [
            "Australia's largest contemporary multi-arts centre features expansive 19th-century industrial architecture with soaring timber trusses, raw brickwork, and polished concrete floors.",
            "Photographic Note: The vast scale of Bays 17–24 requires strong directional lighting and careful framing to maintain human intimacy against monumental heritage architecture."
          ]
        },
        {
          heading: "Marrickville Industrial Warehouses & Town Hall",
          body: [
            "Marrickville's creative warehouse spaces are ideal for brand pop-ups and immersive activations. The historic Marrickville Town Hall offers grand classical proportions and wooden parquet flooring.",
            "Photographic Note: Mixed ambient lighting from skylights and warm festoons requires colour-balanced fill flash to render skin tones accurately."
          ]
        },
        {
          heading: "Newtown & Balmain Heritage Spaces",
          body: [
            "From historic theatre spaces in Newtown to waterfront venues in Balmain, these venues offer architectural warmth for milestone celebrations and community galas."
          ]
        }
      ],
      conclusion: "Choosing an Inner West venue brings distinct Sydney character to your event. Ensure your photographer is experienced with industrial and heritage ambient light."
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
    title: "Corporate Headshots & Team Portraits: Planning On-Site Sessions",
    seoTitle: "Corporate Headshots & Workplace Portraits Sydney | Studio Guide",
    metaDescription: "How to organise on-site corporate headshots for 10 to 200 staff, including mobile studio setup, scheduling and brand consistency.",
    category: "headshots",
    categoryLabel: "Workplace & Portraits",
    date: "28 June 2026",
    isoDate: "2026-08-28",
    readTime: "5 min read",
    author: "Nikolas Gannon",
    heroImage: "/galleries/_posters/tedx-macquarie-uni.webp",
    summary: "Structuring workplace headshot days to minimise business downtime while delivering consistent, confident team portraits.",
    featured: false,
    content: {
      intro: "Coordinating executive headshots and team portraits across an organisation can feel daunting. With structured scheduling and professional on-site lighting, an entire office can be updated with minimal operational interruption.",
      sections: [
        {
          heading: "Studio Backdrop vs. Environmental Workplace Portraits",
          body: [
            "• Studio Backdrop (White/Grey/Brand Colour): Keeps the visual treatment consistent across offices and future staff sessions.",
            "• Environmental Office Staging: Uses your natural architectural workspace, boardroom, or city views as a soft-focus background. This creates dynamic workplace imagery ideal for leadership teams and marketing pages."
          ]
        },
        {
          heading: "Scheduling for Peak Efficiency",
          body: [
            "We recommend scheduling 5 to 10-minute slots per team member. Tethered live viewing on a monitor allows staff to review and select their preferred frame on the spot, eliminating lengthy post-shoot review cycles."
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
    title: "Fast PR & Social Media Photo Delivery: Live On-Site Workflows",
    seoTitle: "Fast PR Photo Delivery for Live Events | Media Turnaround Guide",
    metaDescription: "How rapid on-site photo delivery works for Sydney conferences, galas, and brand activations. Real-time Wi-Fi camera tethering and press turnaround.",
    category: "turnaround",
    categoryLabel: "Delivery & Turnaround",
    date: "15 June 2026",
    isoDate: "2026-06-15",
    readTime: "4 min read",
    author: "Nikolas Gannon",
    heroImage: "/galleries/_posters/sony-foundation-tones-and-i-at-wharf4ward.webp",
    summary: "How on-site transfer and editing can deliver selected images to media and social teams during an event.",
    featured: false,
    content: {
      intro: "In modern corporate communications, waiting a week for event photos means missing the news cycle. Live on-site delivery ensures your PR team supplies trending LinkedIn feeds and morning press wires while interest is at its peak.",
      sections: [
        {
          heading: "How Fast PR Selects Work in Practice",
          body: [
            "Using wireless camera transmission or quick intermission ingest, the lead photographer selects and colour-grades 15–30 hero frames on-site.",
            "Keynote and award presentations are transmitted directly to your PR or social media manager via a dedicated cloud folder or private gallery within 2 to 12 hours of the session."
          ]
        },
        {
          heading: "What to Include in Your Rapid Delivery Request",
          body: [
            "Specify the exact recipients, preferred resolution (full-res for print press vs. 1080p for social), and target deadline in your initial brief."
          ]
        }
      ],
      conclusion: "Rapid turnaround turns your event photography into an active PR engine rather than a retrospective archive."
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
    title: "Hiring an Event Photographer in Sydney: Due Diligence Checklist",
    seoTitle: "Hiring an Event Photographer Sydney | 7-Point Due Diligence Checklist",
    metaDescription: "Essential 7-point checklist for hiring corporate and commercial event photographers in Sydney. Insurance, backup gear, copyright, and delivery terms.",
    category: "operations",
    categoryLabel: "Operations & Standards",
    date: "01 June 2026",
    isoDate: "2026-06-01",
    readTime: "5 min read",
    author: "Nikolas Gannon",
    heroImage: "/galleries/_posters/nrl-grand-final-2019.webp",
    summary: "Protect your event from data loss, poor lighting execution, and legal ambiguities with this 7-point contractor checklist.",
    featured: false,
    content: {
      intro: "Hiring an event photographer involves more than checking an online portfolio. Corporate event managers need assurance of technical reliability, risk management, and commercial accountability.",
      sections: [
        {
          heading: "The 7-Point Due Diligence Checklist",
          body: [
            "1. Dual-Card Recording: Does the photographer shoot on cameras with dual memory card slots recording simultaneously? (Essential for preventing card corruption data loss).",
            "2. Public Liability Insurance: Can the photographer provide a current Certificate of Currency that meets the venue's requirements?",
            "3. On-Site Redundancy: Are backup camera bodies, flashes, and lenses carried in the event bag?",
            "4. Transparent Commercial Licensing: Are full commercial usage rights included in perpetuity without hidden renewal fees?",
            "5. Accountable Lead: Will the person quoting your project be the lead operator on-site?",
            "6. Low-Light Stage Capability: Does the portfolio demonstrate crisp results under theatrical lighting without harsh direct flash?",
            "7. Fast Turnaround Commitments: Are agreed delivery dates stated in writing in the service proposal?"
          ]
        }
      ],
      conclusion: "Checking these seven points will show whether the photographer is ready for the venue, schedule and delivery requirements."
    },
    relatedGalleries: [
      "nrl-grand-final-2019",
      "latrell-mitchell-daniel-tupou-2019"
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
