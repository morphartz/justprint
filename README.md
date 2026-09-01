# JUST PRINT.

Premium personalized T-shirt storefront for Algeria, rebuilt from the supplied ZERØ ecommerce specification and adapted to the JUST PRINT brand.

## Included
- Responsive storefront and product catalog
- Product detail pages with size/color selection
- Working browser cart with quantity controls and persistence
- Custom T-shirt studio with live text preview, font, placement, color and size controls
- Cash-on-delivery checkout with Algerian delivery fields
- Browser-persisted order confirmation
- Lightweight admin screen for local order review
- Supabase-ready database schema for persistent products, variants, inventory, carts, orders and personalizations

## Run
```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Supabase
The storefront works in demo/local mode without credentials. For production persistence, create a Supabase project and run `supabase/schema.sql`, then wire the server/client helpers and authenticated admin policies to your project. Never commit service-role keys or `.env` files.

## Production notes
Image URLs in the starter catalog are remote Unsplash assets and can be replaced from the admin/catalog layer when persistent storage is connected. The checkout currently records orders locally and is intentionally ready for a Supabase-backed order API rather than pretending a browser localStorage order is a payment processor. Humanity has suffered enough fake checkout buttons.
