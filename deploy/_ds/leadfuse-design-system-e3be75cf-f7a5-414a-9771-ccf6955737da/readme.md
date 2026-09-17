# Leadfuse Design System

LEADFUSE is a B2B lead-generation marketing agency for B2C, local, service-based automotive businesses — mobile detailers and shop-based detailers selling ceramic coating, PPF, wraps, full/interior details, wash & seal. The brand's job: read as the most luxury, high-end, best-of-the-best operator in this niche (Iman Gadzhi / Sam Ovens / Alex Hormozi-adjacent info-marketing energy) while staying disciplined and monochrome-sharp. The offer language: "150 quality leads in 30 days or we pay you $1,000", done-for-you systems, 5 clients/month scarcity. Platform product ("LEADFUSE") is a white-labeled GoHighLevel instance used for SMS/automation campaigns.

## Sources
- `uploads/10 _ DEPARTMENT _ Company Branding -20260722T162118Z-1-001/` (Google Drive export, provided as zip):
  - `01_Branding/leadfuse (leadfuse).pdf` — brandbook PDF (same content as slides below)
  - `02_Logo Files/` — SVG/PNG/PDF lockups, emblem, favicons ← copied into `assets/`
  - `03_Mockups/` — billboard + business-card photo mockups
  - `04_Presentation/Slide-1..22.jpg` — the brandbook deck (logo rules, colors, monochrome, typography, letterhead, pattern). **Ground truth for foundations.**
  - `05_Social Media Kits/` — FB/IG/LinkedIn/Twitter tiles & covers (geometric motif style)
  - `07_Stationery/` — business card + letterhead PDFs
  - `08_LF x LK _ Brand Alchemy.pdf`
  - `09_DECK DESIGN SAMPLE_Winning Assistants/` — photos of a *third-party* deck the team likes (layout reference only, NOT Leadfuse-branded)
  - `10_Marketing/` — ad copies + SMS blast SOPs/templates (tone-of-voice ground truth)
- Instagram: @LEADFUSE. No website/codebase/Figma was provided.

## Brand facts (from brandbook)
- **Palette (Slide 9):** `#000000` · `#E50011` (primary red) · `#F07800` · `#F5B300` · `#F2F2F2`. White for reversals.
- **Type (Slide 16):** Poppins — Bold for headings, Regular for paragraphs. (Brandbook spells it "Poppins"; webfonts self-hosted in `assets/fonts/`.)
- **Logo:** red square LF emblem + LEADFUSE all-caps wordmark with a signature gradient fade (LEAD solid → FUSE fading). Variants: primary (black→#818181 on light), on-dark (#A7A7A7→white), on-red (white→30% white). Never recolor the wordmark solid red, never rotate (Slide 18).
- **Safe area (Slide 5):** width of letter "E" on all four sides. Letterhead min margin 48px (Slide 17).
- **Logo positions (Slide 19):** top center, top left, bottom right, or center.
- **Brand pattern (Slide 20):** checkerboard grid of the red emblem tile on light gray.
- **Imagery (Slide 4):** real photos of operators at work — laptops, phones, office; warm-neutral, candid business energy. For detailing clients: hero shots of paint gloss, coating application, wrapped panels.

## CONTENT FUNDAMENTALS
Two registers, both grounded in the marketing docs:

**1. Brand/corporate register (brandbook, decks, site):** short declarative sentences, sentence case body, Title Case or ALL-CAPS display lines ("THANK YOU"). Confident, spec-like, minimal adjectives. No emoji. Speaks as "we" to "you".

**2. Performance/ads register (Meta ads, SMS):** urgency + guarantee mechanics, ALL-CAPS hooks, heavy emoji as bullet glyphs (🚨 ✅ ✔️ ⛔ 📆 👇 🎯 🚀), numbers made concrete ("150 leads in 30 days", "$10K–$20K/month", "Only 5 spots"), imperative CTAs ("Tap BOOK NOW"), risk reversal always explicit ("or we pay you $1,000"). SMS: first-name personalization, owner speaking in first person, YES/NO reply mechanics, 24–72h windows.
- Examples (verbatim): "🛑 STOP CHASING LEADS — TAP TO BOOK" · "150 QUALITY LEADS OR FULL REFUND + $1K" · "Zero cold calling, zero door knocking" · "Reply "YES" to claim your spot, or "NO" to opt out."
- Vocabulary: done-for-you, plug-and-play, high-ticket, pre-qualified, booked out, lead droughts, lowballers, buy back your time.
- Rule of thumb: emoji belong ONLY in ads/SMS surfaces; never in the brandbook/UI register.

## VISUAL FOUNDATIONS
- **Color logic:** black and red ARE the brand — near-black `#050505–#000` fields carry most surfaces, red #E50011 is the single loud accent, white/gray for text. #F2F2F2 serves light documents (brandbook, letterhead). Orange #F07800 and amber #F5B300 are RARE accents (star ratings, data deltas) — use only when red alone can't do the job, never as surface colors.
- **Backgrounds:** flat fields only. Light: #F2F2F2 (page) with white cards. Dark: pure #000 with a raised #161616 panel; oversized dark-on-dark emblem watermark (barely-visible black-on-black mark, Slide 1/3). Red: solid #E50011 blocks, sometimes split two-tone with a giant tonal emblem watermark (Slide 14). No photographic backgrounds behind text; no busy gradients.
- **Gradients:** reserved for the wordmark fade + text effects (silver "metallic" fade on dark). Direction: horizontal, left solid → right lighter.
- **Type system:** Poppins everywhere, plus **Instrument Serif italic** as an editorial accent — single emphasis words inside display headlines and oversized numerals only, never body text (intentional addition, 2026 web refresh). Display/headings Bold–ExtraBold, line-height ~1.03–1.15; sentence-case or Title Case; brandbook titles sit left-aligned with generous white space. Body Regular 16–18px/1.6 in #333. Tracked-caps labels (0.18–0.32em letter-spacing, 500–600 weight) for eyebrow lines — the "THANK YOU" treatment.
- **Layout:** brandbook grid = title block on the left third, content on the right; huge margins; few elements per view. Split-screen black/dark-gray and red/red two-tone panels are a signature. Logos and content obey the E-width safe area.
- **Corners:** brand marks and slide/print surfaces stay sharp; interactive web surfaces use the 2026 refresh — `--radius-interactive` 10px (buttons, inputs), `--radius-card` 16px (cards, media frames), pills for chips/avatars.
- **Web-dark effects (funnel language):** red radial glows behind heroes/CTAs (`--glow-red`), glass panels (`--glass-bg` + `--glass-border` + backdrop blur), hairline section rules `rgba(255,255,255,.07)`, scroll-reveal fades (.7s translate+fade).
- **Borders:** 1px hairlines — #E2E2E2 on light, #2A2A2A on dark. Red 1px outline boxes used as spec frames on dark (Typography slide).
- **Shadows:** soft, low-contrast, only on light surfaces (letterhead/card mockups): `0 10px 30px rgba(0,0,0,.08)`. Dark surfaces stay flat.
- **Motifs (social kit):** red ring/arc segments, black dot-grids, thin concentric circles, and the emblem checkerboard pattern — geometric, never illustrative.
- **Imagery color:** warm-neutral candid photography; on dark surfaces, moody low-key lighting (billboard night shots). Black & white acceptable; no pastel, no purple.
- **Motion:** none defined in sources. Recommended defaults (intentional addition): fast fades/translates 140–240ms, cubic-bezier(.4,0,.2,1); hover = darken red (#C9000F) or 80% opacity on dark; press = #AB000C + 1px translate. No bounces.
- **Transparency/blur:** not part of the brand language; use flat fills instead.

## ICONOGRAPHY
- Sources define **no icon set** — no icon font, no UI glyph SVGs. Provided marks: LF emblem (red tile + white glyph), wordmark lockups, favicons (16/32), brand pattern. All copied to `assets/`.
- App-icon construction: red emblem centered on a black rounded-square or circle tile (Slide 15).
- Emoji: used as bullet glyphs in the ads/SMS register only (see Content Fundamentals); never as UI icons.
- **Intentional addition:** for prototype UI icons use [Lucide](https://unpkg.com/lucide@latest) from CDN at 1.5–2px stroke, sized 16–24px, colored `currentColor` — geometric and neutral enough to sit with Poppins. Flagged as a substitution: swap out if the team adopts an official set.
- Never hand-draw the LF mark; always use `assets/emblem-*.svg` / `assets/logo-*.svg`.

## FUNNEL DOCTRINE
Every funnel (VSL call, lead magnet, quiz, webinar) follows these rules:
- **Mobile-first, always.** Design at 375–430px first; desktop is the adaptation. Above the fold on a phone the visitor must see the full stack: eyebrow → headline → subheadline → VSL → CTA. Nothing else competes with it.
- **A funnel is a lander, not a website.** Minimal nav (logo + at most one CTA). No site-style menu, no footer link farms.
- **CTA copy is first-person:** "Book **my** call", "Send **me** the roadmap" — never "your".
- **Never leave the page for the form.** The qualification form is embedded on page 1; the CTA scrolls to it.
- **VSL call funnel architecture** (multi-step):
  1. **Page 1** — eyebrow/headline/subheadline + VSL + CTA + embedded qualification form. Form routes leads: green/yellow → 2A, red → 2B.
  2. **Page 2A (booking)** — same header stack + embedded calendar; below, pure results/proof for the still-scrolling skeptic.
  3. **Page 2B (disqualify)** — same header stack; soft no + the lead magnet ("Automotive Scaling Roadmap").
  4. **Page 3 (confirmation)** — same header stack + 3 steps: add to Google Calendar → watch the VSL → (unlocks after ~1 min) breakout videos (30–60s video-FAQ answering common pre-call questions).
- **Surface language:** dark #050505 ground, red radial glows behind hero/CTA only, glass panels, hairline rules, GlowButton CTAs, serif-accent headlines, real proof (Slack screenshots, Trustpilot) over claims.

## Index
- `styles.css` → imports `tokens/` (fonts, colors, typography, spacing, effects)
- `assets/` — **lockups: use the PNGs** — logo-primary@4x.png (light bg), logo-silver@4x.png (dark bg), logo-white@4x.png (red/photo bg). The lockup SVGs (logo-*.svg) lost their class→fill style map in the upstream export and paint black — geometry reference only. emblem-white.svg (white glyph, fixed) and emblem-red.svg (red glyph, fixed) are safe. favicon-16/32.png, fonts/poppins-{300..800}.woff2, social/ (2 sample tiles)
- `guidelines/` — foundation specimen cards (Design System tab: Colors, Type, Spacing, Brand)
- `components/core/` — Button, IconButton, Badge, Tag, Card, Stat
- `components/forms/` — Field, Input, Select, Checkbox, Radio, Switch
- `components/feedback/` — Dialog, Toast, Tooltip
- `components/navigation/` — Tabs
- `components/brand/` — Logo, Emblem, BrandPattern, SectionHeader
- `components/funnel/` — GlowButton, Eyebrow, SerifAccent, GlassPanel — the dark funnel language
- `ui_kits/website/` — dark cinematic VSL call funnel (current, modeled on scale.leadfuse.co positioning; real client quotes; image-slots for proof screenshots). `v1-archive/` holds the earlier light version.
- `guidelines/slides/` — sample slide cards in the brandbook deck style
- `SKILL.md` — agent skill entry point

## Intentional additions
- Component set (Button…Tabs): no product UI source exists, so a standard set was authored to brand spec.
- Instrument Serif (italic display accent) + glow/glass tokens + 10/16px radii — the 2026 "premium dark" web refresh requested by the founder; the brandbook itself remains sharp/flat.
- Lucide CDN icons (see Iconography) — substitution, flagged.
- Motion defaults (see Visual Foundations) — sources are static.

## Caveats
- "Poppins" is called "Poppins" in the brandbook typography slide (typo'd "Poppins" heading as "Typography/Poppins"); self-hosted Google Fonts Poppins matches the specimens exactly.
- No website/app source was provided; `ui_kits/website/` is a brand-faithful funnel composition using the team's own ad copy, not a recreation of an existing page.
- Winning Assistants deck photos are third-party (Pitch template) — used only for slide-structure ideas, none of its colors/type.
