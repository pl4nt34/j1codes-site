# j1codes-site

J1Codecrafters marketing website — 5 static pages, no framework, no build step.
Cloudflare Pages serves the files as-is.

## Layout

```
index.html      Home — hero, the escape problem, why J1, credibility, CTA
product.html    How it works — hybrid principle, coverage, fail-closed, traceability
demo.html       Demo — 3 placeholder video slots (see below)
about.html      About — company story and mission
contact.html    Contact — Formspree form + mailto
styles.css      All styling (palette variables at the top)
main.js         Mobile nav toggle only
assets/         logo.svg, favicon.svg (placeholders — replace when ready)
```

## Editing copy

All content lives directly in the HTML files — no JS-rendered text. Each page is
divided by `<!-- ===== Section ===== -->` comments. Edit the text between the tags
and save; nothing to rebuild.

The header nav and footer are repeated in every page (static site, no includes).
If you change them, change them in all five files.

## Replacing the demo videos

In `demo.html`, each video slot is marked with `<!-- REPLACE: video embed here -->`.
Delete the placeholder `<div class="video-slot__frame">…</div>` and drop in a
`<video>` tag or YouTube iframe in its place. Keep the surrounding `<figure>` /
`<figcaption>` for the caption.

## Placeholders to supply

- `assets/og-image.png` — Open Graph preview image (referenced in every page's
  `<meta property="og:image">`).
- `assets/favicon.svg` — currently a simple J1 monogram; replace if desired.
- Demo videos (above).

## Contact form

The form posts to Formspree (`https://formspree.io/f/xojgeqez`) — public endpoint
by design, no backend. Formspree's default thank-you redirect handles submission.
The `_subject` hidden field sets the notification email subject.

## Deploying (Cloudflare Pages)

1. Push to the repo.
2. In Cloudflare Pages, connect the repo; framework preset **None**;
   build command **(empty)**; output directory **/** (repo root).
3. Every push to `main` deploys automatically.

No analytics are included. To add Cloudflare Web Analytics later, enable it in the
Pages dashboard (it injects its own snippet).
