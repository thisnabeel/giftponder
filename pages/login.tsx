import { signIn } from "next-auth/react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  useEffect(() => {
    // Apply background when component mounts
    document.body.style.backgroundImage = "url('/images/pattern3.png')";
    document.body.style.backgroundSize = "700px"; // or "repeat" for tiled
    document.body.style.backgroundRepeat = "repeat";
    document.body.style.backgroundPosition = "center";

    // Clean up when component unmounts
    return () => {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundSize = "";
      document.body.style.backgroundRepeat = "";
      document.body.style.backgroundPosition = "";
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn("credentials", {
      redirect: true,
      email: form.email,
      password: form.password,
      callbackUrl: "/dashboard",
    });
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div
        className="card shadow p-4"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="text-center mb-4 fw-bold text-primary">GiftPonder</h2>
        <small className="text-center">Your Relationship Butler</small>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              required
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              required
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Log In
          </button>
        </form>

        {/* Sign Up Prompt */}
        <div className="text-center mt-3">
          <small>Don't have an account?</small>
          <br />
          <Link
            href="/signup"
            className="btn btn-outline-secondary btn-sm mt-2"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
