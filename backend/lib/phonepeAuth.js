// lib/phonepeAuth.js
export async function getAccessToken() {
  const response = await fetch("https://api-preprod.phonepe.com/apis/pg-sandbox/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      clientId: process.env.PHONEPE_CLIENT_ID,
      clientSecret: process.env.PHONEPE_CLIENT_SECRET,
      grantType: "CLIENT_CREDENTIALS"
    })
  });

  const data = await response.json();
  if (!data.success) throw new Error("Failed to get access token: " + JSON.stringify(data));
  return data.data.access_token;
}
