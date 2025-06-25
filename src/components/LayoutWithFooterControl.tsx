'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function LayoutWithFooterControl({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const showFooter = pathname !== '/login';

    return (
        <>
            <Header />
            {children}
            {showFooter && <Footer />}
        </>
    );
}
