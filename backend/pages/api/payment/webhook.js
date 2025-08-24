export default async function handler(req, res) {
  try {
    const data = req.body;

    // Verify webhook authenticity (if signature provided in header)
    console.log("Webhook Data:", data);

    // Save payment status to DB here

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Webhook error" });
  }
}
