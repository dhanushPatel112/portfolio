# PRD — SEO, Metadata & Duplicate `<html>` Fix

## 1. Context

The portfolio has **no working SEO metadata**, and a **structural HTML bug**:

- `src/app/layout.tsx` (root, **server** component) hardcodes `<title>Next.js</title>` and exports no `metadata`.
- `src/app/(3d)/layout.tsx` is `'use client'` **and renders its own `<html><body>`**. Because the root layout already renders `<html><body>`, the `/` route ends up with **nested `<html>` tags** (invalid markup, hydration warnings). A `'use client'` layout also **cannot** `export const metadata`, which is why the good metadata there is commented out.
- Result: pasting the site link in LinkedIn / WhatsApp / Slack shows "Next.js" with no description or preview image.

`/` is served by `src/app/(3d)/page.tsx` (route group `(3d)` adds no path segment).

This is a **bug fix + SEO** change. It produces **no visible change** to the rendered page.

## 2. Goal

One `<html><body>` (owned by the root layout), real site metadata, and working Open Graph / Twitter preview cards. **No AI/LLM wording.**

## 3. Functional Requirements

### 3.1 Root layout owns `<html>`, `<body>`, and metadata

`src/app/layout.tsx` — convert to export `metadata` and keep it as the single `<html><body>`:

```tsx
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
    metadataBase: new URL('https://dhanushpatel112.vercel.app'),
    title: {
        default: 'Dhanush Patel — Full-Stack Developer (Node.js, NestJS, React)',
        template: '%s | Dhanush Patel',
    },
    description:
        'Full-stack developer with 4+ years building Node.js, NestJS, and React applications — backend system design, cloud/DevOps, and no-downtime legacy migrations.',
    keywords: [
        'Dhanush Patel', 'Full Stack Developer', 'Node.js', 'NestJS', 'React',
        'Next.js', 'TypeScript', 'Backend Developer', 'AWS', 'PostgreSQL',
    ],
    authors: [{ name: 'Dhanush Patel' }],
    creator: 'Dhanush Patel',
    alternates: { canonical: '/' },
    openGraph: {
        type: 'website',
        url: 'https://dhanushpatel112.vercel.app',
        title: 'Dhanush Patel — Full-Stack Developer',
        description:
            'Full-stack developer building scalable Node.js / NestJS / React applications, backend systems, and cloud infrastructure.',
        siteName: 'Dhanush Patel',
        images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Dhanush Patel — Full-Stack Developer' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dhanush Patel — Full-Stack Developer',
        description: 'Full-stack developer building scalable Node.js / NestJS / React applications.',
        images: ['/images/og-image.png'],
    },
    icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
```

- Remove the hardcoded `<head><title>Next.js</title></head>`.

### 3.2 `(3d)` layout stops rendering `<html>`/`<body>`

`src/app/(3d)/layout.tsx` — it must only keep the CSS import and pass children through. Remove `'use client'` and the `<html>/<body>` wrapper:

```tsx
import type { ReactNode } from 'react';
import './index.css';

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => <>{children}</>;

export default Layout;
```

> If a `'use client'` boundary is genuinely still required for `./index.css`, keep it but still return only `<>{children}</>` — never a second `<html>`/`<body>`.

### 3.3 OG image

- `metadata` references `/images/og-image.png` (1200×630). If that file does not exist yet, create a simple placeholder or note it as a TODO — **do not** block the metadata change on it. The tags should ship; the image can be dropped in later.

## 4. Out of scope
- No visual/layout change to any section.
- `src/app/old/layout.tsx` (the dead `/old` route) also renders its own `<html>` — leave it; it is handled in `04_repo_hygiene_and_a11y` / removed in Phase 2.

## 5. Acceptance criteria
- [ ] Page source for `/` contains exactly **one** `<html>` and one `<body>`.
- [ ] `<title>` renders the real title, not "Next.js".
- [ ] `curl`/view-source shows `og:title`, `og:description`, `og:image`, `twitter:card`.
- [ ] No hydration warning about nested `<html>` in the console.
- [ ] No AI/LLM wording in any metadata field.
- [ ] `pnpm build` (or `npm run build`) passes.
