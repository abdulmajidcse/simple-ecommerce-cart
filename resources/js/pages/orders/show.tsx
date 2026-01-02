import AppLayout from '@/layouts/app-layout';
import { Order } from '@/types/order';
import { Head } from '@inertiajs/react';

interface Props {
    order: Order;
}

export default function OrderShow({ order }: Props) {
    return (
        <AppLayout>
            <Head title={`Order #${order.id}`} />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-semibold">Order #{order.id}</h1>
                </div>

                <div className="rounded border p-4">
                    <p>
                        <strong>Date:</strong>{' '}
                        {new Date(order.created_at).toDateString()}
                    </p>
                    <p>
                        <strong>Total:</strong> ${order.total_amount}
                    </p>
                </div>

                <table className="w-full border-collapse border">
                    <thead className="bg-gray-100 dark:bg-gray-600">
                        <tr>
                            <th className="border p-2 text-left">Product</th>
                            <th className="border p-2 text-left">Price</th>
                            <th className="border p-2 text-left">Qty</th>
                            <th className="border p-2 text-left">Subtotal</th>
                        </tr>
                    </thead>

                    <tbody>
                        {order.items.map((item) => (
                            <tr key={item.id}>
                                <td className="border p-2">
                                    {item.product.name}
                                </td>
                                <td className="border p-2">${item.price}</td>
                                <td className="border p-2">{item.quantity}</td>
                                <td className="border p-2">
                                    ${item.price * item.quantity}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AppLayout>
    );
}
