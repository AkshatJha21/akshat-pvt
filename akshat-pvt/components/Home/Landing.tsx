"use client";

import React from 'react'
import MainLogo from './MainLogo';

const Landing = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
        <MainLogo />    
        {/* After logo animation, the pronunctiation should fade in (the below p tag) */}
        {/* <p>It's 21 </p> */} 
        {/* it's 21 line */}
        {/* Short explanation of what we do */}
        {/* Button: Get down to business */}
    </div>
  )
}

export default Landing