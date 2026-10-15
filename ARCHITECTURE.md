# Tropical Charters: site architecture

A bilingual (EN/ES) marketing and booking site for a private boat charter agency in Fajardo, Puerto Rico.
Tropical Charters books its partner captains' boats to the cays (Icacos, Palomino), Culebra and Vieques.

This repo is currently a **design preview**. Pages, content, motion and the booking UI are built.
Availability and payment are stubbed until the client's cal.com account exists.

## Stack

| Layer | Choice | Why |
| --- | --- | --- |
| Framework | Astro 7, static output | Content site: fast first paint, good SEO, zero JS unless a section needs it |
| Motion | GSAP 3.15 + ScrollTrigger | Scroll-scrubbed timelines, horizontal pinning, timing control |
| Smooth scroll | Lenis 1.3 | Inertial scroll, driven by the GSAP ticker so both agree on position |
| Type | Bodoni Moda (display), Jost (text) via Google Fonts | High-contrast serif for a luxury feel; geometric sans from 1930s yacht-club posters |
| Booking (launch) | cal.com + Google Calendar + Stripe | Right size for 3 to 6 boats; no custom backend |
| Hosting (preview) | GitHub Pages via Actions | Free and automatic on every push to `main` |
| Hosting (launch) | Same, or Vercel/Netlify with a custom domain | Only needed if serverless functions are added |

Node 22.12+ is required (see `.nvmrc`).

## Directory map

```
src/
  pages/                 Routes. English at the root, Spanish under /es/
    index.astro          → views/Home.astro (lang="en")
    es/index.astro       → views/Home.astro (lang="es")
    trips/[slug].astro   → views/Trip.astro, one page per trip
    es/trips/[slug].astro
  views/                 Full-page templates shared by both languages
    Home.astro
    Trip.astro
  layouts/Base.astro     <head>, SEO and hreflang tags, preloader, nav, footer
  components/            One component per section, each with its own scoped CSS and script
    Preloader.astro      Wordmark + coordinates counter, then the screen splits along the horizon
    Nav.astro            Transparent over the hero, solid after; hides on scroll down; mobile menu
    Hero.astro           Full-bleed photo, headline reveal, live Fajardo clock
    Statement.astro      Words fill in on scroll; inline photo pills after place names
    Voyage.astro         Pinned nautical chart: the route draws and the water changes color through the day
    TripList.astro       Editorial trip list with a cursor-following photo
    Fleet.astro          Horizontal pinned gallery of the boats
    HowItWorks.astro     Three booking steps along a brass line
    Reviews.astro        Guest-book quotes
    Journal.astro        Destination-guide teasers (blog)
    BookingPanel.astro   Boat / date / guests / total. Preview of the cal.com flow
    Footer.astro         Night section with a bioluminescent water canvas
  data/                  All content. Edit here, not in components
    site.ts              Contact details, marinas, WhatsApp
    trips.ts             Trips: copy, itinerary, base price, which boats run them
    boats.ts             Fleet: specs, captain, price multiplier
    voyage.ts            Stops on the chart's sample day
    content.ts           Reviews and guide teasers
  i18n/index.ts          UI strings (en/es), href()/alternate() helpers, clock formatting
  lib/paths.ts           Base-path helpers (the site lives under /tropicalCharters/ on Pages)
  scripts/motion.ts      Shared GSAP/ScrollTrigger/Lenis setup, plus the onReady() hook
  styles/global.css      Design tokens, type scale, buttons
public/images/           Photography (Unsplash placeholders for now)
```

## Content model

Content lives in typed TypeScript modules. Every user-facing string is a `Localized` pair, built with
`L('English', 'Español')`, so a missing translation fails the type check.

- **Trip:** `slug`, `name`, `summary`, `hours`, `priceFrom` (base whole-boat price), `boats[]` (boat slugs),
  `departs`, `itinerary` (24h time + text), `included`, `bring`, `image`, `gallery[]`.
- **Boat:** `slug`, `name`, `kind`, `lengthFt`, `guests`, `rate` (price multiplier), `captain`, `image`, `bestFor`, `about`.
- **Price on a boat** = `priceFrom × rate`, rounded to $10. The list shows the cheapest boat as "From".

When the client wants to edit content without code, move `data/` into a headless CMS (Sanity or Decap)
and keep the same shapes. Components won't change.

## Internationalization

- English at `/`, Spanish at `/es/`. Every page has a language switch to its counterpart, plus
  `<link rel="alternate" hreflang>` tags.
- UI strings live in `src/i18n/index.ts`; content strings live next to their data.
- Times are stored as 24h and rendered as `1:30 pm` / `1:30 p. m.`.

## Motion system

1. `scripts/motion.ts` creates one Lenis instance and ties it to GSAP's ticker and ScrollTrigger.
2. The **preloader** waits for fonts and every `img[data-preload]` (with a minimum time on first visit,
   shortened for the rest of the session). Then it calls `markReady()`.
3. Sections that animate on entry call `onReady(fn)`, so the hero reveal starts as the preloader splits.
4. Scroll scenes use CSS `position: sticky` with a scrubbed ScrollTrigger rather than GSAP pinning.
   This avoids pin-spacer layout shifts and degrades to a normal page if JavaScript fails.
5. **Reduced motion** (`prefers-reduced-motion: reduce`): no preloader animation, no smooth scroll,
   and the voyage and fleet become plain stacked lists.

## Booking: launch plan with cal.com

```
Trip page ─► cal.com embed (event type for this boat + trip)
               │  availability ◄── boat's Google Calendar (busy times block slots)
               │  intake questions: group size, occasion, hotel, dietary needs
               ▼
            Stripe payment (full amount, cal.com Stripe app)
               ▼
            Confirmation email (+ waiver link, marina directions)
            Event written to the boat's Google Calendar → captain notified
```

Setup:

1. **One Google Calendar per boat**, shared with the agency account. Captains must put *every* booking
   on it, including their own direct customers. This is the only thing that prevents double-booking,
   so it belongs in the partner agreement.
2. **One cal.com event type per boat × trip**, e.g. "Culebra – Brisa", 8h, price set, Stripe app on.
   All event types for a boat check that boat's calendar for conflicts, so a booked full day blocks the sunset slot.
3. **Buffers:** about 60 minutes after each trip for turnaround.
4. **Embed:** replace the calendar in `BookingPanel.astro` with cal.com's inline embed, selected by the boat
   radio buttons. The embed's brand color and theme can be matched to the site tokens.
5. **Not handled by cal.com** (manual at this size): weather cancellations and refunds (in Stripe),
   paying out partners, per-person pricing, add-ons, and waivers (send a waiver-service link in the confirmation email).

Alternative later: keep the custom panel UI and read slots from the cal.com API. That needs a server-side
API key, so it requires serverless functions (Vercel/Netlify), not GitHub Pages.

If the fleet grows past about 6 boats, or add-ons and gift cards matter, move to FareHarbor or Peek.

## SEO

- Static HTML per page and language, with canonical, hreflang and Open Graph tags.
- To do: `LocalBusiness` + `TouristTrip` structured data, `sitemap.xml` (`@astrojs/sitemap`),
  Google Business Profile, and the first destination guides (titles drafted in `data/content.ts`).

## Before launch

- [ ] Real photography (replace `public/images`, keeping the file names or updating `data/`)
- [ ] Real boats, captains, capacities and prices (`data/boats.ts`, `data/trips.ts`)
- [ ] Real reviews from Google (`data/content.ts`; the current ones are labeled samples)
- [ ] Contact details, WhatsApp number, Instagram (`data/site.ts`)
- [ ] Domain. Then set `site` and remove `base` in `astro.config.mjs`
- [ ] cal.com + Stripe + Google Calendars (see above)
- [ ] Privacy policy and terms pages, cancellation policy reviewed by the client
- [ ] Analytics (Plausible or GA4)
- [ ] Bio bay: Laguna Grande and Mosquito Bay only allow non-motorized boats. Offer bio bay as a
      partner kayak add-on rather than a boat trip

## Develop and deploy

```sh
nvm use            # Node 22
npm install
npm run dev        # http://localhost:4321/tropicalCharters/
npm run build      # static site in dist/
```

Pushing to `main` deploys to GitHub Pages through `.github/workflows/deploy.yml`.
