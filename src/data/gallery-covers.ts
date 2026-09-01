import type { GalleryProject } from "./galleries";

const GALLERY_COVERS: Record<string, string> = {
  "andrew-and-lily-wedding":
    "/galleries/andrew-and-lily-wedding/andrew-lily-wedding_00004.webp",
  "sony-foundation-wharf4ward":
    "/galleries/sony-foundation-wharf4ward/sony-foundation-wharf4ward-1.webp",
  "tedx-macquarie-uni":
    "/galleries/tedx-macquarie-uni/tedx-macquarie-uni-01.webp",
  "maggie-beer": "/galleries/maggie-beer/01.webp",
  "australian-fashion-week-2026":
    "/galleries/australian-fashion-week-2026/australian-fashion-week-2026-01.webp",
  "guy-jules-sebastian": "/galleries/guy-jules-sebastian/03.webp",
  "annas-birthday": "/galleries/annas-birthday/annas-birthday-1.webp",
  "global-impact-summit": "/galleries/global-impact-summit/09.webp",
  "oz-harvest": "/galleries/oz-harvest/01.webp",
  "echo-change-future-action-summit-2026":
    "/galleries/echo-change-future-action-summit-2026/echo-change-future-action-summit-2026-05.webp",
  "royalle-modelling-x-leather-on-me-xteds-cameras":
    "/galleries/royalle-modelling-x-leather-on-me-xteds-cameras/AFW-Royalle-Nikolas-Gannon-1.webp",
  "world-vision": "/galleries/world-vision/02.webp",
  "order-of-australia-the-school-of-st-jude":
    "/galleries/order-of-australia-the-school-of-st-jude/order-of-australia-the-school-of-st-jude-01.webp",
  "george-and-adrianas-engagement":
    "/galleries/george-and-adrianas-engagement/george-and-adrianas-engagement-02.webp",
  "kokoda-track-foundation": "/galleries/kokoda-track-foundation/01.webp",
  "sony-foundation-tones-and-i-at-wharf4ward":
    "/galleries/sony-foundation-tones-and-i-at-wharf4ward/sony-foundation-tones-and-i-at-wharf4ward-4.webp",
  "irish-festival-sydney-2026":
    "/galleries/irish-festival-sydney-2026/sydney-st-patricks-day-festival-2026-01.webp",
  "laundry-lane": "/galleries/laundry-lane/03.webp",
  "nrl-grand-final-2019": "/galleries/nrl-grand-final-2019/02.webp",
  "latrell-mitchell-daniel-tupou-2019":
    "/galleries/latrell-mitchell-daniel-tupou-2019/01.webp",
};

export function getGalleryCover(
  gallery: Pick<GalleryProject, "slug" | "posterImage">,
) {
  return GALLERY_COVERS[gallery.slug] ?? gallery.posterImage;
}

const GALLERY_COVER_POSITIONS: Record<string, string> = {
  "australian-fashion-week-2026": "50% 20%",
  "royalle-modelling-x-leather-on-me-xteds-cameras": "50% 20%",
};

export function getGalleryCoverPosition(gallery: Pick<GalleryProject, "slug">) {
  return GALLERY_COVER_POSITIONS[gallery.slug] ?? "50% 50%";
}
