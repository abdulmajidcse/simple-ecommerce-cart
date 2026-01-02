<?php

namespace App\Http\Controllers\Frontend;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CartController extends Controller
{
    public function add(Request $request, Product $product)
    {
        $request->validate([
            'quantity' => ['required', 'integer', 'min:1'],
        ]);

        // Check stock availability
        if ($product->stock_quantity < 1) {
            return back()->withErrors([
                'stock' => 'This product is out of stock.',
            ]);
        }

        $cart = $request->user()->cart()->firstOrCreate([]);

        $item = $cart->items()->where('product_id', $product->id)->first();

        $currentQty = $item?->quantity ?? 0;
        $requestedQty = $request->quantity;

        if ($currentQty + $requestedQty > $product->stock_quantity) {
            return back()->with('error', "Only {$product->stock_quantity} items available.");
        }

        if ($item) {
            $item->update([
                'quantity' => $currentQty + $requestedQty,
            ]);
        } else {
            $cart->items()->create([
                'product_id' => $product->id,
                'quantity' => $requestedQty,
            ]);
        }

        return back()->with('success', 'Product added to cart.');
    }
}
