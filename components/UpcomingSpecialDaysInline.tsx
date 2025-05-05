import { useEffect, useState } from "react";
import axios from "axios";

interface Gift {
  id: string;
  title: string;
  website: string;
  done: boolean;
}

export default function UpcomingSpecialDaysInline() {
  const [specialDays, setSpecialDays] = useState([]);
  const [selectedDay, setSelectedDay] = useState<any>(null);
  const [gifts, setGifts] = useState<Gift[]>([]);
  const [newGift, setNewGift] = useState<Omit<Gift, "id">>({
    title: "",
    website: "",
    done: false,
  });

  useEffect(() => {
    axios
      .get("/api/special-days/upcoming")
      .then((res) => setSpecialDays(res.data));
  }, []);

  const getUrgencyClass = (daysLeft: number) => {
    if (daysLeft <= 3) return "pulse bg-danger text-white";
    if (daysLeft <= 7) return "bg-warning text-dark";
    if (daysLeft <= 14) return "bg-orange text-white";
    return "bg-success text-white";
  };

  const getEmoji = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes("birthday")) return "🎂";
    if (t.includes("mother")) return "💐";
    if (t.includes("anniversary")) return "💍";
    if (t.includes("eid")) return "🌙";
    return "✨";
  };

  const getDaysLeft = (dateStr: string) => {
    const today = new Date();
    const targetDate = new Date(dateStr);
    return Math.ceil(
      (targetDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
    );
  };

  const openGiftModal = async (day) => {
    setSelectedDay(day);
    const res = await axios.get("/api/gifts", {
      params: { specialDayId: day.id },
    });
    setGifts(res.data);
    setNewGift({ title: "", website: "", done: false });
  };

  const addGift = async () => {
    if (!newGift.title || !selectedDay) return;

    const res = await axios.post("/api/gifts", {
      ...newGift,
      specialDayId: selectedDay.id,
    });

    setGifts((prev) => [...prev, res.data]);
    setNewGift({ title: "", website: "", done: false });
  };

  const deleteGift = async (id: string) => {
    await axios.delete(`/api/gifts/${id}`);
    setGifts((prev) => prev.filter((g) => g.id !== id));
  };

  const toggleDone = async (gift: Gift) => {
    const res = await axios.patch(`/api/gifts/${gift.id}`, {
      done: !gift.done,
    });
    setGifts((prev) =>
      prev.map((g) => (g.id === gift.id ? { ...g, done: res.data.done } : g))
    );
  };

  return (
    <div className="my-4">
      <h5 className="mb-2">🌟 Upcoming Special Days</h5>
      {specialDays.length === 0 ? (
        <div className="text-muted">No upcoming special days.</div>
      ) : (
        <div className="d-flex flex-wrap gap-2">
          {specialDays.map((day) => {
            const daysLeft = getDaysLeft(day.date);
            const urgencyClass = getUrgencyClass(daysLeft);
            const emoji = getEmoji(day.title);

            return (
              <span
                key={day.id}
                className={`badge border rounded-pill px-3 py-2 d-flex flex-column align-items-start ${urgencyClass}`}
                style={{
                  minWidth: "160px",
                  position: "relative",
                  cursor: "pointer",
                }}
                title={`${daysLeft} day${daysLeft === 1 ? "" : "s"} left`}
                onClick={() => openGiftModal(day)}
              >
                <strong>
                  {emoji} {day.title}
                </strong>
                <small className="text-muted">
                  {day.date.split("T")[0]} – {day.person.name}
                </small>
              </span>
            );
          })}
        </div>
      )}

      {selectedDay && (
        <div className="custom-modal" onClick={() => setSelectedDay(null)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content p-3">
              <h5>
                Add Gifts for {selectedDay.title} – {selectedDay.person.name}
              </h5>

              <div className="mb-2">
                <input
                  className="form-control mb-2"
                  placeholder="Gift title"
                  value={newGift.title}
                  onChange={(e) =>
                    setNewGift({ ...newGift, title: e.target.value })
                  }
                />
                <input
                  className="form-control mb-2"
                  placeholder="Website URL"
                  value={newGift.website}
                  onChange={(e) =>
                    setNewGift({ ...newGift, website: e.target.value })
                  }
                />
                <div className="form-check mb-2">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="gift-done"
                    checked={newGift.done}
                    onChange={(e) =>
                      setNewGift({ ...newGift, done: e.target.checked })
                    }
                  />
                  <label className="form-check-label" htmlFor="gift-done">
                    Already Ready
                  </label>
                </div>
                <button className="btn btn-primary btn-sm" onClick={addGift}>
                  ➕ Add Gift
                </button>
              </div>

              <ul className="list-group mb-3">
                {gifts.map((g) => (
                  <li
                    key={g.id}
                    className={`list-group-item d-flex justify-content-between align-items-center ${
                      g.done ? "list-group-item-success" : ""
                    }`}
                  >
                    <div className="d-flex flex-column flex-grow-1 me-2">
                      <div className="d-flex align-items-center justify-content-between">
                        <strong>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id={`gift-done-${g.id}`}
                            checked={g.done}
                            onChange={() => toggleDone(g)}
                          />{" "}
                          {g.title}
                        </strong>
                        <div>
                          {g.website && (
                            <a
                              href={g.website}
                              target="_blank"
                              rel="noreferrer"
                              className="me-2"
                            >
                              🌐
                            </a>
                          )}
                          <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => deleteGift(g.id)}
                          >
                            🗑
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="text-end">
                <button
                  className="btn btn-secondary"
                  onClick={() => setSelectedDay(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .bg-orange {
          background-color: #fd7e14;
        }
        .pulse {
          animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(220, 53, 69, 0.6);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(220, 53, 69, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(220, 53, 69, 0);
          }
        }
        .custom-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .modal-dialog {
          background: white;
          border-radius: 8px;
          max-width: 500px;
          width: 100%;
        }
      `}</style>
    </div>
  );
}
