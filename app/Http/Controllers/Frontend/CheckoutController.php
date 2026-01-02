<?php

namespace App\Http\Controllers\Frontend;

use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class CheckoutController extends Controller
{
    public function __invoke(Request $request)
    {
        $user = $request->user();

        $cart = $user->cart()->with('items')->first();
        abort_if(! $cart, 400, 'Cart not found');
        abort_if($cart->items->isEmpty(), 400, 'Cart is empty');

        DB::transaction(function () use ($cart, $user) {
            $total = 0;

            $products = Product::whereIn(
                'id',
                $cart->items->pluck('product_id')
            )->lockForUpdate()->get()->keyBy('id');

            foreach ($cart->items as $item) {
                $product = $products[$item->product_id];

                abort_if(
                    $item->quantity > $product->stock_quantity,
                    400,
                    "{$product->name} stock not available"
                );

                $total += $item->quantity * $product->price;
            }

            $order = Order::create([
                'user_id' => $user->id,
                'total_amount' => $total,
            ]);

            foreach ($cart->items as $item) {
                $product = $products[$item->product_id];

                $order->items()->create([
                    'product_id' => $product->id,
                    'quantity' => $item->quantity,
                    'price' => $product->price,
                ]);

                $product->decrement('stock_quantity', $item->quantity);
            }

            $cart->items()->delete();
        });

        return redirect()->route('thank-you');
    }
}
