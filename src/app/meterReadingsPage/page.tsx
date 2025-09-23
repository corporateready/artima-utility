"use client";
import React from "react";
import {
  Form,
  FormDescription,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FormField } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import {
  SignedIn,
  UserButton,
} from '@clerk/nextjs'
import Link from 'next/link';

const MeterReadingsPage = () => {
  const form = useForm();

  return (
    <div className="w-full h-screen">
      <header className="w-full flex justify-between items-center p-4 gap-4 h-16">
       <Link href={'/navigatePage'}> {"<<"} Go to Navigate Page</Link>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
       <div className='flex flex-col w-full h-full items-center justify-center'>
      meter readings page
      <Form {...form}>
        <FormField
          control={form.control}
          name="..."
          render={() => (
            <FormItem>
              <FormLabel />
              <FormControl>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Blocks" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Block A</SelectItem>
                    <SelectItem value="dark">Block B</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormControl>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Floors" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Etaj 1</SelectItem>
                    <SelectItem value="dark">Etaj 2</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormControl>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Type Meters" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="water">water</SelectItem>
                    <SelectItem value="electricity">electricity</SelectItem>
                    <SelectItem value="dark">
                      Ventilation and Condition Air
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormControl>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Offices" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="water">A201</SelectItem>
                    <SelectItem value="electricity">A202</SelectItem>
                    <SelectItem value="dark">A205</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
      </Form>
    </div>
    </div>
   
  );
};

export default MeterReadingsPage;
