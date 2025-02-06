import { NextRequest, NextResponse } from "next/server";

export function middleware(request:NextRequest){
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token')
        if( !token ){
            return NextResponse.redirect('/')
        }
        else{
            return new NextResponse();
        }
      }
}

export const config = {
    matcher: "/adverts"
}