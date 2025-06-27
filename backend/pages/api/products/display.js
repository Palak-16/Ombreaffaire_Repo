import supabase from "../../../lib/supabaseClient";
import cors, { runMiddleware } from "../../../lib/cors";

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  const { page = 1, limit = 12 } = req.query;
  const from = (page - 1) * limit;
  const to = from + parseInt(limit) - 1;

  try {
    const { data, error, count } = await supabase
      .from("products")
      .select("*", { count: "exact" })
      .range(from, to)
      .order("created_at", { ascending: false });

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    const totalPages = Math.ceil(count / limit); // ✅ fixed

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

    console.log("count:", count);
    console.log("totalPages:", totalPages);

    return res.status(200).json({
      products: enriched,
      totalPages, // ✅ pass it back to frontend
    });
  } catch (e) {
    console.error("Display API error:", e);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
