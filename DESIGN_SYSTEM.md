# Golden Hour Creative — Design System Reference

Extracted from your **Stitch** project (*Golden Hour Developer Portfolio*).

## Brand & Style

The design system establishes a warm, tactile, and expressive portfolio experience for a creative frontend engineer. Evoking the comforting, nostalgic atmosphere of late golden-hour sunlight, the visual language departs from cold, clinical developer aesthetics in favor of radiant warmth, playful craftsmanship, and approachable sophistication.

### Key Styling Principles
- **Atmospheric Warmth**: Built entirely upon an amber, cream, and terracotta foundation. Pure blacks and pure whites are strictly avoided across both light and dark themes.
- **Tactile Softness**: Generous radii, pill forms, handcrafted label badges, and floating cards lend an artisanal, physical quality to interface elements.
- **Luminous Depth**: Layered frosted surfaces, soft chromatic blurs, and sunset-tinted ambient glow states emulate light passing through textured amber glass.

---

## Palette & Color Tokens

| Token | Light Value | Dark Value | Purpose |
|---|---|---|---|
| `cream` | `#FFF4E6` | `#2A1B14` (`warmdark-bg`) | Canvas background |
| `peach` | `#FFE0C2` | `#38241B` (`warmdark-surface`) | Card backgrounds, pill fills |
| `sunset` | `#FF8A4C` | `#FF8A4C` | Primary buttons, focal points, glows |
| `coral` | `#FF6F61` | `#FF6F61` | Secondary accents, badges, gradients |
| `gold` | `#FFC857` | `#FFC857` | Highlights, stars, warm halo accents |
| `rose` | `#F4A8A0` | `#F4A8A0` | Soft decorative badges, wavy shapes |
| `espresso` | `#3B2A20` | `#FDF0E4` (`warmdark-text`) | Primary typography |
| `terracotta`| `#6B4E3D` | `#D4B8A5` (`warmdark-muted`) | Secondary typography |

---

## Typography
- **Headings & Accents**: `Fraunces` (Serif, variable optical size `9..144`)
- **Body & UI Elements**: `DM Sans` / `Plus Jakarta Sans`

---

## Elevation & Depth
- **Base Shadow**: `0 10px 30px -10px rgba(255, 138, 76, 0.15)`
- **Hover Shadow**: `0 24px 40px -12px rgba(255, 138, 76, 0.22)`
- **Warm Glassmorphism**: `backdrop-filter: blur(16px)` with `rgba(255, 255, 255, 0.65)` in light mode, `rgba(56, 36, 27, 0.70)` in dark mode.
