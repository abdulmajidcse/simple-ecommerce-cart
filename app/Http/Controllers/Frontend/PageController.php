<?php

namespace App\Http\Controllers\Frontend;

use Inertia\Inertia;
use App\Models\Product;
use Laravel\Fortify\Features;
use App\Http\Controllers\Controller;

class PageController extends Controller
{
    public function home()
    {
        return Inertia::render('home', [
            'canRegister' => Features::enabled(Features::registration()),
            'products' => Product::latest()->take(8)->get(),
        ]);
    }

    public function productShow(Product $product)
    {
        return Inertia::render('product-show', [
            'product' => $product,
        ]);
    }
}
