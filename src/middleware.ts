import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  console.log("Requested Path:", path);

  // Check if the path starts with /admin
  const isAdminPath = path.startsWith("/admin");
  console.log("Is Admin Path:", isAdminPath);

  const token = request.cookies.get("token")?.value || "";
  console.log("Token:", token);

  if (isAdminPath && !token) {
    // If it's an admin path and there's no token, redirect to login
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  } else if (!isAdminPath && token) {
    // If it's not an admin path and there's a token, redirect to the admin dashboard
    return NextResponse.redirect(new URL("/admin", request.nextUrl));
  }

  // If none of the above conditions are met, proceed with the next response
  return NextResponse.next();
}

// Adjusting the matcher config to handle all paths for comprehensive coverage
export const config = {
  matcher: [
    "/admin/:path*", // Match all admin paths
    "/:path*", // Match all other paths
  ],
};
