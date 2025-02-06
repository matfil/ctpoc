import { redirect } from "next/navigation";
import { NextRequest} from "next/server";

export function middleware(request:NextRequest){
    if (typeof window !== 'undefined') {
        const token = window.localStorage.getItem('token')
        if( token !== 'xyz' ){
            redirect('/');
        }
      }
}

export const config = {
    matcher: "/adverts"
}