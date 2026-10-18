# Vertipark — Product Requirements Document (PRD)

---

## 1. Document Control
- **Product Name**: Vertipark (Smart Vertical Rotary Car Parking Network)
- **Version**: 1.0.0
- **Status**: Approved / In Development
- **Owner**: Product & Engineering Team (Vertipark Technologies Pvt. Ltd.)
- **Target Launch City**: Bengaluru, Karnataka, India (Phase 1)

---

## 2. Executive Summary & Vision

### 2.1 Product Vision
**Vertipark** transforms underutilized urban plots into automated, weatherproof, vertical rotary parking towers across Indian metropolitan hubs. By stacking 12–16 passenger vehicles on the ground footprint of just 3 conventional parking slots, Vertipark delivers 10x land efficiency, guaranteed vehicle security, and passive recurring revenue for landowners.

### 2.2 Strategic Objectives
1. **Solve Metro Parking Crisis**: Provide guaranteed, reserved, and safe car parking in hyper-congested Bengaluru corridors.
2. **Protect Assets**: Eliminate sunlight degradation, monsoon flooding, rodent wiring damage, dents, scratches, and theft.
3. **Monetize Idle Real Estate**: Enable landowners with small, irregularly shaped, or idle urban plots (min. 150 m²) to generate risk-free monthly lease rental income.
4. **Digitize Parking Access**: Implement touchless RFID access, mobile app car retrieval, and transparent upfront subscription pricing.

---

## 3. Market Problem & Opportunity

### 3.1 The Bengaluru Parking Crisis
- **Vehicle Volume**: Over 8.5 million registered motor vehicles in Bengaluru, growing by 10%+ annually.
- **Supply Deficit**: Organized off-street parking fulfills less than 5% of peak daytime and residential overnight demand.
- **Consumer Pain Points**:
  - **Atmospheric Damage**: Direct tropical sunlight oxidizes clear coats and cracks dashboards; monsoons cause waterlogging and rust.
  - **Pest Damage**: Urban rodents chew wiring harnesses, causing engine short-circuits costing ₹20,000–₹1,50,000 in repairs.
  - **Theft & Vandalism**: Street parking exposes cars to scratches, hit-and-runs, mirror thefts, and break-ins.
  - **Unorganized Parking Extortion**: Informal lots charge variable, unreceipted rates with zero liability or safety guarantee.

### 3.2 The Landowner Dilemma
- Thousands of urban plots remain vacant due to commercial development delays, boundary dispute hesitations, or capital constraints.
- Vacant plots attract municipal taxes, illegal dumping, and encroachment risks.
- Landowners seek zero-capex, predictable monthly cash flows without constructing permanent civil structures.

---

## 4. User Personas

| Persona | Description | Primary Needs | Key Pain Points |
| :--- | :--- | :--- | :--- |
| **Urban Daily Commuter** *(Rohan, 32, Tech Lead in HSR)* | Drives sedan/compact SUV to office/tech parks daily | Reserved slot, rapid drop-off & retrieval, weather protection | Spending 20–30 mins hunting for parking; bird droppings & dents |
| **Residential Car Owner** *(Priya, 41, Apartment Resident in Koramangala)* | Second car owner in an apartment complex with single allocated parking | Safe overnight parking within 300m walking radius, rodent-proof | Street parking anxiety; rodent bite repairs; monsoon flooding |
| **Corporate Fleet Manager** *(Vikram, 38, Facility Head in Whitefield)* | Manages 8–20 executive vehicles or shared pool cabs | Dedicated slots, centralized GST invoicing, vehicle swap flexibility | Unreliable public parking; safety risks for company assets |
| **Urban Plot Landowner** *(K. Narayana Murthy, 63, Retired Landowner)* | Owns a 2,000 sq ft vacant plot in Jayanagar | Guaranteed monthly lease payout, legal lease agreement, no hassles | Property encroachment risks, garbage dumping, no desire for construction |

---

## 5. Value Proposition & Key Differentiators

```
+--------------------------------------------------------------------------------+
|                                VERTIPARK CORE                                  |
+--------------------------------------------------------------------------------+
|  10x Land Efficiency     Stack 12-16 cars on 3 standard parking spots          |
|  2-4 Min Retrieval       Automated bidirectional rotary carousel                |
|  Weather & Pest Shield   Fully enclosed, weatherproof cladding + rodent seal    |
|  24/7 Monitored Safety   Trained physical guard + high-definition CCTV coverage |
|  App & RFID Ecosystem    Instant gate entry, remote pickup, UPI billing         |
|  Zero-CAPEX for Owners   Vertipark pays monthly lease + installs 100% turnkey   |
+--------------------------------------------------------------------------------+
```

---

## 6. Functional Requirements & Feature Scope

### 6.1 Public Web Portal & Conversion Funnel
The frontend web application serves as the primary marketing, education, and lead conversion platform.

1. **Brand & Value Proposition Showcase**:
   - High-impact Hero section with early-access Bengaluru pilot registration badges.
   - Animated SVG Rotary Carousel diagram demonstrating the mechanical stack concept.
   - Interactive Before/After visual comparison of an unkempt plot converted to a Vertipark tower.
2. **Interactive Pricing Calculator**:
   - Zone selection: Premium (Koramangala, Indiranagar, MG Road), High (Whitefield, HSR, Bellandur), Mid (Jayanagar, Bannerghatta), Standard (Yeshwantpur, Peenya).
   - Duration selection: Daily, Weekly, Monthly, Quarterly.
   - Real-time computation of recommended plan, starting price, and savings advice.
3. **Product & Features Explorer**:
   - Security features breakdown (24/7 CCTV, insurance coverage, physical security).
   - Step-by-step How-It-Works interactive timeline (Land scouting -> 60-day installation -> RFID activation -> Peace of mind).
   - Comparative matrix: Vertipark vs. Street Parking vs. Traditional Multi-Level Car Parks (MLCP).
4. **Landowner Partnership Portal**:
   - Revenue and partnership stages breakdown (Site visit in 3-5 days -> Offer in 2 weeks -> Setup in 45-60 days -> Recurring payouts).
   - Qualification checklist (minimum 150 m², accessible road frontage).
5. **Interactive FAQ & Legal Center**:
   - Expandable FAQ accordion addressing vehicle sizes, retrieval times, emergency access, and cancellation terms.
   - Tabbed Legal viewer for Privacy Policy and Terms of Service.
6. **Lead Generation & WhatsApp Integration**:
   - Form fields: Name, Phone Number, Optional Email, Interest Tier, City, Bengaluru Zone/Location, Custom Message.
   - Validation & Conversational WhatsApp Bridge: Auto-generates structured, pre-filled WhatsApp lead dispatch to official business line (`+91 91542 46438`).

### 6.2 Companion Mobile App & Smart Access (Roadmap & Operational Spec)
1. **RFID Gate Automation**: Dedicated vehicle-linked RFID windshield tag validates active subscription and triggers gate opening in <1.5 seconds.
2. **Retrieval On-Demand**: Users can request vehicle descent 5–10 minutes before arrival via the mobile application.
3. **Live Bay Telemetry**: Real-time bay occupancy display, mechanical health status, and live CCTV feed access (for verified subscribers).
4. **Subscription Management**: In-app renewal, plan upgrades, temporary parking pausing (up to 15 days/cycle), and payment receipts.

---

## 7. Pricing & Commercial Model

### 7.1 Consumer Subscription Matrix (Bengaluru)

| Plan Tier | Duration | Pricing Model | Features Included |
| :--- | :--- | :--- | :--- |
| **Day Pass** | 24 Hours | ₹299 – ₹349 | RFID access, security guard, CCTV, limited to 2 slots/tower |
| **Weekly Plan** | 7 Days | ₹1,599 – ₹1,999 | All Day Pass features + priority slot access + 1 free pickup/drop |
| **Monthly Plan** | 30 Days | ₹3,499 – ₹5,499 *(Zone dependent)* | Dedicated reserved slot, 3 free pickup/drops, app tracking, insurance |
| **Quarterly Plan** | 90 Days | ₹9,499 – ₹14,999 *(Save 13%)* | All Monthly features + 10 free pickup/drops, dedicated 24/7 slot |
| **Corporate Fleet** | 30 Days | ₹4,499+ / slot / month | Bulk reservation (4–10 slots), account manager, free vehicle swaps |

### 7.2 Zone Classification (Bengaluru)
- **🔴 Premium Zone** *(₹5,499/mo | ₹14,999/qtr)*: Koramangala, Indiranagar, MG Road, UB City.
- **🟠 High Zone** *(₹4,499/mo | ₹11,999/qtr)*: Whitefield, Marathahalli, HSR Layout, Bellandur.
- **🟡 Mid Zone** *(₹3,999/mo | ₹10,999/qtr)*: Jayanagar, Bannerghatta Road, JP Nagar.
- **🟢 Standard Zone** *(₹3,499/mo | ₹9,499/qtr)*: Yeshwantpur, Peenya, Hebbal, Vijayanagar.

---

## 8. Unit Economics (Per 12-Car Tower / Month)

### 8.1 Capital Expenditure (CAPEX) — Amortized over 30 Months
- Rotary Mechanical System (12 cars): ₹48,00,000 (Monthly load: ₹13,333 @ 30 mo)
- Civil Footing, Fencing & Weather Enclosure: ₹6,00,000 (Monthly load: ₹1,667)
- Electrical, CCTV & App Telemetry: ₹3,00,000 (Monthly load: ₹833)
- RFID Hardware & Gate Automation: ₹1,50,000 (Monthly load: ₹417)
- **Total Monthly CAPEX Burden**: **₹16,250 / month** *(Drops to ₹8,125 @ 60 months; tower lifetime is 12–15 years)*

### 8.2 Monthly Operational Expenditure (OPEX)
- Land Lease Rental (Mid Zone): ₹25,000
- Dedicated Security Guard (Full-time): ₹18,000
- Power & Electricity (~900 units @ ₹8/unit): ₹7,200
- Mechanical Spares & Preventative Maintenance: ₹5,000
- Tech Platform Maintenance & Cloud Infrastructure: ₹4,000
- Commercial Liability & Vehicle Damage Insurance: ₹3,000
- Administrative Support & Incidentals: ₹3,500
- **Total Monthly OPEX**: **₹65,700 / month**

### 8.3 Revenue & Margin Potential
- At 90% Occupancy (11 subscribed cars @ Mid Zone ₹3,999/mo + ad-hoc daily turnover): **₹48,000 – ₹58,000/mo** gross revenue.
- Multi-tower hub clusters (2–3 adjacent carousels per 300 m² plot) share guard, CCTV, and lease overheads, driving net operating margins above 35–48%.

---

## 9. Non-Functional Requirements (NFR)

1. **Performance & Responsiveness**:
   - First Contentful Paint (FCP) < 1.2s; Largest Contentful Paint (LCP) < 2.2s on 4G mobile connections.
   - Fluid responsive design from 320px mobile screens to 4K ultra-wide monitors.
2. **Reliability & Availability**:
   - Digital web portal target uptime: 99.9%.
   - Mechanical carousel uptime target: 99.8% (backed by on-site UPS and auto-switching diesel generator for grid outages).
3. **Accessibility**:
   - Semantic HTML5 structure adhering to WCAG 2.1 Level AA.
   - Screen-reader accessible landmarks, skip navigation, and keyboard focus outlines.
4. **Data Privacy & Compliance**:
   - Adherence to India’s Digital Personal Data Protection (DPDP) Act 2023.
   - Customer phone numbers, emails, and vehicle plate records stored with AES-256 encryption.
   - Surveillance CCTV video data retained on 30-day rolling loop with restricted access protocols.

---

## 10. Release Milestones & Rollout Plan

- **Phase 1 (Q1–Q2 2026)**:
  - Production launch of official Angular Web Portal with interactive pricing engine.
  - Bengaluru pilot site acquisition in Koramangala & HSR Layout (2 pilot towers).
  - Pre-booking cohort for first 100 early-access drivers.
- **Phase 2 (Q3–Q4 2026)**:
  - Commercial commissioning of first 5 towers in Bengaluru East & South.
  - Launch of Android / iOS mobile application with live gate RFID dispatch and car retrieval requests.
  - Corporate Fleet parking contracts launch in Whitefield & Bellandur.
- **Phase 3 (2027)**:
  - 50-tower scale-out across Bengaluru.
  - Market expansion to Hyderabad (Hitec City) and Chennai (OMR).

