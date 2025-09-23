import React from 'react'
// import {Button} from "@/components/ui/button"
// import Link
//  from 'next/link';
import { 
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
 } from "@clerk/nextjs";
 import styles from "./login.module.scss";
 
type Props = ""

function page() {
  return (
    // <Link href={"/navigatePage"} className='w-[10rem] flex justify-center items-center text-[1rem] hover:bg-gray-300 animate-in transition-all duration-150'>login with Google</Link>
       <div className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
            <SignInButton>
              <button className='hover:cursor-pointer hover:bg-amber-400 py-2 px-3 rounded-full uppercase'>sign in with GOOGLE</button>
            </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
  )
}

export default page