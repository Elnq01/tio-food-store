// // import SignInandSignUp from '@/app/signinandsignup/page';
// import { CreateUser, RetrieveUser } from '@/app/actions/userServerActions';
// import NextAuth from 'next-auth';
// import GoogleProvider from 'next-auth/providers/google';

// export const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,

  
//   callbacks: {
//     async signIn({ user }) {
//       await CreateUser(user)

//       return true;
//     },
//     async session({ session }) {
//         const getUser = await RetrieveUser({email: session.user.email})
//         session.user.role = getUser.role; // attach role
//         return session;
//     },
//   },
// //     pages: {
// //     SignInandSignUp: "/signinandsignup",  // 👈 use your custom page
// //   }
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };

// import NextAuth, { AuthOptions } from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import { CreateUser, RetrieveUser } from "@/app/actions/userServerActions";

// type UserType = {
//   name: string;
//   email: string;
//   image?: string;
//   role?: string;
// };

// export const authOptions: AuthOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,

//   callbacks: {
//     async signIn({ user }) {
//       await CreateUser(user as UserType); // ✅ properly typed now
//       return true;
//     },
//     async jwt({ token, user }) {
//       if (user) {
//         const dbUser = await RetrieveUser({ email: user.email! });
//         token.role = dbUser?.role || "user";
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (session.user) {
//         (session.user as any).role = token.role;
//       }
//       return session;
//     },
//   },
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };



import NextAuth, { AuthOptions, Session, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { CreateUser, RetrieveUser } from "@/app/actions/userServerActions";

interface ExtendedUser extends User {
  role?: string;
}

interface ExtendedToken {
  role?: string;
}

interface ExtendedSession extends Session {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    role?: string;
  };
}

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    // When a user signs in → ensure exists in DB
    async signIn({ user }) {
      await CreateUser({
        name: user.name || "",
        email: user.email || "",
        role: "user",
      });
      return true;
    },

    // Attach role to JWT
    async jwt({ token, user }) {
      if (user) {
        const dbUser = await RetrieveUser({ email: user.email! });
        (token as ExtendedToken).role = dbUser?.role || "user";
      }
      return token;
    },

    // Expose role to frontend
    async session({ session, token }) {
      const extendedSession = session as ExtendedSession;
      extendedSession.user.role = (token as ExtendedToken).role || "user";
      return extendedSession;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

