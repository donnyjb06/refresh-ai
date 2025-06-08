import React from 'react'
import { SignIn } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

const page = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
      <SignIn appearance={{
        baseTheme: dark
      }}/>

    </div>
  )
}

export default page