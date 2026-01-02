<?php

namespace App\Http\Controllers\Frontend;

use App\Models\Cart;
use App\Models\Product;
use App\Models\CartItem;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    public function index()
    {
        $cart = Cart::with('items.product')
            ->where('user_id', Auth::id())
            ->first();

        return inertia('cart', [
            'cart' => $cart,
        ]);
    }

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

    public function update(Request $request, CartItem $item)
    {
        $request->validate([
            'quantity' => 'required|integer|min:1',
        ]);

        if ($request->quantity > $item->product->stock_quantity) {

            return back()->with('error', 'Stock limit exceeded.');
        }

        $item->update(['quantity' => $request->quantity]);

        return back()->with('success', 'Item quantity updated.');
    }

    public function destroy(CartItem $item)
    {
        $item->delete();
        return back()->with('success', 'Item deleted.');
    }
}
