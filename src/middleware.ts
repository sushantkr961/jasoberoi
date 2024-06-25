import { jwtVerify } from 'jose';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const isPublicPath = path === "/login";
    const isAdminPath = path.startsWith("/admin");
    const isMasterPath = path === "/admin/add-users" || path === "/admin/users";
    const token = request.cookies.get("token")?.value || "";
    
    try {
        if (token) {
            const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.TOKEN_SECRET!));

            if(isMasterPath && !payload.role){
                return NextResponse.redirect(new URL("/", request.nextUrl));
            }            
            if (isPublicPath) {
                return NextResponse.redirect(new URL("/", request.nextUrl));
            }
            // Add logic to handle admin path
            if (isAdminPath && !payload.userId) {
                return NextResponse.redirect(new URL("/login", request.nextUrl));
            }

        } else {
            if (!isPublicPath) {
                return NextResponse.redirect(new URL("/login", request.nextUrl));
            }
        }
    } catch (error) {
        // If token verification fails, redirect to login if accessing a protected path
        if (!isPublicPath) {
            return NextResponse.redirect(new URL("/login", request.nextUrl));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/login", "/admin/:path*"],
};
