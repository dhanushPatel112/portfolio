# Dhanush Patel — Portfolio

Personal 3D portfolio site. An interactive, character-driven single page built with
React Three Fiber and GSAP, deployed on Vercel.

**Live:** https://dhanushpatel112.vercel.app

## Stack

- **Next.js 16** (App Router) + **React 19**
- **React Three Fiber / Three.js** (`@react-three/fiber`, `drei`, `rapier`, `postprocessing`) for the 3D scene
- **GSAP** for scroll and section animations
- **TypeScript**, ESLint, Prettier
- **Nodemailer** for the contact API route

## Local development

```bash
pnpm install
pnpm dev
```

The app runs at http://localhost:3000.

Other scripts: `pnpm build`, `pnpm start`, `pnpm lint`, `pnpm type-check`.

## Environment variables

Create a `.env.local` in the project root:

| Variable | Required | Purpose |
| --- | --- | --- |
| `EMAIL_USER` | yes | SMTP account used by the contact API to send mail |
| `EMAIL_PASS` | yes | SMTP account password / app password |
| `EMAIL_TO` | yes | Destination address that receives contact submissions |
| `NEXT_PUBLIC_CLARITY_ID` | optional | Microsoft Clarity analytics project id |
| `NEXT_PUBLIC_API_KEY` | optional | Firebase web API key (FCM, etc.) |

## License

MIT
