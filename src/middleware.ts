import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request:NextRequest){
    const path = request.nextUrl.pathname
     const isPublicPath = path=== '/login' || path ==='/signup'|| path === '/verifyemail'
     const token = request.cookies.get('token')?.value || ''

     if(isPublicPath && token){
        return NextResponse.redirect(new URL('/', request.nextUrl))
     }

     if(!isPublicPath && !token){
        return NextResponse.redirect(new URL('/login', request.nextUrl))
     }
}

export const config ={
    matcher:[
        '/',
        '/profile',
        '/login',
        '/signup',
        '/verifyemail'
    ]
}

//    middleware is a function that takes an incoming NextRequest object as a parameter.

// It extracts the requested path from the nextUrl property of the request.

// It checks whether the path is a public path (e.g., '/login' or '/signup') by comparing it with predefined values.

// It retrieves the 'token' cookie from the request and assigns its value to the token variable. If the cookie doesn't exist, it defaults to an empty string.

// It then checks two conditions:

//     If the requested path is a public path (isPublicPath) and a token is present (token is truthy), it redirects the user to the root URL ('/') using NextResponse.redirect.

//     If the requested path is not a public path and no token is present, it redirects the user to the login page ('/login').

// The matcher property contains an array of paths that this middleware should apply to. These paths are considered as paths that require authentication checks.

// In summary, this middleware checks whether a user is authenticated based on the presence of a 'token' cookie and the requested path. If a user tries to access a protected route without a valid token, they are redirected to the login page. If a user with a token tries to access a public route like '/login' or '/signup', they are redirected to the root URL. The config object specifies which paths are affected by this middleware.