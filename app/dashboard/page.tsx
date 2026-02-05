import { getServerSession } from "next-auth";
import ChatBox from "@/components/ChatBox";

export default async function Dashboard() {
  const session = await getServerSession();

  if (!session) {
    return <p>Access denied. Please login.</p>;
  }

  return (
    <main style={{ padding: 40, maxWidth: 900 }}>
      <h2>Your Problem-Solving Space</h2>

      <p>
        Describe your situation honestly. Middlewo will help you identify
        the real problem and guide you toward solutions.
      </p>

      <ChatBox />
    </main>
  );
}
