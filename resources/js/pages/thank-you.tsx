import FrontendLayout from '@/layouts/frontend-layout';
import { Head, Link } from '@inertiajs/react';

export default function OrderSuccess() {
    return (
        <FrontendLayout>
            <Head title="Order Successful" />

            <div className="mx-auto max-w-2xl py-20 text-center">
                <div className="rounded-xl border bg-white p-10 shadow-sm">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                        ✓
                    </div>

                    <h1 className="text-2xl font-semibold">
                        Thank you for your order
                    </h1>

                    <p className="mt-3 text-slate-600">
                        Your order has been placed successfully. We will process
                        it shortly.
                    </p>

                    <div className="mt-8 flex justify-center gap-4">
                        <Link
                            href="/"
                            className="rounded bg-slate-700 px-6 py-2 text-white hover:bg-slate-800"
                        >
                            Continue Shopping
                        </Link>

                        <Link
                            href="/orders"
                            className="rounded border px-6 py-2 text-slate-700 hover:bg-slate-50"
                        >
                            View Orders
                        </Link>
                    </div>
                </div>
            </div>
        </FrontendLayout>
    );
}
