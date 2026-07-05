# Typography

> Dependencies: `colors.md`

## Core Rules

- **Font:** Delius Swash Caps, cursive — configured at app level, never override
- **Headings:** semibold weight (600), heading text color
- **Body copy:** body text color, never use brand color for paragraphs longer than one sentence
- **Semantic HTML:** Use `h1`–`h6` in order, never skip levels

## Heading Scale

### Desktop

| Element | Size | Line-height | Letter-spacing | Margin-bottom |
|---|---|---|---|---|
| `h1` | 56px | 1.1 | -0.8px | 16px |
| `h2` | 40px | 1.2 | — | — |
| `h3` | 24px | 1.2 | — | — |
| `h4` | 20px | 1.25 | — | — |
| `h5` | 18px | 1.5 | — | — |
| `h6` | 16px | 1.25 | — | — |

### Responsive

| Element | Tablet (≥768px) | Mobile (default) |
|---|---|---|
| `h1` | 48px | 40px |
| `h2` | 36px | 32px |
| `h3` | 24px | 24px |
| `h4` | 20px | 20px |
| `h5` | 18px | 18px |
| `h6` | 16px | 16px |

Mobile-first: start with mobile sizes, scale up at tablet and desktop breakpoints.

Never reduce line-height below 1.1 for any heading.

## Paragraphs

### Leading Paragraph
- Size: 20px
- Weight: normal
- Color: body
- Line-height: 1.6
- Max width: ~70 characters

### Normal Paragraph
- Size: 18px
- Weight: normal
- Color: body
- Line-height: 1.6
- Max width: ~65 characters

### Small Supporting Copy
- Size: 14px
- Weight: normal
- Color: body
- Line-height: 1.6
- Use only for helper text, legal text, captions, metadata.

## UI Labels

| Context | Size | Weight |
|---|---|---|
| Button labels | 20px | 600 (semibold) |
| Input labels | 16px | 600 (semibold) |
| Captions / meta / badges | 14px | 500 (medium) |

Do not apply paragraph line-height (1.6) to control labels.

## Links

- **Inline links:** Same size as surrounding text, fg-brand color, underline, hover → no underline
- **CTA links:** fg-brand color, semibold weight, underline, hover → no underline

## Emphasis

- `<strong>` for high-priority emphasis in body text
- `<em>` for tone emphasis only, not visual hierarchy
- All-caps only for short labels: uppercase, 0.4px letter-spacing, 12px or 14px

## Dark Mode

Hierarchy stays identical. Only color tokens change (automatic via CSS custom properties). Size, weight, and spacing remain constant.
