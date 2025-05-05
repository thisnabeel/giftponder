import { useEffect, useState } from "react";
import { usePersonStore } from "../lib/store";
import axios from "axios";
import { useRouter } from "next/router";
import Calendar from "../components/Calendar";
import Layout from "../components/Layout";
import UpcomingSpecialDaysInline from "../components/UpcomingSpecialDaysInline";

export default function PeoplePage() {
  const router = useRouter();
  const { persons, setPersons } = usePersonStore();
  const [name, setName] = useState("");
  const [relationship, setRelationship] = useState("");

  useEffect(() => {
    fetchPeople();
  }, []);

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
