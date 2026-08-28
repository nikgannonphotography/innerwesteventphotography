import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
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
  "/docs/sydney-conference-photography-planning-checklist/",
  "/docs/corporate-gala-dinner-photography-shot-list/",
  "/docs/brand-activation-photography-production-guide/",
  "/docs/product-launch-photography-pr-delivery-guide/",
  "/docs/on-site-corporate-headshots-planning-guide/",
  "/docs/not-for-profit-charity-event-photography-guide/",
]) {
  assertRoute(route);
}

const home = readPage("/");
assert.match(home, /class="[^"]*home-hero/);
assert.match(home, /class="[^"]*home-hero_media/);
assert.match(home, /fetchpriority="high"/i);

console.log("Static route baseline passed");
