import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { ThemeProvider } from 'next-themes';

import '@/app/globals.css';
import { Toaster } from '@/registry/new-york-v4/ui/sonner';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900'
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900'
});

export const metadata: Metadata = {
    title: "Dhanush — Full-Stack TypeScript/JavaScript Developer",
    description:
        "Portfolio of Dhanush, a full-stack developer specializing in TypeScript, JavaScript, modern web apps, APIs, and scalable backend systems.",
    keywords: [
        "Dhanush",
        "Full Stack Developer",
        "TypeScript",
        "JavaScript",
        "Web Development",
        "Backend",
        "Frontend"
    ],
    authors: [{ name: "Dhanush" }],
    openGraph: {
        title: "Dhanush — Full-Stack TypeScript/JavaScript Developer",
        description:
            "Full-stack portfolio showcasing projects, backend services, and web applications built with modern JavaScript and TypeScript.",
        type: "website"
    }
};

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        // ? https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
        // ? https://react.dev/reference/react-dom/client/hydrateRoot#suppressing-unavoidable-hydration-mismatch-errors
        <html suppressHydrationWarning lang='en'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground overscroll-none antialiased`}>
                <ThemeProvider forcedTheme='light' attribute='class'>
                    {children}
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
};

export default Layout;
