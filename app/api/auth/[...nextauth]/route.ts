import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { CreateUser, RetrieveUser } from "@/app/actions/userServerActions";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async signIn({ user }) {
      await CreateUser({
        name: user.name || "",
        email: user.email || "",
        role: "user",
      });
      return true;
    },

    async jwt({ token, user }) {
      if (user?.email) {
        const dbUser = await RetrieveUser({ email: user.email });
        token.role = dbUser?.role || "user";
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role; // Now properly typed
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
