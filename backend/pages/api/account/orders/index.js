// pages/api/account/orders/index.js
import supabase from "../../../../lib/supabaseClient";
import cors, { runMiddleware } from "../../../../lib/cors";
import { getUserFromToken } from "../../../../lib/auth/getUserFromToken";

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  // auth
  const user = await getUserFromToken(req);
  if (!user) return res.status(401).json({ error: "Not authenticated" });

  // ── GET (list or single) ───────────────────────────────────
  if (req.method === "GET") {
    const { orderId } = req.query;

    // build your base query: fetch orders *and* their items + nested product info
    let query = supabase
      .from("orders")
      .select(
        `
        id,
        total_amount,
        status,
        created_at,
        order_items:order_items (
          id,
          quantity,
          unit_price,
          product_size_colors (
            size,
            color : colors ( label ),
            product : products ( name, main_image_url )
          )
        )
      `
      )
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    // if orderId was passed, filter to that one
    if (orderId) {
      query = query.eq("id", orderId).single();
    }

    const { data, error } = await query;
    if (error) {
      console.error("Supabase GET /orders error:", error);
      return res.status(500).json({ error: error.message });
    }
    return res.status(200).json(data);
  }

  if (req.method === "POST") {
    const { addressId, shippingMethod, items, total } = req.body;

    // basic validation
    if (!addressId)
      return res.status(400).json({ error: "addressId is required" });

    // 1️⃣ create the order
    const { data: order, error: orderErr } = await supabase
      .from("orders")
      .insert({
        user_id: user.id,
        address_id: addressId,
        shipping_method: shippingMethod,
        total_amount: total,
      })
      .select("id")
      .single();

    if (orderErr) {
      console.error("Failed to insert order:", orderErr);
      return res.status(500).json({ error: orderErr.message });
    }

    // 2️⃣ insert each order_item
    //    assume your items look like { pscId, quantity, price }
    const orderItemsPayload = items.map((i) => ({
      order_id: order.id,
      product_size_color_id: i.product_size_color_id, // use the correct field name
      quantity: i.quantity,
      unit_price: i.price,
    }));

    const { error: itemsErr } = await supabase
      .from("order_items")
      .insert(orderItemsPayload);

    if (itemsErr) {
      console.error("Failed to insert order items:", itemsErr);
      return res.status(500).json({ error: itemsErr.message });
    }

    // 3️⃣ return the new orderId
    return res.status(201).json({ orderId: order.id });
  }

  // disallow anything else
  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
