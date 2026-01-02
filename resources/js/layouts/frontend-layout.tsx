import Footer from '@/components/frontend/footer';
import Header from '@/components/frontend/header';
import useFlashToast from '@/hooks/useFlashToast';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export default function FrontendLayout({ children }: Props) {
    useFlashToast();

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 bg-slate-50">{children}</main>
            <Footer />
        </div>
    );
}
