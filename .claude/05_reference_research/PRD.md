# PRD — Research & Propose Open-Source Portfolios (Design References)

## 1. Context

Phase 2 integrates good design/components from open-source portfolios into the existing 3D design, and re-skins the 3D scene so it is **not identifiable as a clone** of its source. Before building anything, we need a curated shortlist of references to pull ideas/components from.

The current 3D portfolio (`src/app/(3d)/`) is itself based on an open-source template (ScrollSmoother + typing 3D character + "WHAT I DO" cards + react-three/rapier physics-sphere techstack + N8AO). **Identifying that source repo is part of this task** so we know exactly what visual signatures to change in `07_3d_redesign_declone`.

## 2. Deliverable

A single markdown report written to `.claude/05_reference_research/FINDINGS.md` containing:

1. **Source identification** — best guess (with evidence) at which open-source repo the current 3D portfolio was cloned from, and a list of its "signature" identifiers (character model, color palette, section names, animation style, techstack physics gimmick) that must be changed to de-clone.
2. **4–6 reference portfolios** (open-source, license noted) that are genuinely high quality. For each:
   - Name, repo URL, live URL, license.
   - What's worth borrowing (specific section/component/interaction).
   - How it maps onto our existing 3D layout.
   - Reuse effort (low/med/high) and any license constraints.
3. **Recommendation** — which 1–2 to lean on for the port (`06`) and which to reference for the re-skin (`07`).

## 3. Constraints
- Prefer MIT/Apache-licensed sources; flag anything restrictive.
- Favor references that fit a **dark, 3D/GSAP, single-page** aesthetic so integration is realistic.
- No implementation in this step — research + written recommendation only.

## 4. Acceptance criteria
- [ ] `FINDINGS.md` exists with source identification + de-clone signature list.
- [ ] 4–6 references with URLs, licenses, and concrete borrow-worthy elements.
- [ ] A clear top-2 recommendation feeding `06` and `07`.
