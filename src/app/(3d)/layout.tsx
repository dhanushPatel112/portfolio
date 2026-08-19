import type { ReactNode } from 'react';
import { Toaster } from 'sonner';
import './index.css';

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => (
    <>
        {children}
        <Toaster
            theme="dark"
            position="bottom-right"
            richColors
            toastOptions={{
                style: {
                    fontFamily: 'Geist, sans-serif',
                },
            }}
        />
    </>
);

export default Layout;
