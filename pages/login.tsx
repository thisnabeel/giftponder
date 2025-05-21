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
            <div
              className="d-inline-block px-3 py-2 mb-3 text-white bg-primary rounded-pill"
              style={{ fontSize: "0.9rem" }}
            >
              New features <u>every week</u>
            </div>
            <p className="text-start">
              Daily reminders & tips for your relationships everyday in your
              inbox.
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
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false); // Reset error state

    const result = await signIn("credentials", {
      redirect: false, // Prevent redirection
      email: form.email,
      password: form.password,
    });

    if (result?.error) {
      setError(true); // Trigger error state
    } else {
      window.location.href = "/dashboard"; // Redirect manually on success
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={error ? "vibrate" : ""} // Add vibrate class on error
    >
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
      <style jsx>{`
        .vibrate {
          animation: vibrate 0.3s;
        }

        @keyframes vibrate {
          0% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          50% {
            transform: translateX(5px);
          }
          75% {
            transform: translateX(-5px);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </form>
  );
}

function SignupForm() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
    people: Array(1).fill({ name: "", relationship: "" }),
  });
  const [step, setStep] = useState(1);
  const [activeTab, setActiveTab] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state

  const isStepOneValid =
    form.name.trim() !== "" &&
    form.email.trim() !== "" &&
    form.password.trim() !== "";

  const nextStep = () => {
    if (step === 1 && isStepOneValid) {
      setStep(step + 1);
    } else if (step === 1) {
      alert("Please fill out all fields in Step 1 before proceeding.");
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const isAtLeastOnePersonValid = form.people.some(
    (person) => person.name.trim() !== "" && person.relationship.trim() !== ""
  );

  const addNewPerson = () => {
    const newPerson = { name: "", relationship: "" };
    setForm({
      ...form,
      people: [...form.people, newPerson],
    });
    setActiveTab(form.people.length); // Switch to the new tab
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable form and indicate submission
    try {
      const res = await axios.post("/api/auth/signup", form);

      // Automatically log the user in after successful signup
      const loginResult = await signIn("credentials", {
        redirect: false,
        email: form.email,
        password: form.password,
      });

      if (loginResult?.error) {
        console.error("Login after signup failed:", loginResult.error);
        setIsSubmitting(false); // Re-enable form on failure
      } else {
        // Create a default Person for the new user before redirecting
        await axios.post("/api/persons", {
          name: "Me",
          relationship: "myself",
          userId: res.data.userId, // Assuming the API returns the new user's ID
        });

        // Create Person entries for the people the user cares about
        await Promise.all(
          form.people.map((person) => {
            if (person.name.length > 0 && person.relationship.length > 0)
              axios.post("/api/persons", {
                name: person.name,
                relationship: person.relationship,
                userId: res.data.userId,
              });
          })
        );

        // Send verification email after successful signup
        await axios.post("/api/auth/send-verification-email", {
          email: form.email,
          name: form.name,
        });

        setIsSubmitting(false); // Re-enable form
        alert("Verification email sent. Please check your inbox.");
        window.location.href = "/dashboard"; // Redirect to dashboard on successful login
      }
    } catch (err) {
      console.error("Signup failed:", err.response?.data);
      setIsSubmitting(false); // Re-enable form on failure
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {step === 1 && (
        <div>
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
          <button
            type="button"
            className="btn btn-primary w-100"
            onClick={nextStep}
          >
            Next Step
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h5 className="mb-3">Add People You Care About</h5>
          <p className="text-muted">
            We've already added you, because you matter, but besides you, who do
            you care about? At least one other person is required.
          </p>
          <ul className="nav nav-tabs mb-3">
            {form.people.map((person, index) => (
              <li className="nav-item" key={index}>
                <button
                  type="button"
                  className={`nav-link ${activeTab === index ? "active" : ""}`}
                  onClick={() => handleTabClick(index)}
                >
                  {person.name.length > 0
                    ? person.name
                    : `Person #${index + 1}`}
                </button>
              </li>
            ))}
            <li className="nav-item">
              <button
                type="button"
                className="nav-link text-success"
                onClick={addNewPerson}
              >
                + Add Person
              </button>
            </li>
          </ul>
          <div className="mb-3">
            <label className="form-label">
              Person's Name (however you call them)
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter their name"
              required
              value={form.people[activeTab]?.name || ""}
              onChange={(e) => {
                const updatedPeople = [...form.people];
                updatedPeople[activeTab] = {
                  ...updatedPeople[activeTab],
                  name: e.target.value,
                };
                setForm({ ...form, people: updatedPeople });
              }}
            />
            <label className="form-label mt-2">
              Relationship (ex. 'Brother', 'Friend')
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your relationship"
              required
              value={form.people[activeTab]?.relationship || ""}
              onChange={(e) => {
                const updatedPeople = [...form.people];
                updatedPeople[activeTab] = {
                  ...updatedPeople[activeTab],
                  relationship: e.target.value,
                };
                setForm({ ...form, people: updatedPeople });
              }}
            />
          </div>
          <div className="d-flex justify-content-between mt-3">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={prevStep}
            >
              Back
            </button>
            <button
              type="submit"
              className="btn btn-success"
              disabled={!isAtLeastOnePersonValid || isSubmitting}
            >
              {isSubmitting ? "Creating Account..." : "Create Account"}
            </button>
          </div>
        </div>
      )}
    </form>
  );
}
