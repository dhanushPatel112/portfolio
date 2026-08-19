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

## Credits

The 3D scene (character loader, GSAP ScrollSmoother flow, and physics tech-stack)
is derived from the open-source, MIT-licensed
[`akashrmalhotra/3d-portfolio`](https://github.com/akashrmalhotra/3d-portfolio)
template, then re-skinned and restructured (new palette, typography, section
composition, and ported Skills / Certifications / Education / Cloud sections).
GSAP and its ScrollSmoother/SplitText plugins are © GreenSock, used under the
standard GSAP license.

The 3D hero model is [**RobotExpressive**](https://threejs.org/examples/?q=robot#webgl_animation_skinning_morph)
by Tomás Laulhé, released under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/)
(modified by Don McCurdy for the three.js examples). No attribution is required
under CC0; this credit is provided as a courtesy.

## License

MIT — see [`LICENSE.md`](./LICENSE.md).
