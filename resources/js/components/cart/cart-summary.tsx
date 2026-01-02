import { Cart } from '@/types/cart';
import { router } from '@inertiajs/react';

interface Props {
    cart: Cart;
}

export default function CartSummary({ cart }: Props) {
    const total = cart.items.reduce(
        (sum, item) => sum + item.quantity * item.product.price,
        0,
    );

    return (
        <div className="flex items-center justify-between border-t pt-6 text-slate-800">
            <div>
                <p className="text-lg font-semibold">Total</p>
                <p className="text-xl font-bold">${total}</p>
            </div>

            <button
                onClick={() => router.post('/checkout')}
                className="cursor-pointer rounded bg-black px-6 py-2 text-white"
            >
                Checkout
            </button>
        </div>
    );
}
