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
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dhanush Patel — Full-Stack Developer',
        description: 'Full-stack developer building scalable Node.js / NestJS / React applications.',
    },
    icons: { icon: '/favicon.ico' },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        // TODO: paste the token from Google Search Console → Settings →
        // Ownership verification → HTML tag, then uncomment:
        google: "cMZ2Wo-0pLnLjFoRdu-MsaaBT6nB5pBjO-KOPMHuhBc",
    },
};

const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    dateModified: new Date().toISOString(),
    mainEntity: {
        '@type': 'Person',
        name: 'Dhanush Patel',
        alternateName: 'Dhanush D Patel',
        url: 'https://dhanushpatel112.vercel.app',
        image: 'https://dhanushpatel112.vercel.app/images/profile_pic_2.jpeg',
        jobTitle: 'Full-Stack Developer',
        description:
            'Full-stack developer with 4+ years building Node.js, NestJS, and React applications — backend system design, cloud/DevOps, and no-downtime legacy migrations.',
        knowsAbout: [
            'Node.js',
            'NestJS',
            'React',
            'Next.js',
            'TypeScript',
            'AWS',
            'PostgreSQL',
            'Backend Development',
        ],
        sameAs: [
            'https://www.linkedin.com/in/dhanush-patel-2185291ab',
            'https://github.com/dhanushPatel112',
            'https://leetcode.com/u/dev-d-patel',
        ],
    },
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
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(personJsonLd),
                    }}
                />
            </body>
        </html>
    );
}
