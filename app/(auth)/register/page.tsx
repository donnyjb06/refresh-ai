import React from 'react';
import { SignUp } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

const Register = () => {
  return (
    <div className='flex items-center min-h-screen justify-center'>
      <SignUp appearance={{ baseTheme: dark }} />
    </div>
  );
};

export default Register;
