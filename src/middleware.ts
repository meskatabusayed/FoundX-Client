import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'
import { getCurrentUser } from './services/AuthServices';

type TRole = keyof typeof roleBasedRoutes;

const authRoutes = ["/login" , "/register"]
const roleBasedRoutes = {
    USER : [/^\/profile/],
    ADMIN : [/^\/admin/]
}
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {

    const {pathname} = request.nextUrl;

    const userToken = await getCurrentUser();
    console.log("19" , userToken);



    /* const user = {name: "Mir Hussain",
    email: "mir@gmail.com",
    mobileNumber: "01711223344",
    role: "USER",
    status: "ACTIVE",}; */
    const user = undefined;
    
    if(!user){
        if(authRoutes.includes(pathname)){
            return NextResponse.next();
        }
        else{
            return NextResponse.redirect(new URL('/login', request.url))
        }
    }

    if(user?.role && roleBasedRoutes[user?.role as TRole]){
        const routes = roleBasedRoutes[user?.role as TRole];
        if(routes.some((route) => pathname.match(route))){
            return NextResponse.next()
        }
    }


  return NextResponse.redirect(new URL('/', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/profile" , "/login" , "/register"],
}