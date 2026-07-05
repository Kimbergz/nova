# Inputs

> Dependencies: `colors.md`, `radius.md`

## Core Specs

- **Display:** block, full width
- **Radius:** base (hand-drawn asymmetric: `255px 15px 225px / 15px 225px 15px 255px`)
- **Border:** 3px solid, border-dark color
- **Background:** neutral-primary-soft
- **Shadow:** shadow-xs (`2px 3px 0 0` in border-dark color)
- **Font:** 16px, heading color, Delius Swash Caps cursive
- **Padding:** 12px horizontal, 10px vertical
- **Placeholder:** body color
- **Transition:** all properties, 200ms

## Label

- Display: block
- Font: 16px, semibold weight, heading color
- Margin bottom: 8px
- Label `htmlFor` must match the input `id`

## States

### Default
- Border: 3px solid, border-dark
- Background: neutral-primary-soft

### Hover
- Shadow: shadow-sm (step up one level)

### Focus
- No outline
- Border: 3px solid, border-brand
- Shadow: shadow-sm in brand color

### Success
- Border: 3px solid, border-success
- Shadow: shadow-xs in success color

### Error / Danger
- Border: 3px solid, border-danger
- Shadow: shadow-xs in danger color

### Disabled
- Background: disabled
- Text: fg-disabled
- Cursor: not-allowed

## Input with Icons

- Icon size: 16x16px
- Icon color: body
- Container: relative positioned wrapper
- Start icon: absolutely positioned left, 12px left padding — input gets 36px left padding
- End icon: absolutely positioned right, 12px right padding — input gets 36px right padding
- Icons vertically centered within the wrapper

## Rules

- Every input must have a unique `id`
- Every label must have a matching `htmlFor`
- Padding: 12px horizontal, 10px vertical unless overridden for icon variants
- No arbitrary hex or hardcoded colors
