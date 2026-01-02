import Footer from '@/components/frontend/footer';
import Header from '@/components/frontend/header';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export default function FrontendLayout({ children }: Props) {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 bg-slate-50">{children}</main>
            <Footer />
        </div>
    );
}
