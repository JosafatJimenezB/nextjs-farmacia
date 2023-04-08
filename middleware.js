import { NextResponse } from "next/server";

export async function middleware(request) {
  const token = request.cookies.get("UserToken");

  const session = await token;

  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard"],
};
