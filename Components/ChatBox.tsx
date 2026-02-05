"use client";

import { useState } from "react";

export default function ChatBox() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  async function handleSend() {
    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ input }),
    });

    const data = await res.json();
    setResponse(data.reply);
  }

  return (
    <div style={{ marginTop: 20 }}>
      <textarea
        rows={4}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Describe your problem here..."
        style={{ width: "100%" }}
      />

      <button onClick={handleSend} style={{ marginTop: 10 }}>
        Analyze & Find Solutions
      </button>

      {response && (
        <div style={{ marginTop: 20 }}>
          <h4>Middlewo’s Analysis</h4>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
