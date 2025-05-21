import { useEffect, useState } from "react";
import { usePersonStore } from "../lib/store";
import axios from "axios";
import { useRouter } from "next/router";
import Calendar from "../components/Calendar";
import Layout from "../components/Layout";
import UpcomingSpecialDaysInline from "../components/UpcomingSpecialDaysInline";
import { useSession } from "next-auth/react";
import { Modal } from "react-bootstrap";

export default function PeoplePage() {
  const router = useRouter();
  const { data: session } = useSession();
  const { persons, setPersons } = usePersonStore();
  const [name, setName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const checkEmailVerification = async () => {
      if (session) {
        if (!session.user?.emailVerified) {
          const res = await axios.post("/api/auth/check-email-verified", {
            email: session.user.email,
          });
          if (res.data.emailVerified) {
            session.user.emailVerified = true; // Update session to reflect verification
            fetchPeople();
          } else {
            setShowModal(true);
          }
        } else {
          fetchPeople();
        }
      }
    };

    checkEmailVerification();
  }, [session]);

  const fetchPeople = async () => {
    const res = await axios.get("/api/persons");
    setPersons(res.data);
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!name || !relationship) return;
    await axios.post("/api/persons", { name, relationship });
    setName("");
    setRelationship("");
    fetchPeople();
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/persons/${id}`);
    fetchPeople();
  };

  const handleEdit = async (person) => {
    const newName = prompt("Edit name:", person.name);
    const newRel = prompt("Edit relationship:", person.relationship);
    if (newName && newRel) {
      await axios.put(`/api/persons/${person.id}`, {
        name: newName,
        relationship: newRel,
      });
      fetchPeople();
    }
  };

  return (
    <div className="container mt-4">
      {showModal && (
        <Modal show={true} backdrop="static" keyboard={false}>
          <Modal.Header>
            <Modal.Title>Email Verification Required</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Please verify your email address to continue. Check your inbox for a
            verification email.
            <button
              className="btn btn-link mt-2"
              onClick={async () => {
                await axios.post("/api/auth/send-verification-email", {
                  email: session?.user?.email,
                  name: session?.user?.name,
                });
                alert("Verification email resent. Please check your inbox.");
              }}
            >
              Resend Verification Email
            </button>
          </Modal.Body>
        </Modal>
      )}
      <UpcomingSpecialDaysInline></UpcomingSpecialDaysInline>
      <h2>Your People</h2>

      <form className="mb-3" onSubmit={handleAdd}>
        <div className="row g-2 align-items-center">
          <div className="col">
            <input
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              placeholder="Relationship"
              value={relationship}
              onChange={(e) => setRelationship(e.target.value)}
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-primary">Add</button>
          </div>
        </div>
      </form>

      <ul className="list-group">
        {persons.map((p) => (
          <li
            key={p.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span
              role="button"
              onClick={() => router.push(`/persons/${p.id}`)}
              className="text-primary text-decoration-underline"
            >
              {p.name} ({p.relationship})
            </span>
            <div>
              <button
                className="btn btn-sm btn-outline-secondary me-2"
                onClick={() => handleEdit(p)}
              >
                ✏️
              </button>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => handleDelete(p.id)}
              >
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>
      <Calendar></Calendar>
    </div>
  );
}
