import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";

interface MyTokenPayload extends jwt.JwtPayload {
  isAdmin: boolean;
}

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const path = url.pathname;
  //   const token = request.cookies.get("token") || "";
  const token = request.cookies.get("token")?.value || "";

  if (path.startsWith("/admin")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", url));
    }

    try {
      const decoded = jwt.verify(
        token,
        process.env.TOKEN_SECRET!
      ) as MyTokenPayload;

      if (!decoded.isAdmin) {
        return NextResponse.redirect(new URL("/", url));
      }
    } catch (error) {
      return NextResponse.redirect(new URL("/login", url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
