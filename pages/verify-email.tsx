import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function VerifyEmail() {
  const router = useRouter();
  const { code } = router.query;
  const [status, setStatus] = useState("Verifying...");

  useEffect(() => {
    if (!code) return;

    async function verify() {
      try {
        const response = await fetch(`/api/auth/verify-email?code=${code}`);
        if (response.ok) {
          setStatus("Verification successful! Redirecting...");
          setTimeout(() => router.push("/dashboard"), 3000);
        } else {
          setStatus("Verification failed. This link may have expired.");
        }
      } catch (error) {
        setStatus("An error occurred. Please try again later.");
      }
    }

    verify();
  }, [code, router]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{status}</h1>
    </div>
  );
}