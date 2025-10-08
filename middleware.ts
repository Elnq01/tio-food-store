// export { default } from "next-auth/middleware"

// export const config = {
//   matcher: ["/admin", "/admin/:path*"], 
// }


import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    // role-based check
    const token = req.nextauth.token; // decoded JWT or session info
    if (req.nextUrl.pathname.startsWith("/admin") && token?.role !== "admin") {
      return Response.redirect(new URL("/", req.url)); // redirect non-admins
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token, // must be logged in
    },
    pages: {
      signIn: "/signinandsignup", // your custom login page
    },
  }
);

export const config = {
  matcher: ["/admin/:path*"],
};
