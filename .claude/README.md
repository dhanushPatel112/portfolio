# Portfolio — Improvement Plan

Two-phase plan to update the **3D portfolio** (`src/app/(3d)/`) without positioning as AI/LLM.

Repo currently has **two** portfolios:
- `src/app/(3d)/` — the live 3D-character portfolio (target of all changes).
- `src/modules/` + `src/app/old/` — an older shadcn portfolio kept **only as a harvest source** for Phase 2 (working Contact form, Skills, Certifications, Education, Internship). Remove after porting.

## Phase 1 — Content / data / SEO / bug fixes only (NO UI or visual changes)

| # | Feature | Folder |
|---|---------|--------|
| 01 | SEO + metadata + duplicate `<html>` fix | `01_seo_and_metadata/` |
| 02 | Remove the broken Projects section | `02_remove_projects_section/` |
| 03 | Content refresh (About / Career / What I Do) + add Cloud | `03_content_refresh/` |
| 04 | Repo hygiene + accessibility + security | `04_repo_hygiene_and_a11y/` |

**Hard constraint for Phase 1:** do not add new visual sections, do not restyle, do not change layout. Only text/copy, data, metadata, config, and removal of broken elements.

## Phase 2 — UI integration (visual work, after design references)

| # | Feature | Folder |
|---|---------|--------|
| 05 | Research & propose open-source portfolios | `05_reference_research/` |
| 06 | Port missing sections into 3D design | `06_port_sections_from_old_portfolio/` |
| 07 | 3D re-skin + character + layout/interaction de-clone | `07_3d_redesign_declone/` |

## Confirmed decisions
- **No AI/LLM positioning** anywhere. Lead with full-stack + backend + Cloud/DevOps.
- **Projects section removed** in Phase 1 (college projects dropped; no professional screenshots yet).
- **Career:** keep the three timeline cards, only correct the copy (structure untouched in Phase 1).
- **Cloud:** added as tags/copy in the existing Backend "What I Do" card in Phase 1; a dedicated Cloud card is Phase 2.
- **Contact:** stays static links in Phase 1; real form (API already exists) is Phase 2.
- **3D de-clone scope (Phase 2):** re-skin + character tweak + layout/interaction changes.
