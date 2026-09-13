# Poolbiking Caribbean

Professional regional website for **Poolbiking Caribbean**, presenting POOLBIKING aquatic bikes and professional pool-fitness equipment for hotels, resorts, fitness facilities, rehabilitation environments and other Caribbean projects.

## Redesign

The `redesign/poolbiking-caribbean` branch is a from-scratch visual rebuild of the previous site. The redesign focuses on:

- premium, restrained presentation rather than template-style animation;
- real POOLBIKING marketing and product photography already stored in the repository;
- clearer product discovery and facility-specific positioning;
- responsive layouts with stronger typography, spacing and contrast;
- product pages that avoid aggressively upscaling lower-resolution product photography;
- a simpler commercial path from product exploration to quote request.

The application is built with **React + Vite** and uses hash-based routing so it can be deployed as a static site on services such as Cloudflare Pages, Netlify, Vercel or comparable hosts.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Contact form configuration

The quote form reads the deployment variable below:

```bash
VITE_CONTACT_EMAIL=your-sales-email@example.com
```

Set that variable in the chosen hosting platform before production launch. The redesign intentionally does not publish invented placeholder contact information.

## Brand / source material

The repository contains POOLBIKING product imagery, marketing photography, warranty graphics and brand assets used to present the equipment professionally. Product information should continue to be checked against current manufacturer specifications before publication when specifications change.
