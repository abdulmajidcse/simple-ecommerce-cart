import AppLayout from '@/layouts/app-layout';
import { Order } from '@/types/order';
import { Paginated } from '@/types/pagination';
import { Head, Link } from '@inertiajs/react';

interface Props {
    title: string;
    orders: Paginated<Order>;
}

export default function OrdersIndex({ title, orders }: Props) {
    return (
        <AppLayout>
            <Head title={title} />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <h1 className="mb-6 text-xl font-semibold">{title}</h1>

                <table className="w-full border-collapse border">
                    <thead className="bg-gray-100 dark:bg-gray-600">
                        <tr>
                            <th className="border p-2 text-left">Order ID</th>
                            <th className="border p-2 text-left">Total</th>
                            <th className="border p-2 text-left">Date</th>
                            <th className="border p-2">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders.data.map((order) => (
                            <tr key={order.id}>
                                <td className="border p-2">#{order.id}</td>
                                <td className="border p-2">
                                    ${order.total_amount}
                                </td>
                                <td className="border p-2">
                                    {new Date(order.created_at).toDateString()}
                                </td>
                                <td className="border p-2 text-right">
                                    <Link
                                        href={`${title == 'All Orders' ? '/admin' : ''}/orders/${order.id}`}
                                        className="text-slate-600 hover:underline"
                                    >
                                        View
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AppLayout>
    );
}
