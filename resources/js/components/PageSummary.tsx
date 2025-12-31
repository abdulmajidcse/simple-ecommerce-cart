interface Props {
    from: number | null;
    to: number | null;
    total: number;
}

export default function PageSummary({ from, to, total }: Props) {
    if (!from || !to) return null;

    return (
        <div className="text-sm text-gray-600 dark:text-gray-400">
            Showing <span className="font-medium">{from}</span> to{' '}
            <span className="font-medium">{to}</span> of{' '}
            <span className="font-medium">{total}</span> results
        </div>
    );
}
