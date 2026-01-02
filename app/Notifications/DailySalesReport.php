<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class DailySalesReport extends Notification implements ShouldQueue
{
    use Queueable;

    protected array $orders;

    public function __construct(array $orders)
    {
        $this->orders = $orders;
    }

    public function via($notifiable)
    {
        return ['mail'];
    }

    public function toMail($notifiable)
    {
        $mail = (new MailMessage)
            ->subject('Daily Sales Report');

        if (count($this->orders) === 0) {
            $mail->line('No orders today.');
        } else {
            $mail->line('Today\'s Orders:');
            foreach ($this->orders as $order) {
                $items = collect($order['items'])->map(fn($i) => "{$i['product']['name']} x {$i['quantity']}")->implode(', ');
                $mail->line("Order #{$order['id']} by {$order['user']['name']} - Total: {$order['total_amount']} - Items: {$items}");
            }
        }

        return $mail;
    }
}
