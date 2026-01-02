<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Order;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AdminOrderController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('orders/index', [
            'title' => 'All Orders',
            'orders' => Order::with('user')->latest()->paginate(10),
        ]);
    }

    public function show(Order $order)
    {
        return Inertia::render('orders/show', [
            'order' => $order->load('items.product', 'user'),
        ]);
    }
}
