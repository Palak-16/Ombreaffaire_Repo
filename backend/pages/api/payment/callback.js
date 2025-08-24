// pages/api/phonepe/callback.js
export default async function handler(req, res) {
  try {
    const { orderId } = req.query;

    // Verify payment status from PhonePe
    const url = `https://api.phonepe.com/apis/pg/v1/status/${process.env.PHONEPE_CLIENT_ID}/${orderId}`;

    const stringToSign = `/pg/v1/status/${process.env.PHONEPE_CLIENT_ID}/${orderId}` + process.env.PHONEPE_CLIENT_SECRET;
    const sha256 = crypto.createHash("sha256").update(stringToSign).digest("hex");
    const checksum = sha256 + "###" + 1;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-VERIFY": checksum,
        "X-MERCHANT-ID": process.env.PHONEPE_CLIENT_ID
      }
    });

    const data = await response.json();

    // redirect to frontend page
    if (data.success) {
      res.redirect(`/payment-success?orderId=${orderId}`);
    } else {
      res.redirect(`/payment-failed?orderId=${orderId}`);
    }
  } catch (err) {
    console.error(err);
    res.redirect(`/payment-failed`);
  }
}
