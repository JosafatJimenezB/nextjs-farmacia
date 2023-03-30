import { NextResponse } from "next/server";

export async function middleware(request) {
  const token = request.cookies.get("UserToken");
  console.log(token);

  // if (!token) return NextResponse.redirect(new URL("/login", request.url));
}
