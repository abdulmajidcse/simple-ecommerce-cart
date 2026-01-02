import AppLogo from '../app-logo';

export default function Footer() {
    return (
        <footer className="border-t bg-white">
            <div className="mx-auto max-w-7xl flex justify-center items-center px-6 py-6 text-center text-sm text-slate-500">
                © {new Date().getFullYear()} <div className='inline-flex items-center'><AppLogo /></div>. All rights reserved.
            </div>
        </footer>
    );
}
