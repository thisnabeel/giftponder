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
  const [showInputField, setShowInputField] = useState(false); // Track custom title input field

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

  const addNewSpecialDay = (personIndex: number) => {
    const newSpecialDay = { title: "", month: "", day: "" };
    const updatedPeople = [...form.people];
    if (!updatedPeople[personIndex].specialDays) {
      updatedPeople[personIndex].specialDays = [];
    }
    updatedPeople[personIndex].specialDays.push(newSpecialDay);
    setForm({ ...form, people: updatedPeople });
  };

  const updateSpecialDay = (
    personIndex: number,
    specialDayIndex: number,
    field: "title" | "month" | "day",
    value: string
  ) => {
    const updatedPeople = [...form.people];

    // Ensure specialDays array exists and the index is valid
    if (
      updatedPeople[personIndex]?.specialDays &&
      updatedPeople[personIndex].specialDays[specialDayIndex]
    ) {
      updatedPeople[personIndex].specialDays[specialDayIndex][field] = value;
      setForm({ ...form, people: updatedPeople });
    } else {
      console.error(
        "Invalid specialDayIndex or specialDays array is undefined"
      );
    }
  };

  const handleSpecialDayClick = (personIndex: number, title: string) => {
    const updatedPeople = [...form.people];
    const newSpecialDay = { title, month: "", day: "" };
    if (!updatedPeople[personIndex].specialDays) {
      updatedPeople[personIndex].specialDays = [];
    }
    updatedPeople[personIndex].specialDays.push(newSpecialDay);
    setForm({ ...form, people: updatedPeople });
  };

  const removeSpecialDay = (personIndex: number, specialDayIndex: number) => {
    const updatedPeople = [...form.people];
    if (
      updatedPeople[personIndex]?.specialDays &&
      updatedPeople[personIndex].specialDays[specialDayIndex]
    ) {
      updatedPeople[personIndex].specialDays.splice(specialDayIndex, 1);
      setForm({ ...form, people: updatedPeople });
    } else {
      console.error(
        "Invalid specialDayIndex or specialDays array is undefined"
      );
    }
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

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
            if (person.name.length > 0 && person.relationship.length > 0) {
              return axios
                .post("/api/persons", {
                  name: person.name,
                  relationship: person.relationship,
                  userId: res.data.userId,
                })
                .then((personRes) => {
                  if (person.specialDays?.length) {
                    return Promise.all(
                      person.specialDays.map((day) => {
                        // Construct the date using the current year, month, and day
                        const currentYear = new Date().getFullYear();
                        const monthIndex = monthNames.indexOf(day.month);
                        const date = new Date(
                          currentYear,
                          monthIndex,
                          parseInt(day.day)
                        );

                        return axios.post(
                          `/api/persons/${personRes.data.id}/special-days`,
                          {
                            title: day.title,
                            date: date.toISOString(),
                          }
                        );
                      })
                    );
                  }
                });
            }
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

  const commonSpecialDayTitles = [
    "Birthday",
    "Anniversary",
    "Father's Day",
    "Mother's Day",
    "Surgery",
    "Graduation",
    "Wedding",
    "Baby Shower",
    "Housewarming",
    "Retirement",
  ];

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
              {form.people.every(
                (person) =>
                  person.name.trim() !== "" &&
                  person.relationship.trim() !== ""
              ) && (
                <button
                  type="button"
                  className="nav-link text-success"
                  onClick={addNewPerson}
                >
                  + Add Person
                </button>
              )}
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
          <h6 className="mt-3">Special Days</h6>
          {form.people[activeTab]?.specialDays?.map((day, dayIndex) => (
            <div key={dayIndex} className="mb-2">
              <input
                type="text"
                className="form-control mb-1"
                placeholder="Special Day Title"
                value={day.title}
                onChange={(e) =>
                  updateSpecialDay(activeTab, dayIndex, "title", e.target.value)
                }
              />
              <div className="d-flex align-items-center">
                <select
                  className="form-select me-2"
                  value={day.month}
                  onChange={(e) =>
                    updateSpecialDay(
                      activeTab,
                      dayIndex,
                      "month",
                      e.target.value
                    )
                  }
                  style={{ width: "50%" }}
                >
                  <option value="">Select Month</option>
                  {monthNames.map((month, index) => (
                    <option key={index} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  className="form-control me-2"
                  placeholder="Day"
                  value={day.day}
                  onChange={(e) =>
                    updateSpecialDay(activeTab, dayIndex, "day", e.target.value)
                  }
                  style={{ width: "50%" }}
                />
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => removeSpecialDay(activeTab, dayIndex)}
                >
                  <i className="fa fa-trash"></i>
                </button>
              </div>
            </div>
          ))}
          <div className="special-day-titles-container">
            <button
              type="button" // Prevent form submission
              className="btn btn-outline-secondary me-2"
              onClick={() => handleSpecialDayClick(activeTab, "Custom Day...")}
            >
              <i className="fa fa-pen"></i> Custom
            </button>

            {commonSpecialDayTitles.map((title, index) => (
              <button
                type="button" // Prevent form submission
                key={index}
                className="btn btn-outline-secondary me-2"
                onClick={() => handleSpecialDayClick(activeTab, title)}
              >
                {title}
              </button>
            ))}
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
      <style jsx>{`
        .special-day-titles-container {
          display: flex;
          overflow-x: auto;
          white-space: nowrap;
          padding: 10px 0;
        }

        .special-day-titles-container button {
          flex-shrink: 0;
        }
      `}</style>
    </form>
  );
}
