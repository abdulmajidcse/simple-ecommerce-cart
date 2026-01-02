<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('orders/index', [
            'title' => 'My Orders',
            'orders' => Order::where('user_id', $request->user()->id)
                ->latest()
                ->paginate(10),
        ]);
    }

    public function show(Order $order)
    {
        abort_if($order->user_id !== Auth::id(), 403);

        return Inertia::render('orders/show', [
            'order' => $order->load('items.product'),
        ]);
    }
}
