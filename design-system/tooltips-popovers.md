# Tooltips & Popovers

> Dependencies: `colors.md`, `radius.md`, `shadows.md`

## Tooltips

### Core Specs
- Padding: 12px horizontal, 8px vertical
- Font: 14px, semibold weight
- Radius: default (hand-drawn asymmetric: `15px 225px 15px 255px / 255px 15px 225px`)
- Border: 3px solid, border-dark
- Shadow: shadow-xs (`2px 3px 0 0` in border-dark color)
- Transition: opacity, 300ms

### Dark (Default)
- Background: dark
- Text: white
- Border: 3px solid, border-dark

### Light
- Background: neutral-primary-medium
- Text: heading color
- Border: 3px solid, border-dark

## Popovers

### Core Specs
- Background: neutral-primary
- Radius: base (hand-drawn asymmetric: `255px 15px 225px / 15px 225px 15px 255px`)
- Border: 3px solid, border-dark
- Shadow: shadow-md (`4px 5px 0 0` in border-dark color)
- Transition: opacity, 300ms

### Header / Title
- Padding: 12px horizontal, 8px vertical
- Background: neutral-secondary-soft
- Bottom border: 2px, border-dark
- Font: 16px, semibold weight, heading color

### Body / Content
- Standard: 12px horizontal, 8px vertical padding; 16px, body color
- Rich: 16px padding; 16px, body color

## Arrows

- Size: 8x8px rotated 45deg
- Color must match the background of the tooltip/popover variant
- Border: 3px solid, border-dark (only on exposed sides)

## Rules

- Tooltips: default hand-drawn radius
- Popovers: base hand-drawn radius
- Dark tooltips: dark background, white text, 3px border-dark border
- Light tooltips/popovers: semantic neutral background + 3px border-dark border
- Arrows match parent background color
