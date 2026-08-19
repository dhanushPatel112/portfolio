# PRD — Port Missing Sections into the 3D Design

## 1. Context

The older shadcn portfolio (`src/modules/`, routed at `src/app/old/`) has sections the 3D version dropped. Port these into the 3D page (`src/app/(3d)/`), **restyled to match the 3D design language** (dark theme, existing CSS conventions in `src/app/(3d)/components/styles/`), informed by the references from `05`.

Harvest source (already working, read these before building):
- `src/modules/Contact.tsx` — working contact form posting to `/api/contact` (nodemailer already implemented and live at `src/app/api/contact/`).
- `src/modules/Skills.tsx` — skills grouping.
- `src/modules/Certification.tsx` — certifications (logos exist in `public/images/`: `apolloCertificationLogo.svg`, `hackerRankLogo.png`, `vskillsLogo.jpg`, `googleCloudKubernetesBadge.png`).
- `src/modules/Education.tsx` — education (BE Computer Engineering, CGPA 9.56).
- `src/modules/Internship.tsx` — internship/awards ("Best Intern").

## 2. Sections to add (in the 3D style)

1. **Cloud & DevOps "What I Do" card** — the third card deferred from Phase 1. Add to `WhatIDo.tsx` matching the existing FRONTEND/BACKEND card markup + CSS. Tags: AWS (EC2, RDS, S3, SES), Docker, NGINX, GitHub Actions, CI/CD, Redis. Verify the two-card CSS grid / hover/split logic still works with three cards (adjust `WhatIDo.css` as needed).
2. **Skills** — a compact skills section (Languages, Backend, Frontend, Databases, Cloud & DevOps) using the résumé groupings. No AI/LLM group.
3. **Certifications** — cards using the existing logos (React/VSkills, Node/HackerRank, Apollo GraphQL Graph Developer Associate).
4. **Education** — BE Computer Engineering, LJ Institute (CGPA 9.56, 2018–2022).
5. **Contact form** — replace the static links in `src/app/(3d)/components/Contact.tsx` with a real form wired to `/api/contact`. Reuse `react-hook-form` + `zod` + `sonner` (all already dependencies). Keep the social links too.

## 3. Requirements
- Every new section must visually match the 3D design (fonts, colors, spacing, scroll behavior via GSAP ScrollSmoother/ScrollTrigger). Do not paste the shadcn light-theme markup verbatim.
- Add nav links in `Navbar.tsx` for any new anchored section that should be reachable (e.g. add SKILLS / keep ABOUT, CAREER, CONTACT).
- Register new sections in `MainContainer.tsx` in a sensible order.
- **No AI/LLM** content.
- Keep desktop/mobile parity (respect the existing `isDesktopView` handling).

## 4. Cleanup (after porting is verified)
- Remove `src/app/old/` and `src/modules/` once their content is fully ported and nothing imports them.
- Fix the `src/app/old/layout.tsx` nested-`<html>` issue is moot after removal.

## 5. Acceptance criteria
- [ ] Cloud card, Skills, Certifications, Education, and a working Contact form all present in the 3D page, styled natively.
- [ ] Contact form sends mail via `/api/contact` and shows success/error toasts.
- [ ] Nav updated; smooth-scroll still works to all sections.
- [ ] `src/modules/` + `src/app/old/` removed with no dangling imports.
- [ ] Build/lint pass; no AI/LLM wording.
