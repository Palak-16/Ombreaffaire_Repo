import formidable from 'formidable'
import fs from 'fs'
import { v4 as uuidv4 } from 'uuid'
import supabase from '../../../../lib/supabaseClient'
import cors, { runMiddleware } from '../../../../lib/cors'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req, res) {
  await runMiddleware(req, res, cors)
  const { id } = req.query

   // Handle CORS preflight
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    const { data, error } = await supabase.from('categories').select('*').eq('id', id).single()
    if (error) return res.status(500).json({ error: error.message })
    return res.status(200).json({ category: data })
  }

  if (req.method === "PUT") {
  const form = formidable({ multiples: false });

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: "Form parse error" });

    const name = Array.isArray(fields.name) ? fields.name[0] : fields.name;
    const slug = name.toLowerCase().trim().replace(/\s+/g, "-");

    // Check for duplicates
    const { data: exists, error: existsErr } = await supabase
      .from("categories")
      .select("id")
      .or(`name.eq.${name},slug.eq.${slug}`)
      .neq("id", req.query.id);

    if (existsErr) return res.status(500).json({ error: existsErr.message });
    if (exists.length > 0) return res.status(409).json({ error: "Duplicate category" });

    let image_url = null;
    const imageFile = Array.isArray(files.image) ? files.image[0] : files.image;
    if (imageFile?.filepath) {
      const buffer = fs.readFileSync(imageFile.filepath);
      const ext = imageFile.originalFilename?.split(".").pop();
      const fileName = `${uuidv4()}.${ext}`;

      const { error: uploadErr } = await supabase.storage
        .from("product-images")
        .upload(`categories/${fileName}`, buffer, {
          contentType: imageFile.mimetype,
        });

      if (uploadErr) return res.status(500).json({ error: uploadErr.message });

      const { data: publicData } = supabase.storage
        .from("product-images")
        .getPublicUrl(`categories/${fileName}`);
      image_url = publicData.publicUrl;
    }

    const updates = { name, slug };
    if (image_url) updates.image_url = image_url;

    const { error: updateErr } = await supabase
      .from("categories")
      .update(updates)
      .eq("id", req.query.id);

    if (updateErr) return res.status(500).json({ error: updateErr.message });

    return res.status(200).json({ success: true });
  });

  return; // Important to avoid hitting next line
}


  if (req.method === 'DELETE') {
    const { error } = await supabase.from('categories').delete().eq('id', id)
    if (error) return res.status(500).json({ error: error.message })
    return res.status(200).json({ message: 'Deleted' })
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
