"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function SignupPage() {
  const [step, setStep] = useState<"form" | "otp">("form");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

  const sendOtp = async () => {
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      alert("Password must include uppercase, number, and special character.");
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch(`${apiUrl}/api/auth/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("OTP sent to your email.");
        setStep("otp");
      } else {
        alert(data.error || "Failed to send OTP");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    } finally {
      setIsLoading(false);
    }
  };

  const verifyAndRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Step 1: Verify OTP
      const verifyRes = await fetch(`${apiUrl}/api/auth/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      if (!verifyRes.ok) {
        const err = await verifyRes.json();
        alert(err.error || "OTP verification failed");
        setIsLoading(false);
        return;
      }

      // Step 2: Register user
      const registerRes = await fetch(`${apiUrl}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`,
          email,
          password,
        }),
      });

      const result = await registerRes.json();
      if (registerRes.ok) {
        alert("Registration successful!");
        router.push("/login");
      } else {
        alert(result.error || "Registration failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center justify-center space-y-6 max-w-md mx-auto">
        <Link href="/" className="mb-4">
          <Image src="/ombre-logo-new.jpeg" alt="OMBRÉ affaire" width={150} height={50} className="h-12 w-auto" />
        </Link>

        <div className="w-full space-y-6 rounded-lg border bg-card p-6 shadow-sm">
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-bold">
              {step === "form" ? "Create an account" : "Verify OTP"}
            </h1>
            <p className="text-sm text-muted-foreground">
              {step === "form"
                ? "Enter your information to create an account"
                : "We’ve sent a 6-digit code to your email"}
            </p>
          </div>

          {step === "form" ? (
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Must be at least 8 characters and include uppercase, number, and special character.
                </p>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox id="terms" className="mt-1" required />
                <Label htmlFor="terms" className="text-sm font-normal">
                  I agree to the{" "}
                  <Link href="/terms" className="text-primary-foreground hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-primary-foreground hover:underline">
                    Privacy Policy
                  </Link>
                </Label>
              </div>

              <Button type="button" className="w-full" disabled={isLoading} onClick={sendOtp}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending OTP...
                  </>
                ) : (
                  "Send OTP"
                )}
              </Button>
            </form>
          ) : (
            <form onSubmit={verifyAndRegister} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="otp">Enter OTP</Label>
                <Input
                  id="otp"
                  type="text"
                  maxLength={6}
                  required
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  "Verify & Register"
                )}
              </Button>
            </form>
          )}

          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-primary-foreground hover:underline">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
