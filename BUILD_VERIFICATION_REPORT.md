# Build verification report

- Project: Midwest Pest Control
- Production URL: https://15-midwest-pest-control.vercel.app/
- Architecture: one prospect, one root page, one repository, one deployment

## Automated verification

`npm run verify` passed on July 17, 2026: Astro checked 15 files with 0 errors, 0 warnings, and 0 hints, generated one root page, and passed standalone-route, disclosure, no-action form, canonical, robots, and Vercel-header assertions. Dependency audit reported 0 vulnerabilities.

## Browser verification

Local browser QA passed at desktop 1440 × 1000 and mobile 390 × 844: disclosure, title, H1, service cards, no-action form, canonical hostname, no combined-preview links, zero horizontal overflow, and FAQ structure were present. The exact disconnected form success state was exercised for the relevant reusable template family.

Production browser QA passed on July 17, 2026 at desktop 1440 × 1000 and mobile 390 × 844. The stable URL returned HTTP 200; title, H1, fixed disclosure, services, FAQ, canonical and Open Graph hostnames, noindex metadata/header, and zero horizontal overflow all passed. The obsolete `/previews/` path returned 404, the disconnected form displayed the exact not-sent success state, and no browser console errors were recorded.

## July 17 polish and proof retest

- Replaced the prospect monogram and favicon with the shared yayzo.dev mark used by the earlier prospect set.
- Reduced the production desktop H1 to 66.24 px; the complete hero ends at 753 px in the 1440 × 1000 viewport, so the headline, support copy, CTAs, and visual read as one first-screen composition.
- At 390 × 844 the H1 is 42.9 px; at 375 × 812 it is 41.25 px. All ten narrow-layout checks retained exact viewport width with no horizontal overflow.
- Added a continuously scrolling, draggable, keyboard-operable public-review gallery. Short excerpts preserve the public reviewer, rating, relative date, and Google Maps source; rating-only entries remain explicitly rating-only.
- Replaced vague confirmation prompts with three concise business-specific FAQs based on public information. Accordion expansion and answer visibility passed.
- Exercised carousel auto-scroll and ArrowRight control, FAQ state changes, and the disconnected form success state. The fixed unofficial-concept disclosure remained visible at both the top and bottom of the page.
- `npm run check` and `npm run verify` both pass with 0 errors, 0 warnings, and 0 hints across 16 checked files.

## Screenshot inventory

- `qa/screenshots/baseline-desktop-full.png`
- `qa/screenshots/baseline-mobile-full.png`
- `qa/screenshots/polished-desktop-full.png`
- `qa/screenshots/polished-mobile-full.png`

## Owner approval checklist

- Confirm the public phone, address or service area, service labels, and any appointment wording.
- Approve the displayed Google Maps rating snapshot, selected short excerpts, reviewer attribution, and source link.
- Approve or revise the three FAQ answers.
- Supply rights-cleared photography and approve any final brand assets.
- Choose the real form destination before enabling submission; the preview form currently transmits nothing.
- Keep the disclosure and noindex protections until the owner approves a public launch.
