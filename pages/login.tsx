import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function LoginOrSignup() {
  const [selectedForm, setSelectedForm] = useState<"login" | "signup" | null>(
    null
  );

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

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div
        className="card shadow p-4"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="text-center mb-4 fw-bold">GiftPonder</h2>
        {!selectedForm && (
          <div className="intro text-center mb-4">
            <p className="text-start">
              Daily reminders and tips for your relationships everyday in your
              inbox
            </p>
            <p className="fw-bold">Like This:</p>
            <img
              src="/images/email-subject.png"
              alt="Email Preview"
              className="img-fluid rounded"
              style={{ maxHeight: "200px" }}
            />
            <img
              src="/images/email-preview.png"
              alt="Email Preview"
              className="img-fluid rounded"
              style={{ maxHeight: "200px" }}
            />
          </div>
        )}
        <div className="text-center mb-4">
          <button
            className={`btn ${
              selectedForm === "login" ? "btn-primary" : "btn-outline-primary"
            } me-2`}
            onClick={() => setSelectedForm("login")}
          >
            Log In
          </button>
          <button
            className={`btn ${
              selectedForm === "signup" ? "btn-success" : "btn-outline-success"
            }`}
            onClick={() => setSelectedForm("signup")}
          >
            Sign Up
          </button>
        </div>
        {selectedForm === "login" && <LoginForm />}
        {selectedForm === "signup" && <SignupForm />}
      </div>
    </div>
  );
}

function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });

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
  );
}

function SignupForm() {
  const [form, setForm] = useState({ email: "", name: "", password: "" });

  const handleSubmit = async (e: React.FormEvent) => {
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
  );
}
