# PRD — 3D Re-skin + Character + Layout/Interaction De-clone

## 1. Context

The 3D portfolio is cloned from an open-source template and is currently easy to recognize as that clone. Goal: make it visually and structurally distinct while keeping it working. Scope (confirmed): **re-skin + character tweak + layout/interaction changes** (the most thorough option short of a full rewrite).

Prerequisite: read `.claude/05_reference_research/FINDINGS.md` for the identified source repo and its "signature" identifiers to change.

## 2. Work items

### 2.1 Re-skin (visual identity)
- New color palette / accent colors across `src/app/(3d)/components/styles/*.css` (backgrounds, gradients, the `landing-circle` glows, text).
- New/adjusted environment + lighting in `TechStack.tsx` and the Character scene: swap or recolor the HDR (`public/models/char_enviorment.hdr`), tweak `ambientLight`/`spotLight`/`directionalLight`, `N8AO` color, tone mapping.
- Typography: change the display font(s) used in Landing/section headings.
- Restyle the techstack physics gimmick (sphere materials, count, colors) so it doesn't read as the template's signature.

### 2.2 Character model tweak
- Modify the 3D character so it differs from the source: retexture/recolor materials, adjust the idle/typing animation timing (`data/boneData.ts`, `components/Character/`), or swap the model (`public/models/character.glb`). Keep decrypt/loader flow intact (`character.enc`, `utils/decrypt.ts`).
- If swapping the model, preserve the bone-driven typing animation contract or replace it with a simpler idle.

### 2.3 Layout & interaction changes
- Rearrange section order / composition so the page structure differs from the template (e.g. relocate TechStack, change the Landing composition, restructure the "What I Do" reveal).
- Change scroll/animation behavior (GSAP ScrollSmoother/ScrollTrigger timings, reveal directions, cursor behavior in `Cursor.tsx`).
- Adjust the Navbar and social-icon interactions.

## 3. Constraints
- Must keep working on desktop and mobile; preserve the `isDesktopView` fallback (character is desktop-only today — decide intentionally whether to keep that).
- Keep performance acceptable (the scene already disables some GL features; don't regress).
- No AI/LLM content.
- Respect source license/attribution obligations surfaced in `05`.

## 4. Acceptance criteria
- [ ] Side-by-side with the identified source template, the palette, character, and section structure are clearly different.
- [ ] All interactions (scroll, cursor, techstack physics, character animation) still work.
- [ ] No console errors; build passes; mobile still renders a coherent landing.
- [ ] Any required source attribution is satisfied.
