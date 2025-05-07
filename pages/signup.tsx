import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

export default function Signup() {
  const [form, setForm] = useState({ email: "", name: "", password: "" });
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/signup", form);
      alert(res.data?.message || "Signup successful");
    } catch (err) {
      console.error("Signup failed:", err.response?.data);
      alert(err.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div
        className="card shadow p-4"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="text-center mb-4 fw-bold text-primary">GiftPonder</h2>
        <small className="text-center">Your Relationship Butler</small>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              required
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
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
              placeholder="Create a password"
              required
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-success w-100">
            Create Account
          </button>
        </form>

        <div className="text-center mt-3">
          <small>Already have an account?</small>
          <br />
          <Link href="/login" className="btn btn-outline-primary btn-sm mt-2">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}
