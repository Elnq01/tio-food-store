// 📁 app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import { authOptions } from "./authOptions"; // import from the file above

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }; // ONLY exports allowed in API route
