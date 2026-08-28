# IWEP Hero and SEO Guides Design

Date 2026-08-28

Status approved direction, awaiting specification review

## Outcome

Inner West Event Photography returns as an active Sydney photography business with a homepage that leads through photography and a guide system that can grow around verified search demand.

The release has two connected outcomes.

1. The homepage hero fills the first viewport and gives one strong event photograph visual control.
2. The docs and guides section becomes a scalable search library that sends qualified visitors toward the correct service, location, gallery, and contact page.

Success means stronger presentation and better search coverage without thin pages, duplicate intent, unsupported claims, or mechanical keyword repetition.

## Audience and page jobs

Primary visitors include event producers, corporate communications leads, PR managers, marketing teams, HR leaders, agency producers, charity teams, and community organisers.

The homepage must establish capability fast, show real work, and make it easy to send a brief.

Service pages must answer transactional searches and explain what can be commissioned.

Location pages must answer geographic searches and prove relevant local experience.

Guides must answer a distinct planning, pricing, delivery, licensing, or venue question in enough depth to deserve their own result.

Galleries must prove the work and route interested visitors to the relevant service.

## Visual direction

### Subject

The subject is real Sydney event production. The visual language comes from stage light, crowds, working venues, fast movement, and documentary photography.

### Tokens

- Near black `#1F1D1E`
- White `#FFFFFF`
- Light grey `#EBEBEB`
- Mid grey `#777870`
- Signal green `#C6FB50`

Inter remains the only type family. Large headings use the existing medium weight and tight spacing. Body copy uses regular weight. Eyebrows and production metadata provide the utility role.

The existing project palette remains intact. The design does not introduce gradients as decoration, new fonts, shadows, glass effects, or ornamental icons.

### Homepage hero

The hero occupies at least one small viewport height. The navigation overlaps the hero so the photograph owns the opening screen.

The selected hero photograph fills the section with `object-fit: cover`. A flat translucent dark scrim or solid colour overlay protects legibility. It is functional image treatment, not a decorative gradient.

Copy sits low and left within the site grid. It remains short.

```text
+------------------------------------------------------+
| IWEP navigation                                      |
|                                                      |
|                full-bleed event photograph           |
|                                                      |
| Sydney event photography                             |
| Event photography coverage built around your brief  |
| Short supporting line                                |
| [Send a brief]  [View selected work]                 |
+------------------------------------------------------+
```

The signature is the photograph itself occupying the complete first screen. The rest of the homepage stays restrained so the image carries the return of IWEP.

Mobile keeps the same hierarchy. The image focal point can be controlled with a dedicated object position. Copy must not be obscured by navigation or browser chrome. The implementation uses viewport units with a safe fallback and respects reduced motion.

## Search architecture

The site uses a hub and cluster model.

```text
Homepage
  Services
    Corporate events and conferences
    Brand campaigns and activations
    Workplace portraits and headshots
    Not-for-profit and community
  Locations
    Inner West
    Sydney CBD
    North Shore
    Western Sydney
  Docs and guides
    Briefing
    Pricing
    Delivery
    Licensing
    Venue production
  Galleries
    Real assignment proof
```

Transactional terms remain on service and location pages. Informational and commercial investigation terms belong in docs. Galleries provide evidence rather than pretending to be generic landing pages.

No fixed anchor percentages will be encoded. Link language must describe the destination naturally. Exact-match wording is used only where it reads normally.

No suburb or venue page is published solely by changing place names. A new location or venue page needs distinct logistics, useful local information, and relevant work or first-hand evidence.

## Guide content system

Guides move from `src/data/docs.ts` into an Astro content collection. Markdown or MDX becomes the authoring surface. A collection schema validates every entry at build time.

Each guide requires these fields.

- `title`
- `seoTitle`
- `description`
- `category`
- `categoryLabel`
- `searchIntent`
- `publishedDate`
- `updatedDate`
- `readTime`
- `summary`
- `relatedService`
- `relatedLocations`
- `relatedGalleries`
- `relatedGuides`
- `relatedBlogPosts`
- `draft`

The page slug comes from the content filename or explicit content identifier. Existing guide URLs remain unchanged so no redirect work is needed.

The docs index groups guides by useful topic. It exposes a short description for each category and a featured starting point. It does not add client-side filtering in the first release.

Guide pages include a clear introduction, descriptive heading hierarchy, practical body content, key points, related proof, related planning material, the relevant service, and a contact action.

## Initial guide set

The five existing guides migrate without changing their URLs.

- Event photography briefing template
- Sydney event photography pricing and rate structures
- Turnaround times, file formats, and delivery specifications
- Event photography licensing and commercial rights in Australia
- Sydney event venue lighting and photography guide

The first expansion adds six distinct guides.

- Sydney conference photography planning checklist
- Corporate gala dinner photography shot planning guide
- Brand activation photography production guide
- Product launch photography and PR delivery guide
- On-site corporate headshots planning guide for Sydney teams
- Not-for-profit and charity event photography planning guide

Each new guide targets one search job and links to one primary service. Venue-specific articles already covered in the blog remain there. Existing ICC Sydney and Inner West venue articles must not be duplicated as docs.

Pricing copy must be framed as a scoping guide unless the business has approved public fixed prices. Legal and licensing copy must stay general and avoid presenting itself as legal advice.

## Internal linking

Every guide links to its primary service and at least one useful adjacent page.

Every service page links to the briefing, pricing, and delivery guides where relevant.

Every blog post links to its primary service through a configured relationship rather than hard-coded HTML inside prose.

Every gallery links to its primary service. Galleries with a confirmed regional match also link to that location hub.

Every location page keeps its related gallery proof and gains relevant service and guide links.

Related guide selection prioritises explicit configured relationships. A category fallback can fill empty slots but must exclude the current guide.

Link labels are written for humans. The interface does not expose internal SEO labels or keyword ratios.

## Metadata and structured data

The current canonical URL, description, social metadata, and sitemap behaviour remain.

The global photography business schema gains a real service offer catalogue based on the four existing services. Existing area coverage remains and is normalised into structured place values where useful.

Each guide outputs Article schema with headline, description, published date, modified date, author, publisher, canonical page identifier, and breadcrumb data.

Breadcrumb schema reflects Home, Docs and guides, then the current guide. Visible navigation must agree with structured data.

Structured data must contain only claims and business details already present in the site configuration. Preferred-supplier status, venue relationships, ratings, reviews, and exact street addresses are excluded unless verified and supplied.

## Components and file boundaries

Expected implementation areas include these files and folders.

- `src/pages/index.astro` for the viewport hero
- `src/components/Wrapper/Section.astro` and existing utilities where the hero can use framework behaviour cleanly
- `src/content.config.ts` for the guide collection schema
- `src/content/docs/` for guide content
- `src/pages/docs/index.astro` for the topic hub
- `src/pages/docs/[slug].astro` for collection rendering and guide schema
- `src/components/Utility/BaseHead.astro` for the service offer catalogue
- Service, blog, gallery, and location data for explicit relationships
- Service, blog, gallery, and location templates for contextual links

Shared components may be added for guide cards, related resources, and breadcrumbs if repetition justifies them. Existing Lumos components and CSS conventions remain the first choice.

## Content safeguards

Every page must satisfy all of these checks before publication.

- One identifiable search question or commissioning intent
- Distinct title and description
- Substantive information not duplicated elsewhere on the site
- At least one useful internal route onward
- No unsupported supplier, venue, turnaround, licensing, insurance, or pricing claim
- No keyword list pasted into visible copy
- No synthetic testimonial or fabricated experience
- Draft state available when research is incomplete

Future deep research outputs map into a content brief before they become pages. The brief records primary intent, supporting questions, required evidence, target service, useful proof, and overlap risks.

## Migration behaviour

Existing guide URLs and current content remain available during migration. The build must fail if an entry has a missing required relationship or invalid category.

The old `DOCS` array is removed only after every current guide is represented in the collection and route output is verified.

No change is made to blog URLs, service URLs, location URLs, or gallery URLs.

## Accessibility and performance

Hero text must retain readable contrast at all responsive sizes. The eager hero image keeps high fetch priority and uses an appropriate responsive source where the image component supports it.

Heading order remains logical. Focus states remain visible. Navigation and calls to action remain usable with a keyboard.

The full-screen treatment adds no JavaScript. Guide pages remain statically generated.

## Verification

Implementation is complete only when all checks pass.

- `npm run check`
- `npm run build`
- Existing and new guide routes appear in the generated sitemap
- All eleven guide pages build with unique canonical URLs
- No internal link points to a missing route
- Homepage hero fills the first viewport on desktop and mobile
- Hero copy remains readable at narrow and wide viewport sizes
- Navigation remains usable over the hero
- Structured data parses as valid JSON on the homepage and guide pages
- Guide Article and breadcrumb data match visible page content
- Screenshots confirm the homepage, docs index, and one guide at desktop and mobile widths
- Existing guide URLs return the migrated content

## Delivery sequence

1. Establish the content collection and migrate existing guides.
2. Rebuild docs routes and topic hub.
3. Add the six new guides.
4. Add explicit internal relationships and render contextual links.
5. Extend structured data.
6. Build the full-viewport homepage hero.
7. Run code, route, schema, build, and visual verification.

This sequence protects existing indexed URLs before visual changes and makes each later step testable against a stable content layer.
