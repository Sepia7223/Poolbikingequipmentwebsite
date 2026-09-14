# Poolbiking Caribbean

React + Vite website for POOLBIKING aquatic fitness equipment and Caribbean pool projects. Hash routing supports static hosting.

## Develop and verify

Use Node 22 or newer.

```bash
npm ci
npm run dev
npm test
npm run typecheck
npm run build
```

`dist/` is the deployable static site. The type check follows the active application from `src/main.tsx`; unused legacy pages and components remain in the repository. GitHub Actions checks types, customer journeys and the production build on redesign updates and pull requests.

## Customer experience

- Photographic homepage using the repository's actual POOLBIKING imagery, with a shorter headline, equipment stories and project FAQs.
- Facility and environment finder, with editorial starting points based on the existing catalogue. These are options to discuss, not a guarantee of pool or clinical suitability.
- A comparison shortlist of up to three models, accessible from catalogue cards, featured products and product details. Only product IDs are saved in browser local storage; corrupt or removed IDs are ignored and storage failures do not block the feature.
- Comparison table at `/#/compare`, with model specifications and a direct route into an inquiry.
- Product and facility context carried into the contact page, including editable shortlist and approximate quantities.
- Inquiry review with an explicit email handoff and copy fallback. **There is no form-submission backend.** Preparing or copying a message does not send it; customers send it in their email app.
- Manufacturer video loaded in a dismissible dialog only after a visitor chooses to watch. Escape closes it, playback is removed on dismissal and focus returns to the trigger.
- Responsive layouts, visible keyboard focus, a skip link, descriptive form labels and reduced-motion support.

## Contact details

The existing branch's business contact details are shared in `src/data/contact.ts`. Override the email for a build with:

```bash
VITE_CONTACT_EMAIL=your-sales-email@example.com
```

The footer, contact links and prepared inquiry use the same address. `VITE_` variables are public client configuration and must not contain secrets.

## Photography

Original files remain in `src/content/Marketing`. Pages use WebP derivatives in `src/content/optimized`, with a separate mobile hero source and lazy loading below the fold. The five desktop images total approximately **1.37 MB**, compared with **25.88 MB** for their originals; the mobile hero is approximately **100 KB**. These are asset sizes, not measured page-load times.

## Review before publishing

Preview at phone, tablet and desktop sizes, check horizontal comparison scrolling and test the YouTube player on the chosen host. The automated tests use jsdom, so they verify customer interactions rather than browser layout or external video playback. A local visual browser check was blocked by this workspace's browser connection during this pass.

Confirm current model specifications, availability, warranty terms and the public contact address as part of normal product review. No production deployment is included in this change.
