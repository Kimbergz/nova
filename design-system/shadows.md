# Shadows

All shadows are solid offset (zero blur) using the border-dark token color. In light mode the shadow color is #111827; in dark mode it is #F3F4F6. Apply via a CSS custom property so dark mode resolves automatically.

| Token | CSS value |
|---|---|
| shadow-2xs | `1px 2px 0 0` |
| shadow-xs | `2px 3px 0 0` |
| shadow-sm | `3px 4px 0 0` |
| shadow-md | `4px 5px 0 0` |
| shadow-lg | `5px 6px 0 0` |
| shadow-xl | `6px 7px 0 0` |
| shadow-2xl | `8px 10px 0 0` |

## Component Mapping

| Component type | Token |
|---|---|
| Subtle separators, tiny UI details | shadow-2xs or shadow-xs |
| Inputs, buttons, small controls, lightweight cards | shadow-sm or shadow-md |
| Standard cards, popovers, dropdowns | shadow-md |
| Prominent cards, sticky surfaces | shadow-lg |
| Modals, high-priority overlays | shadow-xl |
| Hero overlays, top-level emphasis (sparingly) | shadow-2xl |

## Hover Behavior

- Hover on interactive elements: step up by one shadow level AND apply `translate(-2px, -2px) rotate(-1.5deg)` for a playful lift.
- Active/pressed: step down to shadow-xs with `translate(2px, 2px) rotate(1deg)` for a pressed-in feel.

## Rules

- Use only these tokens — no custom box-shadow values
- All shadows are solid offset with zero blur — never use blurred shadows
- Shadow color always derives from the border-dark token
- Components in the same family share the same baseline elevation
- Never stack multiple shadow tokens on one element
- Never use shadow-xl/shadow-2xl for dense list items or body containers
