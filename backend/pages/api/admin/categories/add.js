import formidable from "formidable";
import fs from "fs";
import supabase from "../../../../lib/supabaseClient";
import { v4 as uuidv4 } from "uuid";
import cors, { runMiddleware } from "../../../../lib/cors";

// Disable Next.js body parsing
export const config = {
  api: {
    bodyParser: false,
  },
};

// Slugify helper
const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const form = formidable({ multiples: false });

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: "Form parse error" });

    const name = Array.isArray(fields.name) ? fields.name[0] : fields.name;
    const slug = slugify(name);

    const imageFile = Array.isArray(files.image) ? files.image[0] : files.image;

    if (!name || !imageFile || !imageFile.filepath) {
      return res
        .status(400)
        .json({ error: "Missing category name or image file" });
    }

    const fileBuffer = fs.readFileSync(imageFile.filepath);
    const fileExt = imageFile.originalFilename?.split(".").pop();
    const fileName = `${uuidv4()}.${fileExt}`;

    const { data, error } = await supabase.storage
      .from("product-images")
      .upload(`categories/${fileName}`, fileBuffer, {
        contentType: imageFile.mimetype,
      });

    if (error) return res.status(500).json({ error: error.message });

    const publicUrl = supabase.storage
      .from("product-images")
      .getPublicUrl(`categories/${fileName}`).data.publicUrl;

    // 🔐 Check for duplicates
    const { data: existing, error: checkError } = await supabase
      .from("categories")
      .select("id")
      .or(`name.eq.${name},slug.eq.${slug}`);

    if (existing?.length > 0) {
      return res
        .status(409)
        .json({ error: "Category with same name or slug already exists" });
    }

    const { data: inserted, error: insertError } = await supabase
      .from("categories")
      .insert([{ name, image_url: publicUrl, slug }]);

    if (insertError) {
      return res.status(500).json({ error: insertError.message });
    }

    return res.status(200).json({ category: inserted });
  });
}
