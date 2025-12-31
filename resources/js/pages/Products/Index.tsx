import TablePagination from '@/components/TablePagination';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { BreadcrumbItem } from '@/types';
import { Paginated } from '@/types/pagination';
import { Product } from '@/types/product';
import { Head, Link } from '@inertiajs/react';

interface Props {
    products: Paginated<Product>;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
    {
        title: 'Products',
        href: '/admin/products',
    },
];

export default function Index({ products }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Products" />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {/* Header */}
                <div className="mb-4 flex items-center justify-between">
                    <h1 className="text-xl font-semibold">Products</h1>

                    <Link
                        href="/admin/products/create"
                        className="rounded-md bg-gray-600 px-4 py-2 text-sm text-white hover:bg-gray-700"
                    >
                        Add Product
                    </Link>
                </div>

                {/* Table */}
                <table className="w-full border-collapse border">
                    <thead className="bg-gray-100 dark:bg-gray-600">
                        <tr>
                            <th className="border p-2 text-left">Name</th>
                            <th className="border p-2 text-left">Price</th>
                            <th className="border p-2 text-left">Stock</th>
                            <th className="border p-2 text-left">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.data.map((product) => (
                            <tr key={product.id} className="border-t">
                                <td className="border p-2">{product.name}</td>
                                <td className="border p-2">${product.price}</td>
                                <td className="border p-2">
                                    {product.stock_quantity}
                                </td>
                                <td className="border p-2">
                                    <div className="flex gap-3">
                                        <Link
                                            href={`/admin/products/${product.id}/edit`}
                                            className="text-gray-600 hover:underline"
                                        >
                                            Edit
                                        </Link>

                                        <Link
                                            href={`/admin/products/${product.id}`}
                                            method="delete"
                                            as="button"
                                            className="text-red-600 hover:underline"
                                            onClick={(e) => {
                                                if (
                                                    !window.confirm(
                                                        'Are you sure you want to delete this product?',
                                                    )
                                                ) {
                                                    e.preventDefault();
                                                }
                                            }}
                                        >
                                            Delete
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Footer */}
                <TablePagination
                    from={products.from}
                    to={products.to}
                    total={products.total}
                    links={products.links}
                />
            </div>
        </AppLayout>
    );
}
