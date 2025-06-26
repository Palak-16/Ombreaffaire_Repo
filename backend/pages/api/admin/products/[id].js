import supabase from "../../../../lib/supabaseClient";
import cors, { runMiddleware } from "../../../../lib/cors";

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  const { id } = req.query;

  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    return res.status(200).end();
  }

  try {
    if (req.method === "GET") {
      // ✅ Fetch product + related data
      const { data: product, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;

      // Fetch related data
      const [{ data: sizes }, { data: colors }, { data: colorImages }, { data: variants }] =
        await Promise.all([
          supabase.from("product_sizes").select("size").eq("product_id", id),
          supabase.from("product_colors").select("color_id").eq("product_id", id),
          supabase.from("product_color_images").select("*").eq("product_id", id),
          supabase.from("product_size_colors").select("*").eq("product_id", id),
        ]);

      return res.status(200).json({
        ...product,
        sizes: sizes?.map((s) => s.size) || [],
        colors: colors?.map((c) => c.color_id) || [],
        product_color_images: Object.fromEntries(
          colorImages.map((img) => [img.color_id, { urls: img.image_urls, mainIndex: img.main_index }])
        ),
        variants: Object.fromEntries(
          variants.map((v) => [
            `${v.size}_${v.color_id}`,
            { sku: v.sku, inventory: v.inventory },
          ])
        ),
      });
    }

    if (req.method === "PUT") {
      const {
        name,
        sku,
        description,
        category,
        brand,
        material,
        weight,
        price,
        compare_price,
        cost,
        inventory,
        track_inventory,
        published,
        is_featured,
        best_seller,
        new_arrival,
        sizes,
        colors,
        // images,
        mainImageIndex,
        sizeChart,
        product_color_images,
        variants,
      } = req.body;

      const updates = {
        name,
        sku,
        description,
        category,
        brand,
        material,
        weight,
        price,
        compare_price,
        cost,
        inventory,
        track_inventory,
        published,
        new_arrival,
        is_featured,
        best_seller,
        // images,
        mainImageIndex,
      };

      const { error: updateError } = await supabase
        .from("products")
        .update(updates)
        .eq("id", id);

      if (updateError) throw updateError;

      // ✅ Delete old child data
      await Promise.all([
        supabase.from("product_sizes").delete().eq("product_id", id),
        supabase.from("product_colors").delete().eq("product_id", id),
        supabase.from("product_size_colors").delete().eq("product_id", id),
        supabase.from("product_color_images").delete().eq("product_id", id),
      ]);

      // ✅ Insert new child data
      if (sizes?.length > 0) {
        await supabase.from("product_sizes").insert(
          sizes.map((s) => ({ product_id: id, size: s }))
        );
      }

      if (colors?.length > 0) {
        await supabase.from("product_colors").insert(
          colors.map((color_id) => ({ product_id: id, color_id }))
        );
      }

      if (variants?.length > 0) {
        await supabase.from("product_size_colors").insert(
          variants.map((v) => ({
            product_id: id,
            size: v.size,
            color_id: v.color,
            sku: v.sku,
            inventory: v.inventory,
          }))
        );
      }

      if (product_color_images?.length > 0) {
        await supabase.from("product_color_images").insert(
          product_color_images.map((item) => ({
            product_id: id,
            color_id: item.color_id,
            image_urls: item.image_urls,
            main_index: item.main_index,
          }))
        );
      }

      return res.status(200).json({ message: "Product updated successfully" });
    }

    if (req.method === "DELETE") {
      await Promise.all([
        supabase.from("product_colors").delete().eq("product_id", id),
        supabase.from("product_sizes").delete().eq("product_id", id),
        supabase.from("product_size_colors").delete().eq("product_id", id),
        supabase.from("product_color_images").delete().eq("product_id", id),
      ]);

      const { error } = await supabase.from("products").delete().eq("id", id);
      if (error) throw error;

      return res.status(200).json({ message: "Product deleted" });
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
}
