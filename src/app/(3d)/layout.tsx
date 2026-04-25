'use client';

import type { ReactNode } from 'react';
import "./index.css";

// import type { Metadata } from 'next';

// export const metadata: Metadata = {
//     title: "Dhanush — Full-Stack TypeScript/JavaScript Developer",
//     description:
//         "Portfolio of Dhanush, a full-stack developer specializing in TypeScript, JavaScript, modern web apps, APIs, and scalable backend systems.",
//     keywords: [
//         "Dhanush",
//         "Full Stack Developer",
//         "TypeScript",
//         "JavaScript",
//         "Web Development",
//         "Backend",
//         "Frontend"
//     ],
//     authors: [{ name: "Dhanush" }],
//     openGraph: {
//         title: "Dhanush — Full-Stack TypeScript/JavaScript Developer",
//         description:
//             "Full-stack portfolio showcasing projects, backend services, and web applications built with modern JavaScript and TypeScript.",
//         type: "website"
//     }
// };

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <html lang='en'>
            <body>
                {children}
            </body>
        </html>
    );
};

export default Layout;
