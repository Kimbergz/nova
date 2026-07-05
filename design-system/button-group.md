# Button Groups

> Dependencies: `buttons.md`, `colors.md`, `radius.md`

## Core Specs

- **Wrapper:** inline-flex, base hand-drawn radius, shadow-sm (`3px 4px 0 0` in border-dark color)
- **Children overlap:** -1px left margin on all except first button
- **Buttons inside the group must NOT have individual shadows.** Only the wrapper has a shadow.

## Anatomy

### Wrapper
- Display: inline-flex
- Radius: base (hand-drawn asymmetric)
- Shadow: shadow-sm
- Border: 3px solid, border-dark

### First Button
- base hand-drawn radius on inline-start side only, 0 on inline-end

### Middle Button(s)
- No radius (0 on all corners)

### Last Button
- base hand-drawn radius on inline-end side only, 0 on inline-start

### All buttons except first
- -1px left margin to overlap borders

## Rules

- Buttons inside groups follow all styles from `buttons.md` (background, border, focus rings) except individual shadows
- Icon-only buttons: 16x16px icon, match height of text buttons
