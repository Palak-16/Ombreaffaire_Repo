require("dotenv").config({ path: "./.env" }); // ✅ path from try.js to .env
const { createClient } = require("@supabase/supabase-js");


const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY
);

async function getBucketSize(bucket) {
  const { data, error } = await supabase
  .storage
  .from(bucket)
  .list("categories", {
    limit: 1000,
    offset: 0
  });


  if (error) {
    console.error("Error listing files:", error.message);
    return;
  }

  let totalBytes = 0;
  for (const file of data) {
    totalBytes += file.metadata?.size || 0; // size comes under metadata
  }

  console.log(`✅ Total used in '${bucket}': ${(totalBytes / 1024 / 1024).toFixed(2)} MB`);
}



getBucketSize("product-images");
