import { useEffect, useState } from "react";
import axios from "axios";

export default function UpcomingSpecialDayCalendar() {
  const [specialDays, setSpecialDays] = useState([]);
  const [persons, setPersons] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [formData, setFormData] = useState({ personId: "", title: "" });
  const [selectedMonthOffset, setSelectedMonthOffset] = useState(0);

  const today = new Date();

  useEffect(() => {
    axios
      .get("/api/special-days/upcoming")
      .then((res) => setSpecialDays(res.data));
    axios.get("/api/persons").then((res) => setPersons(res.data));
  }, []);

  const getFirstOfMonth = (baseDate: Date, monthOffset: number) => {
    return new Date(
      baseDate.getFullYear(),
      baseDate.getMonth() + monthOffset,
      1
    );
  };

  const getMonthDays = (monthStart: Date) => {
    const year = monthStart.getFullYear();
    const month = monthStart.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];

    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(null);
    }

    for (let d = 1; d <= lastDay.getDate(); d++) {
      days.push(new Date(year, month, d));
    }

    return days;
  };

  const formatDate = (date: Date) => date.toISOString().split("T")[0];

  const handleDayClick = (dateStr: string) => {
    setSelectedDate(dateStr);
    setFormData({ personId: "", title: "" });
    setShowModal(true);
  };

  const handleSubmit = async () => {
    if (!formData.personId || !formData.title) return;

    await axios.post(`/api/persons/${formData.personId}/special-days`, {
      title: formData.title,
      date: selectedDate,
    });

    setShowModal(false);
    const res = await axios.get("/api/special-days/upcoming");
    setSpecialDays(res.data);
  };

  const monthStart = getFirstOfMonth(today, selectedMonthOffset);
  const days = getMonthDays(monthStart);
  const label = monthStart.toLocaleDateString(undefined, {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="container mt-4">
      <h2 className="mb-4">📅 Upcoming Special Days – Monthly Calendar</h2>

      <div className="mb-3">
        <select
          className="form-select w-auto d-inline-block"
          value={selectedMonthOffset}
          onChange={(e) => setSelectedMonthOffset(Number(e.target.value))}
        >
          {Array.from({ length: 12 }).map((_, i) => {
            const label = getFirstOfMonth(today, i).toLocaleDateString(
              undefined,
              {
                month: "long",
                year: "numeric",
              }
            );
            return (
              <option key={i} value={i}>
                {label}
              </option>
            );
          })}
        </select>
      </div>

      <div className="mb-5">
        <h4>{label}</h4>
        <div className="calendar-grid mt-2 border rounded">
          <div className="calendar-header">Sun</div>
          <div className="calendar-header">Mon</div>
          <div className="calendar-header">Tue</div>
          <div className="calendar-header">Wed</div>
          <div className="calendar-header">Thu</div>
          <div className="calendar-header">Fri</div>
          <div className="calendar-header">Sat</div>

          {days.map((date, idx) => {
            if (!date) return <div key={idx} className="calendar-cell empty" />;

            const dateStr = formatDate(date);
            const match = specialDays.find((s) => s.date.startsWith(dateStr));

            return (
              <div
                key={idx}
                className="calendar-cell"
                onClick={() => handleDayClick(dateStr)}
                style={{
                  backgroundColor: match ? "#e7fbe7" : "#fff",
                  borderColor: match ? "#28a745" : "#dee2e6",
                  cursor: "pointer",
                }}
              >
                <div className="fw-bold">{date.getDate()}</div>
                {match ? (
                  <div style={{ fontSize: "0.75rem" }}>
                    <div>{match.title}</div>
                    <div className="text-muted">({match.person.name})</div>
                  </div>
                ) : (
                  <div className="text-muted" style={{ fontSize: "0.75rem" }}>
                    —
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="custom-modal" onClick={() => setShowModal(false)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content p-3">
              <h5>Add Special Day – {selectedDate}</h5>
              <select
                className="form-select mb-2"
                value={formData.personId}
                onChange={(e) =>
                  setFormData({ ...formData, personId: e.target.value })
                }
              >
                <option value="">Select Person</option>
                {persons.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} ({p.relationship})
                  </option>
                ))}
              </select>

              <div className="mb-2">
                <div className="d-flex flex-wrap gap-2 mb-2">
                  {[
                    "Anniversary",
                    "Birthday",
                    "Graduation",
                    "Mother's Day",
                    "Father's Day",
                  ]
                    .sort()
                    .map((label) => (
                      <button
                        key={label}
                        className="btn btn-outline-primary btn-sm"
                        onClick={() =>
                          setFormData({ ...formData, title: label })
                        }
                      >
                        {label}
                      </button>
                    ))}
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => setFormData({ ...formData, title: "" })}
                  >
                    Other
                  </button>
                </div>
                {formData.title === "" && (
                  <input
                    className="form-control"
                    placeholder="Enter custom title"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                  />
                )}
              </div>

              <div className="text-end">
                <button
                  className="btn btn-secondary me-2"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button className="btn btn-primary" onClick={handleSubmit}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .calendar-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 4px;
          padding: 10px;
        }
        .calendar-header {
          font-weight: bold;
          text-align: center;
          background: #f0f0f0;
          padding: 6px;
          border-radius: 4px;
        }
        .calendar-cell {
          border: 1px solid #ccc;
          padding: 8px;
          min-height: 70px;
          border-radius: 4px;
          font-size: 0.85rem;
        }
        .calendar-cell.empty {
          background: transparent;
          border: none;
        }
        .custom-modal {
          position: fixed;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .modal-dialog {
          background: white;
          border-radius: 8px;
          max-width: 400px;
          width: 100%;
        }
      `}</style>
    </div>
  );
}
