# Accordion

> Dependencies: `colors.md`, `radius.md`

## Core Specs

- **Wrapper:** full width, 3px border (border-dark color), base radius (hand-drawn asymmetric) — clips first/last item corners
- **Item separator:** 2px bottom border (border-dark) on every item except last

## Trigger (Button)

- **Layout:** flex, space-between, full width
- **Padding:** 20px horizontal, 16px vertical
- **Font:** 16px, semibold weight, Delius Swash Caps cursive
- **Text color:** heading
- **Background:** neutral-secondary-soft
- **Hover:** neutral-tertiary-soft background
- **Focus:** outline none, 3px dashed ring in border-dark color, 4px offset
- **Transition:** all, 200ms cubic-bezier(.25,.46,.45,.94)
- **Open state:** neutral-tertiary-soft background

## Panel (Content)

- **Padding:** 20px horizontal, 16px vertical
- **Background:** neutral-primary-soft
- **Top border:** 2px, border-dark color
- **Font:** 16px, body color, 1.6 line-height

## Chevron Icon

- Size: 16x16px
- Color: body text color
- Closed: 0deg rotation
- Open: 180deg rotation
- Transition: transform, 150ms

## Variants

### Default (Collapse)
One panel open at a time. Items stacked inside a single shared bordered/rounded wrapper.

### Separated Cards
Each item is independent — has its own 3px border (border-dark), base radius (hand-drawn asymmetric), and shadow-sm. 8px bottom margin between items. No shared outer border.

### Always Open
Multiple panels can expand simultaneously. Same styling as Default.

### Flush
No outer border. Trigger and panel have transparent backgrounds. Only 2px bottom border dividers between items. Use inside containers that already provide a background.

## States

| State | Trigger appearance |
|---|---|
| Closed | heading text, neutral-secondary-soft background |
| Open | heading text, neutral-tertiary-soft background |
| Hover | neutral-tertiary-soft background |
| Focus | 3px dashed border-dark ring, 4px offset, no outline |
| Disabled | fg-disabled text, not-allowed cursor, no hover/focus |
