import { NextResponse } from "next/server";

export async function middleware(request) {

    const savedTheme = request.cookies.get("theme");

    let response = NextResponse.next();

    if (!savedTheme) {

        // set the cookies theme to light if there is no cookies set yet.
        response.cookies.set("theme", "light");

    }

    return response;
}