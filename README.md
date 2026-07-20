# Portfolio — Design & Photography

A single-page bilingual (FR/EN) portfolio built with React + Vite.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build for deployment:

```bash
npm run build
```

This outputs a static `dist/` folder you can host anywhere (Netlify, Vercel, GitHub Pages, o2switch, etc.).

## Fonts — important

- **Poppins** loads automatically from Google Fonts, nothing to do.
- **Supreme** is a paid/licensed typeface (by PSCH, distributed via Future Fonts). It is **not** bundled here for licensing reasons. To use it:
  1. Create a `fonts` folder inside `public/` (i.e. `public/fonts/`) if it doesn't exist yet.
  2. Drop your two variable font files in there, named exactly:
     - `Supreme-Variable.woff2`
     - `Supreme-VariableItalic.woff2`
  3. That's it — `src/index.css` already points to `/fonts/Supreme-Variable.woff2` and `/fonts/Supreme-VariableItalic.woff2` with a full weight range (100–900), so it works immediately, no code changes needed.
  4. Until the files are added, titles fall back to a system serif so the layout still looks intentional.

  Note: anything placed in `public/` is served from the site root, so `public/fonts/Supreme-Variable.woff2` becomes available at `/fonts/Supreme-Variable.woff2` — which is what the CSS expects.

If you'd rather not license Supreme, swap `--font-display` in `src/index.css` for a free alternative in a similar geometric-grotesk spirit (e.g. "General Sans" or "Clash Display" from Fontshare are free and close in feel).

## Structure

```
src/
  App.jsx              # layout, scrollspy, section wiring
  i18n.js              # all FR/EN copy lives here — edit freely
  useReveal.js          # scroll-reveal hook
  index.css            # design tokens + all styling
  components/
    Nav.jsx             # fixed vertical left nav
    Hero.jsx
    Design.jsx
    Photography.jsx
    About.jsx
    Contact.jsx
    RegistrationMark.jsx  # the little crosshair "registration mark" icon (print-production reference, used as the site's signature motif)
```

## Customizing content

Everything text-related — nav labels, hero copy, project names/descriptions, bio, contact links — lives in `src/i18n.js` under the `en` and `fr` keys. Edit the strings directly; layout adapts automatically.

## Project detail modal

Clicking (or pressing Enter/Space on) a card in the Design section opens a modal. Layout, top to bottom: project title, tag/year, role/client, a longer description, then a captioned photo gallery (logo alone, moodboard, packaging shots, etc).

- Text content lives in `src/i18n.jsx`, under each design item:
  - `role`, `client`, `details` — optional; `details` falls back to the short `desc` if left out.
  - `gallery` — an array of `{ caption: '...' }` objects, one per photo you want in that project's modal. The order matches the images below.
- Images live in `src/media.js`, under `designGalleries` — one array per project, matching the order of projects in `i18n.jsx`. Each inner array holds image paths (or `null` for a placeholder), matching the order of that project's `gallery` captions.

Example for one project — 3 photos, 3 captions:

`i18n.jsx`:
```js
gallery: [
  { caption: 'Logotype, standalone' },
  { caption: 'Moodboard — colour and texture references' },
  { caption: 'Packaging applied to crates and labels' },
],
```

`media.js`, same project, same position:
```js
[
  '/images/maree-logo.jpg',
  '/images/maree-moodboard.jpg',
  '/images/maree-packaging.jpg',
],
```

Add or remove entries in both places together — the count and order need to match. A caption with no matching image (or `null`) shows a numbered placeholder instead of breaking.

To add the same modal behavior to Photography (currently view-only), you'd wire up the same `openIndex` state pattern in `Photography.jsx` and reuse `ProjectModal`.

## CV download button

The About section has a "View my CV" / "Voir mon CV" button that opens a PDF in a new tab.

1. Put your CV PDF at `public/cv.pdf` (exact name, at the root of `public/` — not in a subfolder).
2. That's it — the button in `About.jsx` already points to `/cv.pdf` with `target="_blank"`.

If you'd rather name the file differently, update the `href="/cv.pdf"` in `src/components/About.jsx` to match.

## Adding real images

Images are wired in through `src/media.js`, kept separate from `i18n.jsx` so you only ever set them once (not once per language).

1. Put your image files in `public/images/` (create the folder if it isn't there — an empty one is already included).
2. Open `src/media.js`. You'll see two arrays, `designImages` and `photographyImages`, each with 4 `null` placeholders — one per project/photo, in the same order as the items in `src/i18n.jsx`.
3. Replace `null` with the path to your file, e.g.:

   ```js
   export const designImages = [
     '/images/maree.jpg',
     '/images/cahier-04.jpg',
     '/images/sillage.jpg',
     '/images/nautile.jpg',
   ]
   ```

4. Save — the placeholder blocks are automatically replaced by your photos, cropped to fill the frame (`object-fit: cover`), no other code changes needed.
5. If you add or remove projects/photos in `i18n.jsx`, keep `media.js` in sync — same number of entries, same order, use `null` for any item that should keep the plain placeholder.

Recommended sizes: roughly 1200px on the long edge is plenty for web (the frames crop to fixed ratios — 4:3 for Design, 3:4 for Photography — so exact dimensions don't need to match, just aim for a similar aspect ratio so nothing important gets cropped out). JPG for photos, PNG only if you need transparency.

## Design notes

- Palette: warm paper white, near-black ink, and a single signal red used only for active/interactive states — kept deliberately restrained.
- The circular crosshair icon is a nod to print registration marks, echoing the print/graphic-design subject matter; it marks the active nav item and hero corners.
- Section transitions use IntersectionObserver-driven fade/rise as you scroll, respecting `prefers-reduced-motion`.
- Vertical nav collapses to icon-only under 720px width.
