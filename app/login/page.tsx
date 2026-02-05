"use client";

import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <main style={{ padding: 40 }}>
      <h2>Login to Middlewo</h2>
      <p>Sign in to access your personal problem-solving AI.</p>

      <button onClick={() => signIn("credentials")}>
        Login with Email
      </button>
    </main>
  );
}
