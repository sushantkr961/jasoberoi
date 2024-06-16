import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {

  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/login";

  const token = request.cookies.get("token")?.value || "";

  const isValidToken = typeof token === 'string' && verifyToken(token);

  if (isPublicPath && isValidToken)  {
    // if url true an token is true
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }

  if (!isPublicPath && !isValidToken) {
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }
} 

export const config = {
  matcher: [
    "/admin/:path*", "/:path*"
  ]
}

function verifyToken(token: string): boolean {
  // Implement token verification logic or use shared logic from your app
  // This should involve decoding the JWT and possibly checking against a database or cache
  return true; // Placeholder: Replace with actual logic
}
