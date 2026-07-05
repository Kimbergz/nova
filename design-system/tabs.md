# Tabs

> Dependencies: `colors.md`, `radius.md`, `shadows.md`

## Core Specs

- Typography: 16px, semibold weight, body color, Delius Swash Caps cursive
- Transitions: all properties, 200ms cubic-bezier(.25,.46,.45,.94)

## Variants

### 1. Underline (Default)

**Wrapper:** bottom border, 3px solid border-dark

**Tab Item:**
- Padding: 16px horizontal, 16px vertical
- Bottom border: 3px, transparent
- Top corners: base hand-drawn radius
- Transition: all, 200ms

| State | Appearance |
|---|---|
| Active | fg-brand text, border-brand bottom border (3px) |
| Inactive | transparent bottom border; hover → heading text, border-dark bottom border |
| Disabled | fg-disabled text, not-allowed cursor |

### 2. Pills

**Tab Item:**
- Padding: 16px horizontal, 10px vertical
- Radius: base (hand-drawn asymmetric)
- Border: 3px solid, border-dark
- Font weight: semibold
- Transition: all, 200ms

| State | Appearance |
|---|---|
| Active | brand background, white text, shadow-sm |
| Inactive | neutral-primary-soft background, body text; hover → neutral-secondary-soft background, heading text |
| Disabled | fg-disabled text, not-allowed cursor |

### 3. Full Width

Children overlap with -1px left margin on all except first.

**Tab Item:**
- Full width, centered text
- Padding: 16px horizontal, 16px vertical
- Background: neutral-primary-soft
- Border: 3px solid, border-dark
- Transition: all, 200ms
- Hover: neutral-secondary-medium background, heading text

| State | Appearance |
|---|---|
| Active | neutral-secondary-soft background, fg-brand text |
| First item | rounded start (base hand-drawn radius) |
| Last item | rounded end (base hand-drawn radius) |

## Tabs with Icons

- Icon size: 16x16px or 20x20px
- Spacing: 8px right margin
- Layout: inline-flex, centered
- Icons inherit the text color of the tab state
