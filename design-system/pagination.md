# Pagination

> Dependencies: `colors.md`, `radius.md`

## Container

Font: 16px. Items displayed as flex with -1px overlap for seamless borders.

## Pagination Item

- Layout: flex, centered both axes
- Size: 40x40px (or 44x44px)
- Text: body color, semibold weight
- Background: neutral-primary-soft
- Border: 3px solid, border-dark
- Shadow: shadow-xs (`2px 3px 0 0` in border-dark color)
- Hover: neutral-secondary-soft background, heading text, shadow-sm, translate(-1px,-1px)
- Focus: 3px dashed outline, border-dark color, 4px offset
- Overlap: -1px left margin

## Previous / Next Buttons

- Horizontal padding: 12px, height: 40px
- First item: base hand-drawn radius on inline-start side
- Last item: base hand-drawn radius on inline-end side

## Active Page Item

- Text: fg-brand color
- Background: neutral-tertiary-medium
- Shadow: shadow-sm
- Hover text: fg-brand (stays same)

## Rules

- Display as flex with -1px child overlap for seamless borders
- Items: neutral-primary-soft background, 3px border-dark border, body text
- Active: fg-brand text, neutral-tertiary-medium background
- First item: rounded start, Last item: rounded end
- All items need hover and focus states
