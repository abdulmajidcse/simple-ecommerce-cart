import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { BreadcrumbItem } from '@/types';
import { Product } from '@/types/product';
import { Head, Link, useForm } from '@inertiajs/react';

interface Props {
    product: Product;
}

interface FormData {
    name: string;
    price: number;
    stock_quantity: number;
}

export default function Edit({ product }: Props) {
    const { data, setData, put, processing, errors } = useForm<FormData>({
        name: product.name,
        price: product.price,
        stock_quantity: product.stock_quantity,
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        put(`/admin/products/${product.id}`);
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
        {
            title: 'Edit Product',
            href: `/admin/products/${product.id}/edit`,
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Product" />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {/* Header */}
                <div className="mb-4 flex items-center justify-between">
                    <h1 className="text-xl font-semibold">Edit Product</h1>
                    <Link
                        href="/admin/products"
                        className="rounded-md bg-slate-600 px-4 py-2 text-sm text-white hover:bg-slate-700"
                    >
                        Back to List
                    </Link>
                </div>

                {/* Form */}
                <form
                    onSubmit={submit}
                    className="space-y-6 rounded-xl border border-gray-200 p-6 dark:border-gray-600"
                >
                    <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>

                        <Input
                            id="name"
                            name="name"
                            type="text"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            className="mt-1 block w-full"
                        />

                        <InputError message={errors.name} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="price">Price</Label>

                        <Input
                            id="price"
                            name="price"
                            type="number"
                            value={data.price}
                            onChange={(e) =>
                                setData('price', Number(e.target.value))
                            }
                            className="mt-1 block w-full"
                        />

                        <InputError message={errors.name} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="stock_quantity">Stock Quantity</Label>

                        <Input
                            id="stock_quantity"
                            name="stock_quantity"
                            type="number"
                            value={data.stock_quantity}
                            onChange={(e) =>
                                setData(
                                    'stock_quantity',
                                    Number(e.target.value),
                                )
                            }
                            className="mt-1 block w-full"
                        />

                        <InputError message={errors.name} />
                    </div>

                    <div className="flex justify-end gap-2">
                        <Link
                            href="/admin/products"
                            className="rounded-md border px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                        >
                            Cancel
                        </Link>
                        <Button type="submit" disabled={processing}>
                            Save
                        </Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
