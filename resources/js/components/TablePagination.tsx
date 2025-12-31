import PageSummary from '@/components/PageSummary';
import Pagination from '@/components/Pagination';
import { PaginationLink } from '@/types/pagination';

interface Props {
    from: number | null;
    to: number | null;
    total: number;
    links: PaginationLink[];
}

export default function TablePagination({ from, to, total, links }: Props) {
    if (!links.length) return null;

    return (
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <PageSummary from={from} to={to} total={total} />
            <Pagination links={links} />
        </div>
    );
}
