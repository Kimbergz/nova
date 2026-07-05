# Cards

> Dependencies: `colors.md`, `radius.md`, `shadows.md`, `typography.md`

## Core Specs

- **Background:** neutral-primary-soft
- **Border:** 3px solid, border-dark color
- **Radius:** base (hand-drawn asymmetric: `255px 15px 225px / 15px 225px 15px 255px`)
- **Shadow:** shadow-sm (`3px 4px 0 0` in border-dark color)

## Card Heading

- Desktop: 24px, semibold weight, heading color
- Mobile: 20px, semibold weight, heading color
- Never skip heading levels — the page hierarchy must logically arrive at the card heading level.

## States

### Static Card (no interactivity)
- Background: neutral-primary-soft
- Border: 3px solid, border-dark
- Radius: base (hand-drawn asymmetric)
- Shadow: shadow-sm
- No hover styles. Non-interactive cards must NOT have hover background changes.

### Interactive Card (clickable)
- Same base styles as static card
- Hover: neutral-secondary-soft background, shadow-lg, translateY(-4px) rotate(1.5deg)
- Active: shadow-xs, translateY(0) rotate(0)
- Transition: all, 0.2s cubic-bezier(.25,.46,.45,.94)
- Cursor: pointer

## Rules

- Background: neutral-primary-soft
- Border: 3px solid, border-dark
- Radius: base (hand-drawn asymmetric)
- Shadow: shadow-sm
- Rotate through radius variants (base, default, sm) when rendering multiple cards in a grid for organic variety
- Interactive hover: neutral-secondary-soft background with lift + rotation
- Non-interactive: no hover styles
