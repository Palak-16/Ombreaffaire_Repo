import { jwtDecode } from "jwt-decode";

type UserPayload = {
  id: string;
  email: string;
  name: string;
   is_admin: boolean;
};

export function getUserFromToken(): UserPayload | null {
  try {
    const token = localStorage.getItem("token");
    if (!token) return null;
    return jwtDecode<UserPayload>(token);
  } catch (error) {
    return null;
  }
}
