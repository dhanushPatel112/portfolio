# PRD — Repo Hygiene, Accessibility & Security

## 1. Context

Non-visual cleanup: the repo still looks like the starter template, external links are insecure, icon links lack labels, and there are duplicate assets. None of these change the rendered design.

## 2. Functional Requirements

### 2.1 Project identity
- `package.json`: change `"name": "nextjs-16-starter-shadcn"` → `"dhanush-patel-portfolio"`. Update/remove the `"website"` field to the real URL (`https://dhanushpatel112.vercel.app`).
- `README.md`: replace the starter-template README with a short project README: what it is (personal 3D portfolio), stack (Next.js 16, React 19, R3F/Three.js, GSAP), local dev (`pnpm install && pnpm dev`), and required env vars (`EMAIL_USER`, `EMAIL_PASS`, `EMAIL_TO` for the contact API; optional `NEXT_PUBLIC_CLARITY_ID`, Firebase keys). Remove the original author's GitHub stars/forks badges.

### 2.2 Link security (`rel` on `target="_blank"`)
Add `rel="noopener noreferrer"` to every `target="_blank"` anchor. Known locations:
- `src/app/(3d)/components/Contact.tsx` (GitHub, LinkedIn, LeetCode)
- `src/app/(3d)/components/SocialIcons.tsx` (GitHub, LinkedIn, LeetCode, resume link)
- Grep the whole `src/` for `target="_blank"` / `target='_blank'` and fix any others.

### 2.3 Accessibility
- Add `aria-label` to icon-only links in `SocialIcons.tsx` (e.g. `aria-label="GitHub"`, `"LinkedIn"`, `"LeetCode"`, `"Resume"`).
- Add `aria-label` to icon-only links in `Contact.tsx` where the text is decorative.
- Ensure the resume `<a>` has a descriptive label.

### 2.4 Duplicate / unused assets
- `public/images/` has near-duplicate profile pics: `profile.jpeg`, `profile 2.jpeg`, `profile 2.jpg`, `profile_pic_2.jpeg`. Grep `src/` for which one is actually referenced; **keep the referenced one** (rename to `profile.jpeg` if needed) and delete the rest.
- There are two favicons (`public/favicon.ico`, `public/images/favicon.ico`). Keep the one referenced by metadata (`/favicon.ico`); remove the orphan if unreferenced.
- Do **not** delete project/tech/cert images (`book_store.png`, `apolloCertificationLogo.svg`, etc.) — several are reserved for Phase 2 (certifications).

## 3. Out of scope
- No visual/layout change. No component restructuring.
- Do not remove `src/modules/` or `src/app/old/` yet — Phase 2 harvests from them.

## 4. Acceptance criteria
- [ ] `package.json` name and README are personalized; no template author badges.
- [ ] Every `target="_blank"` has `rel="noopener noreferrer"`.
- [ ] All icon-only links have `aria-label`.
- [ ] Only one profile image remains and it is the one referenced in code.
- [ ] Build + lint pass.
