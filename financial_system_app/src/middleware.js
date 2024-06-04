import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export function middleware(request) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken");

  if (!accessToken && request.nextUrl.pathname !== "/login") {
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.headers.set('x-middleware-cache', 'no-cache')
    return response
  }
}

export const config = {
  matcher: ["/((?!apiAnalytic|auth|_next/static|_next/image|.*\\.png$).*)"],
};