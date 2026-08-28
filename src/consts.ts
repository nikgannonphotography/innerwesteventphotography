/** Site name. Appended to every page title and used as `og:site_name`. */
export const SITE_NAME = "Inner West Event Photography";

/** Tagline and concise positioning. */
export const SITE_TAGLINE =
  "Event, campaign, portrait and documentary photography studio based in Sydney.";

/** Fallback meta description for pages that don't set their own. */
export const SITE_DESCRIPTION =
  "Inner West Event Photography provides documentary-style photography for corporate events, conferences, not-for-profit organisations, campaigns and workplace teams across Sydney.";

/** Canonical origin. Resolves canonical URLs, social images, and the sitemap. */
export const SITE_URL = "https://innerwesteventphotography.com.au";

/** BCP 47 locale tag used to format dates and numbers. */
export const SITE_LOCALE = "en-AU";

/** Contact and business information */
export const STUDIO_CONTACT = {
  name: "Inner West Event Photography",
  founder: "Nikolas Gannon",
  title: "Photographer & Creative Producer",
  email: "info@innerwesteventphotography.com.au",
  directEmail: "nik@innerwesteventphotography.com.au",
  personalEmail: "hello@nikolasgannon.com.au",
  formEndpoint: "https://formspree.io/p/3077221597631741747/f/projectInquiry",
  formProjectId: "3077221597631741747",
  formId: "projectInquiry",
  phone: "+61 437 700 749",
  phoneRaw: "+61437700749",
  whatsappUrl: "https://wa.me/61437700749",
  instagramUrl: "https://www.instagram.com/nikgannonphotography/",
  linkedinUrl: "https://www.linkedin.com/in/nikolasgannon/",
  abn: "56 292 719 879",
  location: "Sydney, NSW, Australia",
  serviceRegions: [
    "Inner West",
    "Sydney CBD & Surrounds",
    "North Shore & Eastern Suburbs",
    "Greater Western Sydney",
  ],
  insurance: "$10,000,000 Public & Products Liability",
  insurancePolicyNumber: "BIZ157345BUS",
};

/**
 * Optional HubSpot Form & CRM Integration.
 * Fill in your HubSpot Portal ID and Form ID to switch to or embed HubSpot forms.
 */
export const HUBSPOT_CONFIG = {
  portalId: "",
  formId: "",
  region: "na1", // na1, eu1, or au1
};

/**
 * Routes kept out of search results. Each is excluded from the sitemap and
 * served with a `robots: noindex, nofollow` tag, so the two can't disagree.
 *
 * Surrounding slashes are optional: `"/thanks"`, `"thanks"` and `"/thanks/"`
 * all match the same route.
 */
export const NOINDEX_ROUTES: string[] = [
  "/404",
  "/docs",
  "/example-components",
  "/projects",
];
