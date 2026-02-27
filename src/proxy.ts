import { NextRequest, NextResponse } from "next/server";
import { userService } from "./service/user.service";
import { Roles } from "./contants/roles";

export async function proxy(request: NextRequest) {
  // console.log("hello from proxy" , request.url);

  const pathname = request.nextUrl.pathname;

  let isAuthenticated = false;
  let isAdmin = false;

  const { data } = await userService.getSession();

  //* if session is exists
  if (data) {
    isAuthenticated = true;
    isAdmin = data.user.role === Roles.admin;
  }

  //* if user is not login or Authenticated
  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  //*  User is authenticated and role is  =ADMIN
  if (isAdmin && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/admin-dashboard", request.url));
  }

  //* USer is authenticated but role is = USER
  if (!isAdmin && pathname.startsWith("/admin-dashboard")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // console.log(data);
  return NextResponse.next();
}

export const config = {
  matcher: [
       "/dashboard",
       "/dashboard/:path*",
        "/admin-dashboard",
        "/admin-dashboard/:path*"
       ],
};
