# Buttons

> Dependencies: `colors.md`, `radius.md`, `shadows.md`

## Core Specs (every button except ghost and disabled)

- **Radius:** base (hand-drawn asymmetric: `255px 15px 225px / 15px 225px 15px 255px`)
- **Border:** 3px solid, border-dark color
- **Shadow:** shadow-md (`4px 5px 0 0` in border-dark color)
- **Glint effect:** Not used in hand-drawn style — solid offset shadow is the primary depth effect. The glint tokens remain available but buttons rely on the sketch shadow instead.
  - `var(--shadow-md), inset var(--color-1-400) 0 6px 0px -5px, var(--color-1-700) 0 4px 10px -5px`
- **Font weight:** 600 (semibold)
- **Font:** Delius Swash Caps, cursive
- **Box sizing:** border-box
- **Transition:** all properties, 0.2s cubic-bezier(.25,.46,.45,.94)

## Sizes

| Size | Font size | Horizontal padding | Vertical padding |
|---|---|---|---|
| Extra small | 14px | 16px | 8px |
| Small | 16px | 20px | 10px |
| Base (default) | 20px | 24px | 12px |
| Large | 20px | 28px | 14px |
| Extra large | 24px | 32px | 16px |

## Variants

### Brand
- **Background:** brand token
- **Border:** 3px solid, border-dark
- **Text:** heading color
- **Hover:** neutral-primary-soft background, heading text, shadow-lg, translate(-2px,-2px) rotate(-1.5deg)
- **Active:** shadow-xs, translate(2px,2px) rotate(1deg)
- **Focus ring:** 3px dashed, border-dark color, 4px offset
- **Glint:** no (sketch shadow instead)

### Secondary
- **Background:** neutral-primary-soft
- **Border:** 3px solid, border-dark
- **Text:** heading color
- **Hover:** neutral-secondary-soft background, shadow-lg, translate(-2px,-2px) rotate(-1.5deg)
- **Active:** shadow-xs, translate(2px,2px) rotate(1deg)
- **Focus ring:** 3px dashed, border-dark color, 4px offset
- **Glint:** no (sketch shadow instead)

### Tertiary
- **Background:** neutral-primary-soft
- **Border:** 3px solid, border-dark
- **Text:** body color
- **Hover:** neutral-secondary-medium background, heading text, shadow-lg, translate(-2px,-2px) rotate(-1.5deg)
- **Active:** shadow-xs, translate(2px,2px) rotate(1deg)
- **Focus ring:** 3px dashed, border-dark color, 4px offset
- **Glint:** no (sketch shadow instead)

### Success
- **Background:** success token
- **Border:** 3px solid, border-dark
- **Text:** white
- **Hover:** neutral-primary-soft background, heading text, shadow-lg, translate(-2px,-2px) rotate(-1.5deg)
- **Active:** shadow-xs, translate(2px,2px) rotate(1deg)
- **Focus ring:** 3px dashed, border-dark color, 4px offset
- **Glint:** no (sketch shadow instead)

### Danger
- **Background:** danger token
- **Border:** 3px solid, border-dark
- **Text:** white
- **Hover:** neutral-primary-soft background, heading text, shadow-lg, translate(-2px,-2px) rotate(-1.5deg)
- **Active:** shadow-xs, translate(2px,2px) rotate(1deg)
- **Focus ring:** 3px dashed, border-dark color, 4px offset
- **Glint:** no (sketch shadow instead)

### Warning
- **Background:** warning token
- **Border:** 3px solid, border-dark
- **Text:** heading color
- **Hover:** neutral-primary-soft background, heading text, shadow-lg, translate(-2px,-2px) rotate(-1.5deg)
- **Active:** shadow-xs, translate(2px,2px) rotate(1deg)
- **Focus ring:** 3px dashed, border-dark color, 4px offset
- **Glint:** no (sketch shadow instead)

### Dark
- **Background:** dark token
- **Border:** 3px solid, border-dark
- **Text:** white
- **Hover:** neutral-primary-soft background, heading text, shadow-lg, translate(-2px,-2px) rotate(-1.5deg)
- **Active:** shadow-xs, translate(2px,2px) rotate(1deg)
- **Focus ring:** 3px dashed, border-dark color, 4px offset
- **Glint:** no (sketch shadow instead)

### Ghost (NO shadow, NO glint)
- **Background:** transparent
- **Border:** transparent
- **Text:** heading color
- **Hover:** neutral-secondary-medium background
- **Focus ring:** 3px dashed, border-dark color, 4px offset
- **No shadow, no glint effect**

### Disabled (NO shadow, NO glint)
- **Background:** disabled token
- **Border:** 3px solid, border-default-medium
- **Text:** fg-disabled color
- **Cursor:** not-allowed
- **No hover, no focus, no shadow, no glint**

## Icons in Buttons

- Icon size: 16x16px
- Spacing: 8px gap between icon and label
- Layout: inline-flex, vertically centered
