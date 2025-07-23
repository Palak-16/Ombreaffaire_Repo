// display.js
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
    filter,
    sort,
  } = req.query;

  const from = (page - 1) * limit;
  const to = from + parseInt(limit) - 1;

  // parse multi-select filters
  const colorArray = typeof color === "string"
    ? color.split(",").filter(Boolean)
    : [];
  const sizeArray = typeof size === "string"
    ? size.split(",").filter(Boolean)
    : [];

  // 1. Category lookup
  let categoryName = null;
  if (category && category !== "all") {
    const { data: catMatch } = await supabase
      .from("categories")
      .select("name")
      .eq("slug", category)
      .single();
    if (catMatch) categoryName = catMatch.name;
  }

  // 2. Build sub-filters on product_id from size/color joins (unchanged)
  let colorFilteredIds = null;

 let colorIds = null;
 if (colorArray.length) {
   // look up the actual color IDs
   const { data: cols } = await supabase
     .from("colors")
     .select("id")
     .in("label", colorArray);
   colorIds = cols.map((c) => c.id);
 }

  let sizeFilteredIds = null;
  if (sizeArray.length) {
    const { data: links } = await supabase
      .from("product_sizes")
      .select("product_id")
      .in("size", sizeArray);
    sizeFilteredIds = links.map((l) => l.product_id);
  }

  let finalFilteredIds = null;
  if (colorFilteredIds && sizeFilteredIds) {
    finalFilteredIds = colorFilteredIds.filter((id) =>
      sizeFilteredIds.includes(id)
    );
  } else {
    finalFilteredIds = colorFilteredIds || sizeFilteredIds;
  }

  // 3. Build our main variant query
  //    We select *, plus embed the product via a foreign join
  let query = supabase
    .from("product_color_images")
    .select(
      `product_id,
       color_id,
       image_urls,
       main_index,
       product:products!inner (
         id,
         name,
         price,
         category,
         compare_price,
         brand,
         created_at
       )`,
      { count: "exact" }
    );

  // 4. Apply product-level filters on the joined product
  if (finalFilteredIds) {
    query = query.in("product_id", finalFilteredIds);
  }
  if (categoryName) {
    query = query.eq("product.category", categoryName);
  }
  if (search) {
    query = query.ilike("product.name", `%${search}%`);
  }
   if (colorIds && colorIds.length) {
   query = query.in("color_id", colorIds);
 }
  // homepage filters
  if (filter === "new") query = query.eq("product.new_arrival", true);
  else if (filter === "best") query = query.eq("product.best_seller", true);
  else if (filter === "featured")
    query = query.eq("product.is_featured", true);
  else if (filter === "sale") query = query.not("product.compare_price", "is", null);

  // price ranges
  if (price) {
    if (price === "Under ₹1000") query = query.lt("product.price", 1000);
    else if (price === "₹1000 - ₹3000")
      query = query.gte("product.price", 1000).lte("product.price", 3000);
    else if (price === "₹3000 - ₹5000")
      query = query.gte("product.price", 3000).lte("product.price", 5000);
    else if (price === "Over ₹5000") query = query.gt("product.price", 5000);
  }

  // 5. Sorting at the variant level (using the embedded product)
  if (sort === "price_asc") {
    query = query.order("price", {
      foreignTable: "product",
      ascending: true,
    });
  } else if (sort === "price_desc") {
    query = query.order("price", {
      foreignTable: "product",
      ascending: false,
    });
  } else {
    // newest first
    query = query.order("created_at", {
      foreignTable: "product",
      ascending: false,
    });
  }

  // 6. Paginate
  query = query.range(from, to);

  try {
    const { data, error, count } = await query;
    if (error) throw error;

    // 7. Map each variant into your front-end shape
    const enriched = data.map((row) => {
      const prod = row.product || {};
      const idx = row.main_index != null ? row.main_index : 0;
      const image =
        (row.image_urls && row.image_urls[idx]) || "/placeholder.svg";
      return {
        // unique id per product–color
        id: `${row.product_id}-${row.color_id}`,
        name: prod.name,
        price: prod.price,
        compare_price: prod.compare_price,
        category: prod.category,
        brand: prod.brand,
        image,
        // you can pass these along if your card needs them:
        product_id: row.product_id,
        color_id: row.color_id,
      };
    });

    const totalPages = Math.ceil(count / limit);
    // console.log({ raw: data, enriched });

    return res.status(200).json({ products: enriched, totalPages });
  } catch (error) {
    console.error("Display API error:", error);
    return res.status(500).json({ error: error.message });
  }
}
