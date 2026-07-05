# Sidebars

> Dependencies: `colors.md`, `radius.md`, `typography.md`, `badges.md`, `alerts.md`

## Core Specs

- Background: neutral-primary-soft
- Right border: 3px solid, border-dark (for left-sidebar); left border for right-sidebar
- Width: 256px

## Anatomy

### Outer Container
Hidden on mobile, visible at small breakpoint. Needs a toggle/trigger for mobile.

### Inner Wrapper
- Full height, vertical scroll overflow
- Padding: 12px horizontal, 16px vertical

### Navigation List
- Vertical spacing: 8px between items
- Font weight: semibold

### Navigation Item
- Layout: flex, vertically centered
- Padding: 8px horizontal, 8px vertical
- Text: heading color
- Radius: base (hand-drawn asymmetric)
- Hover: neutral-secondary-medium background
- Transition: all, 200ms
- Icon: 20x20px, body color, hover → heading color, 75ms transition
- Label: 12px left margin from icon

### Active Item
- Background: neutral-secondary-strong
- Text: fg-brand-strong

### Separator
- 16px top padding, 16px top margin
- Top border: 2px, border-dark
- 8px vertical spacing below

### Bottom CTA / Card
- Padding: 16px
- Top margin: 24px
- Radius: base (hand-drawn asymmetric)
- Border: 3px solid, border-dark
- Background: brand-softer
- Shadow: shadow-xs
- Can also use any alert variant from `alerts.md`

## Rules

- Responsive: hidden on mobile with a trigger mechanism
- Icons: 20x20px, body color (hover: heading color)
- Multi-level menus: indent with 44px left padding
- Spacing follows 8px grid
- Only neutral, brand, or status tokens — no arbitrary colors
