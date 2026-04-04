import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // --Get the token from the cookie--
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  //   --Define protected and public routes--
  const isDashboardPage = pathname.startsWith("/dashboard");
  const isAuthPage = pathname === "/login" || pathname === "/register";

  //   --Logic: If trying to access dashboard page without token user will be redirect to the login page--
  if (isDashboardPage && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // --LOGIC: If user ALREADY has a token and tries to visit Login/Register -> Redirect to Dashboard--
  if (isAuthPage && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

// --Tell Next.js which routes to run this middleware on
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/biodata/:path*",
    "/templates/:path*",
    "/settings/:path*",
    "/login",
    "/register",
  ],
};
