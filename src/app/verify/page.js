"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const VerifyPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState("Verifying...");

  useEffect(() => {
    const verifyEmail = async () => {
      const email = searchParams.get("email");

      if (!email) {
        setStatus("Invalid verification link.");
        return;
      }

      try {
        const response = await fetch("/api/verify-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });

        if (response.ok) {
          setStatus(" Email verified successfully! Redirecting...");
          setTimeout(() => {
            router.push("/admin/dashboard"); // Redirect after verification
          }, 2000);
        } else {
          setStatus(" Verification failed. Please try again.");
        }
      } catch (error) {
        console.error("Error verifying email:", error);
        setStatus("⚠️ An error occurred during verification.");
      }
    };

    verifyEmail();
  }, [searchParams, router]);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>{status}</h1>
    </div>
  );
};

export default VerifyPage;
