# LuxeCommerce

A production-ready React e-commerce starter with a premium multi-template storefront for Fashion, Furniture, Beauty, and Gadgets, plus a full Shopify-style admin dashboard.

## Stack

- React + Vite
- Tailwind CSS
- React Router
- Supabase integration hooks and auth scaffolding
- Reusable components and scalable folder structure

## Features

### Storefront
- Homepage with category merchandising
- Category pages for 4 vertical templates
- Product details with reviews and feature blocks
- Cart, wishlist, and checkout
- FAQ and newsletter sections
- Realistic sample content

### Admin Dashboard
- Analytics overview
- Product management
- Categories
- Orders
- Customers
- Reviews
- Inventory
- Content management
- Settings
- Protected routes

## Getting started

```bash
npm install
npm run dev
```

## Demo admin login

If Supabase is not configured, the app falls back to a local demo login.

- Email: `admin@luxecommerce.com`
- Password: `password123`

## Supabase setup

1. Create a Supabase project.
2. Copy `.env.example` to `.env`.
3. Add your project URL and anon key.
4. Run the SQL in `supabase/schema.sql`.
5. Create an admin user in Supabase Auth.

## Suggested production extensions

- Replace demo checkout with Stripe or Razorpay.
- Add image upload and storage buckets.
- Add server-side order creation and webhook handling.
- Add role-based policies for admin/editor/support.
- Add product filters, search indexing, and pagination.
- Move cart/wishlist sync to authenticated profiles.

## Folder structure

```text
src/
  components/
    common/
    layout/
    store/
  context/
  data/
  hooks/
  lib/
  pages/
    admin/
    auth/
    store/
  services/
  styles/
```
