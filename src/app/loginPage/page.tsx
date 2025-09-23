import React from 'react'

import { 
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
 } from "@clerk/nextjs";

function page() {
  return (
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