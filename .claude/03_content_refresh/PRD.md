# PRD — Content Refresh (About / Career / What I Do) + Add Cloud

## 1. Context

The 3D portfolio copy is generic and **behind the résumé**. It must be updated to reflect a senior full-stack developer with strong backend + **Cloud/DevOps**, no-downtime migrations, and team leadership. **No AI/LLM wording** (explicit user constraint — the résumé's AI lines are intentionally excluded here).

This is a **copy/content-only** change: **same JSX/markup and CSS**, only the text (and one card's tag list) changes. Do not add/remove DOM elements except where noted (adding `<div className="what-tags">` items, which reuses the existing pattern).

## 2. Functional Requirements

### 2.1 `src/app/(3d)/components/About.tsx`

Keep the `experienceYear` calc and markup. Replace the paragraph text with:

> Full Stack Developer with {experienceYear}+ years of experience designing and shipping production backend systems and web applications with Node.js, NestJS, TypeScript, React, and Next.js. I lead small teams, own system design and code reviews, and migrate legacy stacks to modern ones — with no downtime and measurable performance gains. Comfortable across the stack and the cloud: AWS, Docker, CI/CD, and NGINX.

### 2.2 `src/app/(3d)/components/Career.tsx`

Keep the **three** `career-info-box` cards (structure unchanged). Correct the copy so it is accurate to the résumé:

**Card 1 — Associate Software Developer · Rysun Labs · 2022**
> Led a team of 3 to build the admin portal of a Next.js visitor app with FCM, AWS S3, and PostgreSQL on AWS. Ran Scrum and owned client communication. Built a drag-and-drop React template editor with dynamic PDF generation, and earned the "Best Intern" award.

**Card 2 — Full Stack Web Developer · Codiste · 2024**
> Led full-stack development across enterprise apps with Node.js, NestJS, TypeScript, and React. Ran a no-downtime Java → Node.js migration for a financial transactions app and moved another product from MongoDB to PostgreSQL, with response-time wins from caching, payload trimming, and query tuning.

**Card 3 — Senior Full Stack Web Developer · Codiste · NOW**
> Designing a Turbo monorepo backend with NestJS and PostgreSQL, using Redis for caching and background queues. Set up CI/CD with GitHub Actions, NGINX, and AWS EC2 + RDS, with JWT auth and role-based access control across REST APIs serving multiple client apps.

### 2.3 `src/app/(3d)/components/WhatIDo.tsx` — add Cloud content

The section has two cards: **FRONTEND** and **BACKEND**. Do **not** add a third card in Phase 1 (that is a UI change → Phase 2). Instead surface Cloud/DevOps inside the **BACKEND** card, reusing the existing `what-tags` pattern:

- Append these tags after the existing backend tags (`Node.js`, `NestJS`, `Express.js`, `MongoDB`, `PostgreSQL`, `REST APIs`, `Microservices`):
  - `Redis`, `AWS`, `Docker`, `CI/CD`
- Update the backend `<p>` to mention cloud delivery, e.g.:
  > Designing robust APIs and microservices, then shipping them to the cloud. From CMS platforms to complex business logic, I build backends that scale and deploy them with Docker, AWS, and CI/CD.

### 2.4 Contact / SocialIcons

No copy change required. Leave the static contact links as-is (real form is Phase 2). Email `pateldhanush1208@gmail.com` and social links are already correct.

## 3. Out of scope
- No new sections, no new cards, no restyling, no CSS edits.
- No AI/LLM language anywhere.

## 4. Acceptance criteria
- [ ] About/Career/WhatIDo render new copy with **identical layout**.
- [ ] Backend card shows the 4 new cloud tags in the existing pill style.
- [ ] `grep -riE "AI|LLM|GPT|LangGraph|OpenAI|RAG" src/app/(3d)` returns nothing.
- [ ] Career still shows 3 timeline cards.
- [ ] Build passes; no layout regression on desktop and mobile.
