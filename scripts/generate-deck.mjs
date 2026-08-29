import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const publicDir = path.join(projectRoot, 'public');
const tmpImgDir = '/tmp/deck_imgs_opt';

fs.mkdirSync(tmpImgDir, { recursive: true });

function getOptimizedBase64(relPath, maxWidth = 1600, quality = 82) {
  const fullPath = path.join(publicDir, relPath);
  if (!fs.existsSync(fullPath)) {
    console.error(`File missing: ${fullPath}`);
    return '';
  }

  const filename = path.basename(fullPath).replace(/\.[^/.]+$/, "") + `_${maxWidth}.jpg`;
  const outPath = path.join(tmpImgDir, filename);

  try {
    execSync(`sips -s format jpeg -s formatOptions ${quality} -Z ${maxWidth} "${fullPath}" --out "${outPath}" >/dev/null 2>&1`);
    const data = fs.readFileSync(outPath).toString('base64');
    return `data:image/jpeg;base64,${data}`;
  } catch (e) {
    const ext = path.extname(fullPath).toLowerCase();
    const mime = ext === '.png' ? 'image/png' : 'image/jpeg';
    const data = fs.readFileSync(fullPath).toString('base64');
    return `data:${mime};base64,${data}`;
  }
}

const logoBase64 = getOptimizedBase64('logos/Master Logo - 5000x5000/Master Logo - 5000x5000.png', 400, 90);
const imgFashion1 = getOptimizedBase64('galleries/australian-fashion-week-2026/australian-fashion-week-2026-01.webp', 1400, 80);
const imgFashion2 = getOptimizedBase64('galleries/australian-fashion-week-2026/australian-fashion-week-2026-02.webp', 1000, 80);
const imgWharf1 = getOptimizedBase64('galleries/sony-foundation-wharf4ward/sony-foundation-wharf4ward-1.webp', 1000, 80);
const imgWharf3 = getOptimizedBase64('galleries/sony-foundation-wharf4ward/sony-foundation-wharf4ward-3.webp', 1200, 80);
const imgTedx1 = getOptimizedBase64('galleries/tedx-macquarie-uni/tedx-macquarie-uni-01.webp', 1000, 80);
const imgRoyalle1 = getOptimizedBase64('galleries/royalle-modelling-x-leather-on-me-xteds-cameras/Nikolas-Gannon_AFW-Royalle-Teds_00001.webp', 1000, 80);
const imgStJude1 = getOptimizedBase64('galleries/order-of-australia-the-school-of-st-jude/order-of-australia-the-school-of-st-jude-01.webp', 1000, 80);
const imgEngagement1 = getOptimizedBase64('galleries/george-and-adrianas-engagement/george-and-adrianas-engagement-01.webp', 1000, 80);
const imgBirthday1 = getOptimizedBase64('galleries/annas-birthday/annas-birthday-1.webp', 1000, 80);
const imgSummit1 = getOptimizedBase64('galleries/echo-change-future-action-summit-2026/echo-change-future-action-summit-2026-01.webp', 1000, 80);
const imgTungsten1 = getOptimizedBase64('galleries/tungsten-automation-summit-sydney/tungsten-automation-summit-sydney-1.webp', 1200, 80);

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Inner West Event Photography — Capability Deck</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

    @page {
      size: 1920px 1080px;
      margin: 0;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      background-color: #0c0c0c;
      color: #ffffff;
      -webkit-font-smoothing: antialiased;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    .slide {
      width: 1920px;
      height: 1080px;
      max-width: 1920px;
      max-height: 1080px;
      page-break-after: always;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 80px 100px;
      background: #0c0c0c;
    }

    .slide.light {
      background: #fbfaf8;
      color: #111111;
    }

    /* Top Bar */
    .top-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #222222;
      padding-bottom: 24px;
    }

    .slide.light .top-bar {
      border-bottom: 1px solid #e0ded9;
    }

    .brand-mark {
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #ffffff;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .slide.light .brand-mark {
      color: #111111;
    }

    .brand-logo-sq {
      width: 28px;
      height: 28px;
      object-fit: contain;
    }

    .slide-num {
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #777777;
    }

    .slide.light .slide-num {
      color: #888888;
    }

    /* Bottom Bar */
    .bottom-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid #222222;
      padding-top: 24px;
      font-size: 13px;
      color: #777777;
      letter-spacing: 0.04em;
    }

    .slide.light .bottom-bar {
      border-top: 1px solid #e0ded9;
      color: #888888;
    }

    /* Typography */
    h1 {
      font-size: 68px;
      font-weight: 800;
      line-height: 1.08;
      letter-spacing: -0.03em;
      margin-bottom: 28px;
    }

    h2 {
      font-size: 50px;
      font-weight: 700;
      line-height: 1.12;
      letter-spacing: -0.02em;
      margin-bottom: 28px;
    }

    p.lead {
      font-size: 22px;
      font-weight: 400;
      line-height: 1.5;
      color: #cccccc;
      max-width: 820px;
      margin-bottom: 28px;
    }

    .slide.light p.lead {
      color: #444444;
    }

    p.body-text {
      font-size: 19px;
      font-weight: 400;
      line-height: 1.65;
      color: #aaaaaa;
      max-width: 780px;
      margin-bottom: 22px;
    }

    .slide.light p.body-text {
      color: #555555;
    }

    /* Grids & Containers */
    .content-split {
      display: grid;
      grid-template-columns: 1.05fr 0.95fr;
      gap: 70px;
      align-items: center;
      flex: 1;
      margin: 30px 0;
    }

    .content-columns-4 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
      margin-top: 36px;
    }

    .card {
      background: #141414;
      border: 1px solid #222222;
      padding: 36px 30px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }

    .slide.light .card {
      background: #ffffff;
      border: 1px solid #e0ded9;
    }

    .metric-num {
      font-size: 46px;
      font-weight: 800;
      letter-spacing: -0.03em;
      color: #ffffff;
      margin-bottom: 14px;
    }

    .slide.light .metric-num {
      color: #111111;
    }

    .card-text {
      font-size: 15px;
      font-weight: 400;
      line-height: 1.55;
      color: #999999;
    }

    .slide.light .card-text {
      color: #666666;
    }

    /* Images */
    .img-box {
      width: 100%;
      height: 100%;
      max-height: 660px;
      overflow: hidden;
      border: 1px solid #222222;
      background: #161616;
    }

    .slide.light .img-box {
      border: 1px solid #e0ded9;
    }

    .img-box img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .img-grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      height: 640px;
    }

    .img-grid-2 .img-box {
      height: 100%;
    }

    /* Specs Table */
    .specs-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 24px;
      text-align: left;
    }

    .specs-table th {
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #777777;
      padding: 16px 20px;
      border-bottom: 1px solid #333333;
    }

    .slide.light .specs-table th {
      border-bottom: 1px solid #d0ccc2;
      color: #666666;
    }

    .specs-table td {
      font-size: 16px;
      padding: 24px 20px;
      border-bottom: 1px solid #202020;
      color: #cccccc;
      line-height: 1.45;
    }

    .slide.light .specs-table td {
      border-bottom: 1px solid #e8e4db;
      color: #222222;
    }

    .specs-table tr:last-child td {
      border-bottom: none;
    }
  </style>
</head>
<body>

  <!-- ==================== SLIDE 01: COVER ==================== -->
  <div class="slide">
    <div class="top-bar">
      <div class="brand-mark">
        <img class="brand-logo-sq" src="${logoBase64}" alt="IWEP Logo" />
        <span>Inner West Event Photography</span>
      </div>
      <div class="slide-num">Sydney 2026</div>
    </div>

    <div class="content-split">
      <div>
        <h1>Commercial Discipline.<br/>Quiet Execution.</h1>
        <p class="lead">
          Quiet, reliable photography for corporate conferences, charity galas, brand launches, and workplace portraits across Sydney.
        </p>
        <p class="body-text" style="color: #777777; margin-top: 40px; font-size: 16px;">
          Sydney CBD &bull; Inner West &bull; Sub-12h PR delivery &bull; $10M public liability
        </p>
      </div>
      <div class="img-box" style="height: 600px;">
        <img src="${imgFashion1}" alt="Australian Fashion Week by Nikolas Gannon" />
      </div>
    </div>

    <div class="bottom-bar">
      <span>Nikolas Gannon • Photographer & Creative Producer</span>
      <span>innerwesteventphotography.com.au</span>
    </div>
  </div>

  <!-- ==================== SLIDE 02: ABOUT ==================== -->
  <div class="slide light">
    <div class="top-bar">
      <div class="brand-mark">
        <img class="brand-logo-sq" src="${logoBase64}" alt="IWEP Logo" />
        <span>Inner West Event Photography</span>
      </div>
      <div class="slide-num">02 / 10</div>
    </div>

    <div style="flex: 1; display: flex; flex-direction: column; justify-content: center; margin: 20px 0;">
      <h2>Direct experience on the floor and behind the brief.</h2>
      <p class="lead" style="max-width: 1000px; margin-bottom: 40px;">
        Led by Nikolas Gannon, former client engagement director at social-impact agency We Are World Change. We understand run sheets, sponsor commitments, and the need for zero fuss on the day.
      </p>

      <div class="content-columns-4">
        <div class="card">
          <div class="metric-num">14M+</div>
          <div class="card-text">Views on Unsplash with work published across OECD, ANU, and media platforms.</div>
        </div>
        <div class="card">
          <div class="metric-num">&lt;12h</div>
          <div class="card-text">Morning-after highlight selects delivered for urgent press releases and social media.</div>
        </div>
        <div class="card">
          <div class="metric-num">$10M</div>
          <div class="card-text">Certificate of currency issued directly to your venue or risk management team.</div>
        </div>
        <div class="card">
          <div class="metric-num" style="font-size: 32px; margin-bottom: 24px;">Fixed rates</div>
          <div class="card-text">Single upfront price including retouched master files and full commercial rights.</div>
        </div>
      </div>
    </div>

    <div class="bottom-bar">
      <span>Experience with: Sony Foundation • batyr • TEDx • Order of Australia St Jude</span>
      <span>Sydney NSW</span>
    </div>
  </div>

  <!-- ==================== SLIDE 03: CORPORATE ==================== -->
  <div class="slide">
    <div class="top-bar">
      <div class="brand-mark">
        <img class="brand-logo-sq" src="${logoBase64}" alt="IWEP Logo" />
        <span>Inner West Event Photography</span>
      </div>
      <div class="slide-num">03 / 10</div>
    </div>

    <div class="content-split">
      <div>
        <h2>Conferences, Summits & Awards Galas</h2>
        <p class="body-text">
          Full coverage for multi-day conventions, leadership summits, and awards evenings at venues like ICC Sydney, Doltone House, and Crown Sydney.
        </p>
        <p class="body-text">
          We shoot silently using electronic shutters so speakers and delegates are never distracted. Every assignment covers stage keynotes, candid crowd moments, sponsor booths, and dinner proceedings.
        </p>
        <p class="body-text">
          A dedicated highlight pack is delivered by 8:00 AM the next morning for your morning-after press release and social feeds.
        </p>
      </div>
      <div class="img-grid-2">
        <div class="img-box"><img src="${imgTedx1}" alt="TEDx Macquarie Uni Keynote" /></div>
        <div class="img-box"><img src="${imgSummit1}" alt="Echo Change Future Action Summit" /></div>
      </div>
    </div>

    <div class="bottom-bar">
      <span>Corporate Conferences & Keynote Stages</span>
      <span>ICC Sydney & Greater Sydney Venues</span>
    </div>
  </div>

  <!-- ==================== SLIDE 04: NOT-FOR-PROFIT ==================== -->
  <div class="slide light">
    <div class="top-bar">
      <div class="brand-mark">
        <img class="brand-logo-sq" src="${logoBase64}" alt="IWEP Logo" />
        <span>Inner West Event Photography</span>
      </div>
      <div class="slide-num">04 / 10</div>
    </div>

    <div class="content-split">
      <div class="img-grid-2">
        <div class="img-box"><img src="${imgWharf1}" alt="Sony Foundation Wharf4Ward Gala" /></div>
        <div class="img-box"><img src="${imgStJude1}" alt="Order of Australia St Jude" /></div>
      </div>
      <div>
        <h2>Fundraisers, Galas & Community Forums</h2>
        <p class="body-text">
          Respectful, low-profile coverage for charity galas, major donor dinners, live auctions, and civic assemblies.
        </p>
        <p class="body-text">
          We bring deep sector experience from working with Sony Foundation (Wharf4Ward), batyr, World Vision, and The School of St Jude. We understand cultural protocols, VIP dignity, and consent dynamics.
        </p>
        <p class="body-text">
          Images are catalogued specifically for annual impact reports, donor updates, and future grant applications.
        </p>
      </div>
    </div>

    <div class="bottom-bar">
      <span>Not-For-Profit & Philanthropic Storytelling</span>
      <span>Sydney NSW</span>
    </div>
  </div>

  <!-- ==================== SLIDE 05: BRAND ACTIVATIONS ==================== -->
  <div class="slide">
    <div class="top-bar">
      <div class="brand-mark">
        <img class="brand-logo-sq" src="${logoBase64}" alt="IWEP Logo" />
        <span>Inner West Event Photography</span>
      </div>
      <div class="slide-num">05 / 10</div>
    </div>

    <div class="content-split">
      <div>
        <h2>Product Launches, Pop-Ups & Lookbooks</h2>
        <p class="body-text">
          Clean, brand-aligned imagery for product launches, pop-up activations, retail installations, and commercial lookbooks.
        </p>
        <p class="body-text">
          On discussion, we can organise daylight studio hire in the Inner West and Surry Hills, cyclorama spaces in Alexandria, high-end Profoto lighting packages, on-set wireless tethering, and hair and makeup teams.
        </p>
        <p class="body-text">
          We also provide live photo drops during the event so your marketing team can publish in real time.
        </p>
      </div>
      <div class="img-grid-2">
        <div class="img-box"><img src="${imgRoyalle1}" alt="Australian Fashion Week Royalle x Teds Cameras" /></div>
        <div class="img-box"><img src="${imgFashion2}" alt="Fashion Week Runway Details" /></div>
      </div>
    </div>

    <div class="bottom-bar">
      <span>Brand Campaigns & Commercial Activations</span>
      <span>Full Commercial Rights Included</span>
    </div>
  </div>

  <!-- ==================== SLIDE 06: WORKPLACE PORTRAITS ==================== -->
  <div class="slide light">
    <div class="top-bar">
      <div class="brand-mark">
        <img class="brand-logo-sq" src="${logoBase64}" alt="IWEP Logo" />
        <span>Inner West Event Photography</span>
      </div>
      <div class="slide-num">06 / 10</div>
    </div>

    <div class="content-split">
      <div>
        <h2>Team Headshots & Workplace Portraits</h2>
        <p class="body-text">
          Natural corporate portraits and team photography taken on-location at your office or annual conference.
        </p>
        <p class="body-text">
          We bring a compact mobile studio with soft lighting to your workplace with minimal disruption to staff. Team members view and choose their preferred shot on a laptop screen immediately.
        </p>
        <p class="body-text">
          Each person receives individually retouched high-res and web files delivered through an organised corporate portal for your HR and marketing teams.
        </p>
      </div>
      <div class="img-box" style="height: 600px;">
        <img src="${imgTungsten1}" alt="Corporate Executive Portrait" />
      </div>
    </div>

    <div class="bottom-bar">
      <span>Workplace Headshots & Team Libraries</span>
      <span>On-Location Across Sydney</span>
    </div>
  </div>

  <!-- ==================== SLIDE 07: CELEBRATIONS ==================== -->
  <div class="slide">
    <div class="top-bar">
      <div class="brand-mark">
        <img class="brand-logo-sq" src="${logoBase64}" alt="IWEP Logo" />
        <span>Inner West Event Photography</span>
      </div>
      <div class="slide-num">07 / 10</div>
    </div>

    <div class="content-split">
      <div class="img-grid-2">
        <div class="img-box"><img src="${imgEngagement1}" alt="George and Adriana Engagement" /></div>
        <div class="img-box"><img src="${imgBirthday1}" alt="Anna Birthday Celebration" /></div>
      </div>
      <div>
        <h2>Milestone Birthdays, Engagements & Weddings</h2>
        <p class="body-text">
          Candid documentary photography for landmark birthdays (21st, 30th, 40th, 50th, 80th), waterfront engagements, and intimate weddings.
        </p>
        <p class="body-text">
          No stiff posing or forced smiling. We focus on natural moments, genuine laughs, hugs, and great speeches.
        </p>
        <p class="body-text">
          You receive a 24–48 hour sneak peek pack, followed by a private gallery where guests can download full-resolution photos directly with zero watermarks or extra download fees.
        </p>
      </div>
    </div>

    <div class="bottom-bar">
      <span>Private Events & Celebrations</span>
      <span>Unrestricted Personal Printing Rights</span>
    </div>
  </div>

  <!-- ==================== SLIDE 08: TURNAROUND ==================== -->
  <div class="slide light">
    <div class="top-bar">
      <div class="brand-mark">
        <img class="brand-logo-sq" src="${logoBase64}" alt="IWEP Logo" />
        <span>Inner West Event Photography</span>
      </div>
      <div class="slide-num">08 / 10</div>
    </div>

    <div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">
      <h2>Clear timelines and reliable delivery.</h2>
      <p class="lead" style="font-size: 18px; margin-bottom: 24px;">
        Every shoot includes dual-card raw backup on the day and calibrated color editing.
      </p>

      <table class="specs-table">
        <thead>
          <tr>
            <th style="width: 25%;">Item</th>
            <th style="width: 37%;">Standard Delivery</th>
            <th style="width: 38%;">Fast PR Option</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Turnaround Time</strong></td>
            <td>3–5 business days for full edited gallery</td>
            <td><strong>2–12 hours</strong> for morning-after press highlights</td>
          </tr>
          <tr>
            <td><strong>File Formats</strong></td>
            <td>Full-res 300 DPI print files + web-ready formats</td>
            <td>Pre-cropped files for social media and press</td>
          </tr>
          <tr>
            <td><strong>Licensing</strong></td>
            <td>Full commercial marketing and PR rights</td>
            <td>Unrestricted media distribution rights</td>
          </tr>
          <tr>
            <td><strong>Delivery Method</strong></td>
            <td>Private Australian cloud gallery with unlimited downloads</td>
            <td>Direct Dropbox / Google Drive press links</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="bottom-bar">
      <span>Calibrated Rec.709 & Adobe RGB Color</span>
      <span>Sydney NSW</span>
    </div>
  </div>

  <!-- ==================== SLIDE 09: COVERAGE ==================== -->
  <div class="slide">
    <div class="top-bar">
      <div class="brand-mark">
        <img class="brand-logo-sq" src="${logoBase64}" alt="IWEP Logo" />
        <span>Inner West Event Photography</span>
      </div>
      <div class="slide-num">09 / 10</div>
    </div>

    <div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">
      <h2>Covering all of Greater Sydney.</h2>
      <p class="lead" style="font-size: 18px; margin-bottom: 32px;">
        Based in the Inner West with regular on-site work across Sydney's major convention centres and event spaces.
      </p>

      <div class="content-columns-4">
        <div class="card">
          <div style="font-size: 20px; font-weight: 700; color: #ffb162; margin-bottom: 14px;">Inner West</div>
          <div class="card-text">
            Ashfield, Newtown, Balmain, Rozelle, Leichhardt, Camperdown, Stanmore.<br/><br/>
            Carriageworks, The Eveleigh, Factory Theatre, Camperdown Commons.
          </div>
        </div>
        <div class="card">
          <div style="font-size: 20px; font-weight: 700; color: #ffb162; margin-bottom: 14px;">Sydney CBD & East</div>
          <div class="card-text">
            City, Barangaroo, Circular Quay, Darling Harbour, Surry Hills.<br/><br/>
            ICC Sydney, Crown Sydney, Doltone House, MCA, Opera House.
          </div>
        </div>
        <div class="card">
          <div style="font-size: 20px; font-weight: 700; color: #ffb162; margin-bottom: 14px;">North Shore</div>
          <div class="card-text">
            North Sydney, Chatswood, Macquarie Park, St Leonards, Manly.<br/><br/>
            Macquarie Uni Incubator, The Concourse, Taronga Event Centre, Q Station.
          </div>
        </div>
        <div class="card">
          <div style="font-size: 20px; font-weight: 700; color: #ffb162; margin-bottom: 14px;">Western Sydney</div>
          <div class="card-text">
            Parramatta, Olympic Park, Alexandria, Rosebery, Ryde.<br/><br/>
            CommBank Stadium, Accor Stadium, PHIVE Parramatta, The Grounds.
          </div>
        </div>
      </div>
    </div>

    <div class="bottom-bar">
      <span>Travel included across Greater Sydney metro</span>
      <span>Base: Ashfield NSW 2131</span>
    </div>
  </div>

  <!-- ==================== SLIDE 10: CONTACT ==================== -->
  <div class="slide light">
    <div class="top-bar">
      <div class="brand-mark">
        <img class="brand-logo-sq" src="${logoBase64}" alt="IWEP Logo" />
        <span>Inner West Event Photography</span>
      </div>
      <div class="slide-num">10 / 10</div>
    </div>

    <div class="content-split">
      <div>
        <h2>Let's discuss your event.</h2>
        <p class="lead" style="font-size: 20px; margin-bottom: 28px;">
          Send through your event date, venue, and run sheet. We will provide a simple, fixed quote within 24 hours.
        </p>

        <div style="background: #ffffff; border: 1px solid #e0ded9; padding: 28px; margin-bottom: 24px;">
          <div style="font-size: 17px; line-height: 1.9; color: #222222;">
            <div><strong>Nikolas Gannon</strong> • Photographer & Creative Producer</div>
            <div><strong>Phone</strong>: 0437 700 749 (+61 437 700 749)</div>
            <div><strong>Email</strong>: info@innerwesteventphotography.com.au</div>
            <div><strong>Web</strong>: innerwesteventphotography.com.au</div>
            <div><strong>ABN</strong>: 56 292 719 879</div>
          </div>
        </div>

        <div style="font-size: 14px; line-height: 1.6; color: #666666;">
          ✓ $10,000,000 public liability certificate issued on booking<br/>
          ✓ Fixed upfront rate with zero surprise add-ons<br/>
          ✓ High-resolution retouched master files included
        </div>
      </div>
      <div class="img-box" style="height: 600px;">
        <img src="${imgWharf3}" alt="Sydney Event by Nikolas Gannon" />
      </div>
    </div>

    <div class="bottom-bar">
      <span>Inner West Event Photography • Sydney NSW</span>
      <span>Thank you</span>
    </div>
  </div>

</body>
</html>`;

const htmlPath = path.join(__dirname, 'deck.html');
fs.writeFileSync(htmlPath, htmlContent);

const outputPdfDesktop = '/Users/admin/Desktop/Inner_West_Event_Photography_Capability_Deck.pdf';
const outputPdfPublic = path.join(publicDir, 'Inner_West_Event_Photography_Capability_Deck.pdf');

const chromeBinary = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const cmd = `"${chromeBinary}" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="${outputPdfDesktop}" "file://${htmlPath}"`;

console.log('Rendering stripped, zero-slop lightweight PDF...');
try {
  execSync(cmd);
  fs.copyFileSync(outputPdfDesktop, outputPdfPublic);
  console.log('Done! Rendered pure minimal PDF.');
} catch (err) {
  console.error('Error rendering PDF:', err);
}
