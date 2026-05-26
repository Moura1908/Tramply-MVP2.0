---
name: Tramply Vision
colors:
  surface: '#000f3b'
  surface-dim: '#000f3b'
  surface-bright: '#273766'
  surface-container-lowest: '#000b30'
  surface-container-low: '#051847'
  surface-container: '#0a1c4b'
  surface-container-high: '#172756'
  surface-container-highest: '#233261'
  on-surface: '#dbe1ff'
  on-surface-variant: '#bbcabf'
  inverse-surface: '#dbe1ff'
  inverse-on-surface: '#1e2e5d'
  outline: '#85948a'
  outline-variant: '#3c4a41'
  surface-tint: '#39e09c'
  primary: '#c6ffdc'
  on-primary: '#003823'
  primary-container: '#4ff0aa'
  on-primary-container: '#006a45'
  inverse-primary: '#006c47'
  secondary: '#bec2ff'
  on-secondary: '#060da4'
  secondary-container: '#2c35ba'
  on-secondary-container: '#adb2ff'
  tertiary: '#f9f2dc'
  on-tertiary: '#333122'
  tertiary-container: '#dcd6c1'
  on-tertiary-container: '#615d4c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#5ffdb6'
  primary-fixed-dim: '#39e09c'
  on-primary-fixed: '#002112'
  on-primary-fixed-variant: '#005234'
  secondary-fixed: '#e0e0ff'
  secondary-fixed-dim: '#bec2ff'
  on-secondary-fixed: '#00026c'
  on-secondary-fixed-variant: '#2a32b8'
  tertiary-fixed: '#e9e2cd'
  tertiary-fixed-dim: '#cdc6b2'
  on-tertiary-fixed: '#1e1c0f'
  on-tertiary-fixed-variant: '#4a4737'
  background: '#000f3b'
  on-background: '#dbe1ff'
  surface-variant: '#233261'
  tropical-mint: '#4ff0aa'
  deep-navy: '#001242'
  eggshell: '#dbe1ff'
  medium-slate: '#6d77fa'
  black: '#000000'
typography:
  headline-lg:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Sora
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  sidebar-width: 260px
  unit-xs: 4px
  unit-sm: 8px
  unit-md: 16px
  unit-lg: 32px
  unit-xl: 64px
---

## Brand & Style
The design system is anchored in **Premium Functional Minimalism** with a **Humanized Tech** aesthetic. It is designed specifically for micro-entrepreneurs who require tools that feel both professionally powerful and approachable. The visual language balances the precision of high-end software with the warmth of a supportive partner.
The style utilizes a sophisticated dark theme to reduce eye strain during long working sessions, employing high-contrast accents to guide the user's focus. The interface follows a modular, "block-based" philosophy where every element serves a specific functional purpose, eliminating unnecessary decorative clutter in favor of elegant spacing and rhythmic layouts.
## Colors
The color palette is built on a foundation of depth and high-energy highlights. 
- **Primary (Tropical Mint):** Used exclusively for action-oriented elements, progress indicators, and focus states. It represents growth and vitality.
- **Secondary (Medium Slate):** Provides a calm, professional counterpoint to the mint, used for secondary actions and supplementary information.
- **Neutral (Deep Navy & Black):** The primary background is #001242, while #000000 is used to create extreme depth in the layout, specifically for the sidebar and global background.
- **Text (Eggshell):** A softened white used for primary readability to reduce the harshness of pure white-on-black text.
## Typography
This design system uses **Sora** for headlines to convey a geometric, modern, and high-impact personality. It communicates strength and innovation.
**Plus Jakarta Sans** is used for all body text and UI labels. Its slightly wider apertures and soft curves provide excellent legibility and a "humanized" feel that prevents the technical environment from feeling cold.
- **Headlines:** Use Sora Bold for H1 and Semibold for H2-H3. Tighten letter spacing slightly for the H1 to maintain a premium editorial feel.
- **Body:** Maintain standard tracking for Plus Jakarta Sans to ensure maximum readability in dense data environments.
- **Labels:** Use uppercase for small captions or labels to provide visual hierarchy and a structured, organized appearance.
## Layout & Spacing
The layout follows a **Fixed-Width Grid** model for desktop to ensure the professional tools remain predictable and organized.
- **Grid System:** A 12-column grid with 24px gutters. Elements should snap to these columns to maintain vertical rhythm.
- **Sidebar & Header:** The navigation is a persistent 260px sidebar on the left, with a minimalist top header for contextual actions.
- **Modular Blocks:** Content is housed in modular cards. Space between cards should default to `unit-lg` (32px) to create the "elegant spacing" required by the brand vision.
- **Responsive Behavior:** On tablet, the sidebar collapses into a hamburger menu. On mobile, margins reduce to 16px and the layout stacks into a single-column fluid flow.
## Elevation & Depth
This design system eschews traditional shadows in favor of **Tonal Layers** and **Subtle Glows**.
- **Level 0 (Background):** Pure Black (#000000). Used for the global canvas.
- **Level 1 (Navigation/Sidebar):** Deep Navy (#001242).
- **Level 2 (Cards/Surfaces):** A slightly lighter tint of Deep Navy, created by adding a 4% white overlay to the base navy.
- **Level 3 (Interactive/Hover):** Surfaces receive a 1px Tropical Mint border (low opacity) or a soft glow effect (`drop-shadow`) using the primary color to indicate "active" or "hovered" states.
Depth is communicated through contrast rather than heavy blurring, maintaining the "functional minimalism" aesthetic.
## Shapes
The shape language is a mix of geometric discipline and soft approachability.
- **Interactive Elements:** Buttons and interactive chips use the **Pill** shape (24px+ radius) to feel friendly and inviting.
- **Structural Elements:** Cards, input fields, and containers use a **Rounded** 12px radius. This creates a clear distinction between "containers" (structured) and "actions" (organic).
- **Icons:** Use linear icons with a 2px stroke weight and slightly rounded terminals to match the typography's character.
## Components
### Buttons
- **Primary:** Tropical Mint (#4FF0AA) background with Black (#000000) text. Pill-shaped (24px radius). On hover, apply a soft Tropical Mint outer glow (8px blur, 0.3 opacity).
- **Secondary:** Outline style using Medium Slate (#6D77FA). 1.5px border weight. Transparent background.
### Cards & Selection
- **Interactive Cards:** Deep Navy background with a 12px corner radius. On selection, the border changes to 2px Tropical Mint.
- **Quiz Stepper:** A horizontal progress bar at the top of multi-step flows. The track is Deep Navy; the active fill is Tropical Mint.
### Inputs
- **Text Fields:** Dark background (Level 1 Navy) with a 12px radius. The label sits above the field in Medium Slate. On focus, the border transitions to Tropical Mint with a subtle inner glow.
### Navigation
- **Sidebar:** Minimalist, using icons and text in Medium Slate. The active state uses Tropical Mint for the icon and Eggshell for the text.
- **Header:** Clean, transparent background that blurs content behind it (Backdrop Blur: 10px).
### Progress Bars
- High-contrast execution. Track: #001242. Fill: #4FF0AA. Height should be slim (4px to 6px) to maintain the minimalist feel.
