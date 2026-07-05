# Layout & Spacing

## Spacing Rhythm

Base unit: **8px**. All spacing values should be multiples of 4px or 8px.

| Context | Value |
|---|---|
| Section vertical padding | 64px |
| Section header → content | 32px or 48px |
| Heading → paragraph | 16px |
| Container horizontal padding | 32px |
| Flex/grid row gap | 16px |
| Card grid gap | 32px |
| Wide component grid gap | 32px |
| Column layout gap | 48px |

## Container

Standard section container: max-width 1000px, centered, 32px horizontal padding.

Every major section wraps content in this container.

## Content Composition Order

Inside each section, follow this order:
1. Heading (`h1`–`h3`)
2. Leading paragraph
3. Normal paragraph(s)
4. Lists, CTA links, or component grids

## Section Pattern

Each section has:
- 64px vertical padding
- A background color (alternate between neutral-primary-soft and neutral-secondary-soft)
- A centered container (max-width 1000px, 32px horizontal padding)
- A section header area with 32px bottom margin
- Section content below
- Optional wavy SVG divider between sections

## Motion & Animation

- Prefer CSS-native: `transition`, `animation`, `@keyframes`. Use Motion library only when CSS cannot achieve the behavior.
- Hover interactions should include slight rotation (`rotate(-1.5deg)` to `rotate(1.5deg)`) and translation for a playful hand-drawn feel.
- Use `cubic-bezier(.25,.46,.45,.94)` easing for sketch-style transitions (0.2s duration).
- Active/pressed states reverse the hover direction with smaller shadow and inward translation.

## Backgrounds & Visual Depth

- Default page background: neutral-primary-soft (warm cream #F9F6F0 light / #202124 dark).
- Apply a subtle dot-grid pattern overlay using `radial-gradient(body-color 1px, transparent 1px)` at 20px spacing, ~50% opacity, behind all content.
- Use hand-drawn SVG wavy dividers between major sections.
- Decorative doodle SVGs (stars, arrows, squiggly underlines) should be placed as absolute-positioned elements near headings and CTAs for visual personality.
- Hero sections may include an additional hand-drawn crosshatch SVG pattern with radial mask fade.

## Must

- All sections: consistent 64px vertical padding
- All containers: max-width 1000px, centered, 32px horizontal padding
- Section headers: 32px or 48px bottom margin
- Consistent vertical rhythm, no crowded sections
- Layouts readable and properly spaced on both desktop and mobile
