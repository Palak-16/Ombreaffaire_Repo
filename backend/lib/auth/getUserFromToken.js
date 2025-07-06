import jwt from "jsonwebtoken";
import supabase from "../supabaseClient.js";

export async function getUserFromToken(req) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) return null;

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const { data: user, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", decoded.id)
      .single();

    if (error || !user) return null;
    return user;
  } catch (err) {
    console.error("Token verification failed:", err.message);
    return null;
  }
}
