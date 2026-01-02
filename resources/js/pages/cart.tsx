import CartItemRow from '@/components/cart/cart-item-row';
import CartSummary from '@/components/cart/cart-summary';
import FrontendLayout from '@/layouts/frontend-layout';
import { Cart } from '@/types/cart';
import { Head } from '@inertiajs/react';

interface Props {
    cart: Cart | null;
}

export default function CartIndex({ cart }: Props) {
    return (
        <FrontendLayout>
            <Head title="Your Cart" />

            {!cart || cart.items.length === 0 ? (
                <div className="py-16 text-center">
                    <p className="text-gray-500">Your cart is empty.</p>
                </div>
            ) : (
                <div className="mx-auto max-w-4xl space-y-6 py-8">
                    {cart.items.map((item) => (
                        <CartItemRow key={item.id} item={item} />
                    ))}

                    <CartSummary cart={cart} />
                </div>
            )}
        </FrontendLayout>
    );
}
