import ProductCard from '@/components/frontend/product-card';
import FrontendLayout from '@/layouts/frontend-layout';
import { Product } from '@/types/product';
import { Head } from '@inertiajs/react';

interface Props {
    products: Product[];
}

export default function Home({ products }: Props) {
    return (
        <FrontendLayout>
            <Head title="Home" />

            {/* Hero */}
            <section className="bg-slate-800 py-20 text-white">
                <div className="mx-auto max-w-7xl px-6 text-center">
                    <h1 className="text-4xl font-bold">
                        Quality Products, Better Prices
                    </h1>
                    <p className="mt-4 text-slate-300">
                        Discover our latest collection
                    </p>
                </div>
            </section>

            {/* Products */}
            <section className="mx-auto max-w-7xl px-6 py-12">
                <h2 className="mb-6 text-2xl font-semibold">Latest Products</h2>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </FrontendLayout>
    );
}
