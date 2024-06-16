import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // const path = request.nextUrl.pathname;
  // // console.log("Requested Path:", path);

  // // Exclude static files and API calls
  // if (path.startsWith("/_next/") || path.startsWith("/api/")) {
  //   return NextResponse.next();
  // }

  // // Check if the path starts with /admin
  // const isAdminPath = path.startsWith("/admin");
  // // console.log("Is Admin Path:", isAdminPath);

  // // const token = request.cookies.get("token");
  // const token = request.cookies.get("token");
  // // console.log("Token:", token);

  // // Check token validity (pseudo-code, you'll need a real function to verify tokens)
  // // const isValidToken = token && verifyToken(token);
  // const isValidToken = typeof token === 'string' && verifyToken(token);

  // if (isAdminPath && !isValidToken) {
  //   // If it's an admin path and there's no valid token, redirect to login
  //   return NextResponse.redirect(new URL("/login", request.nextUrl));
  // } else if (!isAdminPath && isValidToken) {
  //   // If it's not an admin path and there's a valid token, redirect to the admin dashboard
  //   return NextResponse.redirect(new URL("/admin", request.nextUrl));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/:path*"],
};

function verifyToken(token: string): boolean {
  // Implement token verification logic or use shared logic from your app
  // This should involve decoding the JWT and possibly checking against a database or cache
  return true; // Placeholder: Replace with actual logic
}
