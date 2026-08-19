# FINDINGS — Source Identification & Design References

_Phase 2 · Step 1 deliverable for `05_reference_research/PRD.md`. Research only — no code changed._

---

## 1. Source identification

### 1.1 Verdict

The `src/app/(3d)/` portfolio is **not an original build**. It is a lift of a widely-cloned
open-source **"3D typing-character developer portfolio" template** (Vite + React + TypeScript +
React Three Fiber + Rapier + GSAP ScrollSmoother), grafted into this repo's Next.js App Router
under the `(3d)` route group.

The template has proliferated as **copy-paste clones, not GitHub forks** — dozens of near-identical
repos exist with no shared fork ancestry and no attribution, so there is no single authoritative
"upstream" to point at with certainty. The **closest dependency-for-dependency match to our exact
codebase**, and the most prominent redistributable version of it, is:

> **`akashrmalhotra/3d-portfolio`** — https://github.com/akashrmalhotra/3d-portfolio
> MIT · ⭐367 · 234 forks · live: https://akashrmalhotra.netlify.app/

Treat that repo as the **practical "source template" to de-clone against** in `07`. It is the same
codebase as ours one step before the Next.js port.

### 1.2 Evidence

- **Vite scaffolding leftovers** still sitting inside the Next.js route:
  `src/app/(3d)/App.css`, `src/app/(3d)/index.css`, `src/app/(3d)/assets/react.svg` — the fingerprint
  of a `create-vite` React app pasted in wholesale.
- **Dead dependency carried over verbatim:** `@react-three/cannon@^6.6.0` is in `package.json` but is
  **never imported anywhere in `(3d)`** (the physics tech-stack uses `@react-three/rapier`). The same
  cannon-*and*-rapier pairing + `react-fast-marquee` appears in `akashrmalhotra/3d-portfolio`'s deps.
- **Identical pinned versions across the family:** `three@0.168.0`, `@react-three/rapier@1.5.0`,
  `gsap@3.12.7` — matching akashrmalhotra, `ShoaibAhmedSoomro/Shoaib-Ahmed-3D-Portfolio`,
  `udithavithanage/3d-web`, and others.
- **Verbatim source identifiers** found by GitHub code search across 30+ unrelated repos:
  the misspelled `char_enviorment.hdr`, the `what-noTouch` / `landing-h2-info` CSS classes, the
  `typingBoneNames` / `eyebrowBoneNames` bone arrays, and the `createBoneAction(..., "typing", ...)`
  animation helper. These are copy-paste signatures, not coincidences.
- **Encrypted-model gimmick:** `public/models/character.enc` + `utils/decrypt.ts` (AES-CBC, SHA-256
  key) + `encrypt.cjs` — the same "hide the .glb behind AES" trick ships in the sibling clones.

### 1.3 Signature identifiers to change (the de-clone checklist for `07`)

These are what make the page instantly recognizable as this template. Each must be changed:

| # | Signature | Where | De-clone action |
|---|-----------|-------|-----------------|
| S1 | **Typing 3D character at a keyboard**, eyes follow cursor | `components/Character/*`, `data/boneData.ts`, `public/models/character.enc` | Retexture/recolor materials, retime idle/typing, ideally swap the model (keep decrypt flow) |
| S2 | **"WHAT I DO" cards** with dashed SVG borders + hover-split reveal | `WhatIDo.tsx` + `styles/WhatIDo.css` | New heading treatment, new border/reveal interaction, 3-card grid (also needed for `06` Cloud card) |
| S3 | **Rapier physics tech-stack** — 30 spheres w/ logo textures, N8AO `#0f002c`, pointer repel | `TechStack.tsx` | Change count/material/colors, N8AO color, layout; consider non-sphere shapes |
| S4 | **Landing composition** — `Hello! I'm` / big name / rotating "Developer↔Engineer" | `Landing.tsx` + `styles/Landing.css` | New layout, new display font, drop the rotating word gimmick or replace it |
| S5 | **Purple/indigo dark palette** + `landing-circle` radial glows | `styles/*.css` | New accent palette + glow treatment (see `07` reskin) |
| S6 | **HDR environment** `char_enviorment.hdr` (note misspelling) + lighting rig | `TechStack.tsx`, `Character/utils/lighting.ts` | Swap/recolor HDR, retune lights + tone mapping; rename the file to kill the fingerprint |
| S7 | **Section order** Landing → About → WhatIDo → Career → TechStack → Contact | `MainContainer.tsx` | Reorder/recompose (e.g. relocate TechStack, restructure the reveal) |
| S8 | **Custom cursor + GSAP ScrollSmoother** feel | `Cursor.tsx`, `utils/GsapScroll.ts`, `initialFX.ts` | Retune timings/directions, change cursor behavior |
| S9 | **Leftover Vite files** (`App.css`, `index.css`, `assets/react.svg`) + **unused `@react-three/cannon`** | repo root of `(3d)` + `package.json` | Delete them — they are pure "this was cloned" tells |

### 1.4 License / attribution

- `akashrmalhotra/3d-portfolio` and most siblings are **MIT**. Our repo already ships a `LICENSE.md`
  (currently the generic "Vercel, Inc." MIT boilerplate).
- **Action for `07`:** because the practical source is MIT, satisfy attribution by adding a short
  credit line (e.g. in `README.md` "Credits" and/or `LICENSE.md`) noting the 3D scene is derived from
  the open-source MIT `akashrmalhotra/3d-portfolio` template. MIT only requires the copyright/permission
  notice be preserved — a one-line credit + keeping an MIT license file satisfies it. Also note **GSAP
  ScrollSmoother** is a Club-GSAP plugin; it's already vendored/used here, but flag that its
  redistribution terms are stricter than MIT if this is ever re-licensed.

---

## 2. Reference portfolios (borrow ideas/components from these)

All verified live on GitHub. **License flags are load-bearing:** for `none`/GPL entries, borrow
*ideas, layout, and content taxonomy only* — do not copy source. For MIT entries, code reuse is fine
with attribution.

### R1 — `adrianhajdin/project_3D_developer_portfolio` (JavaScript Mastery)
- Repo: https://github.com/adrianhajdin/project_3D_developer_portfolio · ⭐7.1k · **License: NONE (⚠ ideas only)**
- **Borrow:** the 3D tech-stack "floating logo balls" pattern (cleaner than our 30-sphere Rapier pit),
  the **VerticalTimeline experience/career** layout, and the **EmailJS contact-form UX** (labels,
  validation, sending/toast states).
- **Maps onto:** our `TechStack.tsx`, `Career.tsx`, `Contact.tsx`.
- **Effort:** Med. **Constraint:** no license → reimplement from scratch, don't paste.

### R2 — `ladunjexa/reactjs18-3d-portfolio` (MIT)
- Repo: https://github.com/ladunjexa/reactjs18-3d-portfolio · ⭐750 · **MIT** · live: https://threejs-3-d-portfolio.vercel.app
- **Borrow:** section-to-section transition polish, animated skills/"what I do" reveals, and its
  contact form + 3D companion object. Same R3F + GSAP stack as us, so code is directly adaptable.
- **Maps onto:** `WhatIDo.tsx`, `Contact.tsx`, scroll transitions in `GsapScroll.ts`.
- **Effort:** Low–Med. **Constraint:** keep MIT attribution if code is copied.

### R3 — `sanidhyy/3d-portfolio` (MIT)
- Repo: https://github.com/sanidhyy/3d-portfolio · ⭐295 · **MIT** · live: https://shubam.netlify.app/
- **Borrow:** clean R3F component structure, card treatments, and a tidy contact section — a good
  MIT-safe donor when we need actual code rather than just ideas.
- **Maps onto:** general component structure, `Contact.tsx`.
- **Effort:** Low. **Constraint:** MIT attribution.

### R4 — `saadpasta/developerFolio` (GPL-3.0)
- Repo: https://github.com/saadpasta/developerFolio · ⭐6.6k · **GPL-3.0 (⚠ copyleft — ideas only)** · live: https://developerfolio.js.org/
- **Borrow:** its **content taxonomy** — the exact section set we need to port in `06`:
  **Skills (grouped by category)**, **Education**, **Certifications/Achievements**, work/experience.
  Best single reference for _how to organize_ the ported sections.
- **Maps onto:** `06`'s Skills / Certifications / Education sections.
- **Effort:** Low (structure only). **Constraint:** GPL → use as a layout/IA reference, never copy code.

### R5 — `soumyajit4419/Portfolio` (no license)
- Repo: https://github.com/soumyajit4419/Portfolio · ⭐6.4k · **License: NONE (⚠ ideas only)** · live: https://soumyajit.vercel.app/
- **Borrow:** dark-card aesthetic, About "what I do" card phrasing, and a compact Skills/Resume
  layout — good visual reference for keeping ported sections dark-native instead of shadcn-light.
- **Maps onto:** `06` Skills/Education styling, `About.tsx` tone.
- **Effort:** Low. **Constraint:** no license → visual reference only.

### R6 — `tairqaldy/three.js-3d-portfolio-website` (MIT)
- Repo: https://github.com/tairqaldy/three.js-3d-portfolio-website · ⭐2 · **MIT** · live: https://tairkaldybayev.vercel.app/
- **Borrow:** an alternative R3F + GSAP scene composition and lighting/HDR choices — useful as a
  _divergence_ reference for the `07` reskin so we don't re-clone the same purple template look.
- **Maps onto:** `TechStack.tsx` environment/lighting, overall composition in `MainContainer.tsx`.
- **Effort:** Med. **Constraint:** MIT attribution if code copied.

---

## 3. Recommendation

**For `06` (port missing sections into the 3D style):**
- **Lead with R4 `developerFolio`** for the information architecture of Skills / Education /
  Certifications (it has exactly our five skill groups + education + certs/achievements), and
  **R5 `soumyajit4419`** for dark-card visual cues. Both are ideas-only (GPL / no-license) — we
  restyle natively into our existing `styles/*.css`, which the PRD requires anyway.
- Use **R1 `adrianhajdin`** as the model for the **contact-form UX** we're wiring to `/api/contact`
  (react-hook-form + zod + sonner already installed).

**For `07` (3D reskin + de-clone):**
- **Lean on R2 `ladunjexa` (MIT)** as the primary code-safe donor for reworked scroll transitions and
  interactions, and **R6 `tairqaldy` (MIT)** for a genuinely different lighting/HDR/composition so the
  reskin diverges rather than becoming another clone.
- Drive the reskin off the **§1.3 signature checklist** — changing S1–S9 is what actually breaks the
  visual identity with `akashrmalhotra/3d-portfolio`. Keep `R3 sanidhyy` (MIT) on hand as a clean-code
  fallback donor.

**Top 2 overall:** `developerFolio` (R4) for the port content, `ladunjexa/reactjs18-3d-portfolio`
(R2) for the reskin.

---

### Open decision for you before I build

1. **Model swap vs. retexture (S1):** replace `character.glb` with a different rig, or keep it and
   just recolor/retime? (Swap = strongest de-clone, higher effort/risk to the bone-typing contract.)
2. **Reference approval:** OK to proceed with R1–R6 above, or do you want different/additional refs?
3. **Attribution placement:** README "Credits" line + MIT license note acceptable for satisfying the
   source template's MIT terms?
