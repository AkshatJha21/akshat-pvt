"use client";

import React from 'react'
import MainLogo from './MainLogo';

const Landing = () => {

  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight, // Scroll by the height of the screen
      left: 0,
      behavior: 'smooth', // Smooth scrolling effect
    });
  };

  return (
    <div className='relative h-screen flex flex-col items-center justify-center'>
        <MainLogo />
        <div className='absolute bottom-5 animate-pulse cursor-pointer' onClick={handleScroll}>
          <svg className="w-8 h-8 text-gray-800 dark:text-rose-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m19 9-7 7-7-7"/>
          </svg>
        </div>
    </div>
  )
}

export default Landing