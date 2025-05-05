import { useEffect, useState } from "react";

export default function GiftNewsletterPreview() {
  const [html, setHtml] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const fetchNewsletter = async () => {
    setLoading(true);
    setSent(false);
    const res = await fetch("/api/newsletters/generate");
    const htmlText = await res.text();
    setHtml(htmlText);
    setLoading(false);
  };

  const handleSend = async () => {
    setSending(true);
    const res = await fetch("/api/newsletters/send-newsletter", {
      method: "POST",
    });
    setSending(false);
    setSent(res.ok);
  };

  useEffect(() => {
    fetchNewsletter();
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 className="mb-4">📬 Gift Newsletter Preview</h1>

      {loading ? (
        <div className="text-muted">Generating your newsletter...</div>
      ) : (
        <>
          <div
            dangerouslySetInnerHTML={{ __html: html }}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "2rem",
              background: "#fff",
            }}
          />

          <div className="mt-4 d-flex gap-3">
            <button
              className="btn btn-success"
              onClick={handleSend}
              disabled={sending}
            >
              {sending ? "Sending..." : "📨 Send to My Email"}
            </button>

            <button
              className="btn btn-outline-secondary"
              onClick={fetchNewsletter}
            >
              🔄 Refresh
            </button>
          </div>

          {sent && <p className="text-success mt-2">✅ Sent successfully!</p>}
        </>
      )}
    </div>
  );
}
