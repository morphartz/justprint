# JUST PRINT

Premium monochrome personalized T-shirt commerce platform for Algeria.

## Stack
Next.js 15 · React 19 · TypeScript · Tailwind CSS · Supabase Auth/PostgreSQL/Storage.

## Customer flow
Browse → choose variant → personalize → upload artwork → cart → server-validated checkout → order number → live status timeline.

## Admin
Protected `/admin` area with product CRUD, orders/status updates, inventory, customers, personalization queue, analytics and shipping settings. Admin authorization is enforced by Supabase `user_profiles.is_admin` plus RLS.

## Setup
1. Copy `.env.example` to `.env.local`.
2. Add your Supabase project URL, anon key and server-only service-role key.
3. Run `supabase/schema.sql` in the Supabase SQL editor.
4. Create an Auth user, then set that user's `user_profiles.is_admin=true` using a secure server/admin workflow.
5. Create/confirm the private `artwork` Storage bucket. The SQL migration creates it when permitted.
6. `npm install && npm run dev`.

Never expose or commit `SUPABASE_SERVICE_ROLE_KEY`. The browser only receives the public anon key.

## Production notes
Checkout calls a Postgres `place_order` transaction. Product prices and inventory are re-read server-side, stock is locked and decremented atomically, order items are persisted, and status history begins at `new`. Artwork uploads are restricted to PNG/JPEG/WEBP/SVG and 8MB through the server endpoint.
