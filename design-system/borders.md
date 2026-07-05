# Borders

## Width Scale

| Context | Width |
|---|---|
| Default (inputs, buttons, cards) | 3px |
| Emphasis / focus | 3px |
| Subtle internal dividers | 2px |

## Sketch Border Tokens

These are the core hand-drawn border styles. Every bordered component (buttons, cards, inputs, modals, dropdowns, etc.) must use one of these tokens. The border color uses the `border-dark` token (#111827 light / #F3F4F6 dark).

| Token | Border | Border-radius |
|---|---|---|
| sketch-border-1 | 3px solid border-dark | `255px 15px 225px / 15px 225px 15px 255px` |
| sketch-border-2 | 3px solid border-dark | `15px 225px 15px 255px / 255px 15px 225px` |
| sketch-border-3 | 3px solid border-dark | `225px 15px 255px / 15px 255px 15px 225px` |

### Component Defaults

| Component | Default token |
|---|---|
| Buttons (primary) | sketch-border-1 |
| Cards | sketch-border-2 |
| Inputs / selects / textareas | sketch-border-1 |
| Modals | sketch-border-1 |
| Dropdowns / popovers | sketch-border-1 |
| Alerts | sketch-border-1 |
| Accordion wrapper | sketch-border-2 |
| Tables wrapper | sketch-border-1 |
| Tooltips | sketch-border-3 |
| Badges | sketch-border-3 |
| Navbar | sketch-border-2 (bottom only: `0 0 255px 15px / 0 0 15px 255px`) |

### Variety Rule

When rendering multiple items in a grid (e.g. feature cards, pricing cards), rotate through sketch-border-1, sketch-border-2, sketch-border-3 per item to create organic variety — never repeat the same variant on adjacent items.

## Rules

- Use solid borders by default with the border-dark token color (#111827 light / #F3F4F6 dark)
- Dashed borders (3px) for focus-visible outlines with 4px offset, giving a hand-drawn focus indicator
- Components in the same family must use matching border widths
- Never mix 1px and 3px borders within a single component — 3px is the standard
- Never use standard uniform border-radius — always use one of the sketch-border tokens

## Usage

| Context | Width |
|---|---|
| Inputs / selects / textareas | 3px default; 3px on focus with brand color |
| Buttons | 3px solid for all variants |
| Cards / containers | 3px solid, border-dark token color |
| Navbar bottom border | 2px solid |
| Footer top border | 3px solid |
| Section dividers | 2px solid or wavy SVG divider |
