import supabase from "../../../lib/supabaseClient";
import cors, { runMiddleware } from "../../../lib/cors";

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  const { page = 1, limit = 12, category, search, price } = req.query;
  const from = (page - 1) * limit;
  const to = from + parseInt(limit) - 1;

  let query = supabase
    .from("products")
    .select("*", { count: "exact" });

  // 🔹 Filter by category
  if (category && category !== "All" && category !== "all") {
    query = query.eq("category", category);
  }

  // 🔹 Filter by search
  if (search) {
    query = query.ilike("name", `%${search}%`);
  }

  // 🔹 Filter by price range
  if (price) {
    if (price === "Under ₹1000") {
      query = query.lt("price", 1000);
    } else if (price === "₹1000 - ₹3000") {
      query = query.gte("price", 1000).lte("price", 3000);
    } else if (price === "₹3000 - ₹5000") {
      query = query.gte("price", 3000).lte("price", 5000);
    } else if (price === "Over ₹5000") {
      query = query.gt("price", 5000);
    }
  }

  // 🔹 Apply pagination + ordering
  query = query.range(from, to).order("created_at", { ascending: false });

  try {
    const { data, error, count } = await query;

    if (error) {
      console.error("DB error:", error);
      return res.status(500).json({ error: error.message });
    }

    const totalPages = Math.ceil(count / limit);

    const enriched = await Promise.all(
      data.map(async (product) => {
        const { data: imageRow } = await supabase
          .from("product_color_images")
          .select("image_urls, main_index")
          .eq("product_id", product.id)
          .order("main_index", { ascending: true })
          .limit(1)
          .single();

        const image =
          imageRow?.image_urls?.[imageRow.main_index] ||
          imageRow?.image_urls?.[0] ||
          "/placeholder.svg";

        return {
          id: product.id,
          name: product.name,
          price: product.price,
          category: product.category,
          image,
        };
      })
    );

    return res.status(200).json({
      products: enriched,
      totalPages,
    });
  } catch (e) {
    console.error("Display API error:", e);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
