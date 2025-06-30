import { IncomingForm } from "formidable";
import fs from "fs"; // This gives you access to existsSync and mkdirSync
import fsPromises from "fs/promises"; // Still needed for readFile
import { v4 as uuidv4 } from "uuid";
import { createClient } from "@supabase/supabase-js";
import cors, { runMiddleware } from "../../../../lib/cors";
import os from "os";
import path from "path";

// Disable default body parser to allow formidable to handle multipart
export const config = {
  api: {
    bodyParser: false,
  },
};

// Initialize Supabase with SERVICE ROLE KEY
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY // Use env var only on server
);

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  // Get OS-specific temp directory (cross-platform safe)
  const tempDir = path.join(os.tmpdir());

  // Ensure temp directory exists
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
  }

  const form = new IncomingForm({
    uploadDir: tempDir,
    keepExtensions: true,

    maxFileSize: 50 * 1024 * 1024, // 50 MB in bytes ✅
  });
  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Form parse error:", err);
      return res.status(500).json({ error: "Failed to parse form data" });
    }

    const file = Array.isArray(files.file) ? files.file[0] : files.file;
    if (!file || !file.filepath) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    try {
      const fileData = await fsPromises.readFile(file.filepath);

      const fileName = `products/${uuidv4()}_${file.originalFilename}`;

      const { error: uploadError } = await supabase.storage
        .from("product-images")
        .upload(fileName, fileData, {
          contentType: file.mimetype,
          upsert: true,
        });

      if (uploadError) {
        console.error("Upload failed:", uploadError);
        return res.status(500).json({ error: "Failed to upload image" });
      }

      const {
        data: { publicUrl },
      } = supabase.storage.from("product-images").getPublicUrl(fileName);

      return res.status(200).json({ imageUrl: publicUrl });
    } catch (e) {
      console.error("Upload error:", e);
      return res.status(500).json({ error: "Image upload failed" });
    }
  });
}
