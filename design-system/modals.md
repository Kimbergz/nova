# Modals

> Dependencies: `colors.md`, `radius.md`, `shadows.md`, `buttons.md`, `inputs.md`

## Core Specs

### Overlay (Backdrop)
- Fixed, covers full screen
- Z-index: 40
- Background: black at 50% opacity
- Backdrop blur: small amount

### Content Container
- Background: neutral-primary
- Radius: base (hand-drawn asymmetric: `255px 15px 225px / 15px 225px 15px 255px`)
- Border: 3px solid, border-dark
- Shadow: shadow-xl (`6px 7px 0 0` in border-dark color)
- Padding: 20px

## Anatomy

### Header
- Bottom border: 2px, border-dark
- Top corners inherit hand-drawn radius
- Title: 24px, semibold weight, heading color
- Close button: Ghost variant from `buttons.md`, 6px padding

### Body
- Vertical padding: 24px
- Vertical spacing between elements: 24px
- Text: 18px, 1.6 line-height, body color

### Footer
- Top border: 2px, border-dark
- Bottom corners inherit hand-drawn radius

## Variants

### Default (Information)
Standard header + body + footer with primary/secondary action buttons.

### Pop-up (Confirmation)
Centered text, prominent icon, reduced padding:
- Body: 24px padding, text centered
- Icon: centered, 16px bottom margin, 48x48px, gray color

### Form Modal
Body contains inputs following `inputs.md`. Vertical spacing between form elements: 16px.

## Rules

- Backdrop covers full screen with fixed positioning
- Content: neutral-primary background, base hand-drawn radius, 3px border, shadow-xl
- Header/Footer separated by 2px border-dark borders
- Close button must be present and functional
- Accessibility: `role="dialog"`, implement focus trap in code
- Dark mode automatic via token system
