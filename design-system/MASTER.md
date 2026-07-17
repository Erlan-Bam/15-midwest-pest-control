# Pest control prospect template design system

This file is the source of truth for standalone pest control prospect previews. Individual projects may override accent colors and copy through `src/data/prospect.ts`, but they must preserve the interaction, accessibility, and safety rules below.

## Direction

- Style: Calm, high-contrast field-service clarity
- Content emphasis: Reduce anxiety with clear next steps and confirmation labels. Do not claim safety, licensing, treatment timing, guaranteed removal, or protected pest categories without evidence.
- Recommendation adaptation: Low-contrast neumorphism was rejected despite the recommendation engine result; the template uses accessible flat surfaces and visible borders.

## Section order

1. Problem-first hero
2. Public rating snapshot
3. Pest or service categories
4. Inspection/request process
5. Owner-photo placeholders
6. Rating evidence
7. Service area
8. FAQ
9. Demo inspection form
10. Sources and owner approvals

## Color tokens

| Role | Default | Token |
| --- | --- | --- |
| Background | `#f8fafc` | `--theme-bg` |
| Surface | `#ffffff` | `--theme-elevated` |
| Text | `#18352f` | `--theme-ink` |
| Muted text | `#596579` | `--theme-muted-text` |
| Default accent | `#4f8a5b` | `--theme-accent` |

The prospect config may change accent, surface, and ink values. Every foreground/background pair must retain at least WCAG AA contrast.

## Typography and spacing

- Use the system-first `Sora` display stack and `Manrope` body stack already defined in `src/styles/global.css`.
- Use a 4/8 px spacing rhythm and a maximum content width of 1200 px.
- Keep body text at 16 px or larger on mobile and keep interactive controls at least 44 px high.

## Reusable components

- `PreviewBanner.astro`: fixed unofficial-concept disclosure.
- `PreviewPage.astro`: industry-aware section composition.
- `HeroVisual.astro`: code-native placeholder artwork; never copied customer photography.
- `FaqAccordion.tsx`: keyboard-accessible disclosure of verified and owner-confirmation answers.
- `QuoteForm.tsx`: browser-only form with exact non-submission success copy and scroll recovery.
- `StickyMobileCTA.astro`: two-action mobile bar with reserved page padding.

## CTA behavior

Use a calm inspection or quote request as the primary action and keep the public phone visible without urgency claims.

The form must never have an `action` attribute or transmit data. Its success state must say: “This request was not sent. Preview form — connect to email or CRM after owner approval.”

## Content guardrails

- Keep the fixed “Unofficial website concept prepared for [BUSINESS NAME]” disclosure.
- Keep `noindex, nofollow, noarchive, nosnippet` in HTML and the matching Vercel response header.
- Do not add invented testimonials, customer names, licenses, insurance, awards, prices, warranties, response times, guarantees, staff, service areas, or review schema.
- Label volatile ratings and operational facts for confirmation before launch.
- Use code-native placeholders or owner-supplied, rights-cleared media only.

## Responsive and accessibility checks

- Verify at 390 × 844 and 1440 × 1000, plus a 375 px narrow-phone check.
- Require zero horizontal overflow.
- Keep the disclosure and sticky CTA fully contained after scrolling and form submission.
- Preserve visible focus styles, sequential headings, labeled controls, and reduced-motion behavior.
