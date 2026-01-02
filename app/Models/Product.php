<?php

namespace App\Models;

use App\Notifications\LowStockAlert;
use App\Observers\ProductObserver;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Model;

#[ObservedBy(ProductObserver::class)]
class Product extends Model
{
    protected $fillable = ['name', 'price', 'stock_quantity'];

    public function lowStockAlert()
    {
        if ($this->stock_quantity <= 5) {
            $admin = User::where('is_admin', true)->first();
            $admin?->notify(new LowStockAlert($this));
        }
    }
}
