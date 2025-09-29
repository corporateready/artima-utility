import React from 'react'
import Header from "@/app/shared/header"

function page() {
  return (
    <div className='w-full h-screen flex flex-col bg-[#f0f0f0]'>
      <div>
        <Header />
      </div>
      <p>Home Page</p>
      
    </div>
  )
}

export default page