import React from 'react';
import { SignUp } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

const page = () => {
  return (
    <div className='flex items-center h-full justify-center'>
      <SignUp appearance={{ baseTheme: dark }} />
    </div>
  );
};

export default page;
