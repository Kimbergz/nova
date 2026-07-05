# Radios, Checkboxes & Toggles

> Dependencies: `colors.md`, `radius.md`

## Checkbox

- Size: 18x18px
- Radius: sm (hand-drawn asymmetric: `225px 15px 255px / 15px 255px 15px 225px`)
- Border: 3px solid, border-dark
- Background: neutral-primary-soft
- Focus ring: 3px dashed, border-dark, 4px offset

### Disabled
- Border: 3px solid, border-light
- Text: fg-disabled

## Radio

- Size: 18x18px
- Radius: fully rounded
- Border: 3px solid, border-dark
- Background: neutral-primary-soft
- Focus ring: 3px dashed, border-dark, 4px offset
- Checked: border-brand, indicator: neutral-primary color

### Disabled
- Border: 3px solid, border-light-medium
- Text: fg-disabled

Group all radio items under the same `name` attribute.

## Toggle

### Track
- Fully rounded
- Border: 3px solid, border-dark
- Background: neutral-quaternary
- Focus-within ring: 3px dashed, border-dark, 4px offset
- Checked track: brand background
- Disabled track: neutral-tertiary background

### Thumb
- Fully rounded
- Background: white
- Border: 3px solid, border-dark

### Disabled
- Track: neutral-tertiary background
- Label: fg-disabled text

## Rules

- All selection inputs must have `id` matching label `htmlFor`
- Focus states use 3px dashed outlines with 4px offset for hand-drawn feel
- Disabled states: no hover/focus interaction
