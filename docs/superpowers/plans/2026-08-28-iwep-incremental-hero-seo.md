# IWEP Incremental Hero and SEO Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Improve the IWEP homepage hero and search coverage without replacing the existing Astro, Lumos, Stacki, data, route, or visual architecture.

**Architecture:** Keep every existing route and typed data module. Build the full-viewport hero from current Lumos components, extend the current guide array with six distinct entries, improve the existing docs templates, and add explicit relationships to existing page data. Use static rendering throughout.

**Tech Stack:** Astro 7, TypeScript 6, Lumos for Astro, Stacki-compatible component states, plain CSS, Node 22

**Spec:** `docs/superpowers/specs/2026-08-28-iwep-hero-seo-guides-design.md`

## Global Constraints

- Keep the existing Astro, Lumos, and Stacki structure.
- Do not introduce a CMS, content collection, framework, dependency, or route change.
- Preserve every existing public URL.
- Keep the current Inter typography and project colour tokens.
- Avoid gradients, shadows, glass effects, ornamental icons, and broad homepage redesign.
- Do not add supplier, venue, pricing, insurance, licensing, review, or relationship claims without existing evidence.
- Keep homepage section count and lower-page density unchanged.
- Use natural internal link labels without encoded keyword ratios.
- Preserve Stacki designer classes and preview behaviour in interactive components.

---

### Task 1: Record the current build baseline

**Files:**

- Create `scripts/verify-static-site.mjs`
- Modify `package.json`

**Interfaces:**

- Consumes built HTML under `dist/`
- Produces the command `npm run verify` and reusable functions `pageFile(route)`, `readPage(route)`, and `assertRoute(route)`

- [ ] **Step 1: Build the unchanged site**

Run `npm run check && npm run build`

Expected result is zero Astro diagnostics and a successful static build.

- [ ] **Step 2: Add the static verification script**

Create a dependency-free Node script with these checks.

```js
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const dist = join(root, "dist");

export const pageFile = (route) =>
  route === "/"
    ? join(dist, "index.html")
    : join(dist, route.replace(/^\//, ""), "index.html");

export const assertRoute = (route) =>
  assert.ok(existsSync(pageFile(route)), `Missing built route ${route}`);

export const readPage = (route) => {
  assertRoute(route);
  return readFileSync(pageFile(route), "utf8");
};

for (const route of [
  "/",
  "/docs/",
  "/docs/event-briefing-template/",
  "/docs/pricing-and-rates-guide/",
  "/docs/turnaround-and-delivery-specs/",
  "/docs/licensing-and-commercial-rights/",
  "/docs/sydney-venue-lighting-guide/",
]) {
  assertRoute(route);
}

console.log("Static route baseline passed");
```

- [ ] **Step 3: Add the verification command**

Add this script without changing existing commands.

```json
"verify": "node scripts/verify-static-site.mjs"
```

- [ ] **Step 4: Run the baseline verification**

Run `npm run verify`

Expected output is `Static route baseline passed`.

- [ ] **Step 5: Commit the baseline guard**

```bash
git add package.json scripts/verify-static-site.mjs
git commit -m "test: add IWEP static route verification"
```

---

### Task 2: Make the homepage hero fill the first viewport

**Files:**

- Modify `src/pages/index.astro`
- Modify `scripts/verify-static-site.mjs`

**Interfaces:**

- Consumes `Layout.overlap`, `Section.fullHeight`, `Img`, and `selectedWork[0].posterImage`
- Produces the stable selectors `.home-hero`, `.home-hero_media`, `.home-hero_scrim`, and `.home-hero_content`

- [ ] **Step 1: Add failing hero assertions**

Append these checks to `scripts/verify-static-site.mjs`.

```js
const home = readPage("/");
assert.match(home, /class="[^"]*home-hero/);
assert.match(home, /class="[^"]*home-hero_media/);
assert.match(home, /fetchpriority="high"/i);
```

Run `npm run verify`.

Expected result is failure because `.home-hero` is absent.

- [ ] **Step 2: Replace only the current hero markup**

Set `<Layout overlap={true}>`. Keep every section after the hero untouched. Replace the current breakout hero with this structure using the existing copy and buttons.

```astro
<Section
  id="hero"
  class="home-hero"
  containerClass="home-hero_content"
  paddingTop="navoverlap"
  paddingBottom="even"
  theme="dark"
  align="end"
  fullHeight={true}
>
  <Img
    slot="background"
    src={selectedWork[0]?.posterImage}
    alt=""
    loading="eager"
    fetchPriority="high"
    class="home-hero_media object-fit-cover"
  />
  <div slot="background" class="home-hero_scrim"></div>
  <ContentWrapper>
    <Eyebrow variant="tag">SYDNEY EVENT PHOTOGRAPHY</Eyebrow>
    <Heading variant="h1" maxWidth={20} tag="h1">
      Event photography coverage built around your brief
    </Heading>
    <Paragraph variant="large" maxWidth={34}>
      Clear, documentary coverage for conferences, galas, campaigns,
      community events and workplace teams across Sydney.
    </Paragraph>
    <ButtonWrapper marginTop="5">
      <Button element="link" href="/contact">Send a brief</Button>
      <Button element="link" href="#work" variant="link">
        View selected work
      </Button>
    </ButtonWrapper>
  </ContentWrapper>
</Section>
```

- [ ] **Step 3: Add page-scoped hero styling**

Add a scoped global layer at the end of `src/pages/index.astro`.

```astro
<style is:global>
  @layer components {
    .home-hero {
      overflow: clip;
      isolation: isolate;
    }

    .home-hero_media {
      z-index: -2;
      object-position: center 42%;
    }

    .home-hero_scrim {
      z-index: -1;
      background: rgb(31 29 30 / 58%);
    }

    .home-hero_content {
      justify-content: end;
    }

    .home-hero_content .layout {
      max-width: 48rem;
    }

    @media (width < 48rem) {
      .home-hero_media {
        object-position: 58% center;
      }
    }
  }
</style>
```

Use a flat scrim, not a gradient. If the selected image has an unsuitable focal point, change only `object-position` after screenshot review.

- [ ] **Step 4: Verify the hero build**

Run `npm run check && npm run build && npm run verify`.

Expected result is all commands passing.

- [ ] **Step 5: Capture desktop and mobile screenshots**

Start the server with `astro dev --background`. Capture `/` at about 1440 by 1000 and 390 by 844. Confirm the first viewport contains the navigation, hero copy, buttons, and photograph without exposing the next section above the fold.

- [ ] **Step 6: Commit the hero**

```bash
git add src/pages/index.astro scripts/verify-static-site.mjs
git commit -m "feat: give IWEP a full-viewport homepage hero"
```

---

### Task 3: Extend the existing guide data without migration

**Files:**

- Modify `src/data/docs.ts`
- Modify `scripts/verify-static-site.mjs`

**Interfaces:**

- Consumes the existing `DocGuide`, `DOCS`, and static `[slug]` route
- Produces `DocGuide.searchIntent`, `seoTitle`, `metaDescription`, `publishedDate`, `relatedLocations`, `relatedGalleries`, and `relatedGuides`

- [ ] **Step 1: Add failing route assertions for the six new guides**

Add these routes to the route array in `scripts/verify-static-site.mjs`.

```js
"/docs/sydney-conference-photography-planning-checklist/",
"/docs/corporate-gala-dinner-photography-shot-list/",
"/docs/brand-activation-photography-production-guide/",
"/docs/product-launch-photography-pr-delivery-guide/",
"/docs/on-site-corporate-headshots-planning-guide/",
"/docs/not-for-profit-charity-event-photography-guide/",
```

Run `npm run build && npm run verify`.

Expected result is failure on the first missing guide route.

- [ ] **Step 2: Extend the guide interface**

Add these fields to `DocGuide`.

```ts
searchIntent: "planning" | "cost" | "delivery" | "rights" | "venue";
seoTitle: string;
metaDescription: string;
publishedDate: string;
relatedLocations: string[];
relatedGalleries: string[];
relatedGuides: string[];
```

Populate all five existing entries. Use ISO date `2026-08-28` for `publishedDate`. Keep each existing `lastUpdated` value and URL.

- [ ] **Step 3: Add six guide entries with distinct search jobs**

Use these exact identifiers and relationships.

| Slug | Category | Intent | Primary service | Location links |
| --- | --- | --- | --- | --- |
| `sydney-conference-photography-planning-checklist` | `briefing` | `planning` | `corporate-events-conferences` | `sydney-cbd`, `western-sydney` |
| `corporate-gala-dinner-photography-shot-list` | `briefing` | `planning` | `corporate-events-conferences` | `sydney-cbd` |
| `brand-activation-photography-production-guide` | `briefing` | `planning` | `brand-campaigns-activations` | `inner-west`, `sydney-cbd` |
| `product-launch-photography-pr-delivery-guide` | `delivery` | `delivery` | `brand-campaigns-activations` | `sydney-cbd` |
| `on-site-corporate-headshots-planning-guide` | `briefing` | `planning` | `workplace-portraits-headshots` | `sydney-cbd`, `north-shore` |
| `not-for-profit-charity-event-photography-guide` | `briefing` | `planning` | `not-for-profit-community` | `inner-west`, `sydney-cbd` |

Each entry must contain three or four substantial sections. Use these heading sets.

```text
Conference checklist
Coverage priorities before the run sheet is final
Rooms, stages, speakers and concurrent sessions
Sponsor, media and delivery requirements
Final production checklist

Gala dinner shot list
Build the shot hierarchy
Arrivals, room, stage and awards
Sponsors, guests and sensitive moments
Delivery after the event

Brand activation production
Define the campaign use before the event
Plan customer interaction and brand visibility
Coordinate agency, venue and production teams
Build a usable campaign image library

Product launch and PR delivery
Work backwards from publication deadlines
Set priority selects and approval contacts
Plan capture, ingest and delivery on site
Protect quality during fast turnaround

On-site team headshots
Choose a consistent visual brief
Plan space, light and staff flow
Build the schedule around the team
Prepare files for directories and LinkedIn

Not-for-profit and charity events
Translate the mission into a photography brief
Handle dignity, consent and sensitive situations
Balance speakers, supporters and community
Plan communications delivery
```

Do not state fixed rates, guaranteed delivery times, preferred-supplier status, or venue access. Reuse only gallery slugs present in `GALLERIES`.

- [ ] **Step 4: Type-check and build all eleven guides**

Run `npm run check && npm run build && npm run verify`.

Expected result is zero Astro diagnostics and all eleven docs routes present.

- [ ] **Step 5: Commit the guide catalogue**

```bash
git add src/data/docs.ts scripts/verify-static-site.mjs
git commit -m "feat: expand IWEP production guides"
```

---

### Task 4: Improve the docs hub and guide page

**Files:**

- Modify `src/pages/docs/index.astro`
- Modify `src/pages/docs/[slug].astro`
- Modify `scripts/verify-static-site.mjs`

**Interfaces:**

- Consumes `DOCS`, `DocGuide.category`, and explicit relationship arrays
- Produces topic sections on `/docs/`, visible breadcrumbs, guide Article JSON-LD, and deterministic related guides

- [ ] **Step 1: Add failing guide page assertions**

Append these checks.

```js
const briefingGuide = readPage("/docs/event-briefing-template/");
assert.match(briefingGuide, /href="\/docs"/);
assert.match(briefingGuide, /"@type":"Article"/);
assert.match(briefingGuide, /"@type":"BreadcrumbList"/);
```

Run `npm run verify`.

Expected result is failure because the current back link points to `/blog` and guide schema is absent.

- [ ] **Step 2: Group the docs index by existing categories**

Define an ordered category list in `src/pages/docs/index.astro`.

```ts
const categoryOrder = [
  ["briefing", "Briefing and production planning"],
  ["pricing", "Pricing and scoping"],
  ["delivery", "Delivery and workflow"],
  ["licensing", "Licensing and usage"],
  ["venues", "Venue production"],
] as const;
```

Render only non-empty groups. Keep the existing page introduction, dark briefing feature, and final contact section. Replace the single undifferentiated grid with one heading and card grid per non-empty group.

- [ ] **Step 3: Correct guide navigation and metadata**

On `src/pages/docs/[slug].astro` make these exact changes.

- Back link goes to `/docs`
- All guides link goes to `/docs`
- Layout title uses `doc.seoTitle`
- Layout description uses `doc.metaDescription`
- Related guides come from `doc.relatedGuides`, then same-category fallback in source order

Use a `Map` for lookup and exclude the current slug.

```ts
const docsBySlug = new Map(DOCS.map((item) => [item.slug, item]));
const configuredDocs = doc.relatedGuides
  .map((slug) => docsBySlug.get(slug))
  .filter((item): item is DocGuide => Boolean(item));
const fallbackDocs = DOCS.filter(
  (item) =>
    item.slug !== doc.slug &&
    item.category === doc.category &&
    !configuredDocs.some((configured) => configured.slug === item.slug),
);
const otherDocs = [...configuredDocs, ...fallbackDocs].slice(0, 3);
```

- [ ] **Step 4: Add guide and breadcrumb schema**

Build two objects and emit one JSON-LD graph within the guide page.

```ts
const articleSchema = {
  "@type": "Article",
  headline: doc.title,
  description: doc.metaDescription,
  datePublished: doc.publishedDate,
  dateModified: doc.publishedDate,
  mainEntityOfPage: `${SITE_URL}/docs/${doc.slug}`,
  author: { "@type": "Person", name: "Nikolas Gannon" },
  publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
};

const breadcrumbSchema = {
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Docs and guides", item: `${SITE_URL}/docs` },
    { "@type": "ListItem", position: 3, name: doc.title, item: `${SITE_URL}/docs/${doc.slug}` },
  ],
};

const guideSchema = {
  "@context": "https://schema.org",
  "@graph": [articleSchema, breadcrumbSchema],
};
```

- [ ] **Step 5: Verify the docs experience**

Run `npm run check && npm run build && npm run verify`.

Capture `/docs` and one guide at desktop and mobile widths. Confirm category headings are useful, card density remains calm, and the guide page returns to `/docs`.

- [ ] **Step 6: Commit the docs templates**

```bash
git add src/pages/docs/index.astro src/pages/docs/'[slug].astro' scripts/verify-static-site.mjs
git commit -m "feat: organise IWEP guides by planning intent"
```

---

### Task 5: Add restrained contextual internal links

**Files:**

- Modify `src/data/blog.ts`
- Modify `src/data/galleries.ts`
- Modify `src/data/locations.ts`
- Modify `src/pages/blog/[slug].astro`
- Modify `src/pages/galleries/[slug].astro`
- Modify `src/pages/locations/[slug].astro`
- Modify `src/pages/services/[slug].astro`

**Interfaces:**

- Consumes current slugs from `SERVICES`, `DOCS`, `LOCATIONS`, and `GALLERIES`
- Produces one primary service link per blog and gallery, optional location links for galleries, and a maximum of three useful planning links per service or location page

- [ ] **Step 1: Add typed relationship fields**

Add these fields to the existing interfaces.

```ts
// BlogPost
relatedService: string;

// GalleryProject
relatedService: string;
relatedLocation?: string;

// LocationHub
relatedGuideSlugs: string[];
```

Populate every existing entry with a real current slug. Use the assignment category and recorded location, not keyword preference, to choose relationships.

- [ ] **Step 2: Render one service link on blog detail pages**

Resolve the service with `SERVICES.find`. Add one quiet link after the article conclusion and before related posts. Use `View {service.title}` as the label.

- [ ] **Step 3: Render service and optional location links on gallery pages**

Resolve both configured relationships. Add a compact `Related coverage` block after the overview and facts. Show no more than two links.

- [ ] **Step 4: Render guide links on service pages**

Resolve guides where `doc.relatedService === service.slug`. Add a `Planning guides` section before the booking call to action. Show no more than three cards.

- [ ] **Step 5: Render guide links on location pages**

Resolve `location.relatedGuideSlugs`. Add a `Planning for this area` section only when at least one result exists. Show no more than three links and keep existing gallery proof above it.

- [ ] **Step 6: Verify every relationship target**

Run `npm run check && npm run build`.

Use `rg` against built HTML to confirm service, gallery, location, and guide links are present. Check that no rendered `href` points to an undefined slug.

- [ ] **Step 7: Commit the internal link graph**

```bash
git add src/data/blog.ts src/data/galleries.ts src/data/locations.ts src/pages/blog/'[slug].astro' src/pages/galleries/'[slug].astro' src/pages/locations/'[slug].astro' src/pages/services/'[slug].astro'
git commit -m "feat: connect IWEP services guides and proof"
```

---

### Task 6: Extend business metadata without unsupported claims

**Files:**

- Modify `src/components/Utility/BaseHead.astro`
- Modify `src/pages/blog/[slug].astro`
- Modify `scripts/verify-static-site.mjs`

**Interfaces:**

- Consumes `SERVICES`, `SITE_NAME`, `SITE_URL`, and current business details
- Produces `hasOfferCatalog` in the existing `PhotographyBusiness` schema and article Open Graph type on blog pages

- [ ] **Step 1: Add failing metadata assertions**

Append these checks.

```js
const homeSchema = readPage("/");
assert.match(homeSchema, /"hasOfferCatalog"/);

const blogPage = readPage("/blog/corporate-event-photography-pricing-guide-sydney/");
assert.match(blogPage, /property="og:type" content="article"/);
```

Run `npm run verify`.

Expected result is failure because the offer catalogue and blog page type are absent.

- [ ] **Step 2: Build the offer catalogue from existing services**

Import `SERVICES` into `BaseHead.astro` and add this field to `localBusinessSchema`.

```ts
hasOfferCatalog: {
  "@type": "OfferCatalog",
  name: "Sydney photography services",
  itemListElement: SERVICES.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.title,
      description: service.tagline,
      url: `${SITE_URL}/services/${service.slug}`,
    },
  })),
},
```

- [ ] **Step 3: Mark blog detail pages as articles**

Pass `type="article"` to `Layout` in `src/pages/blog/[slug].astro`. Do not change list pages or docs pages to Open Graph article type.

- [ ] **Step 4: Verify metadata output**

Run `npm run check && npm run build && npm run verify`.

Expected result is all commands passing.

- [ ] **Step 5: Commit metadata improvements**

```bash
git add src/components/Utility/BaseHead.astro src/pages/blog/'[slug].astro' scripts/verify-static-site.mjs
git commit -m "fix: strengthen IWEP service and article metadata"
```

---

### Task 7: Run final code and visual verification

**Files:**

- Modify only files required to fix verified regressions from this plan

**Interfaces:**

- Consumes all preceding deliverables
- Produces a passing static site, route evidence, schema evidence, and visual evidence

- [ ] **Step 1: Run the complete automated check**

Run `npm run check && npm run build && npm run verify`.

Expected result is zero Astro diagnostics, successful static generation, and passing route and metadata assertions.

- [ ] **Step 2: Check changed files for accidental architecture drift**

Run these commands.

```bash
git diff --check
git status --short
git diff --stat 987dccd..HEAD
```

Confirm there is no new dependency, route rename, content collection, framework, or change inside Stacki-aware interactive components.

- [ ] **Step 3: Verify representative pages visually**

With `astro dev --background` running, inspect these routes at desktop and mobile widths.

```text
/
/docs/
/docs/sydney-conference-photography-planning-checklist/
/services/corporate-events-conferences/
/locations/inner-west/
/galleries/irish-festival-sydney-2026/
```

Check hero height and legibility, navigation behaviour, unchanged lower homepage, docs grouping, article hierarchy, internal links, focus visibility, and no horizontal overflow.

- [ ] **Step 4: Inspect representative JSON-LD**

Confirm the homepage contains one photography business object with four service offers. Confirm the guide contains Article and BreadcrumbList objects whose URLs and visible headings agree.

- [ ] **Step 5: Stop the background server**

Run `astro dev stop`.

- [ ] **Step 6: Commit only verified corrections if needed**

```bash
git add package.json scripts/verify-static-site.mjs src/components/Utility/BaseHead.astro src/data/blog.ts src/data/docs.ts src/data/galleries.ts src/data/locations.ts src/pages/index.astro src/pages/blog/'[slug].astro' src/pages/docs/index.astro src/pages/docs/'[slug].astro' src/pages/galleries/'[slug].astro' src/pages/locations/'[slug].astro' src/pages/services/'[slug].astro'
git commit -m "fix: finish IWEP hero and SEO verification"
```

Do not create this final commit when verification requires no correction.
