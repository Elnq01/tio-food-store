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




import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { CreateUser, RetrieveUser } from "@/app/actions/userServerActions";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    // 1. When user signs in → ensure user exists in DB
    async signIn({ user }) {
      await CreateUser(user);
      return true;
    },

    // 2. Attach role to the JWT so middleware can use it
    async jwt({ token, user }) {
      if (user) {
        const dbUser = await RetrieveUser({ email: user.email });
        token.role = dbUser?.role || "user";
      }
      return token;
    },

    // 3. Expose role in session for frontend & server components
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
