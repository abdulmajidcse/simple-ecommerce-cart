<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Frontend\CartController;
use App\Http\Controllers\Frontend\CheckoutController;
use App\Http\Controllers\Frontend\PageController;

Route::get('/', [PageController::class, 'home'])->name('home');
Route::get('products/{product}', [PageController::class, 'productShow'])->name('products.show');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::middleware(['auth'])->group(function () {
        Route::prefix('cart')->name('cart.')->controller(CartController::class)->group(function () {
            Route::get('/', 'index')->name('index');
            Route::post('{product}', 'add')->name('add');
            Route::patch('{item}', 'update')->name('update');
            Route::delete('{item}', 'destroy')->name('destroy');
        });
        Route::post('checkout', CheckoutController::class)->name('checkout');
        Route::get('thank-you', function () {
            return Inertia::render('thank-you');
        })->name('thank-you');
    });

    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::prefix('admin')->name('admin.')->group(function () {
        Route::resource('products', ProductController::class);
    });
});

require __DIR__ . '/settings.php';
