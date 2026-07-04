# cairn — standing rules for Claude

This repo is a static study-notes site (GitHub Pages, no build step).
The owner is NOT technical: explain steps in plain language, one at a time.

## RULE 0 — NEVER ADD CONTENT (most important rule)

The owner adds ALL study material by hand. Claude builds/maintains the ENGINE only.

- NEVER create, generate, edit or "improve" anything inside `content/`
  (no lecture notes, quizzes, exam papers, no "sample"/"demo"/"example" files)
  unless the owner explicitly asks in that moment.
- The single exception: the owner pastes a transcript/rough notes and asks for
  it to be turned into a note file. Even then, hand the file back or place it
  ONLY where the owner says.
- An empty site with clean "No notes yet" empty-states is the CORRECT result.
- If an instruction seems to imply writing into `content/`, ask first.

## How the site works (file-drop publishing)

- The owner drops one file into a folder; GitHub Actions rebuilds and republishes.
- `content/lectures/<subject>/DD-MM-YYYY-topic.md` — note with frontmatter
  (subject, topic, date DD-MM-YYYY, summary, optional quiz).
- `content/quizzes/<subject>/<topic>.json` — `{title, questions:[{q, options[], answer(0-based), explain?}]}`.
- `content/exam-papers/<subject>/<name>.md` — print-friendly; answers under `## Answer Key`.
- `scripts/build-manifest.mjs` scans `content/` and writes `manifest.json`.
  `manifest.json` is AUTO-GENERATED — never hand-edit it.
- `.github/workflows/deploy.yml` runs the script and publishes on every push to main.
- Blank templates live in `templates/` (they are NOT content).

## Engine rules

- Plain HTML/CSS/vanilla JS. No framework, no bundler, no package manager.
- Hash routing (#/...), full innerHTML re-render, all rendering client-side from manifest.json.
- Every content file is UNTRUSTED: Markdown goes through marked THEN DOMPurify;
  every other string is HTML-escaped. Never bypass this.
- Every view must handle "nothing here yet" with a designed empty state.
- Cache-busting: whenever `app.js`, `styles.css` or `config.js` changes,
  bump `window.ASSET_V` in `version.js` by one. Content changes: don't touch it.
- `config.js` is the owner-editable settings file (site name, subject order,
  hero text, disclaimer, default language).

## Design system (hard requirements)

- Colors (flat only): ink #0B0B0B, paper #F4F2EC, accent acid #C8F04A (the ONLY accent),
  greys #6B6B64 (on paper) / #9A9A90 (on ink).
- Fonts: Bodoni Moda (wordmark/big headings), Archivo (body; 800–900 uppercase statements),
  Space Mono (tiny uppercase metadata labels — used generously).
- Hairline 1px borders instead of shadows. Cards near-square (radius 2–4px max).
- Pills (fully rounded) are the ONLY big radius: acid fill + black text, or plain outline.
- Glassmorphism for sticky header / settings sheet / quiz bar: translucent flat color +
  backdrop-filter blur + hairline border.
- Asymmetric editorial layouts; mobile-first.

BANNED (redo the work if any appear): gradients of ANY kind; purple/indigo/teal-pink/neon
palettes; glowing drop-shadows; everything-rounded corners; emoji or clip-art (SVG icons only);
blob shapes; dead-center hero with headline + two buttons.
Gut check: "would this look at home in a printed fashion/sports magazine?"

## Disclaimer (never remove or weaken)

Every page shows the student-made / unofficial / may-contain-mistakes notice:
a banner on the homepage AND the footer on every page. Text lives in `config.js`
(`disclaimer.en` / `disclaimer.ms`). It may be reworded, never removed or hidden.
