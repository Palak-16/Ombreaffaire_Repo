import supabase from "../../lib/supabaseClient";
import cors, { runMiddleware } from "../../lib/cors";

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  const { product, color, size } = req.query;

  // console.log("Full query object:", req.query);


  // console.log("Incoming color:", color);
  // console.log("Incoming size:", size);
  // console.log("Incoming product:", product);

  
  // Step 1: Resolve color_id from hex code
  const { data: colorData, error: colorError } = await supabase
    .from("colors")
    .select("id")
    .eq("hex", color)
    .single();

  if (colorError || !colorData) {
    console.error("Color not found", colorError);
    return res.status(400).json({ error: "Color not found" });
  }

  // Step 2: Validate this color belongs to the product (from product_colors)
  const { data: validProductColor, error: pcError } = await supabase
    .from("product_colors")
    .select("id")
    .eq("product_id", product)
    .eq("color_id", colorData.id)
    .maybeSingle();

  if (pcError || !validProductColor) {
    console.error("Color not linked to product", pcError);
    return res.status(400).json({ error: "Color not linked to product" });
  }

  // Step 3: Now get product_size_colors.id using resolved color_id and size
  const { data, error } = await supabase
    .from("product_size_colors")
    .select("id")
    .eq("product_id", product)
    .eq("color_id", colorData.id)
    .eq("size", size)
    .single();

  if (error || !data) {
    console.error("PSC not found", error);
    return res.status(404).json({ error: "Product Size Color not found" });
  }

  return res.status(200).json({ id: data.id });
}
