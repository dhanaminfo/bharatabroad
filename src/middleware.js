import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware() {
    // request passes through if `authorized` below returned true
  },
  {
    pages: { signIn: "/login" },
    callbacks: {
      authorized: ({ token, req }) => {
        if (!token) return false;
        const path = req.nextUrl.pathname;

        if (path.startsWith("/admin/users")) {
          return token.role === "SUPERADMIN";
        }
        if (path.startsWith("/admin")) {
          return token.role === "ADMIN" || token.role === "SUPERADMIN";
        }
        if (path.startsWith("/submit")) {
          return token.role === "EMPLOYEE" || token.role === "ADMIN" || token.role === "SUPERADMIN";
        }
        return true;
      },
    },
  }
);

export const config = {
  matcher: ["/submit/:path*", "/admin/:path*"],
};
