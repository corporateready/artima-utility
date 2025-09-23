"use client"
import React from "react";

 import { useRouter } from 'next/navigation';
 import { useUser } from '@clerk/nextjs';

 import LoginPage from "@/app/loginPage/page"

export default function Home() {
  const router = useRouter();

  const {user, isLoaded} = useUser();

  React.useEffect(() => {
  if(user) {
    router.push('/navigatePage')
  }
  }, [user,isLoaded, router])
  
  return (
    <div className="font-sans flex items-center justify-center w-full h-full min-h-screen">

      <LoginPage />
      
    </div>
  );
}
