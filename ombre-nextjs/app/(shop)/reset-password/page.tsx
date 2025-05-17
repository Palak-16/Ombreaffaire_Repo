"use client";

import { Suspense } from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function ResetPasswordPage() {
    const router = useRouter();
    const searchParams = useParams();
    const token = searchParams.token as string;
    //   const email = searchParams.get("email");

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [isTokenValid, setIsTokenValid] = useState<null | boolean>(null);
    const [tokenError, setTokenError] = useState("");

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

    // 🔍 Validate token before showing form
    useEffect(() => {
        if (!token) {
            setTokenError("Reset token is missing.");
            setIsTokenValid(false);
            return;
        }

        const validateToken = async () => {
            try {
                const res = await fetch(`${apiUrl}/api/auth/validate-reset-token`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ token }),
                });

                const data = await res.json();

                if (!res.ok) {
                    setTokenError(data.error || "Invalid or expired reset link.");
                    setIsTokenValid(false);
                } else {
                    setIsTokenValid(true);
                }
            } catch (err) {
                setTokenError("Unable to validate link. Please try again later.");
                setIsTokenValid(false);
            }
        };

        validateToken();
    }, [token]);



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (password.length < 8) {
            setError("Password must be at least 8 characters.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setIsLoading(true);

        try {
            const res = await fetch(`${apiUrl}/api/auth/reset-password`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token, newPassword: password }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.error || "Failed to reset password.");
            } else {
                setSuccess(true);
                setTimeout(() => router.push("/login"), 2000);
            }
        } catch (err) {
            setError("Something went wrong.");
        } finally {
            setIsLoading(false);
        }
    };
    // 🟡 While validating token
    if (isTokenValid === null) {
        return <p className="text-center mt-12 text-muted-foreground">Validating reset link...</p>;
    }

    // ❌ If token is invalid or expired
    if (isTokenValid === false) {
        return (
            <div className="text-center mt-12 text-red-600 font-medium">
                {tokenError || "This reset link is invalid or expired."}
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12 max-w-md">
            <h1 className="text-2xl font-bold mb-4 text-center">Set a new password</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <Label htmlFor="password">New Password</Label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="Enter new password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div>
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}
                {success && <p className="text-green-600 text-sm">Password reset successful. Redirecting...</p>}

                <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? (
                        <>
                            <Loader2 className="h-4 w-4 animate-spin mr-2" />
                            Resetting...
                        </>
                    ) : (
                        "Reset Password"
                    )}
                </Button>
            </form>
        </div>
    );
}
