import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    Credentials({
      name: "Email",
      credentials: {
        email: { label: "Email", type: "email" },
      },
      async authorize(credentials) {
        if (!credentials?.email) return null;

        return {
          id: "user-1",
          email: credentials.email,
          lifetimeAccess: true, // temporary (payment later)
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
});

export { handler as GET, handler as POST };
