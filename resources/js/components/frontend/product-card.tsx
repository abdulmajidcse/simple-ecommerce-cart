import { Product } from '@/types/product';
import { Link } from '@inertiajs/react';

interface Props {
    product: Product;
}

export default function ProductCard({ product }: Props) {
    return (
        <div className="rounded-lg border bg-white p-4 shadow-sm">
            <div className="mb-3 h-40 rounded bg-slate-200" />

            <h3 className="font-medium text-slate-800">{product.name}</h3>

            <p className="mt-1 text-sm text-slate-600">${product.price}</p>

            <Link
                href={`/products/${product.id}`}
                className="mt-3 inline-block text-sm text-blue-600 hover:underline"
            >
                View Details
            </Link>
        </div>
    );
}
