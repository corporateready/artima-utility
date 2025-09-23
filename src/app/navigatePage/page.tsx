import Link from "next/link";
import React from "react";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const page = () => {
  return (
    <div className="w-full h-screen">
      <header className="flex justify-end items-center p-4 gap-4 h-16">
        <SignedOut>
          <SignInButton />
          <SignUpButton>
            <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
              Регистрация
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
      <div className="flex flex-col gap-4 w-full h-full items-center justify-center">
        <Link
          href={"/meterReadingsPage"}
          className="w-full text-[1rem] uppercase flex justify-center items-center"
        >
          meter readings page
        </Link>
        <Link
          href={"/backOfficePage"}
          className="w-full text-[1rem] uppercase flex justify-center items-center"
        >
          back office page
        </Link>
      </div>
    </div>
  );
};

export default page;
