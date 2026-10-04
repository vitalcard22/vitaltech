# Portfolio

React + TypeScript + Vite. No other dependencies.

## Run
```
npm install
npm run dev      # local preview
npm run build    # production build into dist/
```

## Edit your content (no component changes needed)
- `src/data/site.ts` - name, hero text, services, about, skills, contact links
- `src/data/projects.ts` - case studies and future project placeholders

Search for `TODO` to find placeholders: brand name, email, LinkedIn, X, WhatsApp.
Also update the title, canonical URL and name in `index.html`.

## Replace the CSS mockups with real screenshots
Put images in `src/assets/`, import them in `src/data/projects.ts` and set
`images: { hero: heroImg, gallery: [img1, img2] }` on the project.

## Deploy (Vercel)
Import the repo. `vercel.json` already rewrites all routes to `index.html`.

## Design system
See `DESIGN.md`.
