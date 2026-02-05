import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 40, maxWidth: 800 }}>
      <h1>🧠 Middlewo</h1>

      <p style={{ fontSize: 18 }}>
        Middlewo is an AI designed to help you identify your problems,
        understand their root causes, and find clear, practical solutions.
      </p>

      <ul>
        <li>✔ Clarify personal or professional problems</li>
        <li>✔ Break down complex situations</li>
        <li>✔ Get actionable solutions</li>
        <li>✔ Think with clarity, not confusion</li>
      </ul>

      <Link href="/login">
        <button style={{ marginTop: 20 }}>
          Start solving your problems
        </button>
      </Link>
    </main>
  );
}