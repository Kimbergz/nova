# Badges

> Dependencies: `colors.md`, `radius.md`

## Core Specs

- **Border:** 3px solid
- **Default radius:** default (hand-drawn asymmetric: `15px 225px 15px 255px / 255px 15px 225px`)
- **Pill radius:** 9999px

## Sizes

| Size | Font size | Horizontal padding | Vertical padding |
|---|---|---|---|
| Default (small) | 12px | 8px | 4px |
| Large | 14px | 10px | 6px |

## Variants

### Brand
- **Background:** brand-softer
- **Border:** 3px solid, border-brand-subtle
- **Text:** fg-brand-strong

### Alternative (Neutral Soft)
- **Background:** neutral-primary-soft
- **Border:** 3px solid, border-dark
- **Text:** heading

### Gray (Neutral Medium)
- **Background:** neutral-secondary-medium
- **Border:** 3px solid, border-dark
- **Text:** heading

### Danger
- **Background:** danger-soft
- **Border:** 3px solid, border-danger-subtle
- **Text:** fg-danger-strong

### Success
- **Background:** success-soft
- **Border:** 3px solid, border-success-subtle
- **Text:** fg-success-strong

### Warning
- **Background:** warning-soft
- **Border:** 3px solid, border-warning-subtle
- **Text:** fg-warning

### Dark
- **Background:** dark
- **Border:** 3px solid, border-dark
- **Text:** white

## Pill Badges

Use 9999px radius instead of default hand-drawn radius on any variant.

## Badges with Icons

- Icon size (default): 12x12px
- Icon size (large): 14x14px
- Icon spacing: 4px margin next to label

## Icon-only Badge

Square shape — equalize dimensions to 24x24px, no horizontal text padding.

## Dismissible Badges

Badge content + a close button. Close button hover backgrounds per variant:

| Variant | Close button hover background |
|---|---|
| Brand | brand-soft |
| Alternative | neutral-tertiary |
| Gray | neutral-quaternary |
| Danger | danger-medium |
| Success | success-medium |
| Warning | warning-medium |

## Dot / Notification Badge

- Positioned absolutely: -4px top, -4px right
- Size: 12x12px, fully rounded
- 3px border in border-buffer color
- Background: danger
