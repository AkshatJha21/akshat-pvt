"use client";

import React from 'react'
import MainLogo from './MainLogo';

const Landing = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
        <MainLogo />    
        <p>It's 21, in case you're wondering</p>
        {/* it's 21 line */}
        {/* Short explanation of what we do */}
        {/* Button: Get down to business */}
    </div>
  )
}

export default Landing