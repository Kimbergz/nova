# Tables

> Dependencies: `colors.md`, `radius.md`, `shadows.md`

## Wrapper

- Horizontal scroll overflow
- Background: neutral-primary-soft
- Radius: base (hand-drawn asymmetric: `255px 15px 225px / 15px 225px 15px 255px`)
- Border: 3px solid, border-dark
- Shadow: shadow-sm (`3px 4px 0 0` in border-dark color)

## Table Element

- Full width, left-aligned text (right-aligned for RTL)
- Font: 16px, body color

## Table Head

- Font: 16px, body color, semibold weight
- Background: neutral-secondary-soft
- Bottom border: 2px, border-dark
- Cell padding: 24px horizontal, 12px vertical

## Table Body

- Row background: neutral-primary
- Row bottom border: 2px, border-dark (omit on last row to avoid doubling with wrapper border)
- Row hover: neutral-secondary-soft background (optional)
- Row header: semibold weight, heading color, no-wrap
- Cell padding: 24px horizontal, 16px vertical

## Rules

- Wrapper must have horizontal scroll overflow for responsive scrolling
- Last row: omit bottom border to avoid doubling with wrapper border
- Row headers: always `scope="row"` for semantic structure
- Hover on rows is optional
- No arbitrary hex codes — use token colors only
