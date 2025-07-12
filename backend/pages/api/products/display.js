import supabase from "../../../lib/supabaseClient";
import cors, { runMiddleware } from "../../../lib/cors";

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  const {
    page = 1,
    limit = 12,
    category,
    search,
    price,
    color,
    size,
  } = req.query;

  const from = (page - 1) * limit;
  const to = from + parseInt(limit) - 1;

  const colorArray = typeof color === "string" ? color.split(",").filter(Boolean) : [];
  const sizeArray = typeof size === "string" ? size.split(",").filter(Boolean) : [];

  // ✅ Convert slug to category name
  let categoryName = null;
  if (category && category !== "all" && category !== "All") {
    const { data: catMatch, error: catError } = await supabase
      .from("categories")
      .select("name")
      .eq("slug", category)
      .single();

    if (catMatch) categoryName = catMatch.name;
  }

  // 🎯 Color filter
  let colorFilteredIds = null;
  if (colorArray.length > 0) {
    const { data: colorRows } = await supabase
      .from("colors")
      .select("id")
      .in("label", colorArray);

    const colorIds = colorRows.map((c) => c.id);
    const { data: links } = await supabase
      .from("product_colors")
      .select("product_id")
      .in("color_id", colorIds);

    colorFilteredIds = links.map((i) => i.product_id);
  }

  // 🎯 Size filter
  let sizeFilteredIds = null;
  if (sizeArray.length > 0) {
    const { data: links } = await supabase
      .from("product_sizes")
      .select("product_id")
      .in("size", sizeArray);

    sizeFilteredIds = links.map((i) => i.product_id);
  }

  // ✅ Combine filters
  let finalFilteredIds = null;
  if (colorFilteredIds && sizeFilteredIds) {
    finalFilteredIds = colorFilteredIds.filter((id) =>
      sizeFilteredIds.includes(id)
    );
  } else {
    finalFilteredIds = colorFilteredIds || sizeFilteredIds;
  }

  // 🔍 Main product query
  let query = supabase.from("products").select("*", { count: "exact" });

  if (finalFilteredIds) {
    query = query.in("id", finalFilteredIds);
  }

  if (categoryName) {
    query = query.eq("category", categoryName);
  }

  if (search) {
    query = query.ilike("name", `%${search}%`);
  }
  // ✅ Apply homepage filters
if (req.query.filter === "new") {
  query = query.eq('new_arrival', true)
} else if (req.query.filter === "best") {
  query = query.eq("best_seller", true);
} else if (req.query.filter === "featured") {
  query = query.eq("is_featured", true);
}else if (req.query.filter === "sale") {
  // only products where compare_price IS NOT NULL
  query = query.not("compare_price", "is", null)
}
 


  if (price) {
    if (price === "Under ₹1000") query = query.lt("price", 1000);
    else if (price === "₹1000 - ₹3000") query = query.gte("price", 1000).lte("price", 3000);
    else if (price === "₹3000 - ₹5000") query = query.gte("price", 3000).lte("price", 5000);
    else if (price === "Over ₹5000") query = query.gt("price", 5000);
  }

  // query = query.range(from, to).order("created_at", { ascending: false });
  // apply sort
  const { sort } = req.query
  if (sort === "price_asc") {
    query = query.order("price",  { ascending: true  })
  } else if (sort === "price_desc") {
    query = query.order("price",  { ascending: false })
  } else {
    // newest first
    query = query.order("created_at", { ascending: false })
  }
  // then apply pagination
  query = query.range(from, to)
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
          compare_price: product.compare_price,
          image,
        };
      })
    );

    return res.status(200).json({ products: enriched, totalPages });
  } catch (e) {
    console.error("Display API error:", e);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
