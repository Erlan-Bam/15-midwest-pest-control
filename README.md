# Midwest Pest Control — unofficial website concept

This repository contains one standalone, noindex prospect preview for Midwest Pest Control. It does not contain routes, facts, or assets for any other prospect.

- Production: [https://15-midwest-pest-control.vercel.app](https://15-midwest-pest-control.vercel.app/)
- Reusable industry system: Pest control (derived from `template/pest-control`)
- Canonical business facts: `src/data/prospect.ts`

## Run and verify

```bash
npm install
npm run dev
```

Run the complete generated-output safeguard check:

```bash
npm run verify
```

The command type-checks the project, builds the single root page, and checks the business disclosure, noindex policy, exact form-safety copy, absent form action, absent review schema, canonical hostname, site-wide robots rule, and Vercel response-header configuration.

## Public research sources

- [Google Maps listing search](https://www.google.com/maps/search/?api=1&query=Midwest%20Pest%20Control%20Tulsa%20OK%20918%20417%201137): Business identity, location, public phone, and rating snapshot to recheck.
- [MerchantCircle listing](https://www.merchantcircle.com/midewest-pest-control-tulsa-ok): Tulsa identity and public phone.

Rating values are dated research snapshots, not review schema. Recheck volatile facts before owner-approved use.

## Confirm with the owner before launch

- Exact pest/service categories
- Residential/commercial availability
- Inspection and response timing
- Service radius
- Current rating and review count
- Recurring plan terms
- Permission to use team photos

## Safety boundary

- Keep the fixed unofficial-concept disclosure and full noindex policy until owner approval.
- Keep the form browser-only; it must not email, store, or transmit visitor data.
- Do not add testimonials, licenses, insurance, awards, prices, response times, warranties, guarantees, staff, or expanded service areas without evidence.
- Replace code-native placeholders only with owner-supplied, rights-cleared photography.

## Deployment

This isolated repository deploys as one Astro static site to Vercel. The configured project name is `15-midwest-pest-control`, and the output directory is `dist/`.
