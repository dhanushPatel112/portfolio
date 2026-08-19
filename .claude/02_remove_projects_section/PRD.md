# PRD — Remove the Broken Projects Section

## 1. Context

`src/app/(3d)/components/Work.tsx` defines a `projects` array and a full carousel's worth of state/handlers, then **returns an empty `<div className="work-section" id="work">`** — so the section renders as a blank gap. The images it references (`/images/Solidx.png`, `radix.png`, `bond.png`, `sapphire.png`, `Maxlife.png`) **do not exist**.

Decision: the college projects are dropped and there are no professional screenshots yet, so the **Projects/Work section is removed entirely** for now (see `.claude/README.md`). It may return in a later phase.

⚠️ **Critical dependency:** `TechStack.tsx` reads `document.getElementById("work")` to decide when to activate its physics animation on scroll. Removing `#work` **without repointing this** will throw (`getElementById(...)` is `!`-asserted) and break the TechStack section.

## 2. Functional Requirements

### 2.1 Remove `Work` from the page

`src/app/(3d)/components/MainContainer.tsx`:
- Remove the `import Work from "./Work";` line.
- Remove `<Work />` from the render tree (it sits between `<Career />` and the `TechStack` `<Suspense>`).

### 2.2 Delete the dead component

- Delete `src/app/(3d)/components/Work.tsx`.
- Delete `src/app/(3d)/components/WorkImage.tsx` **only if** nothing else imports it (grep first). Also remove `src/app/(3d)/components/styles/Work.css` if now unused (grep for `Work.css`).

### 2.3 Repoint the TechStack scroll anchor

`src/app/(3d)/components/TechStack.tsx` currently:

```ts
const threshold = document
    .getElementById("work")!
    .getBoundingClientRect().top;
```

Change the anchor to a section that still exists — use the TechStack section itself (add `id="techstack"` on its wrapper `div` if absent) or the `#career` section. Make it **null-safe** so a missing element never throws:

```ts
const anchor = document.getElementById("techstack") ?? document.getElementById("career");
if (!anchor) return;
const threshold = anchor.getBoundingClientRect().top;
```

Verify the physics balls still activate on scroll into the TechStack area after the change.

## 3. Out of scope
- Do not restyle or reflow neighboring sections. Removing the empty div should not require CSS changes; if a spacing gap appears, note it but do not redesign — spacing polish belongs to Phase 2.

## 4. Acceptance criteria
- [ ] No blank Projects gap between Career and TechStack.
- [ ] `Work.tsx` deleted; no dangling imports (`grep -rn "Work" src/app/(3d)` is clean except unrelated words).
- [ ] TechStack physics animation still triggers on scroll; no console error about a null element.
- [ ] Navbar still works (it never linked to `#work`, so no nav change needed).
- [ ] Build passes.
