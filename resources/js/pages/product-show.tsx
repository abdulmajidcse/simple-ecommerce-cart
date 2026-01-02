import FrontendLayout from '@/layouts/frontend-layout';
import { Product } from '@/types/product';
import { Head, Link, router } from '@inertiajs/react';

function addToCart(productId: number) {
    router.post(`/cart/${productId}`, {
        quantity: 1,
    });
}

interface Props {
    product: Product;
}

export default function ProductShow({ product }: Props) {
    return (
        <FrontendLayout>
            <Head title={product.name} />

            <div className="mx-auto max-w-7xl px-6 py-12">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                    {/* Image Placeholder */}
                    <div className="mb-3 flex items-center justify-center rounded-lg bg-slate-200">
                        <div className="mb-3 h-40 rounded bg-slate-200" />
                    </div>

                    {/* Details */}
                    <div>
                        <h1 className="text-3xl font-bold text-slate-800">
                            {product.name}
                        </h1>

                        <p className="mt-4 text-2xl font-semibold text-slate-700">
                            ${product.price}
                        </p>

                        <p className="mt-2 text-sm text-slate-500">
                            Stock available: {product.stock_quantity}
                        </p>

                        <div className="mt-6">
                            <button
                                onClick={() => addToCart(product.id)}
                                className="cursor-pointer rounded bg-slate-800 px-6 py-3 text-white transition hover:bg-slate-700 disabled:opacity-50"
                                disabled={product.stock_quantity === 0}
                            >
                                {product.stock_quantity === 0
                                    ? 'Out of Stock'
                                    : 'Add to Cart'}
                            </button>
                        </div>

                        <div className="mt-6">
                            <Link
                                href="/"
                                className="text-sm text-slate-600 hover:underline"
                            >
                                ← Back to products
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </FrontendLayout>
    );
}
