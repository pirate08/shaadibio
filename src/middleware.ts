import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // --Get the token from the cookie--
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  //   --Define protected and public routes--
  const isDashboardPage = pathname.startsWith("/dashboard");
  const isAuthPage = pathname === "/login" || pathname === "/register";
}
