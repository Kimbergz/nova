# Border Radius

| Token | Value | Default usage |
|---|---|---|
| base | 255px 15px 225px / 15px 225px 15px 255px | Buttons, cards, inputs, modals, sections |
| default | 15px 225px 15px 255px / 255px 15px 225px | Badges, tooltips, dropdown items, small controls |
| sm | 225px 15px 255px / 15px 255px 15px 225px | Checkboxes, tiny elements |
| full | 9999px | Pills, avatars, toggles, dot indicators |

## Rules

- Hand-drawn asymmetric radius is the default across the product — never use uniform radius values
- Rotate through the three sketch variants (base, default, sm) within grids/lists to avoid visual repetition
- Radius must feel organic and imperfect within each component family
- The `full` token stays circular (9999px) for pills, avatars, and toggles
