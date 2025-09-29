import React from 'react'
import Link from 'next/link';


const page = () => {
  return (
    <div className="w-full h-screen">
      <header className="w-full flex justify-between items-center p-4 gap-4 h-16">
       <Link href={'/navigatePage'}> {"<<"} Go to Navigate Page</Link>
        
      </header>
       <div className='flex flex-col w-full h-full items-center justify-center'>

    </div>
    </div>
  )
}

export default page