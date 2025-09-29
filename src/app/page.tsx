"use client"
import React from "react";
import { useRouter } from 'next/navigation';
import HomePage from "@/app/homePage/page"
import LoginPage from "@/app/loginPage/page"

export default function Home() {
  const router = useRouter();
  
  return (
    <div className="font-sans flex items-center justify-center w-full h-full min-h-screen">
      <HomePage />
      {/* <LoginPage /> */}
      
    </div>
  );
}
