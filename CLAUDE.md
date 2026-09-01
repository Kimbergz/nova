# NOVA — standing rules for Claude

This repo is a static study-notes site (GitHub Pages, no build step).
The owner is NOT technical: explain steps in plain language, one at a time.

## RULE 0 — NEVER ADD CONTENT (most important rule)

The owner adds ALL study material by hand. Claude builds/maintains the ENGINE only.

- NEVER create, generate, edit or "improve" anything inside `content/`
  (no lecture notes, no "sample"/"demo"/"example" files) unless the owner
  explicitly asks in that moment.
- The single exception: the owner pastes a transcript/rough notes and asks for
  it to be turned into a note file. Even then, hand the file back or place it
  ONLY where the owner says.
- An empty site with clean "No notes yet" empty-states is the CORRECT result.
- If an instruction seems to imply writing into `content/`, ask first.

## How the site works (file-drop publishing)

- The owner drops one file into a folder; GitHub Actions rebuilds and republishes.
- `content/lectures/<subject>/DD-MM-YYYY-topic.md` — note with frontmatter
  (subject, topic, date DD-MM-YYYY, summary).
- There is no quizzes feature and no exam-paper files in this repo. Exam
  papers live in Google Drive; each subject's Drive folder link is set once
  in `config.js` (`paperLinks`) and the site renders one button per subject
  that opens it in a new tab.
- `scripts/build-manifest.mjs` scans `content/lectures/` and writes
  `manifest.json`. `manifest.json` is AUTO-GENERATED — never hand-edit it.
- `.github/workflows/deploy.yml` runs the script and publishes on every push to main.
- Blank templates live in `templates/` (they are NOT content).
- A subject page lists its notes in FILENAME order (numbers sorted
  naturally, e.g. topic-2 before topic-10), not upload date — see
  `naturalCompare()` in app.js. The homepage's "latest notes" list is the
  one place that still sorts by date.

## Engine rules

- Plain HTML/CSS/vanilla JS. No framework, no bundler, no package manager.
- Hash routing (#/...), full innerHTML re-render, all rendering client-side from manifest.json.
- Every content file is UNTRUSTED: Markdown goes through marked THEN DOMPurify;
  every other string is HTML-escaped. Never bypass this.
- Every view must handle "nothing here yet" with a designed empty state.
- Cache-busting: whenever `app.js`, `styles.css` or `config.js` changes,
  bump `window.ASSET_V` in `version.js` by one. Content changes: don't touch it.
- `config.js` is the owner-editable settings file (site name, subject order,
  hero text, disclaimer, default language, paperLinks, analyticsId, and the
  "Talk to us" copy for the academic-help and idea-box lanes).
- Google Analytics (GA4) is optional and off by default — see `config.js`
  (`analyticsId`). When set, app.js injects gtag.js itself and fires a
  manual `page_view` on every hash-route change (GA's automatic pageview
  only fires once on a page like this, since it never reloads).
- `document.title` is set per-route in `setDocumentTitle()` (called at the
  top of `render()`, before anything paints) — e.g. a note's tab title is
  its topic, not a static "NOVA — study notes". This also feeds Google
  Analytics' page_title, so add a case there for any new route.
- Search matches note titles/subjects/summaries instantly (from manifest.json),
  then also searches inside note bodies — fetched and cached in the browser
  on first search, so it's a network request per uncached note, not free.
  See `searchPage()` / `fetchNoteBody()` in app.js.
- The "Talk to us" feature has two lanes, both generic and config-driven:
  `academic` (academic help) and `idea` (the suggestion/idea box — NOT a
  vent/counseling feature; keep its copy about site/process suggestions,
  never emotional support, per the owner's explicit instruction).

## Design system (hard requirements — DOODLE, since v2)

The full spec lives in `design-system/` (start with SKILL.md). Summary:

- Playful hand-drawn "doodle" look: warm cream #F9F6F0 light / #1A1A1D dark backgrounds,
  dot-grid page texture, wavy hand-drawn divider lines.
- Font: "Switzer" via Fontshare (owner swapped the kit's hand-lettered Delius for a
  Suisse International-style Swiss grotesque, 2026-07-05). One font for EVERYTHING,
  weights 400-700; headings weight 600. Never load paid fonts (e.g. actual Suisse)
  without the owner providing licensed files.
- Borders: 3px solid in the ink token (#111827 light / #F3F4F6 dark) with asymmetric
  "sketch" border-radii (never uniform) — rotate the three radius variants across grids.
- Shadows: SOLID OFFSET only (e.g. 4px 5px 0 0), zero blur, ink-colored. Hover = lift
  (translate(-2px,-2px) rotate(-1.5deg), bigger shadow); active = press (reverse).
- Accent: brand blush #EACDC2 / strong #C29A8A. Disclaimer uses the warning alert style.
- Focus states: 3px dashed ink outline, 4px offset. SVG icons only (round caps), no emoji.
- All colors via CSS custom properties in styles.css — light in :root, dark under
  html[data-theme="dark"] AND the prefers-color-scheme media block ("auto"). The manual
  Light/Dark/Auto switch in Settings (owner requirement) sets data-theme.

BANNED since v2: uniform border-radius, 1px hairline borders, blurred/glowing shadows,
raw hex values in component rules (use the tokens), removing the theme switch.

## Disclaimer (never remove or weaken)

Every page shows the student-made / unofficial / may-contain-mistakes notice:
a banner on the homepage AND the footer on every page. Text lives in `config.js`
(`disclaimer.en` / `disclaimer.ms`). It may be reworded, never removed or hidden.
