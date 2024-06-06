import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";

interface MyTokenPayload extends jwt.JwtPayload {
  isAdmin: boolean;
}

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("token")?.value || "";

  if (path.startsWith("/admin")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    try {
      const decoded = jwt.verify(
        token,
        process.env.TOKEN_SECRET!
      ) as MyTokenPayload;

      if (!decoded.isAdmin) {
        return NextResponse.redirect(new URL("/", request.url));
      }
    } catch (error) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
