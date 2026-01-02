import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import AppLogo from '../app-logo';

export default function Header({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage<SharedData>().props;

    return (
        <header className="border-b bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <Link href="/" className="text-xl font-bold text-slate-800">
                    <div className="flex items-center">
                        <AppLogo />
                    </div>
                </Link>

                <nav className="flex gap-6 text-sm text-slate-800">
                    <Link href="/" className="hover:underline">
                        Home
                    </Link>
                    <Link href="/cart" className="hover:underline">
                        Cart
                    </Link>
                    {auth.user ? (
                        <Link href={dashboard()} className="hover:underline">
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link href={login()} className="hover:underline">
                                Login
                            </Link>
                            {canRegister && (
                                <Link
                                    href={register()}
                                    className="hover:underline"
                                >
                                    Register
                                </Link>
                            )}
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
}
