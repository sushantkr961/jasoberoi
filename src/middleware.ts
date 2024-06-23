import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === "/login";
  const isAdminPath = path.startsWith("/admin");

  const token = request.cookies.get("token")?.value || "";
  // console.log(6666, token);

  // If trying to access the login page while logged in, redirect to home
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  // If trying to access the admin path without a token, redirect to login
  if (isAdminPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  // No redirection needed, allow access
  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/admin/:path*"],
};
