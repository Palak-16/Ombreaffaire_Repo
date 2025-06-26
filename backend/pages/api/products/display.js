import supabase from "../../../lib/supabaseClient";
import cors, { runMiddleware } from "../../../lib/cors";

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  try {
    const { data: products, error } = await supabase
      .from("products")
      .select("*")
      .eq("published", true) // or any other logic (e.g. limit, sort)
      .limit(8);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    const enriched = await Promise.all(
      products.map(async (product) => {
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

    return res.status(200).json({ products: enriched });
  } catch (e) {
    console.error("Display API error:", e);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
