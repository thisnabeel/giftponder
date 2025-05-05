import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PersonDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const [person, setPerson] = useState(null);
  const [traits, setTraits] = useState([]);
  const [newTrait, setNewTrait] = useState({ type: "likes", description: "" });
  const [specialDays, setSpecialDays] = useState([]);
  const [newSpecialDay, setNewSpecialDay] = useState({
    title: "",
    date: "",
  });

  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");

  useEffect(() => {
    if (id) {
      fetchPerson();
      fetchCategories();
    }
  }, [id]);

  const fetchPerson = async () => {
    const res = await axios.get(`/api/persons/${id}`);
    setPerson(res.data);
    setTraits(res.data.traits || []);
    setSpecialDays(res.data.specialDays || []);
  };

  const fetchCategories = async () => {
    const res = await axios.get("/api/love-categories");
    setCategories(res.data);
  };

  const handleAddTrait = async () => {
    await axios.post(`/api/persons/${id}/traits`, newTrait);
    setNewTrait({ type: "likes", description: "" });
    fetchPerson();
  };

  const [giftIdeas, setGiftIdeas] = useState<string[]>([]);
  const [loadingIdeas, setLoadingIdeas] = useState(false);

  const fetchGiftIdeas = async () => {
    setLoadingIdeas(true);
    const res = await axios.post(`/api/persons/${id}/gift-ideas`);
    setGiftIdeas(res.data);
    setLoadingIdeas(false);
  };

  const rejectIdea = async (idea) => {
    await axios.post(`/api/persons/${id}/gift-ideas`, { reject: idea });
    setGiftIdeas((prev) => prev.filter((i) => i !== idea));
  };

  const handleAddLoveCategory = async () => {
    await axios.post(`/api/persons/${id}/love-categories`, {
      loveCategoryId: selectedCategoryId,
    });
    fetchPerson();
  };
  const handleAddSpecialDay = async () => {
    if (!newSpecialDay.title || !newSpecialDay.date) return;

    await axios.post(`/api/persons/${id}/special-days`, newSpecialDay);
    setNewSpecialDay({ title: "", date: "" });
    fetchPerson();
  };

  const handleDeleteSpecialDay = async (dayId) => {
    await axios.delete(`/api/persons/${id}/special-days/${dayId}`);
    fetchPerson();
  };

  if (!person) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <h3>
        {person.name} ({person.relationship})
      </h3>

      <h5 className="mt-4">Traits</h5>
      <ul className="list-group mb-3">
        {traits.map((trait) => (
          <li key={trait.id} className="list-group-item">
            {trait.type}: {trait.description}
          </li>
        ))}
      </ul>

      <div className="d-flex mb-3">
        <select
          className="form-select me-2"
          value={newTrait.type}
          onChange={(e) => setNewTrait({ ...newTrait, type: e.target.value })}
        >
          <option>likes</option>
          <option>loves</option>
          <option>hates</option>
          <option>dislikes</option>
          <option>struggling_with</option>
        </select>
        <input
          className="form-control me-2"
          placeholder="Trait description"
          value={newTrait.description}
          onChange={(e) =>
            setNewTrait({ ...newTrait, description: e.target.value })
          }
        />
        <button className="btn btn-success" onClick={handleAddTrait}>
          ➕ Add
        </button>
      </div>

      <h5 className="mt-4">🎁 Gift Suggestions</h5>

      <button
        className="btn btn-primary mb-3"
        onClick={fetchGiftIdeas}
        disabled={loadingIdeas}
      >
        {loadingIdeas ? "🔄 Polishing..." : "✨ Polish List"}
      </button>

      {giftIdeas.map((idea, idx) => {
        // Split at the first colon only
        const [rawTitle, ...rest] = idea.split(":");
        const title = rawTitle?.trim();
        const description = rest.join(":").trim();

        return (
          <div key={idx} className="gift-card">
            <div className="gift-header d-flex justify-content-between align-items-start">
              <h5 className="gift-title">{title}</h5>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => rejectIdea(idea)}
              >
                ❌ Reject
              </button>
            </div>
            <p className="gift-description">{description}</p>
          </div>
        );
      })}

      <h5>Love Categories</h5>
      <ul className="list-group mb-3">
        {person.loveCategories?.map((lc) => (
          <li key={lc.id} className="list-group-item">
            {lc.name}
          </li>
        ))}
      </ul>

      <div className="d-flex">
        <select
          className="form-select me-2"
          value={selectedCategoryId}
          onChange={(e) => setSelectedCategoryId(e.target.value)}
        >
          <option value="">Select a Love Category</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name} - {c.description}
            </option>
          ))}
        </select>
        <button className="btn btn-success" onClick={handleAddLoveCategory}>
          ➕ Link
        </button>
      </div>
      <h5 className="mt-4">Special Days</h5>
      <ul className="list-group mb-3">
        {specialDays.map((day) => (
          <li
            key={day.id}
            className="list-group-item d-flex justify-content-between"
          >
            <span>
              {day.title} — {new Date(day.date).toLocaleDateString()}
            </span>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => handleDeleteSpecialDay(day.id)}
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>

      <div className="d-flex mb-3">
        <input
          className="form-control me-2"
          placeholder="Title"
          value={newSpecialDay.title}
          onChange={(e) =>
            setNewSpecialDay({ ...newSpecialDay, title: e.target.value })
          }
        />
        <input
          type="date"
          className="form-control me-2"
          value={newSpecialDay.date}
          onChange={(e) =>
            setNewSpecialDay({ ...newSpecialDay, date: e.target.value })
          }
        />
        <button className="btn btn-success" onClick={handleAddSpecialDay}>
          ➕ Add
        </button>
      </div>
      <style jsx>{`
        .gift-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .gift-header {
          margin-bottom: 0.5rem;
        }

        .gift-number {
          font-size: 1rem;
          color: #888;
        }

        .gift-body {
          font-size: 0.95rem;
          line-height: 1.5;
          color: #333;
        }

        .gift-card {
          background: #fff;
          border: 1px solid #ddd;
          border-left: 5px solid #0d6efd;
          border-radius: 8px;
          padding: 1rem 1.25rem;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
        }

        .gift-title {
          margin: 0;
          font-weight: 600;
          color: #0d6efd;
          font-size: 1.1rem;
        }

        .gift-description {
          font-size: 0.95rem;
          color: #444;
          margin-top: 0.5rem;
        }
      `}</style>
    </div>
  );
}
