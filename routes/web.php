<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Frontend\CartController;
use App\Http\Controllers\Frontend\PageController;

Route::get('/', [PageController::class, 'home'])->name('home');
Route::get('products/{product}', [PageController::class, 'productShow'])->name('products.show');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::middleware(['auth'])->group(function () {
        Route::post('carts/{product}', [CartController::class, 'add'])->name('carts.add');
    });

    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::prefix('admin')->name('admin.')->group(function () {
        Route::resource('products', ProductController::class);
    });
});

require __DIR__ . '/settings.php';
