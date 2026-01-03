# Laravel + Inertia (React.js) E-Commerce Application

A simple e-commerce application built with **Laravel**, **Inertia.js**, and **React (TypeScript)**.  
The project demonstrates product listing, cart management, checkout, order processing, stock handling, and notifications using Laravel best practices.

---

## Features

### Frontend (Customer)
- Homepage with product listing
- Infinite scroll using
- Product details page
- Add to cart (authenticated users only)
- Cart management
  - Increment / decrement quantity
  - Remove item
- Checkout process
- Order creation
- Order success (thank you) page
- View own orders and order details

### Admin
- Product management
- View all orders
- Low stock notification
- Daily sales report via email

---

## Key Business Rules

- Users must be logged in to add products to cart
- Cart quantity cannot exceed product stock
- Checkout fails if stock is insufficient
- Product stock is locked and decremented at database level
- Cart is cleared after successful checkout

---

## Tech Stack

- Laravel
- Inertia.js
- React + TypeScript
- Tailwind CSS
- MySQL
- Laravel Notifications
- Laravel Scheduler & Queues

---

## Checkout Flow

1. Validate cart exists and is not empty
2. Lock product rows using database transaction
3. Validate stock availability
4. Create order
5. Create order items
6. Decrement product stock
7. Clear cart
8. Redirect to `Thank you` page

---

## Notifications

### Low Stock Notification
- Triggered when product stock reaches a defined threshold
- Sends email notification to dummy admin user
- Implemented using Laravel Notifications

### Daily Sales Report
- Scheduled notification
- Runs via Laravel Scheduler
- Sends daily sold product summary to admin email

---
