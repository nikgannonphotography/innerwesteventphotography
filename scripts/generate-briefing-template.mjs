import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const downloadsDir = path.join(publicDir, 'downloads');

if (!fs.existsSync(downloadsDir)) {
  fs.mkdirSync(downloadsDir, { recursive: true });
}

const logoPath = path.join(publicDir, 'logos', 'IWEP - Desktop Website (160 x 40px).png');
let logoBase64 = '';
if (fs.existsSync(logoPath)) {
  logoBase64 = `data:image/png;base64,${fs.readFileSync(logoPath).toString('base64')}`;
}

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>IWEP Event Photography Briefing Template (DOC-01)</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 12mm 15mm;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #111111;
      background: #ffffff;
      font-size: 12.5px;
      line-height: 1.45;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .page {
      page-break-after: always;
      height: 272mm;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
    }
    .page:last-child {
      page-break-after: avoid;
    }
    
    /* Header */
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 10px;
      border-bottom: 2px solid #111111;
      margin-bottom: 14px;
    }
    .logo-img {
      height: 26px;
      width: auto;
      object-fit: contain;
    }
    .doc-tag {
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #555555;
      text-align: right;
    }

    h1 {
      font-size: 20px;
      font-weight: 800;
      letter-spacing: -0.02em;
      color: #111111;
      margin-bottom: 3px;
    }
    .subtitle {
      font-size: 12.5px;
      color: #555555;
      margin-bottom: 12px;
    }

    /* Section Styling */
    .section-title {
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: #111111;
      background: #f4f3ef;
      padding: 4px 8px;
      border-left: 3px solid #111111;
      margin-top: 10px;
      margin-bottom: 6px;
    }

    /* Form Fields Grid */
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px 12px;
      margin-bottom: 8px;
    }
    .grid-3 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 6px 10px;
      margin-bottom: 8px;
    }
    .field-box {
      border: 1px solid #dcd9d2;
      border-radius: 3px;
      padding: 5px 8px;
      background: #faf9f6;
    }
    .field-label {
      font-size: 9.5px;
      font-weight: 700;
      text-transform: uppercase;
      color: #666666;
      letter-spacing: 0.04em;
      margin-bottom: 2px;
    }
    .field-line {
      min-height: 16px;
      font-size: 11.5px;
      color: #222222;
      border-bottom: 1px dashed #cccccc;
    }

    /* Checklist Table */
    table.tier-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 8px;
      font-size: 11.5px;
    }
    table.tier-table th {
      background: #111111;
      color: #ffffff;
      text-align: left;
      padding: 5px 8px;
      font-size: 9.5px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    table.tier-table td {
      border: 1px solid #e0ded8;
      padding: 5px 8px;
      vertical-align: top;
    }
    table.tier-table tr:nth-child(even) td {
      background: #fbfbf9;
    }
    .badge-tier {
      display: inline-block;
      font-size: 9.5px;
      font-weight: 800;
      padding: 2px 5px;
      border-radius: 2px;
      text-transform: uppercase;
      background: #222222;
      color: #ffffff;
    }
    .badge-t1 { background: #d9381e; }
    .badge-t2 { background: #d97706; }
    .badge-t3 { background: #2563eb; }
    .badge-t4 { background: #4b5563; }

    .checklist-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 3px;
      font-size: 11.5px;
    }
    .check-sq {
      width: 11px;
      height: 11px;
      border: 1px solid #666666;
      margin-right: 6px;
      margin-top: 2px;
      flex-shrink: 0;
    }

    /* Footer */
    .footer {
      border-top: 1px solid #dcd9d2;
      padding-top: 6px;
      margin-top: 8px;
      display: flex;
      justify-content: space-between;
      font-size: 9.5px;
      color: #666666;
    }
  </style>
</head>
<body>

  <!-- ================= PAGE 1 ================= -->
  <div class="page">
    <div>
      <div class="header">
        <div>
          ${logoBase64 ? `<img src="${logoBase64}" class="logo-img" alt="IWEP Logo" />` : `<strong>INNER WEST EVENT PHOTOGRAPHY</strong>`}
        </div>
        <div class="doc-tag">
          FRAMEWORK: DOC-01<br/>
          EVENT PHOTOGRAPHY BRIEFING TEMPLATE
        </div>
      </div>

      <h1>Event Photography Briefing Template</h1>
      <p class="subtitle">
        Use this 4-tier briefing document to structure priorities, VIP call times, sponsor obligations, and delivery deadlines.
      </p>

      <div class="section-title">1. Event Overview & Schedule</div>
      <div class="grid-2">
        <div class="field-box">
          <div class="field-label">Event / Project Name</div>
          <div class="field-line"></div>
        </div>
        <div class="field-box">
          <div class="field-label">Organisation / Host</div>
          <div class="field-line"></div>
        </div>
      </div>

      <div class="grid-3">
        <div class="field-box">
          <div class="field-label">Event Date(s)</div>
          <div class="field-line"></div>
        </div>
        <div class="field-box">
          <div class="field-label">Coverage Start Time (Call Time)</div>
          <div class="field-line"></div>
        </div>
        <div class="field-box">
          <div class="field-label">Coverage Finish Time (Wrap Time)</div>
          <div class="field-line"></div>
        </div>
      </div>

      <div class="grid-2">
        <div class="field-box">
          <div class="field-label">Venue Name, Room & Stage (e.g. ICC Sydney, Grand Ballroom)</div>
          <div class="field-line"></div>
        </div>
        <div class="field-box">
          <div class="field-label">Venue Address & Loading Dock Access Notes</div>
          <div class="field-line"></div>
        </div>
      </div>

      <div class="section-title">2. On-Site Contacts & Decision Makers</div>
      <div class="grid-2">
        <div class="field-box">
          <div class="field-label">Lead Event Producer / Event Manager (Name & Mobile)</div>
          <div class="field-line"></div>
        </div>
        <div class="field-box">
          <div class="field-label">On-Site PR / Media / Communications Lead (Name & Mobile)</div>
          <div class="field-line"></div>
        </div>
      </div>

      <div class="section-title">3. Turnaround Deadlines & Image Delivery</div>
      <div class="grid-3">
        <div class="field-box">
          <div class="field-label">Standard Master Delivery</div>
          <div class="checklist-item" style="margin-top: 3px;">
            <div class="check-sq"></div> 3–5 Business Days (Full Gallery)
          </div>
        </div>
        <div class="field-box">
          <div class="field-label">Expedited PR Highlight Selects</div>
          <div class="checklist-item" style="margin-top: 3px;">
            <div class="check-sq"></div> Sub-12h (Next-Morning by 8:00 AM)
          </div>
        </div>
        <div class="field-box">
          <div class="field-label">Delivery Channel</div>
          <div class="checklist-item" style="margin-top: 3px;">
            <div class="check-sq"></div> Cloud Gallery + Direct ZIP Link
          </div>
        </div>
      </div>

      <div class="section-title">4. Four-Tier Shot Priority Checklist (Part 1)</div>
      <table class="tier-table">
        <thead>
          <tr>
            <th style="width: 22%;">Priority Tier</th>
            <th style="width: 48%;">Shot Description & Key Elements</th>
            <th style="width: 30%;">Specific Names / Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span class="badge-tier badge-t1">Tier 1: Mandatory</span><br/>
              <small style="color: #666;">Zero Compromise</small>
            </td>
            <td>
              <strong>Keynote Speakers, Dignitaries & Award Handshakes</strong>
              <div class="checklist-item"><div class="check-sq"></div> Keynote address podium & stage wide</div>
              <div class="checklist-item"><div class="check-sq"></div> Award winners with trophies / certificates</div>
              <div class="checklist-item"><div class="check-sq"></div> VIP arrivals & ceremonial handshakes</div>
              <div class="checklist-item"><div class="check-sq"></div> Official executive group photograph</div>
            </td>
            <td style="font-size: 10.5px; color: #555;">
              List key VIPs:<br/>
              1. ______________________<br/>
              2. ______________________<br/>
              3. ______________________
            </td>
          </tr>
          <tr>
            <td>
              <span class="badge-tier badge-t2">Tier 2: Commercial</span><br/>
              <small style="color: #666;">Sponsor Deliverables</small>
            </td>
            <td>
              <strong>Sponsor Integration & Partner Activations</strong>
              <div class="checklist-item"><div class="check-sq"></div> Branded expo booths with active delegates</div>
              <div class="checklist-item"><div class="check-sq"></div> Sponsor banners, media walls & stage screens</div>
              <div class="checklist-item"><div class="check-sq"></div> Branded merchandise, delegate lanyards & gifts</div>
            </td>
            <td style="font-size: 10.5px; color: #555;">
              Key Sponsors to feature:<br/>
              1. ______________________<br/>
              2. ______________________
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="footer">
      <span>Inner West Event Photography • info@innerwesteventphotography.com.au • 0437 700 749</span>
      <span>Page 1 of 2 • Framework DOC-01</span>
    </div>
  </div>

  <!-- ================= PAGE 2 ================= -->
  <div class="page">
    <div>
      <div class="header">
        <div>
          ${logoBase64 ? `<img src="${logoBase64}" class="logo-img" alt="IWEP Logo" />` : `<strong>INNER WEST EVENT PHOTOGRAPHY</strong>`}
        </div>
        <div class="doc-tag">
          FRAMEWORK: DOC-01<br/>
          PAGE 2 • TECHNICAL & STAGING BRIEF
        </div>
      </div>

      <div class="section-title">4. Four-Tier Shot Priority Checklist (Part 2)</div>
      <table class="tier-table">
        <thead>
          <tr>
            <th style="width: 22%;">Priority Tier</th>
            <th style="width: 48%;">Shot Description & Key Elements</th>
            <th style="width: 30%;">Notes / Room Locations</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span class="badge-tier badge-t3">Tier 3: Audience</span><br/>
              <small style="color: #666;">Delegate Energy</small>
            </td>
            <td>
              <strong>Delegate Engagement & Room Scale</strong>
              <div class="checklist-item"><div class="check-sq"></div> Wide architectural room shots showing full crowd</div>
              <div class="checklist-item"><div class="check-sq"></div> Candid attendee reactions, laughter & note-taking</div>
              <div class="checklist-item"><div class="check-sq"></div> Q&A interactions and roving mic moments</div>
              <div class="checklist-item"><div class="check-sq"></div> Workshop breakouts & interactive panel tables</div>
            </td>
            <td style="font-size: 10.5px; color: #555;">
              Session times:<br/>
              • Morning Plenary: _______<br/>
              • Breakouts: ____________<br/>
              • Panel: ________________
            </td>
          </tr>
          <tr>
            <td>
              <span class="badge-tier badge-t4">Tier 4: Detail</span><br/>
              <small style="color: #666;">Atmosphere & Decor</small>
            </td>
            <td>
              <strong>Venue Architecture, Food & Evening Details</strong>
              <div class="checklist-item"><div class="check-sq"></div> Pre-event empty room, table setups & floral decor</div>
              <div class="checklist-item"><div class="check-sq"></div> Catering presentation, canapés & bar service</div>
              <div class="checklist-item"><div class="check-sq"></div> Networking drinks & cocktail hour mingling</div>
            </td>
            <td style="font-size: 10.5px; color: #555;">
              Capture decor before guests enter (Time: ________)
            </td>
          </tr>
        </tbody>
      </table>

      <div class="section-title">5. Technical, Lighting & Venue Production Notes</div>
      <div class="grid-2">
        <div class="field-box">
          <div class="field-label">Stage Lighting Conditions</div>
          <div class="checklist-item"><div class="check-sq"></div> Standard Daylight / Bright House Lights</div>
          <div class="checklist-item"><div class="check-sq"></div> Theatrical Stage Wash / Coloured Spots</div>
          <div class="checklist-item"><div class="check-sq"></div> Low-Light / Blackout Presentation Mode</div>
        </div>
        <div class="field-box">
          <div class="field-label">Stage Audio & Shutter Protocols</div>
          <div class="checklist-item"><div class="check-sq"></div> Silent Electronic Shutter Required (Yes)</div>
          <div class="checklist-item"><div class="check-sq"></div> Flash Permitted during Keynotes (No / Yes)</div>
          <div class="checklist-item"><div class="check-sq"></div> Flash Permitted during Awards / Drinks (Yes)</div>
        </div>
      </div>

      <div class="section-title">6. Key Run of Show Milestones (Chronological Order)</div>
      <div class="field-box" style="margin-bottom: 8px;">
        <table style="width: 100%; border-collapse: collapse; font-size: 11.5px;">
          <tr style="border-bottom: 1px solid #e0ded8;">
            <th style="width: 15%; text-align: left; padding: 3px;">Time</th>
            <th style="width: 50%; text-align: left; padding: 3px;">Program Element / Milestone</th>
            <th style="width: 35%; text-align: left; padding: 3px;">Key People / Action Required</th>
          </tr>
          <tr style="border-bottom: 1px dashed #dcd9d2;">
            <td style="padding: 4px 3px;">08:00 AM</td>
            <td>Photographer Call Time & Room Setup Check</td>
            <td>Meet event lead, test stage lighting</td>
          </tr>
          <tr style="border-bottom: 1px dashed #dcd9d2;">
            <td style="padding: 4px 3px;">08:30 AM</td>
            <td>Delegate Registration & Morning Coffee</td>
            <td>Candid registration, sponsor booths</td>
          </tr>
          <tr style="border-bottom: 1px dashed #dcd9d2;">
            <td style="padding: 4px 3px;">09:00 AM</td>
            <td>Official Welcome & Opening Keynote</td>
            <td>Stage podium, wide room, speaker tight</td>
          </tr>
          <tr style="border-bottom: 1px dashed #dcd9d2;">
            <td style="padding: 4px 3px;">12:30 PM</td>
            <td>Networking Lunch & Sponsor Activations</td>
            <td>Expo hall, branded delegate interactions</td>
          </tr>
          <tr style="border-bottom: 1px dashed #dcd9d2;">
            <td style="padding: 4px 3px;">04:30 PM</td>
            <td>Award Presentations & Closing Ceremony</td>
            <td>Stage handshakes, trophy presentations</td>
          </tr>
          <tr>
            <td style="padding: 4px 3px;">05:30 PM</td>
            <td>Evening Drinks & Networking Wrap</td>
            <td>Social mingling, executive groups</td>
          </tr>
        </table>
      </div>

      <div class="section-title">7. Return Instructions & Studio Confirmation</div>
      <div style="background: #faf9f6; border: 1px solid #dcd9d2; padding: 6px 10px; font-size: 10.5px; line-height: 1.5; color: #333;">
        <strong>How to submit:</strong> Email this completed brief or your internal run sheet directly to <strong>info@innerwesteventphotography.com.au</strong>.<br/>
        ✓ <strong>Standard Delivery:</strong> Full master gallery delivered within 3–5 business days.<br/>
        ✓ <strong>Commercial Licensing:</strong> Perpetual commercial marketing, PR, and social media rights included.<br/>
        ✓ <strong>Venue Compliance:</strong> $10,000,000 Public Liability Certificate of Currency issued upon booking confirmation.
      </div>
    </div>

    <div class="footer">
      <span>Inner West Event Photography • ABN 56 292 719 879 • Sydney NSW</span>
      <span>Page 2 of 2 • Complete Briefing Template</span>
    </div>
  </div>

</body>
</html>`;

const htmlFile = path.join(downloadsDir, 'briefing-template.html');
fs.writeFileSync(htmlFile, htmlContent);

const outputPdf = path.join(downloadsDir, 'IWEP_Event_Photography_Briefing_Template.pdf');
const chromeBinary = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const cmd = `"${chromeBinary}" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="${outputPdf}" "file://${htmlFile}"`;

console.log('Generating Briefing Template PDF...');
try {
  execSync(cmd);
  console.log(`Generated: ${outputPdf} (${fs.statSync(outputPdf).size} bytes)`);
} catch (e) {
  console.error('Error generating PDF:', e);
}

// Also generate editable Markdown version
const mdContent = `# Inner West Event Photography — Event Briefing Template (DOC-01)

Use this briefing framework to structure your event photography priorities, run sheet, VIP list, and delivery deadlines.

---

## 1. Event Overview & Schedule
* **Event / Project Name:** 
* **Organisation / Host:** 
* **Event Date(s):** 
* **Call Time (Photographer Arrival):** 
* **Finish Time (Coverage Wrap):** 
* **Venue Name & Room/Stage:** (e.g., ICC Sydney, Grand Ballroom)
* **Venue Address & Loading Dock Access:** 

---

## 2. On-Site Contacts
* **Lead Event Producer / Manager:** [Name, Mobile Number]
* **PR / Media / Comms Contact:** [Name, Mobile Number]

---

## 3. Delivery Deadlines
* [x] **Standard Master Delivery:** 3–5 business days (High-res print 300 DPI + web formats)
* [ ] **Expedited PR Highlight Selects:** Sub-12h / Next-morning by 8:00 AM (Yes / No)
* **File Delivery Method:** Private cloud gallery + high-speed ZIP download link

---

## 4. The 4-Tier Shot Priority Checklist

### Tier 1: Mandatory Keynotes, VIPs & Stage Handshakes (Critical Priority)
- [ ] Keynote speaker entrances and podium speeches (tight + wide)
- [ ] Award presentations, handshake moments, and trophy handovers
- [ ] VIP dignitary arrivals and executive group photos
- **VIP Names to Capture:**
  1. 
  2. 
  3. 

### Tier 2: Sponsor & Commercial Integration (Sponsor ROI Deliverables)
- [ ] Branded expo booths with active delegates interacting
- [ ] Sponsor banners, media walls, stage screens, and signage
- [ ] Delegate lanyards, gift bags, and branded collateral
- **Key Sponsors to Feature:**
  1. 
  2. 

### Tier 3: Delegate Energy & Room Scale (Marketing & Social Media)
- [ ] Wide architectural room shots showing full room capacity/attendance
- [ ] Candid attendee reactions, laughter, and note-taking
- [ ] Q&A interactions and audience engagement
- [ ] Breakout sessions and interactive workshop tables

### Tier 4: Environmental & Catering Details (Atmosphere & Wrap Reporting)
- [ ] Pre-event empty room, stage lighting, and table styling
- [ ] Food & beverage presentation, canapés, and cocktail service
- [ ] Informal networking drinks and guest mingling

---

## 5. Technical & Lighting Notes
* **Stage Lighting:** [ ] Bright Daylight / [ ] Theatrical Coloured Wash / [ ] Low-Light Presentation Mode
* **Shutter Noise:** Silent electronic shutter shooting enabled for unobtrusive stage coverage.
* **Flash Policy:** Flash allowed during awards/networking; ambient light preferred during keynotes.

---

## 6. How to Submit
Email your completed brief or attach your run sheet to:
**info@innerwesteventphotography.com.au** | **0437 700 749**
`;

fs.writeFileSync(path.join(downloadsDir, 'IWEP_Event_Photography_Briefing_Template.md'), mdContent);
console.log('Generated Markdown template file!');
