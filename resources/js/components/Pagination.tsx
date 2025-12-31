import { PaginationLink } from '@/types/pagination';
import { Link } from '@inertiajs/react';

interface Props {
    links: PaginationLink[];
}

export default function Pagination({ links }: Props) {
    if (links.length <= 3) return null;

    return (
        <div className="flex flex-wrap items-center gap-1 [&>*:not(:first-child):not(:last-child)]:hidden md:[&>*:not(:first-child):not(:last-child)]:inline-flex">
            {links.map((link, index) => (
                <Link
                    key={index}
                    href={link.url ?? ''}
                    preserveScroll
                    className={`rounded border px-3 py-1 text-sm transition ${
                        link.active
                            ? 'bg-slate-800 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                    } ${!link.url && 'pointer-events-none opacity-50'}`}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                />
            ))}
        </div>
    );
}
