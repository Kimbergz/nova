# Dropdown

> Dependencies: `colors.md`, `radius.md`, `shadows.md`, `inputs.md`

## Core Specs

### Chevron Icon
- Size: 16x16px
- Spacing: 6px left margin, -2px right margin
- Color: inherits from trigger button

### Menu Container
- Background: neutral-primary-soft
- Border: 3px solid, border-dark
- Radius: base (hand-drawn asymmetric: `255px 15px 225px / 15px 225px 15px 255px`)
- Shadow: shadow-lg (`5px 6px 0 0` in border-dark color)
- Z-index: elevated above content

### Menu List
- Padding: 8px
- Font: 16px, body color, medium weight

### Menu Item
- Layout: inline-flex, vertically centered, full width
- Padding: 8px horizontal, 8px vertical
- Radius: default (hand-drawn asymmetric: `15px 225px 15px 255px / 255px 15px 225px`)
- Hover: neutral-tertiary-medium background, heading text
- Transition: all, 200ms

## Trigger Sizes

| Size | Font size | Horizontal padding | Vertical padding |
|---|---|---|---|
| Small | 16px | 16px | 8px |
| Base | 18px | 20px | 10px |
| Large | 20px | 24px | 12px |

## Icon-only Trigger

- Padding: 8px
- Min size: 44x44px
- Icon: 20x20px

## Variants

### Default
- Menu width: 200px, items have default hand-drawn radius

### With Divider
- Top border (2px, border-dark) between child groups, skip first group

### With Header
- Header padding: 16px horizontal, 12px vertical
- Bottom border: 2px, border-dark
- Name: heading color, 16px, semibold weight
- Email: body-subtle color, 14px, truncated

### With Icons
- Icon before label: 16x16px, 8px right margin, body color
- On hover, icon color changes to heading

### With Checkbox / Radio
- Inputs: 16x16px, sm hand-drawn radius, focus ring in brand-soft
- Helper text: 12px, body-subtle color, 2px top margin

### With Search
- Search input at top of menu following `inputs.md` specs
- Left icon: 12px left padding, input 36px left padding

### Scrollable
- Max height: 192px, vertical scroll overflow

## States

| State | Appearance |
|---|---|
| Focused trigger | 3px dashed border-dark outline, 4px offset |
| Hover item | neutral-tertiary-medium background, heading text |
| Active/open item | neutral-tertiary-soft background, heading text |
| Disabled item | fg-disabled text, not-allowed cursor, no pointer events |
