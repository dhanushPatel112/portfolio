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

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
