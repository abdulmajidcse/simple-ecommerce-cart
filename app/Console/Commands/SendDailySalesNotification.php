<?php

namespace App\Console\Commands;

use App\Models\Order;
use App\Models\User;
use App\Notifications\DailySalesReport;
use Illuminate\Console\Command;

class SendDailySalesNotification extends Command
{
    protected $signature = 'notify:daily-sales';
    protected $description = 'Send daily sales report to admin';

    public function handle()
    {
        $orders = Order::with(['items.product', 'user'])
            ->whereDate('created_at', today())
            ->get()
            ->toArray();

        $admin = User::where('is_admin', true)->first();

        if ($admin) {
            $admin->notify(new DailySalesReport($orders));
        }

        $this->info('Daily sales report sent!');
    }
}
