# Avatars

> Dependencies: `colors.md`, `radius.md`

## Core Specs

- **Circular shape:** fully rounded (9999px)
- **Rounded square shape:** base hand-drawn radius (asymmetric)
- **Default size:** 40x40px
- **Image fit:** cover
- **Border:** 3px solid, border-dark

## Sizes

| Size | Dimensions | Radius |
|---|---|---|
| Extra Small | 18x18px | sm (hand-drawn asymmetric) |
| Small | 24x24px | sm (hand-drawn asymmetric) |
| Base | 32x32px | base (hand-drawn asymmetric) |
| Large | 44x44px | base (hand-drawn asymmetric) |
| XL | 56x56px | base (hand-drawn asymmetric) |
| 2XL | 64x64px | base (hand-drawn asymmetric) |

## Bordered Avatar

- 4px padding, fully rounded, 3px outline in border-dark color
- Alternative: 3px box-shadow ring in border-dark color

## Stacked Avatars

- Displayed in a row (flex)
- Each avatar: 40x40px, fully rounded, 3px border in border-buffer color
- Overlap: -16px negative margin on all except first

### Stacked Counter
- Same size as avatars (40x40px), fully rounded
- Background: dark-strong, text: white, 12px font, semibold weight
- Same overlap margin as other avatars

## Avatar with Text

- Flex row, 10px gap between avatar and text
- Avatar: 40x40px, fully rounded, cover fit
- Name: heading color, semibold weight
- Subtitle: 14px, body color
