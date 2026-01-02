import { CartItem } from '@/types/cart';
import { Link, router } from '@inertiajs/react';

interface Props {
    item: CartItem;
}

export default function CartItemRow({ item }: Props) {
    const updateQuantity = (quantity: number) => {
        router.patch(
            `/cart/${item.id}`,
            { quantity },
            { preserveScroll: true },
        );
    };

    return (
        <div className="flex items-center justify-between rounded border p-4 text-slate-800">
            <div>
                <h3 className="font-semibold">
                    {' '}
                    <Link
                        href={`/products/${item.product.id}`}
                        className="mt-3 inline-block text-sm text-blue-600 hover:underline"
                    >
                        {item.product.name}
                    </Link>
                </h3>
                <p className="text-sm text-gray-500">${item.product.price}</p>

                <div className="mt-3 flex items-center gap-3">
                    <button
                        onClick={() => updateQuantity(item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="cursor-pointer rounded border px-2 disabled:opacity-50"
                    >
                        −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                        onClick={() => updateQuantity(item.quantity + 1)}
                        className="cursor-pointer rounded border px-2"
                    >
                        +
                    </button>
                </div>
            </div>

            <button
                onClick={() =>
                    router.delete(`/cart/${item.id}`, { preserveScroll: true })
                }
                className="cursor-pointer text-sm text-red-600 hover:underline"
            >
                Remove
            </button>
        </div>
    );
}
